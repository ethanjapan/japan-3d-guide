/**
 * 旅の基本情報 / 空港アクセス / 公式PR動画。台湾版 taiwan-3d-guide/src/travelinfo.js からの流用。
 *
 * 差分:
 *  1. 空港が1つ(桃園)→4つ(成田・羽田・関西・新千歳)。都市が離れているので「入口を選ぶ」形にした
 *  2. 交通ICが悠遊カード1枚→Suica/PASMO系10種の相互利用。旅行者向けは Welcome Suica / Tourist PASMO
 *  3. PROMO_VIDEOS を地方別に持つ。JNTO公式「Discover Japan's Different Regions」が
 *     9地方を網羅していたので、選択中の都道府県に対応する回を出す(台湾版はブランド動画2本の固定表示)
 *
 * 数値の確認日: 2026-08-22(WebSearch実測)。運賃・料金は改定が早いので、
 * 断定が要る数字(JRパス額など)は「時点」を添えるか公式サイトへ誘導する方針。
 */

export const TRAVEL_INFO = {
  ja: {
    title: "日本 旅の基本情報",
    sections: [
      { h: "鉄道", lines: [
        "新幹線: 北海道から鹿児島まで。東京—大阪は最速2時間21分、東京—博多は約5時間。",
        "ジャパンレールパス: 訪日外国人向けの全国乗り放題券。7日間普通車で5万円台(2026年8月時点・海外購入は10月から改定)。",
        "在来線と私鉄: 都市部は数分間隔。地方は1〜2時間に1本のこともあるので時刻表を先に見る。",
        "指定席: 繁忙期(GW・お盆・年末年始)は早めに押さえる。自由席は混雑覚悟。",
      ]},
      { h: "交通ICカード", lines: [
        "Suica・PASMO・ICOCAなど10種が全国で相互利用でき、1枚あれば大都市はほぼ移動できる。",
        "Welcome Suica: 訪日者向け。デポジット不要・有効28日。成田/羽田のJR EAST Travel Service Centerなどで買える。",
        "Welcome Suica Mobile: iPhone専用(iOS 17.2以降)で有効180日。窓口に並ばずアプリで発行できる。",
        "Tourist PASMO: 2026年5月20日開始。成田・羽田で購入可能。",
        "コンビニ・自販機・多くの店舗の支払いにも使える。",
      ]},
      { h: "お金", lines: [
        "通貨は円(JPY)。都市部はキャッシュレスが進んだが、屋台・小さな寺社・地方バスは現金のみが残る。",
        "空港・主要駅・コンビニATMで海外カードから引き出せる(セブン銀行・ゆうちょが対応幅広い)。",
        "チップの習慣はない。置いていくとむしろ困らせてしまう。",
      ]},
      { h: "通信", lines: [
        "空港でプリペイドSIM/eSIMが買える。eSIM対応端末なら出発前にオンライン購入が早い。",
        "駅・コンビニ・カフェの無料Wi-Fiは多いが、移動中も使うならモバイルルーターかSIMが安心。",
      ]},
      { h: "気候と季節", lines: [
        "3〜5月は桜と過ごしやすさ。6〜7月は梅雨(北海道はほぼ無い)。7〜9月は高温多湿で台風。",
        "10〜11月は紅葉で一年で最も旅行しやすい。12〜2月は日本海側が豪雪、太平洋側は晴天で乾燥。",
        "南北3000km。同じ日に沖縄が25度、北海道が氷点下ということが普通に起きる。",
      ]},
      { h: "マナーと緊急", lines: [
        "警察110／消防・救急119。ジャパン・ビジターズ・ホットライン(24時間・多言語) 050-3816-2787。",
        "電車内の通話は控える。ゴミ箱が少ないので持ち帰る前提で。",
        "温泉は体を洗ってから湯船へ。タオルは湯に入れない。",
        "電圧100V・プラグはAタイプ(平行2本)。",
      ]},
      { h: "公式サイト(最新情報)", lines: [
        "日本政府観光局(JNTO) japan.travel／ジャパンレールパス japanrailpass.net",
        "成田空港 narita-airport.jp／羽田空港 tokyo-haneda.com／関西空港 kansai-airport.or.jp",
        "気象庁 jma.go.jp(警報・台風情報)",
      ]},
    ],
  },
  zh: {
    title: "日本旅遊實用資訊",
    sections: [
      { h: "鐵路", lines: [
        "新幹線: 從北海道通到鹿兒島。東京—大阪最快2小時21分，東京—博多約5小時。",
        "JR Pass: 給外國旅客的全國無限搭乘券，7日普通車約5萬日圓級(2026年8月時點，10月起海外購買調價)。",
        "在來線與私鐵: 都市每隔幾分鐘一班；鄉下可能1〜2小時才一班，務必先查時刻表。",
        "對號座: 黃金週、盂蘭盆、年末年初請提早訂位，自由座要有站著的心理準備。",
      ]},
      { h: "交通IC卡", lines: [
        "Suica、PASMO、ICOCA等十種卡片全國互通，一張走遍主要都市。",
        "Welcome Suica: 訪日旅客專用，免押金、效期28天，可在成田/羽田的JR EAST Travel Service Center購買。",
        "Welcome Suica Mobile: 限iPhone(iOS 17.2以上)，效期180天，用App發行免排隊。",
        "Tourist PASMO: 2026年5月20日開賣，成田與羽田都買得到。",
        "便利商店、自動販賣機與許多店家也能刷。",
      ]},
      { h: "金錢", lines: [
        "貨幣為日圓(JPY)。都市無現金化已普及，但屋台、小神社、鄉下巴士仍只收現金。",
        "機場、主要車站與便利商店ATM可用海外卡提領(7-11銀行與郵局適用範圍最廣)。",
        "沒有小費習慣，硬要給反而會造成困擾。",
      ]},
      { h: "通訊", lines: [
        "機場可買預付SIM/eSIM。手機支援eSIM的話，出發前線上買最快。",
        "車站、便利商店、咖啡廳多有免費Wi-Fi，但移動中要上網還是建議SIM或分享器。",
      ]},
      { h: "氣候與季節", lines: [
        "3〜5月櫻花與舒適氣溫；6〜7月梅雨(北海道幾乎沒有)；7〜9月高溫潮濕並有颱風。",
        "10〜11月紅葉，是一年中最好旅行的時候；12〜2月日本海側豪雪，太平洋側晴朗乾燥。",
        "南北長達三千公里，同一天沖繩25度、北海道零下是很正常的事。",
      ]},
      { h: "禮儀與緊急", lines: [
        "報警110／消防救護119。Japan Visitor Hotline(24小時多語) 050-3816-2787。",
        "車廂內請勿講電話。街上垃圾桶很少，請做好自行帶走的準備。",
        "泡溫泉要先洗淨身體再入池，毛巾不可放進湯裡。",
        "電壓100V，插座為A型(兩支平行扁腳)。",
      ]},
      { h: "官方網站(最新資訊)", lines: [
        "日本政府觀光局(JNTO) japan.travel／JR Pass japanrailpass.net",
        "成田機場 narita-airport.jp／羽田機場 tokyo-haneda.com／關西機場 kansai-airport.or.jp",
        "氣象廳 jma.go.jp(警報與颱風資訊)",
      ]},
    ],
  },
  cn: {
    title: "日本旅游实用信息",
    sections: [
      { h: "铁路", lines: [
        "新干线: 从北海道通到鹿儿岛。东京—大阪最快2小时21分，东京—博多约5小时。",
        "JR Pass: 面向外国旅客的全国通用券，7日普通车约5万日元级(2026年8月时点，10月起海外购买调价)。",
        "在来线与私铁: 城市每隔几分钟一班；乡下可能1〜2小时才一班，务必先查时刻表。",
        "对号座: 黄金周、盂兰盆、年末年初请提早订位，自由座要做好站着的准备。",
      ]},
      { h: "交通IC卡", lines: [
        "Suica、PASMO、ICOCA等十种卡片全国互通，一张走遍主要城市。",
        "Welcome Suica: 访日旅客专用，免押金、有效28天，可在成田/羽田的JR EAST Travel Service Center购买。",
        "Welcome Suica Mobile: 仅限iPhone(iOS 17.2以上)，有效180天，用App发行免排队。",
        "Tourist PASMO: 2026年5月20日开售，成田与羽田都能买到。",
        "便利店、自动售货机与许多店铺也能刷。",
      ]},
      { h: "金钱", lines: [
        "货币为日元(JPY)。城市无现金化已普及，但路边摊、小神社、乡下巴士仍只收现金。",
        "机场、主要车站与便利店ATM可用海外卡取现(7-11银行与邮政适用范围最广)。",
        "没有小费习惯，硬要给反而会造成困扰。",
      ]},
      { h: "通讯", lines: [
        "机场可买预付SIM/eSIM。手机支持eSIM的话，出发前在线购买最快。",
        "车站、便利店、咖啡厅多有免费Wi-Fi，但移动中要上网还是建议SIM或随身路由。",
      ]},
      { h: "气候与季节", lines: [
        "3〜5月樱花与舒适气温；6〜7月梅雨(北海道几乎没有)；7〜9月高温潮湿并有台风。",
        "10〜11月红叶，是一年中最好旅行的时候；12〜2月日本海侧豪雪，太平洋侧晴朗干燥。",
        "南北长达三千公里，同一天冲绳25度、北海道零下是很正常的事。",
      ]},
      { h: "礼仪与紧急", lines: [
        "报警110／消防救护119。Japan Visitor Hotline(24小时多语) 050-3816-2787。",
        "车厢内请勿通话。街上垃圾桶很少，请做好自行带走的准备。",
        "泡温泉要先洗净身体再入池，毛巾不可放进汤里。",
        "电压100V，插座为A型(两支平行扁脚)。",
      ]},
      { h: "官方网站(最新信息)", lines: [
        "日本政府观光局(JNTO) japan.travel／JR Pass japanrailpass.net",
        "成田机场 narita-airport.jp／羽田机场 tokyo-haneda.com／关西机场 kansai-airport.or.jp",
        "气象厅 jma.go.jp(警报与台风信息)",
      ]},
    ],
  },
  en: {
    title: "Japan travel basics",
    sections: [
      { h: "Rail", lines: [
        "Shinkansen runs from Hokkaido to Kagoshima. Tokyo–Osaka in 2h21m at best, Tokyo–Hakata about 5 hours.",
        "Japan Rail Pass: nationwide unlimited travel for foreign visitors, around ¥50,000 for 7 days ordinary class (as of Aug 2026; overseas prices rise in October).",
        "Local and private lines: minutes apart in cities, but sometimes one train every one to two hours in the countryside. Check timetables first.",
        "Reserve seats early for Golden Week, Obon and New Year. Unreserved cars get very full.",
      ]},
      { h: "IC transit cards", lines: [
        "Suica, PASMO, ICOCA and seven others are mutually accepted nationwide — one card covers most cities.",
        "Welcome Suica: for visitors, no deposit, valid 28 days, sold at JR EAST Travel Service Centers at Narita and Haneda.",
        "Welcome Suica Mobile: iPhone only (iOS 17.2+), valid 180 days, issued in the app with no queue.",
        "Tourist PASMO: launched 20 May 2026, available at Narita and Haneda.",
        "They also work at convenience stores, vending machines and many shops.",
      ]},
      { h: "Money", lines: [
        "The currency is the yen (JPY). Cities are largely cashless, but food stalls, small shrines and rural buses still take cash only.",
        "Foreign cards work at airport, station and convenience store ATMs — Seven Bank and Japan Post accept the widest range.",
        "There is no tipping. Leaving money behind causes confusion rather than pleasure.",
      ]},
      { h: "Connectivity", lines: [
        "Prepaid SIMs and eSIMs are sold at airports; if your phone takes an eSIM, buying online before departure is fastest.",
        "Free Wi-Fi is common at stations, convenience stores and cafés, but a SIM or pocket router is safer on the move.",
      ]},
      { h: "Climate and seasons", lines: [
        "March to May brings blossom and mild air. June–July is the rainy season (barely felt in Hokkaido). July–September is hot, humid and typhoon-prone.",
        "October–November is autumn colour and the easiest travel of the year. December–February means heavy snow on the Japan Sea side, dry sunshine on the Pacific side.",
        "The country runs 3,000 km north to south — Okinawa at 25°C and Hokkaido below freezing on the same day is normal.",
      ]},
      { h: "Etiquette and emergencies", lines: [
        "Police 110, fire and ambulance 119. Japan Visitor Hotline (24h, multilingual): 050-3816-2787.",
        "Don't take calls on trains. Public bins are scarce, so plan to carry rubbish with you.",
        "At an onsen, wash before entering the bath and keep your towel out of the water.",
        "Power is 100V with type A plugs (two flat parallel pins).",
      ]},
      { h: "Official sites (live info)", lines: [
        "Japan National Tourism Organization: japan.travel / Japan Rail Pass: japanrailpass.net",
        "Narita: narita-airport.jp / Haneda: tokyo-haneda.com / Kansai: kansai-airport.or.jp",
        "Japan Meteorological Agency: jma.go.jp (warnings and typhoon tracking)",
      ]},
    ],
  },
  ko: {
    title: "일본 여행 기본 정보",
    sections: [
      { h: "철도", lines: [
        "신칸센은 홋카이도에서 가고시마까지. 도쿄–오사카 최속 2시간 21분, 도쿄–하카타 약 5시간.",
        "재팬 레일 패스: 외국인 전용 전국 무제한 승차권. 7일 보통차 5만 엔대(2026년 8월 시점, 10월부터 해외 구매가 인상).",
        "재래선과 사철: 도시는 몇 분 간격이지만 지방은 1~2시간에 한 대일 수도 있으니 시각표를 먼저 확인.",
        "지정석은 골든위크·오본·연말연시에 일찍 예약. 자유석은 혼잡을 각오해야 한다.",
      ]},
      { h: "교통 IC카드", lines: [
        "Suica·PASMO·ICOCA 등 10종이 전국에서 호환되어 한 장이면 대도시는 거의 다닐 수 있다.",
        "Welcome Suica: 방일객 전용. 보증금 없음, 유효기간 28일. 나리타/하네다 JR EAST Travel Service Center에서 구매.",
        "Welcome Suica Mobile: 아이폰 전용(iOS 17.2 이상), 유효기간 180일. 앱에서 발급해 줄을 설 필요가 없다.",
        "Tourist PASMO: 2026년 5월 20일 시작. 나리타와 하네다에서 살 수 있다.",
        "편의점, 자판기, 많은 상점 결제에도 쓸 수 있다.",
      ]},
      { h: "돈", lines: [
        "통화는 엔(JPY). 도시는 캐시리스가 진행됐지만 포장마차, 작은 신사, 지방 버스는 현금만 받는 곳이 남아 있다.",
        "공항·주요역·편의점 ATM에서 해외 카드로 인출 가능(세븐은행과 유초은행이 가장 폭넓다).",
        "팁 문화는 없다. 두고 가면 오히려 곤란하게 만든다.",
      ]},
      { h: "통신", lines: [
        "공항에서 선불 SIM/eSIM을 살 수 있다. eSIM 지원 단말이면 출발 전 온라인 구매가 가장 빠르다.",
        "역·편의점·카페의 무료 와이파이는 많지만, 이동 중에도 쓰려면 SIM이나 포켓 와이파이가 안심이다.",
      ]},
      { h: "기후와 계절", lines: [
        "3~5월은 벚꽃과 쾌적함. 6~7월은 장마(홋카이도는 거의 없다). 7~9월은 고온다습에 태풍.",
        "10~11월은 단풍으로 일 년 중 가장 여행하기 좋다. 12~2월은 동해 쪽 폭설, 태평양 쪽은 맑고 건조.",
        "남북 3000킬로미터. 같은 날 오키나와가 25도, 홋카이도가 영하인 일이 흔하다.",
      ]},
      { h: "매너와 긴급", lines: [
        "경찰 110 / 소방·구급 119. 재팬 비지터 핫라인(24시간 다국어) 050-3816-2787.",
        "전철 안에서 통화는 삼가고, 쓰레기통이 적으니 되가져갈 생각으로 다닌다.",
        "온천은 몸을 씻고 탕에 들어가며, 수건은 물에 넣지 않는다.",
        "전압 100V, 플러그는 A타입(평행 2핀).",
      ]},
      { h: "공식 사이트(최신 정보)", lines: [
        "일본정부관광국(JNTO) japan.travel / 재팬 레일 패스 japanrailpass.net",
        "나리타공항 narita-airport.jp / 하네다공항 tokyo-haneda.com / 간사이공항 kansai-airport.or.jp",
        "기상청 jma.go.jp(경보·태풍 정보)",
      ]},
    ],
  },
};

