import RINKA_PREF from "../data/i18n/rinka-pref.json";

/**
 * RINKA(MV STUDIO)のガイド演出。
 * - 都道府県クリック: rinka-pref.json の手書きコメント(47県×5言語)
 * - 景点詳細: 日本語名のキーワードでテンプレートを選ぶ(13分類×5言語)
 * - プロフィール: 自己紹介 + MV STUDIO 公式サイト/YouTube への動線
 *
 * 台湾版 taiwan-3d-guide/src/rinka.js からの流用。差分は分類の語彙(繁体字→日本語)と
 * 日本固有の類型(城・祭・スキー場)の追加。判定キーを name.zh から name.ja に変えている
 * (日本の景点名は日本語が原名で、中国語ラベルは Wikidata 由来の訳語ゆれがあるため)。
 */
export const rinkaPref = (iso, lang) => RINKA_PREF[iso]?.[lang] ?? "";

const T = {
  onsen: {
    ja: "温泉に浸かった瞬間の「ふぅ…」が旅の本番だと思ってる。湯上がりの牛乳も忘れずにね。",
    zh: "泡進溫泉那一聲「呼——」才是旅行的正片。起來別忘了喝瓶牛奶喔。",
    cn: "泡进温泉那一声「呼——」才是旅行的正片。起来别忘了喝瓶牛奶哦。",
    en: "That first sigh when you sink into the water — that's the real trip. Don't skip the milk after.",
    ko: "온천에 몸을 담그는 순간의 '후우…'가 여행의 본편이라고 생각해. 나오면 우유도 꼭 마셔.",
  },
  shrine: {
    ja: "鳥居をくぐると空気が変わるの、毎回ちゃんと感じる。手水で清めてから行こ。",
    zh: "穿過鳥居的瞬間空氣真的會變，我每次都感覺得到。先去洗手舍淨手再進去吧。",
    cn: "穿过鸟居的瞬间空气真的会变，我每次都感觉得到。先去洗手舍净手再进去吧。",
    en: "The air really does change when you pass under the torii. Rinse your hands first, then walk in.",
    ko: "도리이를 지나면 공기가 바뀌는 걸 매번 느껴. 데미즈에서 손 씻고 들어가자.",
  },
  temple: {
    ja: "お香の匂いと木の軋む音。写真より、まず一回深呼吸してほしい場所。",
    zh: "線香的味道和木頭的吱呀聲。比起拍照，希望你先深呼吸一次。",
    cn: "线香的味道和木头的吱呀声。比起拍照，希望你先深呼吸一次。",
    en: "Incense and the creak of old timber. Before the camera — take one deep breath.",
    ko: "향 냄새와 나무 삐걱이는 소리. 사진보다 먼저 숨 한 번 크게 쉬어봐.",
  },
  castle: {
    ja: "石垣を触ると、何百年ぶんの手が積んだ重さがわかる。天守からの眺めも忘れずに。",
    zh: "摸摸石垣，就能感覺到幾百年來多少雙手堆出的重量。也別忘了上天守看風景。",
    cn: "摸摸石垣，就能感觉到几百年来多少双手堆出的重量。也别忘了上天守看风景。",
    en: "Touch the stone walls and you feel centuries of hands in them. Don't miss the view from the keep.",
    ko: "석축을 만지면 수백 년 동안 쌓아 올린 손들의 무게가 느껴져. 천수각 전망도 놓치지 마.",
  },
  mountain: {
    ja: "山の空気ってなんでこんなに甘いんだろ。歩きやすい靴で、ゆっくり登ろうね。",
    zh: "山上的空氣為什麼這麼甜啊。穿好走的鞋，我們慢慢往上走。",
    cn: "山上的空气为什么这么甜啊。穿好走的鞋，我们慢慢往上走。",
    en: "Why does mountain air taste sweet? Comfy shoes, and let's climb it slowly.",
    ko: "산 공기는 왜 이렇게 달콤할까. 편한 신발 신고 천천히 올라가자.",
  },
  sea: {
    ja: "潮の匂いがした瞬間にテンション上がっちゃう。夕日の時間に来るのがおすすめ。",
    zh: "聞到海的味道整個人就興奮起來。建議挑夕陽的時段來。",
    cn: "闻到海的味道整个人就兴奋起来。建议挑夕阳的时段来。",
    en: "One whiff of salt air and I'm gone. Come at sunset if you can.",
    ko: "바다 냄새가 나는 순간 기분이 확 올라가. 노을 시간에 오는 걸 추천해.",
  },
  water: {
    ja: "水がきれいすぎて、底まで見えるのがちょっと怖いくらい。光の入る時間を狙ってね。",
    zh: "水太清澈了，能看到底反而有點嚇人。記得挑陽光照進來的時間。",
    cn: "水太清澈了，能看到底反而有点吓人。记得挑阳光照进来的时间。",
    en: "The water's so clear it's almost unsettling. Time it for when the light gets in.",
    ko: "물이 너무 맑아서 바닥까지 보이는 게 살짝 무서울 정도야. 빛이 드는 시간을 노려봐.",
  },
  garden: {
    ja: "季節ごとに全然ちがう顔になるところ。私は一年に何回も来たくなっちゃう。",
    zh: "每個季節都是完全不同的表情，我一年會想來好幾次。",
    cn: "每个季节都是完全不同的表情，我一年会想来好几次。",
    en: "It wears a completely different face each season — I keep wanting to come back.",
    ko: "계절마다 전혀 다른 얼굴이 되는 곳. 나는 일 년에 몇 번씩 오고 싶어져.",
  },
  museum: {
    ja: "ゆっくり見るほど発見がある場所。時間、多めに取っておいてね。",
    zh: "慢慢逛才會發現細節的驚喜，時間記得多留一點。",
    cn: "慢慢逛才会发现细节的惊喜，时间记得多留一点。",
    en: "The slower you look, the more turns up. Leave yourself extra time here.",
    ko: "천천히 볼수록 발견이 많은 곳이야. 시간을 넉넉히 잡아둬.",
  },
  town: {
    ja: "どこを切り取っても絵になる街。食べ歩きしながら、路地に入ってみて。",
    zh: "隨便一個角度都能入畫的街。邊走邊吃，然後拐進小巷看看。",
    cn: "随便一个角度都能入画的街。边走边吃，然后拐进小巷看看。",
    en: "Every angle here is a picture. Eat as you walk, then turn down a side lane.",
    ko: "어디를 잘라내도 그림이 되는 거리. 먹으면서 걷다가 골목으로 들어가 봐.",
  },
  festival: {
    ja: "映像で見るのと現地の音圧はまるで別物。太鼓の音、お腹に来るよ。",
    zh: "在影片裡看跟現場的音壓完全是兩回事。太鼓的聲音會打到肚子裡。",
    cn: "在视频里看跟现场的音压完全是两回事。太鼓的声音会打到肚子里。",
    en: "Video doesn't prepare you for the volume. You feel the drums in your stomach.",
    ko: "영상으로 보는 것과 현장의 음압은 완전히 달라. 북소리가 배까지 울려.",
  },
  snow: {
    ja: "雪の日にしか会えない景色。防寒はやりすぎくらいでちょうどいいよ。",
    zh: "只有下雪天才見得到的風景。保暖穿到覺得誇張的程度剛剛好。",
    cn: "只有下雪天才见得到的风景。保暖穿到觉得夸张的程度刚刚好。",
    en: "A view you only get on snow days. Overdress — it's the right amount.",
    ko: "눈 오는 날에만 만날 수 있는 풍경. 방한은 과할 정도가 딱 좋아.",
  },
  themepark: {
    ja: "朝いちで入って夜まで遊ぶのが正解。私は絶対に閉園まで粘るタイプ。",
    zh: "一開園就進去玩到晚上才是正解。我一定是撐到閉園那型的。",
    cn: "一开园就进去玩到晚上才是正解。我一定是撑到闭园那型的。",
    en: "Get in at opening and stay till dark. I'm definitely the closing-time type.",
    ko: "개장하자마자 들어가서 밤까지 노는 게 정답. 나는 무조건 폐장까지 버티는 타입이야.",
  },
  generic: {
    ja: "ここ、私のお気に入りリストに入ってる。来たら理由がわかるはず！",
    zh: "這裡在我的口袋名單裡，來過就知道為什麼！",
    cn: "这里在我的口袋名单里，来过就知道为什么！",
    en: "This one's on my personal list — you'll get it once you're there!",
    ko: "여기 내 즐겨찾기에 있어. 와보면 이유를 알 거야!",
  },
};

