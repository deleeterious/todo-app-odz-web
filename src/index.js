import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { Provider } from 'react-redux'
import { store } from './redux/store'
// components
import App from './App'
// css
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
