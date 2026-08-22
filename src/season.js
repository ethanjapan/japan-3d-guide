import * as THREE from "three";

/**
 * 季節レイヤー。桜吹雪・紅葉・雪・花火を地図の上に散らす。
 *
 * 台湾版には無い日本版だけの演出。日本は「同じ景色が季節で別物になる」ことが
 * 観光の核なので、時間帯(atmosphere.js)と対になる軸として入れた。
 * 既定は日本の実月から決め、UIから明示指定もできる。
 * 素材(deco/season-*.webp)が無い間は読み込み失敗を握りつぶして何も出さない。
 *
 * - spring(3-5月): 桜の花びらが横に流れながら落ちる
 * - summer(6-8月): 花火が夜空で明滅する(夜以外は控えめ)
 * - autumn(9-11月): 紅葉が回りながら落ちる
 * - winter(12-2月): 雪がまっすぐ落ちる
 */

export const SEASONS = ["spring", "summer", "autumn", "winter"];

const japanMonth = () =>
  Number(new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Tokyo", month: "numeric" })
    .format(new Date()));

export const seasonOf = (m) =>
  m >= 3 && m <= 5 ? "spring" : m >= 6 && m <= 8 ? "summer" : m >= 9 && m <= 11 ? "autumn" : "winter";

// size は地図のワールド単位。地図は約250単位なので、花火を22にしたら島より大きくなった(実測)。
// 舞うものは「地図の邪魔をしない大きさ」が上限。多すぎても地形が読めなくなる。
const CONF = {
  spring: { file: "season-sakura", n: 22, size: 5.5, fall: 3.2, drift: 5.0, spin: 0.9, opacity: 0.9 },
  autumn: { file: "season-momiji", n: 20, size: 6.0, fall: 3.6, drift: 4.2, spin: 1.4, opacity: 0.9 },
  winter: { file: "season-snow", n: 30, size: 4.5, fall: 2.4, drift: 2.2, spin: 0.2, opacity: 0.85 },
  // 花火は落ちない。決まった位置で膨らんで消えるので、専用の更新をする。
  // ★昼に出すと地図の上で明滅して目障りになる(ユーザー指摘 2026-08-22
  //   「なんか勝手に点滅する」)。実際の花火も夜のものなので、夕方と夜だけに出す。
  summer: { file: "season-hanabi", n: 4, size: 13, fall: 0, drift: 0, spin: 0, opacity: 0.7,
            onlyPhases: ["dusk", "night"] },
};

export const createSeason = (stage, reduceMotion, phaseOfDay) => {
  const { scene, span } = stage;
  const loader = new THREE.TextureLoader();
  let group = null;
  let current = null;
  let items = [];

  /** その季節の粒を今出してよいか(花火は夕方・夜だけ)。 */
  const allowedNow = () => {
    const c = CONF[current];
    return !c?.onlyPhases || c.onlyPhases.includes(phaseOfDay?.() ?? "night");
  };
  const applyVisibility = () => {
    if (group) group.visible = allowedNow();
  };

  const clear = () => {
    if (group) {
      for (const o of group.children) o.material?.dispose?.();
      group.removeFromParent();
    }
    group = null;
    items = [];
  };

  const apply = (season) => {
    const s = season === "auto" || !CONF[season] ? seasonOf(japanMonth()) : season;
    if (s === current) return s;
    current = s;
    clear();
    if (reduceMotion) return s;   // 動かない演出にする意味がないので出さない

    const c = CONF[s];
    let dead = false;
    const tex = loader.load(`${import.meta.env.BASE_URL}deco/${c.file}.webp`,
      (t) => { t.colorSpace = THREE.SRGBColorSpace; },
      undefined,
      () => { dead = true; if (group) group.visible = false; });

    group = new THREE.Group();
    group.name = "season";
    // 粒ごとに別マテリアルにすると花火の明滅が個別にできる。数十個なので負荷は無視できる
    for (let i = 0; i < c.n; i++) {
      const mat = new THREE.SpriteMaterial({
        // 花火は透明から始める。初期値を最大にすると、最初の1フレームだけ全部が満開で出る
        map: tex, transparent: true, depthWrite: false,
        opacity: s === "summer" ? 0 : c.opacity,
        blending: s === "summer" ? THREE.AdditiveBlending : THREE.NormalBlending,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.setScalar(c.size * (0.7 + Math.random() * 0.6));
      const x = (Math.random() - 0.5) * span * 1.15;
      const z = (Math.random() - 0.5) * span * 1.1;
      // 花火は空の高いところに。低いと陸に刺さって見える
      const y = s === "summer" ? span * 0.30 + Math.random() * span * 0.18
                               : Math.random() * span * 0.42;
      sp.position.set(x, y, z);
      group.add(sp);
      items.push({
        sp, base: sp.scale.x, x0: x,
        phase: Math.random() * Math.PI * 2,
        speed: 0.7 + Math.random() * 0.7,
      });
    }
    scene.add(group);
    // ★可視判定を update 任せにすると、update が回る前(タブが背面など rAF が絞られる場面)に
    //   花火が満開のまま出たままになる。生成直後にも同じ判定を通す。
    applyVisibility();
    if (dead) group.visible = false;
    return s;
  };

  let t = 0;
  const update = (dt) => {
    if (!group || reduceMotion) return;
    t += dt;
    const c = CONF[current];
    if (current === "summer") {
      // 出してよい時間帯でなければ、まるごと隠す(昼の空に花火が点くのを止める)
      applyVisibility();
      if (!group.visible) return;
      // 花火: 周期ごとに膨らんで薄れる。粒ごとに位相をずらして途切れさせない。
      // ★立ち上がりを段(k>0.02 で 0→最大)にしていたので、ぱっと点いて見えた。
      //   短いランプにして「開いて消える」動きにする。
      for (const it of items) {
        const k = ((t * 0.22 * it.speed + it.phase) % (Math.PI * 2)) / (Math.PI * 2);
        const grow = Math.min(1, k * 3.2);
        const rise = Math.min(1, k / 0.08);          // 立ち上がり(全周期の8%)
        const fade = Math.max(0, 1 - Math.max(0, k - 0.08) / 0.62);
        it.sp.scale.setScalar(it.base * (0.25 + grow * 0.85));
        it.sp.material.opacity = c.opacity * rise * fade;
      }
      return;
    }
    const top = span * 0.42;
    for (const it of items) {
      const p = it.sp.position;
      p.y -= c.fall * it.speed * dt;
      p.x = it.x0 + Math.sin(t * 0.6 * it.speed + it.phase) * c.drift;
      it.sp.material.rotation += c.spin * it.speed * dt;
      if (p.y < -2) {
        p.y = top;
        it.x0 = (Math.random() - 0.5) * span * 1.15;
        p.z = (Math.random() - 0.5) * span * 1.1;
      }
    }
  };

  return { get season() { return current; }, setSeason: apply, update };
};
