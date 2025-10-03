const express = require('express');
const path = require('path'); // ファイルパスを扱うためのモジュール
const app = express();
const port = process.env.PORT || 8080; // App Hostingが提供するポート番号を使用

// 静的ファイル (HTML, CSS, JS) を提供するための設定
// __dirname は現在のスクリプトファイルが存在するディレクトリを指します。
// これにより、index.jsと同じディレクトリにある index.html や他の静的ファイルを配信できます。
app.use(express.static(path.join(__dirname)));

// ルートURL (例: your-app-url.hosted.app/) へのリクエストに対して
// index.html ファイルを送信します。
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// サーバーを指定されたポートで起動
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
