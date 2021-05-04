import React, { Component } from 'react'
import Web3 from 'web3'
// import 'bootstrap/dist/css/bootstrap.min.css'

class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = { account: '' }
    this.state = { balance: '' }
    this.state = { chain: '' }
  }
  componentWillMount() {
    this.loadBlockchainData()
  }


  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000')
    // let web3 = new Web3("https://ropsten.infura.io/v3/ce8e130db56748dba7af3ebd7fbe4430")

    const accounts = await web3.eth.getAccounts()

    this.setState({ account: accounts[0] })
    const balance = await web3.eth.getBalance(accounts[0])

    this.setState({ balance })
    const chain = await web3.eth.getChainId()
    this.setState({ chain: chain.toString() })
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card">
            <h1>hello world</h1>
            <div className="card-body">
              Welcome to React DApp Boilerplate!
              <p>Your account: {this.state.account}</p>
              <p>Your balance: {this.state.balance}</p>
              <p>Your chain:  {this.state.chain}</p>
            </div>

          </div>
          <div className="card">
            <h1>hello world</h1>
            Welcome to React DApp Boilerplate!
            <p>Your account: {this.state.account}</p>
            <p>Your balance: {this.state.balance}</p>
            <p>Your chain:  {this.state.chain}</p>

          </div>

        </div>


      </div>
    )
  }
}

export default HomeView
