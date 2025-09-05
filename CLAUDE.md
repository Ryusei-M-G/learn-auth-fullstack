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

### 段階的実装アプローチ（フロントエンド重視）
8段階の開発計画に従う（`progress.md`で進捗管理）：

1. **フロントエンド認証UI** - 認証Context、登録・ログインフォーム（モック使用）
2. **フロントエンド状態管理・ルーティング** - React Router、Protected Routes、永続化
3. **API通信層** - authService、モックAPI、Axios設定
4. **バックエンド環境構築** - Express依存関係、npm scripts（完了済み）
5. **Express サーバー・認証API** - サーバー設定、JWT認証エンドポイント
6. **データベース統合** - PostgreSQL、DBconnect.js、usersテーブル
7. **フロント・バック統合** - モック→実API切り替え、エラーハンドリング
8. **OAuth実装** - GitHub/Google OAuth（Passport.js使用）

### 重要なアーキテクチャ決定
- **バックエンド構造**: フラットディレクトリ構造（`src/`なし）、controllers・middleware・models・routesで分割
- **データベース**: `DBconnect.js`経由の直接PostgreSQL接続（ORM未使用）
- **認証戦略**: API認証にJWT使用、将来的にOAuth 2.0統合予定
- **フロントエンド状態**: React Contextで認証状態管理
- **API通信**: Axiosベースのサービス層

### 重要ファイルとその役割
- `progress.md` - 開発ロードマップと進捗管理
- `frontend/src/context/AuthContext.jsx` - 認証状態管理
- `frontend/src/services/authService.js` - API通信層
- `backend/DBconnect.js` - データベース操作とパスワードハッシュ化（将来実装）

### サポートとガイダンス方針
Claude Codeは実装指導役として以下を提供する：
- **実装手順の詳細説明** - ステップバイステップガイド
- **ベストプラクティス提案** - React/Express/認証のセキュリティパターン
- **アーキテクチャ設計相談** - コンポーネント設計、状態管理、API設計
- **トラブルシューティング** - エラー解決方法、デバッグ手法
- **学習リソース紹介** - 関連ドキュメント、参考資料

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