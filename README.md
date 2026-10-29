# 🌐 日本語 ⇄ スペイン語 相互学習Webアプリ (nihongo-espanol-study)

いつでも・どこからでもスマホやPCで学習できる、日本語話者向けスペイン語学習＆スペイン語話者向け日本語学習のWebアプリケーション群です。

## 🚀 公開Webサイト (GitHub Pages)
👉 **[https://ka1mu.github.io/nihongo-espanol-study/](https://ka1mu.github.io/nihongo-espanol-study/)**

- 🇪🇸 **ターゲット1200 スペイン語版 (DELE対策)**: [https://ka1mu.github.io/nihongo-espanol-study/spanish/](https://ka1mu.github.io/nihongo-espanol-study/spanish/)
- 🇯🇵 **Aprender Japonés (JLPT N5 & N4)**: [https://ka1mu.github.io/nihongo-espanol-study/japanese/](https://ka1mu.github.io/nihongo-espanol-study/japanese/)

---

## 🌟 新機能（大型アップデート）

### 1. 🔊 ネイティブ音声のワンタップ読み上げ（Web Speech API）
- **日本語アプリ**: 漢字、音読み、訓読み、単語、例文の横にある 🔊 ボタンを押すと、ブラウザ標準の合成音声でネイティブ日本語がゆっくりクリアに流れます。
- **スペイン語アプリ**: スペイン語単語の横の 🔊 ボタンを押すと、正しいスペイン語発音が流れます。
- 外部APIや通信を使わないため、通信量ゼロ・完全無料で動作します。

### 2. 👤 生徒プロフィール ＆ アバター選択
- 生徒が自分の名前（ニックネーム）とお気に入りの日本アバター（🥷 忍者, 🍣 寿司, 🌸 桜, 🗻 富士山, 🐼 パンダ, 🌮 タコス, ⚽ サッカー など14種類）を選択可能。
- スマホ（localStorage）に自動保存され、いつでも右上のバッジから変更できます。

### 3. ⚡ 4択ミニクイズモード（Modo Quiz 10問）
- 「⚡ Modo Quiz」ボタンを押すと、ランダム10問の4択テストがスタート！
- **本格的な効果音付き（Web Audio API）**: 正解すると明るいチャイム音♪、不正解だとブブー音が鳴ります。
- **自動進捗反映**: クイズで正解した漢字・単語は、自動的に「Dominado（暗記済み）」として記録されます！

### 4. 🏆 クラス進捗ランキング（Tabla de Progreso）
- 生徒同士がお互いの進捗（暗記した項目数、達成率%）を一覧できるランキング画面。
- 🥇 1位〜🥉 3位にはメダルバッジが表示され、クラス全体で競い合えます。

### 5. ☁️ Google スプレッドシート（GAS）連携
- 先生（あなた）の Google スプレッドシートと連携することで、生徒全員の学習状況を1枚のシートにリアルタイム自動集約できます。
- 導入コード: [`gas/Code.gs`](./gas/Code.gs)
  1. Google スプレッドシートを作成し、「拡張機能」>「Apps Script」に `Code.gs` を貼り付け。
  2. 「ウェブアプリ」としてデプロイ（アクセス: 全員）。
  3. 発行されたURLをアプリの「🏆 Clasificación」>「⚙️ Conectar Google Sheets」に設定するだけで連携完了！

---

## 🛠️ 技術仕様
- **完全スタンドアロン & オフライン動作**: 全データがHTML内に内包。
- **モバイルファースト設計**: iPhone / Android の画面幅に完全最適化。
- **PWA対応（ホーム画面に追加）**: SafariやChromeで「ホーム画面に追加」を行うことで、ネイティブアプリ同様の使い心地で全画面起動。
