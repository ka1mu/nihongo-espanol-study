# 🌐 日本語 ⇄ スペイン語 相互学習Webアプリ (nihongo-espanol-study)

いつでも・どこからでもスマホやPCで学習できる、日本語話者向けスペイン語学習＆スペイン語話者向け日本語学習のWebアプリケーション群です。

## 🚀 公開Webサイト (GitHub Pages)
👉 **[https://ka1mu.github.io/nihongo-espanol-study/](https://ka1mu.github.io/nihongo-espanol-study/)**

- 🇪🇸 **ターゲット1200 スペイン語版 (DELE対策)**: [https://ka1mu.github.io/nihongo-espanol-study/spanish/](https://ka1mu.github.io/nihongo-espanol-study/spanish/)
- 🇯🇵 **Aprender Japonés (JLPT N5 & N4)**: [https://ka1mu.github.io/nihongo-espanol-study/japanese/](https://ka1mu.github.io/nihongo-espanol-study/japanese/)

---

## 🌟 主な機能

### 1. ⚡ 完全ゼロ設定のクラウドリアルタイム同期（Supabase連携）
- **生徒側の設定は一切不要**: アプリを開いて名前とアバターを決めるだけで、**全員が全自動でリアルタイムにクラウド（Supabase）と同期**されます！
- **WebSocket リアルタイム配信**: 誰かが暗記チェックを入れたりクイズに正解すると、他の生徒のランキング画面がリロードなしでリアルタイムに動きます。
- **オフライン対応**: 通信が切れてもスマホ内（localStorage）に暗記データが保存され、通信回復時に自動同期されます。

### 2. 🏆 クラス進捗ランキング（多角的なフィルター機能）
- **種目切り替え**: 🌟 Todo（総合） / 🈸 Kanji（漢字のみ） / 📖 Vocab（語彙のみ）
- **レベル切り替え**: N5 + N4 / 🟢 Solo N5 / 🔵 Solo N4
- 順位、アバター、生徒名、暗記数、達成率（%）がリアルタイム表示されます。

### 3. 🔊 ネイティブ音声のワンタップ読み上げ（2テンポ間隔対応）
- **日本語アプリ**: 漢字、音読み、訓読み、単語、例文の横にある 🔊 ボタンでネイティブ音声を再生。「み, みっ・つ」など複数の読みがある場合は **2テンポ（約0.75秒）の間隔** を空けて自然に順番に発音。
- **スペイン語アプリ**: スペイン語単語の横の 🔊 ボタンでネイティブ発音を再生。

### 4. 👤 生徒の名前 ＆ アバター設定（14種類）
- 🥷 忍者, 🍣 寿司, 🌸 桜, 🗻 富士山, 🐼 パンダ, 🌮 タコス, ⚽ サッカー など14種類の日本モチーフアバターから選択可能。

### 5. ⚡ 4択ミニクイズモード（Modo Quiz・10問）
- 本格的な正解チャイム音♪（Web Audio API）付き。
- 正解した単語や漢字は、自動的に「Dominado（暗記済み）」として進捗にチェックが付きます。