// 上から順に判定するので、より限定的な語を先に置く
// (例: 「銀山温泉」は温泉で拾いたいので onsen を mountain より前に)
const RULES = [
  ["onsen", /温泉|の湯$|湯めぐり|砂むし|地獄めぐり/],
  ["festival", /祭|まつり|おどり|踊|竿燈|ねぶた/],
  ["snow", /スキー|樹氷|雪/],
  ["themepark", /ランド|ワールド|パーク|スタジオ|リゾート|動物園|水族館/],
  ["castle", /城/],
  ["shrine", /神社|大社|神宮|東照宮|稲荷|天満宮|鳥居|宮$/],
  ["temple", /寺|大仏|金色堂|五重塔|延暦|本願|伽藍/],
  ["water", /湖|池|沼|川|淵|滝|渓流|水海|海$/],
  ["town", /町並み|宿$|屋敷|茶屋街|屋台|朝市|商店|横丁|美観|レトロ|運河|交差点|城下町|里$|集落|ロード/],
  ["museum", /美術館|博物館|記念館|資料館|遺跡|銀山|製糸場|明治村|ふるさと村|ドーム|技術/],
  ["mountain", /山|岳|峠|高原|峡|渓|岩|洞|杉|林|湿原|砂丘|ルート|ロープウェイ|大橋|吊橋|棚田|千枚田/],
  ["sea", /海|浜|岬|島|湾|崎|灯台|埼|磯|潮|松原|毛$/],
  ["garden", /園$|公園|庭|桜|花|並木|竹林|苑$|渓谷/],
];

