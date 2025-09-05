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
│   │   │   │   ├── OAuthLogin.jsx （予定）
│   │   │   │   └── LogoutButton.jsx （予定）
│   │   │   ├── User/    # ユーザー関連コンポーネント
│   │   │   │   ├── UserProfile.jsx
│   │   │   │   └── AccountSettings.jsx （予定）
│   │   │   └── common/  # 共通コンポーネント
│   │   │       └── Navigation.jsx
│   │   ├── pages/       # ページコンポーネント
│   │   │   └── Home.jsx
│   │   ├── hooks/       # カスタムフック （予定）
│   │   ├── services/    # API通信 （予定）
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── oauthService.js （予定）
│   │   ├── context/     # React Context （予定）
│   │   │   └── AuthContext.jsx
│   │   └── utils/       # ユーティリティ関数 （予定）
│   ├── public/
│   ├── .env
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
- **Frontend**: React + Vite (JavaScript) + React Router
- **Backend**: Express.js + Passport.js + cookie-parser
- **Database**: PostgreSQL
- **Authentication**: 
  - JWT (HttpOnly Cookie送信)
  - OAuth 2.0 (GitHub, Google)
- **Password Hashing**: bcrypt
- **HTTP Client**: Axios (withCredentials対応)
- **Security**: Express-rate-limit, CORS, Helmet, SameSite Cookie

## 実装予定

### 基本認証システム
- **Cookie-based JWT認証**
  - ユーザー名/パスワードによる登録・ログイン
  - JWTトークンをHttpOnly Cookieで送信
  - パスワードハッシュ化（bcrypt）
  - CORS設定（credentials: true）

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
- Cookie-based JWT認証とOAuth 2.0
- HttpOnly/SameSite Cookieでセキュア送信
- パスワードハッシュ化（bcrypt）
- PostgreSQL
- Passport.jsでOAuth戦略管理

## APIエンドポイント

### 基本認証
- `POST /api/auth/register` - ユーザー登録（Cookieセット）
- `POST /api/auth/login` - ユーザーログイン（Cookieセット）
- `POST /api/auth/logout` - ユーザーログアウト（Cookieクリア）
- `GET /api/user/profile` - ユーザー情報取得（Cookie認証）
- `PUT /api/user/profile` - ユーザー情報更新（Cookie認証）
- `GET /api/auth/me` - 認証状態確認（Cookie検証）

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

## 環境変数設定
学習目的のため、`.env`ファイルはgitignoreに含めず、設定内容を確認できるようにしています。

### 必要な環境変数
```bash
# JWT設定
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=7d

# Cookie設定
COOKIE_SECRET=your-cookie-secret
NODE_ENV=development

# データベース設定
DATABASE_URL=postgresql://username:password@localhost:5432/learn_auth
DB_HOST=localhost
DB_PORT=5432
DB_NAME=learn_auth
DB_USER=your-username
DB_PASSWORD=your-password

# CORS設定
FRONTEND_URL=http://localhost:5173
```

## 学習目標
- JWT認証システムの実装
- React + Expressの連携
- OAuth 2.0の理解（予定）
- セキュアなパスワード管理

