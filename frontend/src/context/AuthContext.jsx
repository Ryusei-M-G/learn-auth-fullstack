import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  //認証状態
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  //初期化時の状態チェック
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        //モック
        console.log("認証状態チェック");
        
        // 認証状態確認のモック処理
        // 将来的にはCookie-based認証APIを呼び出し
        
        setLoading(false);
      } catch (err) {
        console.error("認証チェックエラー", err);
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  //ログイン（モック）
  const login = async (credentials) => {
    try {
      setLoading(true);
      console.log("ログイン試行", credentials);

      //将来的にはAPI呼び出し

      const mockUser = {
        id: 1,
        username: credentials.username,
        email: `${credentials.username}@example.com`,
        joinDate: new Date().toISOString().split("T")[0],
        lastLogin: new Date().toISOString(),
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      console.log("ログイン成功（モック）");

      return { success: true, user: mockUser };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  //新規登録関数（モック）
  const register = async (userData) => {
    try {
      setLoading(true);
      console.log("新規登録試行:", userData);

      //将来的にAPI呼び出し

      // モック実装：成功を仮定
      const mockUser = {
        id: Date.now(), // 仮のID
        username: userData.username,
        email: userData.email,
        joinDate: new Date().toISOString().split("T")[0],
        lastLogin: new Date().toISOString(),
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      console.log("登録成功（モック）");

      return { success: true, user: mockUser };
    } catch (error) {
      console.error("登録エラー:", error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // ログアウト関数（モック実装）
  const logout = async () => {
    try {
      setLoading(true);
      console.log("ログアウト実行");

      // 将来的にはAPI呼び出し: POST /api/auth/logout
      // Cookieクリア処理

      setUser(null);
      setIsAuthenticated(false);
      console.log("ログアウト完了（モック）");

      return { success: true };
    } catch (error) {
      console.error("ログアウトエラー:", error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Contextの値
  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// useAuthカスタムフック
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