/**
 * 空港→市内アクセスのフロー図データ(5言語)。
 * 所要時間の確認日 2026-08-22(WebSearch実測): スカイライナー日暮里まで最速36分・京成上野まで約41分、
 * 成田エクスプレス東京駅まで約50〜60分、羽田→浜松町 東京モノレール空港快速13分、
 * 羽田→品川 京急エアポート快特14分、関空→大阪難波 ラピート約38分、新千歳→札幌 快速エアポート37分。
 * 運賃は改定が早いので原則書かない(スカイライナーのみ目安を注記)。
 */
export const TRANSIT = {
  ja: {
    h: "空港から市内へ",
    pick: "入口の空港を選ぶ",
    airports: [
      { id: "nrt", name: "成田国際空港", city: "東京都心",
        routes: [
          { name: "京成スカイライナー", time: "日暮里まで36分", note: "全席指定・約20分間隔", best: true },
          { name: "成田エクスプレス(N'EX)", time: "東京駅まで約53分", note: "新宿・池袋・横浜へ直通" },
          { name: "アクセス特急 / 京成本線", time: "60〜80分", note: "特急料金が要らない" },
          { name: "リムジンバス", time: "80〜120分", note: "荷物が多いなら楽" },
        ],
        onward: ["JR山手線", "東京メトロ", "東海道新幹線(東京駅)"] },
      { id: "hnd", name: "羽田空港", city: "東京都心",
        routes: [
          { name: "東京モノレール(空港快速)", time: "浜松町まで13分", note: "山手線に接続", best: true },
          { name: "京急線(エアポート快特)", time: "品川まで14分", note: "都営浅草線へ直通" },
          { name: "リムジンバス", time: "30〜60分", note: "主要ホテルへ直行" },
        ],
        onward: ["JR山手線", "都営浅草線", "東海道新幹線(品川駅)"] },
      { id: "kix", name: "関西国際空港", city: "大阪・京都",
        routes: [
          { name: "南海ラピート", time: "難波まで約38分", note: "全席指定", best: true },
          { name: "JR特急はるか", time: "京都まで約80分", note: "新大阪・京都へ直通" },
          { name: "JR関空快速", time: "大阪駅まで約70分", note: "特急料金なし" },
        ],
        onward: ["大阪メトロ", "阪急・京阪", "山陽新幹線(新大阪駅)"] },
      { id: "cts", name: "新千歳空港", city: "札幌",
        routes: [
          { name: "JR快速エアポート", time: "札幌まで37分", note: "約15分間隔", best: true },
          { name: "連絡バス", time: "70〜90分", note: "スキー場へ直行便もある" },
        ],
        onward: ["JR函館本線", "札幌市営地下鉄"] },
    ],
    card: {
      h: "交通ICカードの使い方",
      steps: ["空港のカウンター/券売機で入手(Welcome SuicaやTourist PASMO)",
              "券売機かコンビニで現金チャージ",
              "改札・バスはタッチするだけ",
              "コンビニや自販機の支払いにも使える"],
    },
  },
  zh: {
    h: "從機場到市區",
    pick: "選擇入境的機場",
    airports: [
      { id: "nrt", name: "成田國際機場", city: "東京市中心",
        routes: [
          { name: "京成Skyliner", time: "到日暮里36分", note: "全車對號、約20分一班", best: true },
          { name: "成田特快N'EX", time: "到東京車站約53分", note: "直達新宿、池袋、橫濱" },
          { name: "Access特急 / 京成本線", time: "60〜80分", note: "不需另付特急料金" },
          { name: "利木津巴士", time: "80〜120分", note: "行李多時較輕鬆" },
        ],
        onward: ["JR山手線", "東京Metro", "東海道新幹線(東京站)"] },
      { id: "hnd", name: "羽田機場", city: "東京市中心",
        routes: [
          { name: "東京單軌電車(機場快速)", time: "到濱松町13分", note: "銜接山手線", best: true },
          { name: "京急線(Airport快特)", time: "到品川14分", note: "直通都營淺草線" },
          { name: "利木津巴士", time: "30〜60分", note: "直達主要飯店" },
        ],
        onward: ["JR山手線", "都營淺草線", "東海道新幹線(品川站)"] },
      { id: "kix", name: "關西國際機場", city: "大阪・京都",
        routes: [
          { name: "南海Rapi:t", time: "到難波約38分", note: "全車對號", best: true },
          { name: "JR特急HARUKA", time: "到京都約80分", note: "直達新大阪、京都" },
          { name: "JR關空快速", time: "到大阪站約70分", note: "不需特急料金" },
        ],
        onward: ["大阪Metro", "阪急・京阪", "山陽新幹線(新大阪站)"] },
      { id: "cts", name: "新千歲機場", city: "札幌",
        routes: [
          { name: "JR快速Airport", time: "到札幌37分", note: "約15分一班", best: true },
          { name: "接駁巴士", time: "70〜90分", note: "也有直達滑雪場的班次" },
        ],
        onward: ["JR函館本線", "札幌市營地鐵"] },
    ],
    card: {
      h: "交通IC卡怎麼用",
      steps: ["在機場櫃檯或售票機取得(Welcome Suica或Tourist PASMO)",
              "在售票機或便利商店用現金儲值",
              "進出站與搭巴士只要感應",
              "便利商店與自動販賣機也能付款"],
    },
  },
  cn: {
    h: "从机场到市区",
    pick: "选择入境的机场",
    airports: [
      { id: "nrt", name: "成田国际机场", city: "东京市中心",
        routes: [
          { name: "京成Skyliner", time: "到日暮里36分", note: "全车对号、约20分一班", best: true },
          { name: "成田特快N'EX", time: "到东京站约53分", note: "直达新宿、池袋、横滨" },
          { name: "Access特急 / 京成本线", time: "60〜80分", note: "不需另付特急费" },
          { name: "利木津巴士", time: "80〜120分", note: "行李多时较轻松" },
        ],
        onward: ["JR山手线", "东京Metro", "东海道新干线(东京站)"] },
      { id: "hnd", name: "羽田机场", city: "东京市中心",
        routes: [
          { name: "东京单轨电车(机场快速)", time: "到滨松町13分", note: "衔接山手线", best: true },
          { name: "京急线(Airport快特)", time: "到品川14分", note: "直通都营浅草线" },
          { name: "利木津巴士", time: "30〜60分", note: "直达主要酒店" },
        ],
        onward: ["JR山手线", "都营浅草线", "东海道新干线(品川站)"] },
      { id: "kix", name: "关西国际机场", city: "大阪・京都",
        routes: [
          { name: "南海Rapi:t", time: "到难波约38分", note: "全车对号", best: true },
          { name: "JR特急HARUKA", time: "到京都约80分", note: "直达新大阪、京都" },
          { name: "JR关空快速", time: "到大阪站约70分", note: "不需特急费" },
        ],
        onward: ["大阪Metro", "阪急・京阪", "山阳新干线(新大阪站)"] },
      { id: "cts", name: "新千岁机场", city: "札幌",
        routes: [
          { name: "JR快速Airport", time: "到札幌37分", note: "约15分一班", best: true },
          { name: "接驳巴士", time: "70〜90分", note: "也有直达滑雪场的班次" },
        ],
        onward: ["JR函馆本线", "札幌市营地铁"] },
    ],
    card: {
      h: "交通IC卡怎么用",
      steps: ["在机场柜台或售票机取得(Welcome Suica或Tourist PASMO)",
              "在售票机或便利店用现金充值",
              "进出站与搭巴士只要感应",
              "便利店与自动售货机也能付款"],
    },
  },
  en: {
    h: "From airport to city",
    pick: "Choose your arrival airport",
    airports: [
      { id: "nrt", name: "Narita Airport", city: "central Tokyo",
        routes: [
          { name: "Keisei Skyliner", time: "36 min to Nippori", note: "all reserved, every ~20 min", best: true },
          { name: "Narita Express (N'EX)", time: "~53 min to Tokyo Stn", note: "through to Shinjuku, Ikebukuro, Yokohama" },
          { name: "Access Express / Keisei Main Line", time: "60–80 min", note: "no limited-express surcharge" },
          { name: "Limousine bus", time: "80–120 min", note: "easiest with heavy luggage" },
        ],
        onward: ["JR Yamanote Line", "Tokyo Metro", "Tōkaidō Shinkansen (Tokyo Stn)"] },
      { id: "hnd", name: "Haneda Airport", city: "central Tokyo",
        routes: [
          { name: "Tokyo Monorail (Airport Rapid)", time: "13 min to Hamamatsuchō", note: "connects to the Yamanote Line", best: true },
          { name: "Keikyū Line (Airport Ltd. Express)", time: "14 min to Shinagawa", note: "through to Toei Asakusa Line" },
          { name: "Limousine bus", time: "30–60 min", note: "direct to major hotels" },
        ],
        onward: ["JR Yamanote Line", "Toei Asakusa Line", "Tōkaidō Shinkansen (Shinagawa)"] },
      { id: "kix", name: "Kansai Airport", city: "Osaka & Kyoto",
        routes: [
          { name: "Nankai Rapi:t", time: "~38 min to Namba", note: "all reserved", best: true },
          { name: "JR Ltd. Express Haruka", time: "~80 min to Kyoto", note: "direct to Shin-Osaka and Kyoto" },
          { name: "JR Kansai Airport Rapid", time: "~70 min to Osaka Stn", note: "no surcharge" },
        ],
        onward: ["Osaka Metro", "Hankyu & Keihan", "Sanyō Shinkansen (Shin-Osaka)"] },
      { id: "cts", name: "New Chitose Airport", city: "Sapporo",
        routes: [
          { name: "JR Rapid Airport", time: "37 min to Sapporo", note: "every ~15 min", best: true },
          { name: "Shuttle bus", time: "70–90 min", note: "some run straight to the ski resorts" },
        ],
        onward: ["JR Hakodate Line", "Sapporo Subway"] },
    ],
    card: {
      h: "Using an IC card",
      steps: ["Pick one up at an airport counter or machine (Welcome Suica or Tourist PASMO)",
              "Top up with cash at a machine or convenience store",
              "Just tap at the gate or on the bus",
              "It also pays at convenience stores and vending machines"],
    },
  },
  ko: {
    h: "공항에서 시내로",
    pick: "입국 공항을 고르세요",
    airports: [
      { id: "nrt", name: "나리타 국제공항", city: "도쿄 도심",
        routes: [
          { name: "게이세이 스카이라이너", time: "닛포리까지 36분", note: "전석 지정, 약 20분 간격", best: true },
          { name: "나리타 익스프레스(N'EX)", time: "도쿄역까지 약 53분", note: "신주쿠·이케부쿠로·요코하마 직통" },
          { name: "액세스 특급 / 게이세이 본선", time: "60~80분", note: "특급 요금이 필요 없다" },
          { name: "리무진 버스", time: "80~120분", note: "짐이 많으면 편하다" },
        ],
        onward: ["JR 야마노테선", "도쿄 메트로", "도카이도 신칸센(도쿄역)"] },
      { id: "hnd", name: "하네다 공항", city: "도쿄 도심",
        routes: [
          { name: "도쿄 모노레일(공항쾌속)", time: "하마마쓰초까지 13분", note: "야마노테선 환승", best: true },
          { name: "게이큐선(에어포트 쾌특)", time: "시나가와까지 14분", note: "도에이 아사쿠사선 직통" },
          { name: "리무진 버스", time: "30~60분", note: "주요 호텔로 직행" },
        ],
        onward: ["JR 야마노테선", "도에이 아사쿠사선", "도카이도 신칸센(시나가와)"] },
      { id: "kix", name: "간사이 국제공항", city: "오사카·교토",
        routes: [
          { name: "난카이 라피트", time: "난바까지 약 38분", note: "전석 지정", best: true },
          { name: "JR 특급 하루카", time: "교토까지 약 80분", note: "신오사카·교토 직통" },
          { name: "JR 간쿠 쾌속", time: "오사카역까지 약 70분", note: "특급 요금 없음" },
        ],
        onward: ["오사카 메트로", "한큐·게이한", "산요 신칸센(신오사카)"] },
      { id: "cts", name: "신치토세 공항", city: "삿포로",
        routes: [
          { name: "JR 쾌속 에어포트", time: "삿포로까지 37분", note: "약 15분 간격", best: true },
          { name: "연결 버스", time: "70~90분", note: "스키장 직행편도 있다" },
        ],
        onward: ["JR 하코다테선", "삿포로 지하철"] },
    ],
    card: {
      h: "교통 IC카드 사용법",
      steps: ["공항 카운터나 발매기에서 발급(Welcome Suica 또는 Tourist PASMO)",
              "발매기나 편의점에서 현금 충전",
              "개찰구와 버스는 터치만 하면 끝",
              "편의점과 자판기 결제에도 쓸 수 있다"],
    },
  },
};

