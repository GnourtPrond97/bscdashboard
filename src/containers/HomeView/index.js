import React, { Component } from 'react'
import Web3 from 'web3'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { styles }           from './styles.scss'


class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      balance: '',
      chain: ''
    }
  }
  componentWillMount() {
    this.loadBlockchainData()
  }


  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000')
    // let web3 = new Web3("https://ropsten.infura.io/v3/ce8e130db56748dba7af3ebd7fbe4430")

    const accounts = await web3.eth.getAccounts()

    this.setState({ account: accounts[0] })
    const chain = await web3.eth.getChainId()
    this.setState({ chain: chain.toString() })
    const balance = (await web3.eth.getBalance(accounts[0]))


    let numberBalance = balance.slice(0, balance.length - 18).concat('.').concat(balance.slice(balance.length - 18, balance.length))
    while (numberBalance.endsWith('0')) {
      numberBalance = numberBalance.slice(0, numberBalance.length - 1)
    }
    this.setState({ balance: numberBalance })
  }


  render() {
    return (
      <div className={styles}>
        <Jumbotron>

          <Container style={{ fontFamily: "'Dancing Script', cursive" }}>
            <Row>
              <Col>
                <Card style={{ width: '24rem', borderRadius: '10%' }}>
                  <Card.Body>
                    <Card.Title ><h2 >Account info</h2> </Card.Title>
                    <hr />
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      <p>Your account: {this.state.account}</p>
                      <p>Your balance: {this.state.balance}</p>
                      <p>Your chain:  {this.state.chain}</p>
                    </Card.Text>
                    <Button className="rounded-pill" >ok</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '24rem', borderRadius: '10%' }}>
                  <Card.Body>
                    <Card.Title><h2>eShare</h2></Card.Title>
                    <hr />
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      <p>Your account: {this.state.account}</p>
                      <p>Your balance: {this.state.balance}</p>
                      <p>Your chain:  {this.state.chain}</p>
                    </Card.Text>
                    <Button className="rounded-pill">ok</Button>

                  </Card.Body>
                </Card>

              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Card style={{ width: '24rem', borderRadius: '10%' }}>
                  <Card.Body>
                    <Card.Title>
                      <h2>FTX</h2>
                    </Card.Title>
                    <hr />
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      <p>Your account: {this.state.account}</p>
                      <p>Your balance: {this.state.balance}</p>
                      <p>Your chain:  {this.state.chain}</p>
                    </Card.Text>
                    <Button className="rounded-pill">ok </Button>

                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '24rem', borderRadius: '10%' }}>
                  <Card.Body>
                    <Card.Title><h2>USDT</h2></Card.Title>
                    <hr />
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      <p>Your account: {this.state.account}</p>
                      <p>Your balance: {this.state.balance}</p>
                      <p>Your chain:  {this.state.chain}</p>
                    </Card.Text>
                    <Button className="rounded-pill">ok</Button>

                  </Card.Body>
                </Card>

              </Col>
            </Row>
          </Container>


        </Jumbotron>

      </div>

    )
  }
}

export default HomeView
