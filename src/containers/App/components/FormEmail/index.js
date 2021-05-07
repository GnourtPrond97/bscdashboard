import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Form  from '../../../../../src/components/Form/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from '../../../../../src/components/Form/Input'
import Label from '../../../../../src/components/Form/Label'
import Button from '../../../../../src/components/Button/index'

import StandardModal from '../../../../components/Modals/StandardModal'


// function mapStateToProps(state) {
//   return {}
// }

class FormEmail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false

    }
    this.enterVerifycodeHandel = this.enterVerifycodeHandel.bind(this)
  }


  enterVerifycodeHandel() {
    this.setState({ modalOpen: true })
  }

  // handelSubmitEmail() {
  //   enterVerifycodeHandel()
  // }
  // handelSubmitVerifycodeHandel() {
  //
  // }

  render() {
    return (
      <Jumbotron>
        <Row>
          <Col className="col-3" />

          <Col>
            <form onSubmit={this.handelSubmitEmail}>

              <Label text="Enter your email to verify" />


              <Input type="email" />
              <Button type="submit">ok</Button>
              <Button onClick={this.enterVerifycodeHandel}>Send verify code</Button>
            </form>

          </Col>
          <Col className="col-3" />


        </Row>

        <StandardModal title="Check you email to get code" open={this.state.modalOpen} modalKey="" >
          <Jumbotron>
            <form onSubmit={this.enterVerifycodeHandel}>
              <Label text="Verify code" />
              <Input type="text" />

              <Button type="submit">ok</Button>
              <Button onClick={onclose}>close</Button>


            </form>
          </Jumbotron>


        </StandardModal>

      </Jumbotron>
    )
  }
}

export default FormEmail
