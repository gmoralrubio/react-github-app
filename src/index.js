import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GithubProvider } from './context/GithubContext'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-41bdj-s3.us.auth0.com
// CmPlzWPohr2w5Z9uCvHJNlgLc6lbU6zK

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={'dev-41bdj-s3.us.auth0.com'}
      clientId={'CmPlzWPohr2w5Z9uCvHJNlgLc6lbU6zK'}
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
)
