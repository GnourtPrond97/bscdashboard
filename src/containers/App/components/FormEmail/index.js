import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Form  from '../../../../../src/components/Form/Form'
import Input from '../../../../../src/components/Form/Input'
import Label from '../../../../../src/components/Form/Label'

// function mapStateToProps(state) {
//   return {}
// }

class FormEmail extends Component {
  render() {
    return (
      <div>
        <Form >
          <Label text="Nhap email" />


          <Input type="email" />
        </Form>
      </div>
    )
  }
}

export default FormEmail