/**
 * 公式PR動画。JNTO(日本政府観光局)公式 YouTube「Visit Japan」の
 * "Discover Japan's Different Regions" シリーズが9地方すべてを網羅していたので、
 * 選択中の都道府県に対応する回を出す。
 * 動画IDは 2026-08-22 に oEmbed で1件ずつ実在とチャンネル名(Visit Japan)を確認済み。
 * 言語別チャンネルの同シリーズは見つからなかったため、全言語で英語版(字幕あり)を出す。
 */
const V = (id, label) => ({ id, label });
export const REGION_VIDEO = {
  hokkaido: V("4Yw3VDsTquw", "Hokkaido"),
  tohoku: V("bRimtN3sfzU", "Tohoku"),
  kanto1: V("mu-0CoEPWqA", "Kanto Part 1"),
  kanto2: V("uQh-fhVBTkw", "Kanto Part 2"),
  hokushin: V("F-7_CcIfzQU", "Hokuriku Shinetsu"),
  tokai: V("gqcV7rWRTpo", "Tokai"),
  kansai1: V("Tx5BO5636C8", "Kansai Part 1"),
  kansai2: V("V1dG1qitAZY", "Kansai Part 2"),
  chugoku: V("qr5IDTGLtzY", "Chugoku"),
  shikoku: V("c3nh6zL45xg", "Shikoku"),
  kyushu1: V("Rt-ZD3mPzN8", "Kyushu Part 1"),
  kyushu2: V("mr8OhYKNVsQ", "Kyushu Part 2"),
  okinawa: V("3Dv4yN0TP88", "Okinawa"),
};

