import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {
  HashRouter,
  Route,

  Switch
} from 'react-router-dom'
import {} from 'react-router'
import Row from 'react-bootstrap/Row'

import theme from 'configs/theme/config-theme'
import HomeView from 'containers/HomeView'
import Header from './components/Header'
import Footer from './components/Footer'


import './styles.scss'
import LeftMenu from './components/LeftMenu'
import Form from './components/FormEmail' // global styles

class App extends Component {
  render() {
    return (
      <>


        <MuiThemeProvider theme={theme}>
          <HashRouter>
            <div>


              <Header />


              <Footer />

              <Row>
                <div className="col-3">
                  <LeftMenu />

                </div>
                <div className=" app-shell col-9">
                  <Switch>
                    <Route path="/ref=:id" component={HomeView} />
                    <Route path="/" component={HomeView} />
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
}
export default App
