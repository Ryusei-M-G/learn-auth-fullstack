# 開発進捗

## 開発手順（フロントエンド重視アプローチ）

### 1. フロントエンド基本UI（静的）
- [x] React Router導入（react-router-dom）
- [x] Axios導入・Cookie対応設定
- [ ] 基本ページコンポーネント作成（静的）
  - [x] Home.jsx（ランディングページ）
  - [x] LoginForm.jsx（静的フォーム）
  - [x] RegisterForm.jsx（静的フォーム）
  - [ ] UserProfile.jsx（静的ページ）
  - [ ] Navigation.jsx（基本ナビゲーション）
- [x] App.jsx更新（React Routerセットアップ・全ルート追加完了）
- [ ] 静的ページの表示確認

### 2. 認証状態管理とロジック
- [ ] 認証Context作成（AuthContext.jsx）
- [ ] 認証状態の管理（Cookie-based、自動チェック）
- [ ] ログアウト機能実装
- [ ] Protected Routes実装

### 3. API通信層とモック実装
- [ ] API通信サービス作成（authService.js）
- [ ] モックAPI実装（開発用、Cookie想定）
- [ ] フォームとContext連携（モックデータ使用）
- [ ] エラーハンドリング（401 Unauthorized等）
- [ ] 認証フロー動作確認（モック環境）

### 4. バックエンド環境構築
- [x] backend ディレクトリ作成
- [x] package.json 初期化
- [x] 基本依存関係インストール（express, bcrypt, jsonwebtoken, pg, cors, express-rate-limit, helmet）
- [x] 開発用依存関係（nodemon）
- [ ] cookie-parser 追加インストール
- [ ] .env ファイル作成と環境変数設定

### 5. バックエンド基盤構築
- [ ] .env ファイル作成と環境変数設定
- [ ] 基本的なExpressサーバー設定（index.js）
- [ ] CORS設定（credentials: true, origin設定）
- [ ] cookie-parser ミドルウェア設定
- [ ] セキュリティ設定（helmet, rate-limit）
- [ ] サーバー起動確認（Hello World）

### 6. 認証API実装
- [ ] 認証エンドポイント作成（Cookie送信対応）
- [ ] JWT Cookie生成・検証機能（HttpOnly/SameSite）
- [ ] モック認証機能（ユーザー固定データ）
- [ ] フロントエンドとの連携テスト

### 7. データベース統合
- [ ] PostgreSQL 起動・設定
- [ ] データベース接続モジュール作成（DBconnect.js）
- [ ] users テーブル作成
- [ ] 認証機能とDB連携（モック→実DB）

### 8. フロント・バック統合
- [ ] モックAPIから実APIに切り替え
- [ ] Cookie認証フローの動作確認
- [ ] エラーハンドリング改善（認証エラー等）
- [ ] セキュリティテスト（CSRF対策等）
- [ ] 認証状態の永続化テスト

### 9. OAuth実装（将来予定）
- [ ] OAuth用フロントエンドコンポーネント
- [ ] Passport.js設定
- [ ] GitHub OAuth戦略作成
- [ ] Google OAuth戦略作成
- [ ] アカウント連携機能

### 10. UI/UX改善（将来予定）
- [ ] 2段階ログインフロー実装
  - [ ] ランディングページ自動リダイレクト機能
  - [ ] ID入力専用画面（LoginStep1.jsx）
  - [ ] パスワード入力画面（LoginStep2.jsx）
  - [ ] ログイン状態管理（step1 ID保持）
  - [ ] 画面遷移ロジック実装
- [ ] フォームバリデーション強化
  - [ ] ユーザーID長さ制限（最小・最大文字数）
  - [ ] パスワード長さ制限（最小・最大文字数）
  - [ ] パスワード強度チェック（英数字・記号組み合わせ）
  - [ ] リアルタイムバリデーション（入力中チェック）

## 現在の状況
- [x] プロジェクト初期化
- [x] frontend（React + Vite）作成完了
- [x] backend 基本環境構築完了
- [x] README.md 作成完了（Cookie-based JWT設計）
- [x] .gitignore 設定完了
- [x] ドキュメント修正完了（Cookie認証対応）
- [x] フロントエンド基本UI作成完了（Home, Login, Register）
- [x] React Router設定完了（/, /login, /register）

## 次のタスク
- UserProfile.jsx と Navigation.jsx 作成
- 静的ページ表示確認・動作テスト

## メモ
- 学習目的のため段階的に実装
- 各段階でしっかりと動作確認を行う
- OAuth実装前にJWT認証をしっかりと理解する