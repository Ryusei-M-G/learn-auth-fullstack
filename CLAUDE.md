# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

### Backend (Express.js) - 実装後
```bash
cd backend
npm run dev      # nodemonで開発サーバー起動
npm start        # 本番サーバー起動
```

## アーキテクチャと開発フロー

### 段階的実装アプローチ
8段階の開発計画に従う（`progress.md`で進捗管理）：

1. **環境構築** - backendディレクトリと依存関係
2. **データベース設定** - PostgreSQL接続とusersテーブル
3. **Express基盤** - 基本サーバー、CORS、セキュリティミドルウェア
4. **JWT認証システム** - ユーザー登録・ログイン機能
5. **フロントエンド統合** - React認証コンポーネントとContext
6. **認証機能統合** - Protected Routesと状態永続化
7. **OAuth実装** - GitHub/Google OAuth（Passport.js使用）
8. **高度な機能** - 二要素認証、リフレッシュトークン、セッション管理

### 重要なアーキテクチャ決定
- **バックエンド構造**: フラットディレクトリ構造（`src/`なし）、controllers・middleware・models・routesで分割
- **データベース**: `DBconnect.js`経由の直接PostgreSQL接続（ORM未使用）
- **認証戦略**: API認証にJWT使用、将来的にOAuth 2.0統合予定
- **フロントエンド状態**: React Contextで認証状態管理
- **API通信**: Axiosベースのサービス層

### 重要ファイルとその役割
- `progress.md` - 開発ロードマップと進捗管理
- `DBconnect.js` - データベース操作とパスワードハッシュ化
- `frontend/src/context/AuthContext.jsx` - 認証状態管理
- `frontend/src/services/authService.js` - API通信層

### 開発上の注意点
- `.env`ファイルは学習目的で意図的にgitignore対象外
- OAuth機能は「（予定）」マーク付きで将来実装予定
- OAuth実装前にJWT認証の理解を重視
- 各開発段階で十分なテストを実施してから次へ進む

### 進捗管理
開発進捗があった場合は、以下の手順で進捗を記録する：
1. `README.md`と`progress.md`の内容を参照
2. 両ファイル間に矛盾がないよう`progress.md`を更新
3. 完了したタスクにチェックマークを付与
4. 新たに発見されたタスクがあれば適切な段階に追加
5. 現在の状況セクションを最新状態に更新