import * as THREE from "three";

/**
 * 季節イベントのピン層。月を選ぶと、その月にイベントがある県の上にカテゴリのピンが立つ。
 *
 * 日本版だけの層。日本の観光は「どこへ行くか」より先に「いつ行くか」で中身が変わるので、
 * 月を動かすと桜前線と紅葉前線が南北に流れて見えることを狙っている。
 * 素材(event/<cat>.webp)が無い間は読み込み失敗を握りつぶして何も出さない。
 *
 * ピンは Sprite。地形の押し出し天面より上に、県ごとに少しずつ高さを変えて置く
 * (同じ高さに並べると、密な本州で前後のピンが重なって数が読めない)。
 */

const CATS = ["sakura", "hanabi", "matsuri", "koyo", "snow", "flower", "illumi"];

export const createEventLayer = (stage, events, prefs, reduceMotion) => {
  const { scene, span } = stage;
  const loader = new THREE.TextureLoader();
  const mats = new Map();

  const dead = new Set();   // 素材が無いカテゴリ
  const matOf = (cat) => {
    if (mats.has(cat)) return mats.get(cat);
    const m = new THREE.SpriteMaterial({ transparent: true, depthWrite: false });
    // 素材が無い間は、白い四角が地図の上に並ぶのを避けて何も出さない(他の層と同じ方針)
    m.visible = false;
    const tex = loader.load(
      `${import.meta.env.BASE_URL}event/${cat}.webp`,
      (t) => { t.colorSpace = THREE.SRGBColorSpace; m.map = t; m.visible = true; m.needsUpdate = true; },
      undefined,
      () => { dead.add(cat); },
    );
    m.map = tex;
    mats.set(cat, m);
    return m;
  };

  const layer = new THREE.Group();
  layer.name = "events";
  layer.visible = false;
  scene.add(layer);

  const byId = new Map(prefs.map((p) => [p.id, p]));
  const cx = (stage.bounds.minX + stage.bounds.maxX) / 2;
  const cy = (stage.bounds.minY + stage.bounds.maxY) / 2;

  let month = 0;          // 0 = 出さない
  let pins = [];          // {sp, base, delay}

  const clear = () => {
    for (const p of pins) p.sp.removeFromParent();
    pins = [];
  };

  /** month: 1..12 を渡すとその月のピンを立てる。0 で消す。 */
  const setMonth = (m) => {
    month = m;
    clear();
    layer.visible = m > 0;
    if (!m) return;
    // ランドマークより小さくする。同じ大きさだと地形とランドマークが読めなくなる
    const size = span * 0.026;
    let i = 0;
    for (const [iso, list] of Object.entries(events)) {
      const p = byId.get(iso);
      if (!p) continue;
      const hits = list.filter((e) => e.m.includes(m));
      if (!hits.length) continue;
      // 1県に複数あっても、地図には代表1つだけ立てる(全部立てると本州が埋まる)。
      // 順序は CATS の並び=季節の主役が先に来るようにしてある。
      const cat = CATS.find((c) => hits.some((e) => e.cat === c)) ?? hits[0].cat;
      const sp = new THREE.Sprite(matOf(cat));
      const [px, py] = p.center;
      // ★stage.lift は「選択したときに持ち上がる量」なので、常に足すと空の高い所へ飛ぶ
      //   (実測: 地面から約38単位=地図の1/6も上に浮いて、どの県のピンか読めなかった)。
      //   押し出しの天面(extrude)のすぐ上に置き、県ごとに少しだけ高さをずらす。
      const lift = stage.extrude + span * (0.018 + ((i * 7) % 5) * 0.004);
      sp.position.set(px - cx, lift, -(py - cy));
      sp.scale.setScalar(reduceMotion ? size : 0.001);
      sp.userData = { pref: iso, cat, isEventPin: true };
      layer.add(sp);
      pins.push({ sp, base: size, delay: reduceMotion ? 0 : 0.02 * i, k: reduceMotion ? 1 : 0, v: 0 });
      i += 1;
    }
  };

  // 立ち上がりは減衰不足のバネ(他の演出と同じ作法)
  const W = 15;
  const Z = 0.58;
  const update = (dt) => {
    if (!layer.visible || reduceMotion) return;
    for (const p of pins) {
      if (p.delay > 0) {
        p.delay -= dt;
        continue;
      }
      const a = W * W * (1 - p.k) - 2 * Z * W * p.v;
      p.v += a * dt;
      p.k += p.v * dt;
      const s = p.base * Math.max(0, p.k);
      p.sp.scale.set(s, s, 1);
    }
  };

  return {
    get month() { return month; },
    setMonth,
    update,
    /** レイキャスト対象(ピンを押したらその県を開く) */
    get pins() { return layer.children; },
  };
};