/** 都道府県 -> JNTOの地方区分。JNTOの括りは9地方区分と少しずれるので実データに合わせる
 *  (山梨・三重は観光の実態に合わせて東海側へ寄せた)。 */
export const PREF_VIDEO = {
  "JP-01": "hokkaido",
  "JP-02": "tohoku", "JP-03": "tohoku", "JP-04": "tohoku",
  "JP-05": "tohoku", "JP-06": "tohoku", "JP-07": "tohoku",
  "JP-08": "kanto1", "JP-09": "kanto1", "JP-10": "kanto1", "JP-11": "kanto1",
  "JP-12": "kanto2", "JP-13": "kanto2", "JP-14": "kanto2",
  "JP-15": "hokushin", "JP-16": "hokushin", "JP-17": "hokushin",
  "JP-18": "hokushin", "JP-20": "hokushin",
  "JP-19": "tokai", "JP-21": "tokai", "JP-22": "tokai", "JP-23": "tokai", "JP-24": "tokai",
  "JP-25": "kansai1", "JP-26": "kansai1", "JP-27": "kansai1",
  "JP-28": "kansai2", "JP-29": "kansai2", "JP-30": "kansai2",
  "JP-31": "chugoku", "JP-32": "chugoku", "JP-33": "chugoku",
  "JP-34": "chugoku", "JP-35": "chugoku",
  "JP-36": "shikoku", "JP-37": "shikoku", "JP-38": "shikoku", "JP-39": "shikoku",
  "JP-40": "kyushu1", "JP-41": "kyushu1", "JP-42": "kyushu1",
  "JP-43": "kyushu2", "JP-44": "kyushu2", "JP-45": "kyushu2", "JP-46": "kyushu2",
  "JP-47": "okinawa",
};

