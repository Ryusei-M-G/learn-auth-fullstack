# JWTを使用した認証の学習を目的としたアプリケーション

## プロジェクト構成（予定）
```
learn-auth-fullstack/
├── frontend/           # フロントエンドアプリケーション
│   ├── src/
│   │   ├── components/  # Reactコンポーネント
│   │   │   ├── Auth/    # 認証関連コンポーネント
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   └── LogoutButton.jsx
│   │   │   ├── User/    # ユーザー関連コンポーネント
│   │   │   │   └── UserProfile.jsx
│   │   │   └── common/  # 共通コンポーネント
│   │   ├── hooks/       # カスタムフック
│   │   ├── services/    # API通信
│   │   │   └── authService.js
│   │   ├── context/     # React Context
│   │   │   └── AuthContext.jsx
│   │   └── utils/       # ユーティリティ関数
│   ├── public/
│   └── package.json
├── backend/            # バックエンドAPI
│   ├── src/
│   │   ├── controllers/ # コントローラー
│   │   │   ├── authController.js
│   │   │   └── userController.js
│   │   ├── middleware/  # ミドルウェア
│   │   │   ├── auth.js
│   │   │   └── rateLimiter.js
│   │   ├── models/      # データベースモデル
│   │   │   └── User.js
│   │   ├── routes/      # ルート定義
│   │   │   ├── auth.js
│   │   │   └── users.js
│   │   ├── config/      # 設定ファイル
│   │   │   └── database.js
│   │   └── utils/       # ユーティリティ関数
│   │       └── jwt.js
│   ├── DBconnect.js
│   ├── index.js
│   └── package.json
├── database/           # データベース関連
│   └── migrations/     # マイグレーションファイル
├── docs/              # ドキュメント
├── .env               # 環境変数
├── .gitignore
└── README.md
```

## 技術スタック
- **Frontend**: React + Vite (JavaScript)
- **Backend**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Token)
- **Password Hashing**: bcrypt
- **HTTP Client**: Axios
- **Security**: Express-rate-limit

## 機能について
### Frontend
Vite + Reactで作成
画面部品はReactで作成し、サーバーサイドへAxiosを使用して通信を行う。

- **登録フォーム**
  ユーザー名とパスワードを入力して登録を行う
- **ログインフォーム**
  ユーザー名とパスワードを入力してログインを行う
- **ログアウトボタン**
  トークンを無効化する
- **ユーザーページ**
  認証されているアカウントの情報を表示する（情報については未定）

### Backend
Expressを使用してサーバーを作成する
認証にはJWTを使用し、パスワードのハッシュ化はbcryptで行う。
DataBaseはPostgres
Express-rate-limitでDos対策を行う

- **DBconnect.js**
  データベース操作を行う。データの追加や削除、抽出を行う
  ハッシュ化もここで行う。
- **/auth/Auth.js**
  JWTを用いた認証機能を作成する
- **index.js**
  エンドポイント

## APIエンドポイント（予定）
- `POST /api/auth/register` - ユーザー登録
- `POST /api/auth/login` - ユーザーログイン
- `POST /api/auth/logout` - ユーザーログアウト
- `GET /api/user/profile` - ユーザー情報取得
- `PUT /api/user/profile` - ユーザー情報更新

## 開発環境セットアップ
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend（予定）
```bash
cd backend
npm install
npm run dev
```

### Database Setup（予定）
```bash
# PostgreSQLの起動
# データベースの作成
# マイグレーションの実行
```

## 学習目標
- JWTを使用した認証システムの理解
- フロントエンドとバックエンドの連携
- セキュアなパスワード管理
- RESTful APIの設計
- React状態管理とルーティング
