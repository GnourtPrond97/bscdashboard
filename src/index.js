import React          from 'react'
import ReactDOM       from 'react-dom'
import { Provider }   from 'react-redux'
import configureStore from 'core/store/configureStore'
import App            from 'containers/App'
import { CookiesProvider } from 'react-cookie'


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />

    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
)
