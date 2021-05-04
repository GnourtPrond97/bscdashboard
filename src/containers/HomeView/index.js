import React, { Component } from 'react'
import Web3 from 'web3'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '24rem' }}>
                <Card.Body>
                  <Card.Title >Account info </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    <p>Your account: {this.state.account}</p>
                    <p>Your balance: {this.state.balance}</p>
                    <p>Your chain:  {this.state.chain}</p>
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>

                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '24rem' }}>
                <Card.Body>
                  <Card.Title>eShare</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    <p>Your account: {this.state.account}</p>
                    <p>Your balance: {this.state.balance}</p>
                    <p>Your chain:  {this.state.chain}</p>
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>

                </Card.Body>
              </Card>

            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Card style={{ width: '24rem' }}>
                <Card.Body>
                  <Card.Title>FTX </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    <p>Your account: {this.state.account}</p>
                    <p>Your balance: {this.state.balance}</p>
                    <p>Your chain:  {this.state.chain}</p>
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>

                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '24rem' }}>
                <Card.Body>
                  <Card.Title>USDT</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    <p>Your account: {this.state.account}</p>
                    <p>Your balance: {this.state.balance}</p>
                    <p>Your chain:  {this.state.chain}</p>
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>

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
