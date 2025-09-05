import { useState } from 'react'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();//ローディング停止
    if (formData.password !== formData.confirmPassword) {
      alert('パスワードが一致しません');
      return;
    }

    console.log('ユーザー登録試行:', {
      username: formData.username,
      password: formData.password,
    });
    alert(formData.username);
  };

  return (
    <div style={{
      maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>新規登録</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{
            display: 'block', marginBottom: '0.5rem'
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

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{
            display: 'block', marginBottom: '0.5rem'
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

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="confirmPassword"
            style={{
              display: 'block', marginBottom: '0.5rem'
            }}>
            パスワード確認
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
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
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          登録
        </button>
      </form>

      <div style ={{
        textAlign: 'center',
        marginTop: '1rem'
      }}>
        <a href="/login" style={{color: '#007bff', textDecoration:'none'}}>
        すでにアカウントをお持ちの方はこちら
        </a>
      </div>


    </div>
  )
}


export default RegisterForm;