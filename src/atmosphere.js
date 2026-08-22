import * as THREE from "three";

/**
 * 時間帯(日本時間)と天気の演出。
 * - 朝/昼/夕/夜でライト・海の色味・ページ背景を切り替え、空に太陽/月スプライトを出す
 * - setPhase() で実行時に切替できる(UIのボタンから。"auto"=日本の実時間)
 * - 選択県市が雨系(WMO 51以上の降水コード)なら雨雲スプライト+雨パーティクル(THREE.Points)
 * 素材(ui/sun.webp 等)が無くてもライト側だけで成立する(読み込みはfail-silent)。
 */

const taiwanHour = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo", hour: "numeric", hour12: false,
  }).formatToParts(new Date());
  return Number(parts.find((p) => p.type === "hour")?.value ?? 12);
};

export const phaseOf = (h) =>
  h >= 5 && h < 8 ? "morning" : h >= 8 && h < 16 ? "day" : h >= 16 && h < 19 ? "dusk" : "night";

export const PHASES = ["morning", "day", "dusk", "night"];

// ライト/色のプリセット。dayは createScene の初期値と一致させる
// sea は海のメッシュの頂点色に「掛ける」値(白=素の色のまま)。
// ★台湾版は海が青緑(#4EC9BD)前提の値だった。日本版の海は藍寄りの青(#5AA8CF)で、
//   ここに暖色を掛けると青と橙が補色で打ち消し合い、海が濁ったオリーブになる
//   (2026-08-22 実測: dusk の sea=#F6D8C2 で海が #4F6B5F 相当に沈んだ)。
//   時間帯の空気は「ライトの色と量」で作り、海に掛ける色はほぼ白のまま触らない。
//   夜だけは例外で、青を深くしたいので寒色を掛ける。
const PRESETS = {
  morning: { hemi: 1.38, hemiSky: 0xfff2dc, key: 0xffe9cb, keyI: 1.95, sea: 0xfffaf3, body: "#f3efe2" },
  day: { hemi: 1.5, hemiSky: 0xffffff, key: 0xfff4e2, keyI: 2.1, sea: 0xffffff, body: "" },
  dusk: { hemi: 1.34, hemiSky: 0xffe6d0, key: 0xffc79c, keyI: 2.05, sea: 0xfff4ea, body: "#f2e0d2" },
  night: { hemi: 0.7, hemiSky: 0xc3d6f4, key: 0xaec4ec, keyI: 1.1, sea: 0x9fbcdc, body: "#22344a" },
};

