import { useState } from 'react'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value//[]で囲まないと変数で指定できない
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();//リロードされないように
    //とりあえずconsole.log
    console.log('ログイン試行:', formData);
    alert(`ログイン試行\nユーザー名: ${formData.username}\nパスワード: ${formData.password}`);

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

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          ログイン
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