/**
 * Google Apps Script (GAS) - Servidor de Progreso para "Aprender Japonés"
 * 
 * 【設定手順】
 * 1. Google スプレッドシートを新規作成（名前例: 「日本語クラス進捗表」）
 * 2. メニュー「拡張機能」>「Apps Script」を開く
 * 3. このコードをすべて貼り付けて保存（Cmd+S）
 * 4. 画面右上の「デプロイ」>「新しいデプロイ」をクリック
 *    - 種類の選択: 「ウェブアプリ」
 *    - 次のユーザーとして実行: 「自分」
 *    - アクセスできるユーザー: 「全員」 (Anyone) ※生徒が認証なしで送信できるようにするため
 * 5. 「デプロイ」をクリックし、表示された「ウェブアプリ URL」をコピー
 * 6. 日本語学習アプリの「🏆 Clasificación」>「⚙️ Conectar Google Sheets」にそのURLを貼り付けるだけ！
 */

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var students = [];
  
  // 1行目はヘッダーなので2行目から読み込み
  for (var i = 1; i < data.length; i++) {
    if (!data[i][0]) continue;
    students.push({
      name: String(data[i][0]),
      avatar: String(data[i][1] || '🥷'),
      kanji: Number(data[i][2]) || 0,
      vocab: Number(data[i][3]) || 0,
      total: (Number(data[i][2]) || 0) + (Number(data[i][3]) || 0),
      updatedAt: String(data[i][4] || '')
    });
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    data: students
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // ヘッダー行がなければ自動生成
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Nombre", "Avatar", "Kanji", "Vocabulario", "Ultima_Actualizacion"]);
      sheet.getRange(1, 1, 1, 5).setBackground("#1e293b").setFontColor("#ffffff").setFontWeight("bold");
    }
    
    var data = sheet.getDataRange().getValues();
    var rowIndex = -1;
    
    // 既存の生徒を名前で検索
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]).toLowerCase() === String(body.name).toLowerCase()) {
        rowIndex = i + 1; // 1-based index
        break;
      }
    }
    
    var now = Utilities.formatDate(new Date(), "America/Mexico_City", "yyyy-MM-dd HH:mm:ss");
    
    if (rowIndex > 0) {
      // 既存の生徒データを更新
      sheet.getRange(rowIndex, 2).setValue(body.avatar || '🥷');
      sheet.getRange(rowIndex, 3).setValue(body.kanji || 0);
      sheet.getRange(rowIndex, 4).setValue(body.vocab || 0);
      sheet.getRange(rowIndex, 5).setValue(now);
    } else {
      // 新規生徒を追加
      sheet.appendRow([body.name, body.avatar || '🥷', body.kanji || 0, body.vocab || 0, now]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