export const rinkaSpot = (spot, lang) => {
  const ja = spot.name.ja;
  for (const [key, re] of RULES) {
    if (re.test(ja)) return T[key][lang] ?? T[key].en;
  }
  return T.generic[lang] ?? T.generic.en;
};

export const RINKA_PROFILE = {
  ja: {
    intro: "RINKAだよ。MV STUDIO所属のバーチャルアーティスト。普段は歌とMVづくり、今回は日本旅行の案内人をしてるの！",
    site: "MV STUDIO 公式サイト",
    yt: "YouTubeチャンネル",
  },
  zh: {
    intro: "我是RINKA，MV STUDIO的虛擬藝人。平常在唱歌、拍MV，這次擔任日本旅遊的導覽員！",
    site: "MV STUDIO 官方網站",
    yt: "YouTube 頻道",
  },
  cn: {
    intro: "我是RINKA，MV STUDIO的虚拟艺人。平时在唱歌、拍MV，这次担任日本旅游的导览员！",
    site: "MV STUDIO 官方网站",
    yt: "YouTube 频道",
  },
  en: {
    intro: "I'm RINKA, a virtual artist from MV STUDIO. I usually sing and make music videos — today I'm your guide to Japan!",
    site: "MV STUDIO official site",
    yt: "YouTube channel",
  },
  ko: {
    intro: "나는 RINKA, MV STUDIO 소속 버추얼 아티스트야. 평소엔 노래와 뮤직비디오를 만들고, 이번엔 일본 여행 가이드를 맡았어!",
    site: "MV STUDIO 공식 사이트",
    yt: "YouTube 채널",
  },
};

export const RINKA_LINKS = {
  site: "https://ethanjapan.github.io/mv-studio-site/",
  yt: "https://www.youtube.com/@mvstudio_by_linlin",
};
