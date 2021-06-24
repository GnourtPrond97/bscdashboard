import React, { Component } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import PropTypes            from 'prop-types'
// import { useCookies } from 'react-cookie'
import Web3 from 'web3'
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


function GetId() {
  // const  location   = useLocation()
  // console.log(location)
  // const history = useHistory()
  const params = useParams()
  // console.log(params)
  // const [currentId, setCurrentId] = useState(`${params.id != null ? params.id : ''}`)
  return (
    <p>
      {params.id}
    </p>
  )
}

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
        <GetId />
        <Button className="btn-outline-light rounded-pill" onClick={this.handleConnect}> Connect  </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
        >
          <MenuItem data-link="account" onClick={this.goTo}>Option 1 </MenuItem>
          <MenuItem data-link="settings" onClick={this.goTo}> Option 2</MenuItem>
        </Menu>
      </div>
    )
  }
  // async saveCookie(){
  //   const params = useParams();
  //   const [cookies, setCookie, removeCookie] = useCookies(['address']);
  //   setCookie('address',params.id)
  //   console.log("cookie header :" + cookies.address)
  // }

  handleConnect= async (e) => {
    e.preventDefault()
    this.props.setWeb3(new Web3(Web3.givenProvider || 'http://localhost:3000'))
    // let web3 = new Web3("https://ropsten.infura.io/v3/ce8e130db56748dba7af3ebd7fbe4430")
    // this.saveCookie()

    const accounts = await this.props.web3.eth.getAccounts()
    console.log(accounts[0])
    // this.props.setCookie('address',accounts[0])
    this.props.setCookie('address', accounts[0])
    // console.log("cookie :" + this.props.cookies.address)
    axios.post('https://jsonplaceholder.typicode.com/users', { address: '0xa6A5D58Fc55E9615eC2FdE9FDd85d3cE1D9406aa', sponsor: accounts[0] })
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
    this.props.setConnect(true)
  }


  // goTo = (evt) => {
  //   const { history } = this.props
  //   const { link } = evt.currentTarget.dataset
  //
  //   history.push(link)
  //   this.close()
  // }

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

// Header.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.string.isRequired
//   }).isRequired
// }

export default Header
