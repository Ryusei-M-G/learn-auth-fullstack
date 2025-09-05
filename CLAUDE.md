# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 実装指針
**重要**: 実際のコード実装はユーザーが行う。Claude Codeの役割は以下の通り：
- 実装手順や手法の説明・提案
- ベストプラクティスの共有
- アーキテクチャ設計のアドバイス
- 進捗管理とドキュメント更新
- **ユーザーから明示的な指示がない限りコードの変更・作成は行わない**

## プロジェクト概要

JWTとOAuth 2.0を使用した学習目的のフルスタック認証システム。基本的なJWT認証から始めて、OAuth統合へと段階的に開発を進める。

## 開発コマンド

### Frontend (React + Vite)
```bash
cd frontend
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run lint     # ESLint実行
npm run preview  # 本番ビルドプレビュー
```

### Backend (Express.js)
```bash
cd backend
npm run dev      # nodemonで開発サーバー起動
npm start        # 本番サーバー起動
```

## アーキテクチャと開発フロー

### 段階的実装アプローチ（UI重視・段階的構築）
9段階の開発計画に従う（`progress.md`で進捗管理）：

1. **フロントエンド基本UI** - 静的ページコンポーネント、基本ルーティング
2. **認証状態管理とロジック** - AuthContext、Protected Routes、認証ロジック
3. **API通信層とモック** - authService、モックAPI、フォーム連携
4. **バックエンド環境構築** - Express依存関係、cookie-parser、環境変数
5. **バックエンド基盤構築** - サーバー設定、CORS・Cookie設定、基本確認
6. **認証API実装** - JWT Cookie認証エンドポイント、モック認証
7. **データベース統合** - PostgreSQL、DBconnect.js、実DB連携
8. **フロント・バック統合** - 実API切り替え、認証フロー確認
9. **OAuth実装** - GitHub/Google OAuth（Passport.js使用）

### 重要なアーキテクチャ決定
- **バックエンド構造**: フラットディレクトリ構造（`src/`なし）、controllers・middleware・models・routesで分割
- **データベース**: `DBconnect.js`経由の直接PostgreSQL接続（ORM未使用）
- **認証戦略**: JWTをHttpOnly Cookieで送信、将来的にOAuth 2.0統合予定
- **フロントエンド状態**: React Contextで認証状態管理（localStorageは不使用）
- **API通信**: Axiosベースのサービス層（withCredentials対応）

### 重要ファイルとその役割
- `progress.md` - 開発ロードマップと進捗管理
- `frontend/src/pages/Home.jsx` - ランディングページ
- `frontend/src/components/Auth/LoginForm.jsx` - ログインフォーム
- `frontend/src/components/Auth/RegisterForm.jsx` - 登録フォーム  
- `frontend/src/components/User/UserProfile.jsx` - ユーザープロフィール
- `frontend/src/components/common/Navigation.jsx` - ナビゲーション
- `frontend/src/context/AuthContext.jsx` - 認証状態管理（予定）
- `frontend/src/services/authService.js` - API通信層（予定）
- `backend/DBconnect.js` - データベース操作とパスワードハッシュ化（将来実装）

### サポートとガイダンス方針
Claude Codeは実装指導役として以下を提供する：
- **Cookie認証実装ガイド** - HttpOnly Cookie設定、CORS対応、セキュリティ考慮
- **React認証パターン** - Context設計、Protected Routes、状態管理
- **Express Cookie設定** - cookie-parser、認証ミドルウェア、JWT Cookie処理
- **セキュリティベストプラクティス** - XSS/CSRF対策、SameSite設定
- **トラブルシューティング** - Cookie送信問題、認証エラー解決

### 進捗管理
開発進捗があった場合は、以下の手順で記録する：
1. `progress.md`のチェックボックス更新
2. 新しいタスクや課題の追加
3. 現在の状況セクション更新
4. README.mdとの整合性確認

### 学習重視の設計方針
- `.env`ファイルは学習目的で意図的にgitignore対象外
- フロントエンド→バックエンドの順で視覚的フィードバック重視
- モックデータから実装への段階的移行
- 各段階での理解確認を重視