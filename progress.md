# 開発進捗

## 開発手順（フロントエンド重視アプローチ）

### 1. フロントエンド認証UI
- [ ] 認証Context作成（AuthContext.jsx）
- [ ] 登録フォームコンポーネント（モックデータ使用）
- [ ] ログインフォームコンポーネント（モックデータ使用）
- [ ] ユーザーページコンポーネント
- [ ] ログアウト機能

### 2. フロントエンド状態管理・ルーティング
- [ ] React Router導入
- [ ] Protected Routes実装
- [ ] ログイン状態の永続化（localStorage）
- [ ] 基本ナビゲーション作成
- [ ] UI/UX動作確認

### 3. API通信層（モック→実装）
- [ ] API通信サービス作成（authService.js）
- [ ] モックAPI実装（開発用）
- [ ] Axios設定とエラーハンドリング
- [ ] フロントエンド単体での動作確認

### 4. バックエンド環境構築
- [x] backend ディレクトリ作成
- [x] package.json 初期化
- [x] 依存関係インストール（express, bcrypt, jsonwebtoken, pg, cors, express-rate-limit, helmet）
- [x] 開発用依存関係（nodemon）

### 5. Express サーバー・認証API
- [ ] 基本的なExpressサーバー設定（index.js）
- [ ] CORS設定
- [ ] セキュリティ設定（helmet, rate-limit）
- [ ] 認証エンドポイント作成（フロント仕様に基づく）
- [ ] JWT トークン生成・検証機能

### 6. データベース統合
- [ ] PostgreSQL 起動・設定
- [ ] データベース接続モジュール作成（DBconnect.js）
- [ ] users テーブル作成
- [ ] 認証機能とDB連携

### 7. フロント・バック統合
- [ ] モックAPIから実APIに切り替え
- [ ] エラーハンドリング改善
- [ ] 全体的な動作確認
- [ ] セキュリティテスト

### 8. OAuth実装（将来予定）
- [ ] OAuth用フロントエンドコンポーネント
- [ ] Passport.js設定
- [ ] GitHub OAuth戦略作成
- [ ] Google OAuth戦略作成
- [ ] アカウント連携機能

## 現在の状況
- [x] プロジェクト初期化
- [x] frontend（React + Vite）作成完了
- [x] README.md 作成完了
- [x] .gitignore 設定完了

## 次のタスク
- フロントエンド認証機能から開始（UI/UX重視アプローチ）

## メモ
- 学習目的のため段階的に実装
- 各段階でしっかりと動作確認を行う
- OAuth実装前にJWT認証をしっかりと理解する