const loadSprite = (name, scale) => {
  const tex = new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}ui/${name}.webp`, (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
  }, undefined, () => sprite.removeFromParent());
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
  sprite.scale.setScalar(scale);
  return sprite;
};

export const createAtmosphere = (stage, reduceMotion) => {
  const { scene, span } = stage;
  const hemi = scene.children.find((c) => c.isHemisphereLight);
  const key = scene.children.find((c) => c.isDirectionalLight);

  let orb = null;
  let glows = [];
  let glowMat = null;
  let current = "day";

  const clearPhaseProps = () => {
    orb?.removeFromParent();
    orb = null;
    for (const g of glows) g.removeFromParent();
    glows = [];
  };

  const makeGlowMat = () => {
    if (glowMat) return glowMat;
    const cv = document.createElement("canvas");
    cv.width = cv.height = 64;
    const g = cv.getContext("2d");
    const grad = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    grad.addColorStop(0, "rgba(255,220,150,0.9)");
    grad.addColorStop(1, "rgba(255,220,150,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    glowMat = new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    return glowMat;
  };

  /** phase: "morning"|"day"|"dusk"|"night"|"auto"(=日本の実時間) */
  const applyPhase = (phase) => {
    const p2 = phase === "auto" || !PRESETS[phase] ? phaseOf(taiwanHour()) : phase;
    current = p2;
    const p = PRESETS[p2];
    if (hemi) {
      hemi.intensity = p.hemi;
      hemi.color.set(p.hemiSky);
    }
    if (key) {
      key.intensity = p.keyI;
      key.color.set(p.key);
    }
    stage.sea.traverse?.((o) => {
      if (o.isMesh && o.material?.vertexColors) o.material.color.set(p.sea);
    });
    document.body.style.background = p.body || "";
    document.documentElement.dataset.phase = p2; // CSS側の文字色切替に使う

    clearPhaseProps();
    // 太陽/月(空の右奥にゆっくり浮かぶ)
    if (p2 !== "day") {
      orb = loadSprite(p2 === "night" ? "moon" : "sun", span * 0.16);
      orb.position.set(span * 0.38, span * 0.6, -span * 0.18);
      scene.add(orb);
    }
    // 夜はミニランドマークの足元に灯り(additiveの放射グラデ)
    if (p2 === "night") {
      const mat = makeGlowMat();
      for (const grp of stage.groups) {
        const lm = grp.children.find((c) => c.isSprite);
        if (!lm) continue;
        const s = new THREE.Sprite(mat);
        s.scale.setScalar(lm.scale.x * 1.5);
        s.position.copy(lm.position);
        s.position.y += lm.scale.x * 0.2;
        grp.add(s);
        glows.push(s);
      }
    }
    return p2;
  };

  // 初期状態: 保存された選択 > ?phase= > 日本の実時間
  const saved = localStorage.getItem("phase");
  const forced = new URLSearchParams(location.search).get("phase");
  applyPhase(PRESETS[forced] ? forced : saved ?? "auto");

  // ---- 雨(選択県市の天気に連動) ----
  const rain = { cloud: null, points: null, vel: null };
  const clearRain = () => {
    rain.cloud?.removeFromParent();
    if (rain.points) {
      rain.points.removeFromParent();
      rain.points.geometry.dispose();
    }
    rain.cloud = null;
    rain.points = null;
  };

  /** prefGroup の上に雨演出を出す。rainy=false なら消すだけ */
  const setRain = (prefGroup, rainy) => {
    clearRain();
    if (!prefGroup || !rainy) return;
    const box = new THREE.Box3().setFromObject(prefGroup);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const r = Math.max(size.x, size.z) * 0.32;
    const topY = box.max.y + r * 0.9;

    const cloud = loadSprite("raincloud", r * 1.4);
    cloud.position.set(c.x, topY + r * 0.85, c.z);
    scene.add(cloud);
    rain.cloud = cloud;

    // 雨粒: Points+BufferGeometry(件数が少なく単純形状なのでInstancedMeshより適切)
    const N = reduceMotion ? 0 : 140;
    if (N) {
      const pos = new Float32Array(N * 3);
      const vel = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        const a = Math.random() * Math.PI * 2;
        const rr = Math.sqrt(Math.random()) * r;
        pos[i * 3] = c.x + Math.cos(a) * rr;
        pos[i * 3 + 1] = topY - Math.random() * r * 1.6;
        pos[i * 3 + 2] = c.z + Math.sin(a) * rr;
        vel[i] = 9 + Math.random() * 5;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0x9fd8e8, size: 0.5, transparent: true, opacity: 0.75, depthWrite: false,
      });
      const pts = new THREE.Points(geo, mat);
      pts.userData = { top: topY, bottom: box.max.y - size.y * 0.2 };
      scene.add(pts);
      rain.points = pts;
      rain.vel = vel;
    }
  };

  let t = 0;
  const update = (dt) => {
    t += dt;
    if (orb && !reduceMotion) orb.position.y += Math.sin(t * 0.5) * 0.004;
    if (rain.cloud && !reduceMotion) rain.cloud.position.x += Math.sin(t * 0.7) * 0.006;
    if (rain.points) {
      const pos = rain.points.geometry.attributes.position;
      const { top, bottom } = rain.points.userData;
      for (let i = 0; i < pos.count; i++) {
        let y = pos.getY(i) - rain.vel[i] * dt;
        if (y < bottom) y = top;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    }
  };

  return { get phase() { return current; }, setPhase: applyPhase, setRain, update };
};
