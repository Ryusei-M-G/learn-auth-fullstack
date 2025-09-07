import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value//[]で囲まないと変数で指定できない
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await login(formData);
    
    if (result.success) {
      console.log('ログイン成功:', result.user);
      navigate('/profile'); // プロフィールページに遷移
    } else {
      console.error('ログイン失敗:', result.error);
      alert(`ログインに失敗しました: ${result.error}`);
    }
  }

  return (
    <div style={{
      maxWidth: '400px', margin: '2rem auto',
      padding: '2rem', border: '1px solid #ddd', borderRadius: '8px'
    }}>
      <h2 style={{
        textAlign: 'center', marginBottom: '2rem'
      }}>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            ユーザー名
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="password" style={{
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            パスワード
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required//入力を必須化する 追加でバリデーションチェック入れたほうがいいかも
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: loading ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'ログイン中...' : 'ログイン'}
        </button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href="/register" style={{
          color: '#007bff',
          textDecoration: 'none'
        }}>
          新規登録
        </a>
      </div>
    </div>
  )
}

export default LoginForm;