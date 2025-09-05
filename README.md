# モダンWeb認証システムの学習用フルスタックアプリ

## プロジェクト構成（予定）
```
learn-auth-fullstack/
├── frontend/           # フロントエンドアプリケーション
│   ├── src/
│   │   ├── components/  # Reactコンポーネント
│   │   │   ├── Auth/    # 認証関連コンポーネント
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   ├── OAuthLogin.jsx
│   │   │   │   └── LogoutButton.jsx
│   │   │   ├── User/    # ユーザー関連コンポーネント
│   │   │   │   ├── UserProfile.jsx
│   │   │   │   └── AccountSettings.jsx
│   │   │   └── common/  # 共通コンポーネント
│   │   ├── hooks/       # カスタムフック
│   │   ├── services/    # API通信
│   │   │   ├── authService.js
│   │   │   └── oauthService.js
│   │   ├── context/     # React Context
│   │   │   └── AuthContext.jsx
│   │   └── utils/       # ユーティリティ関数
│   ├── public/
│   └── package.json
├── backend/            # バックエンドAPI
│   ├── controllers/    # コントローラー
│   │   ├── authController.js
│   │   ├── oauthController.js （予定）
│   │   └── userController.js
│   ├── middleware/     # ミドルウェア
│   │   ├── auth.js
│   │   ├── oauth.js （予定）
│   │   └── rateLimiter.js
│   ├── models/         # データベースモデル
│   │   ├── User.js
│   │   └── OAuthProvider.js （予定）
│   ├── routes/         # ルート定義
│   │   ├── auth.js
│   │   ├── oauth.js （予定）
│   │   └── users.js
│   ├── config/         # 設定ファイル （予定）
│   │   ├── database.js
│   │   ├── oauth.js
│   │   └── passport.js
│   ├── strategies/     # OAuth戦略 （予定）
│   │   ├── githubStrategy.js
│   │   └── googleStrategy.js
│   ├── utils/          # ユーティリティ関数
│   │   ├── jwt.js
│   │   └── oauthHelpers.js （予定）
│   ├── DBconnect.js
│   ├── index.js
│   └── package.json
├── database/           # データベース関連 （予定）
│   └── migrations/     # マイグレーションファイル
├── docs/               # ドキュメント （予定）
├── progress.md         # 開発進捗
├── .env               # 環境変数
├── .gitignore
└── README.md
```

## 技術スタック
- **Frontend**: React + Vite (JavaScript)
- **Backend**: Express.js + Passport.js
- **Database**: PostgreSQL
- **Authentication**: 
  - JWT (JSON Web Token)
  - OAuth 2.0 (GitHub, Google)
- **Password Hashing**: bcrypt
- **HTTP Client**: Axios
- **Security**: Express-rate-limit, CORS, Helmet

## 実装予定

### 基本認証システム
- **JWT認証基盤**
  - ユーザー名/パスワードによる登録・ログイン
  - JWTトークンの発行・検証
  - パスワードハッシュ化（bcrypt）

### OAuth 2.0統合（予定）
- **SNS認証機能**
  - GitHub OAuth実装
  - Google OAuth実装
  - 複数プロバイダー統合管理
  - アカウント連携機能

### 高度な機能（予定）
- **セキュリティ強化**
  - リフレッシュトークン
  - 二要素認証（2FA）
  - セッション管理
  - レート制限・DoS対策

## 機能について
### Frontend
- 登録・ログイン・ログアウト
- ユーザー情報表示
- SNSログイン（GitHub/Google）予定
- アカウント連携管理（予定）

### Backend
- JWT認証とOAuth 2.0
- パスワードハッシュ化（bcrypt）
- PostgreSQL
- Passport.jsでOAuth戦略管理

## APIエンドポイント

### 基本認証
- `POST /api/auth/register` - ユーザー登録
- `POST /api/auth/login` - ユーザーログイン
- `POST /api/auth/logout` - ユーザーログアウト
- `GET /api/user/profile` - ユーザー情報取得
- `PUT /api/user/profile` - ユーザー情報更新

### OAuth認証（予定）
- `GET /api/auth/github` - GitHub OAuth開始
- `GET /api/auth/github/callback` - GitHub認証コールバック
- `GET /api/auth/google` - Google OAuth開始  
- `GET /api/auth/google/callback` - Google認証コールバック
- `POST /api/user/link-account` - アカウント連携
- `DELETE /api/user/unlink-account` - アカウント連携解除
- `GET /api/user/providers` - 連携プロバイダー一覧

### 高度な機能（予定）
- `POST /api/auth/refresh` - トークンリフレッシュ
- `POST /api/auth/2fa/enable` - 二要素認証有効化
- `POST /api/auth/2fa/verify` - 二要素認証検証
- `GET /api/auth/sessions` - アクティブセッション一覧
- `DELETE /api/auth/sessions/:id` - 特定セッション終了

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

## 補足
学習目的のため、`.env`ファイルはgitignoreに含めず、設定内容を確認できるようにしています。

## 学習目標
- JWT認証システムの実装
- React + Expressの連携
- OAuth 2.0の理解（予定）
- セキュアなパスワード管理

