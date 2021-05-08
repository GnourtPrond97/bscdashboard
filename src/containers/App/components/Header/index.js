import React, { Component } from 'react'
import axios from 'axios'
import PropTypes            from 'prop-types'
import { withRouter }       from 'react-router-dom'
import { Button } from 'react-bootstrap'


import AppBar               from 'components/AppBar'
import Typography           from 'components/Typography'
import Toolbar              from '@material-ui/core/Toolbar'
// import IconButton           from '@material-ui/core/IconButton'
import Menu                 from '@material-ui/core/Menu'
import MenuItem             from '@material-ui/core/MenuItem'
// import AccountCircle        from '@material-ui/icons/AccountCircle'
import { appConfig }        from 'configs/config-main'
import { styles }           from './styles.scss'


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null
    }
  }


  getMenu() {
    const { anchorEl } = this.state

    return (
      <div>

        {/* <IconButton */}
        {/*  aria-haspopup="true" */}
        {/*  color="inherit" */}
        {/*  className="dropdown" */}
        {/*  aria-owns={anchorEl ? 'simple-menu' : null} */}
        {/*  onClick={this.handleClick} */}
        {/* > */}
        {/*   <AccountCircle /> */}

        {/* </IconButton> */}
        <Button className="btn-outline-light rounded-pill" onClick={this.handleConnect}>Connect</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
        >
          <MenuItem data-link="account" onClick={this.goTo}>Option 1</MenuItem>
          <MenuItem data-link="settings" onClick={this.goTo}> Option 2</MenuItem>
        </Menu>
      </div>
    )
  }
  handleConnect= async (e) => {
    e.preventDefault()

    axios.post('https://jsonplaceholder.typicode.com/users', { address: '0xa6A5D58Fc55E9615eC2FdE9FDd85d3cE1D9406aa', sponsor: '' })
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
  }

  goTo = (evt) => {
    const { history } = this.props
    const { link } = evt.currentTarget.dataset

    history.push(link)
    this.close()
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  close = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const menu = this.getMenu()

    return (
      <div className={styles}>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit">
              {appConfig.name}
            </Typography>
            <div className="dropdown">{menu}</div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.string.isRequired
  }).isRequired
}

export default withRouter(Header)
