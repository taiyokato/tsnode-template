# Node Typescript template

### Directory structure

- /controllers
  - routesからそれぞれのcontrollerを呼ぶ。controllersは複数のhelpersを呼んでまとめる処理をする
- /helpers
  - controllersからそれぞれのhelperファイルを読み込む。バラバラの最小関数を置くところ。
- /interfaces
  - 型等インターフェースあればここに入れる。
- /models
  - 主にMongoとか外部DBのモデルとかはここに入れてる。
- /routes
  - routes。うん。データの検証とcontrollerの呼び出しと返事のみの最小限にするべき
- /services
  - DBとか外部サービスのコンフィグと接続コード等ここに入れるべき。
- /util
  - 放置。
- app.ts
  - メインエントリーポイント
- server.ts
  - そのまま


### Routes

RouterはAsync関数にするのが好ましい。controller等でDB参照時高確率でPromiseが返ってくる為である。
routerのエンドポイントの中身構文は
```javascript
try {
    // Body, cookie, header等のデータチェック

    // 型に落とし込み

    // Controller呼び出し

    // レスポンス整形

    // レスポンス
} catch (error) {
    next(error); // エラーハンドラーで処理させるべし
}
```

### その他

async function等をよく使うのでVS CodeにUser defined snippetsに以下を追加してる
```json
"export async func": {
    "prefix": "eaf",
    "body": [
        "export async function $1($2): Promise<$3> {",
        "    try {",
        "        $0",
        "    } catch (error) {",
        "        throw error;",
        "    }",
        "}"
    ]
},
"async func": {
    "prefix": "af",
    "body": [
        "async function $1($2): Promise<$3> {",
        "    try {",
        "        $0",
        "    } catch (error) {",
        "        throw error;",
        "    }",
        "}"
    ]
},
```

これで`eaf`と入力しただけで`export async function...`が出てくるので便利。タブで移動もできる。
好みに応じてSnippetを作るといい。
