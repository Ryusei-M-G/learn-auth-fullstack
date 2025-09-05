const Home = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Learn Auth Fullstack</h1>
      <p>JWTとOAuth2.0を使用した認証でもアプリケーション</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>機能</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>ユーザー登録・ログイン</li>
          <li>JWT認証</li>
          <li>OAuth 2.0（予定）</li>
          <li>二要素認証（予定）</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href="/login" style={{
          margin: '0 1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          ログイン
        </a>
        <a href="/refister" style={{
            margin: '0 1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            新規登録
          </a>
      </div>
    </div>
  )
}

export default Home;