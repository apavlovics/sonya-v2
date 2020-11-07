import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Load i18next instance for translations to work
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
