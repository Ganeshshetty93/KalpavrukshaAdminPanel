import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import Select from "react-select"
import { connect } from "react-redux"
import PhoneInput from 'react-phone-input-2'
import {registerData} from "../../../../redux/actions/register"
import { history } from "../../../../history"
import 'react-phone-input-2/lib/style.css'


class RegisterJWT extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    mobile: "",
    confirmPass: "",
    admin_type: ""
  }

  handleRegister = e => {
    e.preventDefault()
    let obj={
      "email": this.state.email,
      "name": this.state.name,
      "password": this.state.password,
      "confirmPassword": this.state.confirmPass,
      "mobile": this.state.mobile,
      "admin_type": this.state.admin_type
    }
    console.log(obj)
    // this.props.registerData(obj)
  }

  

  render() {
    var errorMessageStyle={
      color:"red",
   }
    return (
      <Form action="/" onSubmit={this.handleRegister}>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Name"
            required
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Label>Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
         <FormGroup className="form-label-group">
         <FormGroup>
            {/* <Label>Mobile number</Label> */}
              <PhoneInput
                country={'in'}
                // placeholder="Mobile number"
                countryCodeEditable={false}
                value={this.state.mob}
                enableSearch={true}
                disableSearchIcon={true}
                onChange={mob => this.setState({ mob, errorMobile: ""})}
              />
            <span style={errorMessageStyle}>
              {this.state.errorMobile}
            </span>
          </FormGroup>
          <Label>Mobile</Label>
        </FormGroup> 
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            value={this.state.confirmPass}
            onChange={e => this.setState({ confirmPass: e.target.value })}
          />
          <Label>Confirm Password</Label>
        </FormGroup>
        <FormGroup className="admin-type">
        < Input
        type = "select"
        required
        value = {
          this.state.admin_type
        }
        onChange = {
            e => this.setState({
              admin_type: e.target.value
            })
          }>
          <option value = "" style={{display: "none"}}>Select Admin Type</option>
          <option value = "super"> Super </option> 
          <option value = "area_manager"> Area Manager </option> 
          <option value = "warehouse"> Warehouse Admin </option>
          </Input>
        </FormGroup>
        {/* <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            defaultChecked={true}
          />
        </FormGroup> */}
        <div className="d-flex justify-content-between">
          
          <Button.Ripple color="primary" type="submit">
            Register
          </Button.Ripple>
        </div>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return {
  }
}
export default connect(mapStateToProps, { 
  registerData
 })(RegisterJWT)