/** 情報パネルに常設する汎用動画(四季シリーズ)。IDは 2026-08-22 oEmbed で実在確認済み。 */
export const GENERAL_VIDEOS = {
  ja: [
    { id: "jQi7j3gxuZw", t: "日本の四季 — 春" },
    { id: "mpRdbsDYtDU", t: "日本の四季 — 夏" },
    { id: "dGFkkrHMFmc", t: "日本の四季 — 秋" },
    { id: "SNopWtLv5Sc", t: "日本の四季 — 冬" },
  ],
  zh: [
    { id: "jQi7j3gxuZw", t: "日本的四季 — 春" },
    { id: "mpRdbsDYtDU", t: "日本的四季 — 夏" },
    { id: "dGFkkrHMFmc", t: "日本的四季 — 秋" },
    { id: "SNopWtLv5Sc", t: "日本的四季 — 冬" },
  ],
  cn: [
    { id: "jQi7j3gxuZw", t: "日本的四季 — 春" },
    { id: "mpRdbsDYtDU", t: "日本的四季 — 夏" },
    { id: "dGFkkrHMFmc", t: "日本的四季 — 秋" },
    { id: "SNopWtLv5Sc", t: "日本的四季 — 冬" },
  ],
  en: [
    { id: "jQi7j3gxuZw", t: "Japan's Four Seasons — Spring" },
    { id: "mpRdbsDYtDU", t: "Japan's Four Seasons — Summer" },
    { id: "dGFkkrHMFmc", t: "Japan's Four Seasons — Autumn" },
    { id: "SNopWtLv5Sc", t: "Japan's Four Seasons — Winter" },
  ],
  ko: [
    { id: "jQi7j3gxuZw", t: "일본의 사계 — 봄" },
    { id: "mpRdbsDYtDU", t: "일본의 사계 — 여름" },
    { id: "dGFkkrHMFmc", t: "일본의 사계 — 가을" },
    { id: "SNopWtLv5Sc", t: "일본의 사계 — 겨울" },
  ],
};

export const PROMO_VIDEOS = {
  ja: { h: "公式プロモーション動画", sub: "日本政府観光局(JNTO)公式チャンネルより",
        regionOf: "この地方の紹介", more: "もっと見る(JNTO公式)" },
  zh: { h: "官方宣傳影片", sub: "來自日本政府觀光局(JNTO)官方頻道",
        regionOf: "這個地方的介紹", more: "看更多(JNTO官方)" },
  cn: { h: "官方宣传影片", sub: "来自日本政府观光局(JNTO)官方频道",
        regionOf: "这个地方的介绍", more: "看更多(JNTO官方)" },
  en: { h: "Official promo videos", sub: "From the Japan National Tourism Organization channel",
        regionOf: "About this region", more: "More on the JNTO channel" },
  ko: { h: "공식 홍보 영상", sub: "일본정부관광국(JNTO) 공식 채널",
        regionOf: "이 지방 소개", more: "더 보기(JNTO 공식)" },
};

export const PROMO_CHANNEL = "https://www.youtube.com/@visitjapan";
