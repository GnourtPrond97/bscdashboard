import React, {  useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {
  HashRouter,
  Route,

  Switch
} from 'react-router-dom'
import {} from 'react-router'
import Row from 'react-bootstrap/Row'
import { useCookies } from 'react-cookie'

import theme from 'configs/theme/config-theme'
import HomeView from 'containers/HomeView'
import Header from './components/Header'
import Footer from './components/Footer'


import './styles.scss'
import LeftMenu from './components/LeftMenu'
import Form from './components/FormEmail'
// import Web3 from 'web3' // global styles

function App() {
  const [cookies, setCookie] = useCookies()
  // const [cookies, setCookie, removeCookie] = useCookies()
  // setCookie('address',"test")
  // console.log("cookie :" + cookies.address)
  const [web3, setWeb3] = useState({})


  const [connect, setConnect] = useState(false)


  return (
    <>


      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <div>
            <Header
              setWeb3={setWeb3}
              web3={web3}
              setCookie={setCookie}
              cookies={cookies}
              setConnect={setConnect}
            />
            <Footer />
            <Row>
              <div className="col-3">
                <LeftMenu />

              </div>
              <div className=" app-shell col-9">
                <Switch>
                  <Route path="/ref=:id" component={connect === true ? HomeView : null} />
                  <Route path="/" component={connect === true ? HomeView : null} />
                  <Route path="/form" component={Form} />
                  {/* <Redirect from="/" to="/home" /> */}
                </Switch>
              </div>

            </Row>


          </div>
        </HashRouter>
      </MuiThemeProvider>

    </>
  )
}
export default App
