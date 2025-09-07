import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Navigation = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav style={{
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd',
      marginBottom: '2rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap'
      }}>
        <Link 
          to="/" 
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#333',
            textDecoration: 'none',
            marginBottom: '0.5rem'
          }}
        >
          Learn Auth Fullstack
        </Link>

        {/* ナビゲーションリンク */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Link 
            to="/"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              padding: '0.5rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
          >
            ホーム
          </Link>
          
          {!isAuthenticated ? (
            <>
              <Link 
                to="/login"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  padding: '0.5rem',
                  borderRadius: '4px'
                }}
              >
                ログイン
              </Link>
              
              <Link 
                to="/register"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  padding: '0.5rem',
                  borderRadius: '4px'
                }}
              >
                新規登録
              </Link>
            </>
          ) : (
            <>
              <span style={{
                color: '#333',
                padding: '0.5rem',
                fontSize: '0.9rem'
              }}>
                こんにちは、{user?.username}さん
              </span>
              
              <Link 
                to="/profile"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  padding: '0.5rem',
                  borderRadius: '4px'
                }}
              >
                プロフィール
              </Link>
              
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                ログアウト
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation;