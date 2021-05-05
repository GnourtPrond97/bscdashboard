import React, { Component } from 'react'
import Web3 from 'web3'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


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
                  <Card.Title><h2>FTX</h2></Card.Title>
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

    )
  }
}

export default HomeView
