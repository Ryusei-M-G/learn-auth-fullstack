import { useState } from "react";

const UserProfile = () => {
  //仮配置
  const [userInfo] = useState({
    username: "sample user",
    email: "sample@example.com",
    joinDate: "2025-01-01",
    lastLogin: "2024-12-06T10:30:00",
  });

  const handleLogout = () => {
    //ログアウト機能は後で実装予定
    console.log("ログアウト");
  };
  const handleEditProfile = () => {
    console.log("プロフィール編集");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#333",
        }}
      >
        ユーザープロフィール
      </h2>

      {/* ユーザー情報表示 */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#555",
            }}
          >
            ユーザー名
          </label>
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            {userInfo.username}
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#555",
            }}
          >
            メールアドレス
          </label>
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            {userInfo.email}
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#555",
            }}
          >
            登録日
          </label>
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            {userInfo.joinDate}
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#555",
            }}
          >
            最終ログイン
          </label>
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            {new Date(userInfo.lastLogin).toLocaleString("ja-JP")}
          </div>
        </div>
      </div>

      {/* アクションボタン */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleEditProfile}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
            minWidth: "120px",
          }}
        >
          プロフィール編集
        </button>

        <button
          onClick={handleLogout}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
            minWidth: "120px",
          }}
        >
          ログアウト
        </button>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
        }}
      >
        <a
          href="/"
          style={{
            color: "#007bff",
            textDecoration: "none",
          }}
        >
          ホームに戻る
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
