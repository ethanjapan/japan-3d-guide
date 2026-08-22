# 日本3D観光ガイド / Japan 3D Travel Guide

47都道府県の3D地図から235の観光地を巡る、5言語(日本語 / 繁體中文 / 简体中文 / English / 한국어)の観光ガイドです。

**公開URL**: https://ethanjapan.github.io/japan-3d-guide/

## できること

- **3Dの日本地図** — 47都道府県を9地方の色で塗り分け。クリックで持ち上がり、その県の情報が開く
- **235の観光地** — 各県5件。名称は5言語、写真つき、Google Mapsへのリンクつき
- **今日の天気** — 選んだ県の現在天気と3日予報。雨の県には地図上に雨が降る
- **時間帯の演出** — 朝・昼・夕・夜で光と海の色が変わる(既定は日本の実時間・ボタンで切替可)
- **名物グルメ** — 各県3品
- **モデルコース8本** — 選ぶと地図上に経路が描かれる
- **公式PR動画** — 日本政府観光局(JNTO)公式チャンネルの地方別紹介を、選んだ県に合わせて表示
- **空港からのアクセス** — 成田・羽田・関西・新千歳の4空港と、Suica系ICカードの使い方
- **スタンプラリー** — 47都道府県を開くとスタンプが貯まる(ブラウザに保存)
- **RINKAの案内** — MV STUDIOのバーチャルアーティストが県ごと・観光地ごとにひとこと

## データの出どころとライセンス

| 何を | どこから | ライセンス |
|---|---|---|
| 都道府県の境界 | [geoBoundaries](https://www.geoboundaries.org/) JPN ADM1 | ODbL 1.0(OpenStreetMap由来) |
| 観光地の名称5言語・座標・面積・公式サイト | [Wikidata](https://www.wikidata.org/) | CC0 |
| 観光地の写真 235枚 | [Wikimedia Commons](https://commons.wikimedia.org/) | 写真ごとに異なる。撮影者とライセンスを各詳細画面に表示 |
| 天気 | [Open-Meteo](https://open-meteo.com/) | CC BY 4.0 |
| 公式PR動画 | [JNTO 公式 YouTube](https://www.youtube.com/@visitjapan) | 埋め込み(youtube-nocookie) |

アイコン・装飾は gpt-image-2 で生成、RINKAの写真は MV STUDIO のローカル生成環境で作成しています。

## 開発

```bash
npm install
npm run dev            # 開発サーバ
npm run build          # 本番ビルド (dist/)
npm run build:shapes   # 境界GeoJSON -> data/prefectures.json (mapshaperが要る)
```

`main` への push で GitHub Actions が Pages へデプロイします。

## 断り書き

- 観光地の選定と紹介文は制作者の判断によるもので、公的機関の推薦ではありません。
- 所要時間・運賃・営業状況は変わります。出発前に各公式サイトで確認してください。
- 沖縄県は地図上、島どうしの間隔を詰めて拡大表示しています(全都道府県を同じ画面で選べるようにするため)。東京都の小笠原諸島と鹿児島県の奄美群島は描画していません。

## ライセンス

**このリポジトリはソースを公開していますが、オープンソースではありません。**
Copyright (c) 2026 linsuyi (ethanjapan). All rights reserved.

- 読んで学ぶこと・手法を参考にすることは自由です
- **複製・改変・再配布・商用利用は、書面による許諾なく行えません**
- 全文と第三者データの扱い: [LICENSE](LICENSE)

境界データ (`data/prefectures.json`) は geoBoundaries 由来の ODbL 1.0 派生データベースなので、
上の留保の対象外で **ODbL 1.0 のまま**提供します。写真は Wikimedia Commons で写真ごとに
ライセンスが異なり、撮影者とライセンスはアプリ内の詳細画面に表示しています。
同梱ソフト (three.js / driver.js, MIT) の全文は `public/THIRD-PARTY-NOTICES.txt` にあります。
