import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Label
} from "reactstrap"
import fgImg from "../../../assets/img/pages/forgot-password.png"
import { changePassword } from "../../../redux/actions/register"
import { connect } from "react-redux"
import "../../../assets/scss/pages/authentication.scss"

class ChangePassword extends React.Component {
  constructor(props){
    super(props);
    this.state={
      newPassword: "",
      confirmPassword: "",
      passwordMismatch: false
    }
  }

  changePasswordFun=async()=>{
    if(this.state.newPassword == this.state.confirmPassword){
    let obj={
      "password": this.state.newPassword,
      "adminId": localStorage.getItem('adminId'),
      "token": localStorage.getItem('token')
    }
    await this.props.changePassword(obj)
  }
    else{
        this.setState({
          passwordMismatch: true
        })
      }
  }

  render() {
    return (
      <Row className="m-0 justify-content-center" style={{paddingTop:"10rem"}}>
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center"
              >
                <img src={fgImg} alt="fgImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 py-1">
                  <CardHeader className="pb-1">
                    <CardTitle>
                      <h4 className="mb-0">Change your password</h4>
                    </CardTitle>
                  </CardHeader>
                  <p className="px-2 auth-title">
                    Please enter your new password.
                  </p>
                  <CardBody className="pt-1 pb-0">
                    <Form>
                      <FormGroup className="form-label-group">
                        <Input type="text" placeholder="Password" onChange={e=>this.setState({newPassword: e.target.value})} required />
                        <Label>Password</Label>
                      </FormGroup>
                      <FormGroup className="form-label-group">
                        <Input type="text" placeholder="Confirm Password" onChange={e=>this.setState({confirmPassword: e.target.value})} required />
                        <Label>Confirm Password</Label>
                        {
                      // this.passwordMismatch?
                       <span style={{color: "red", display: this.state.passwordMismatch == true?"block": "none"}}>Password Mismatch</span>
                        // :""
                      }
                      </FormGroup>
                     
                      <div className="float-md-right d-block mb-1">
                        <Button.Ripple
                          color="primary"
                          className="px-75 btn-block"
                          onClick={this.changePasswordFun}
                          disabled={this.state.newPassword == "" || this.state.confirmPassword == "" ? true: false}
                        >
                          Change Password
                        </Button.Ripple>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  changePassword
})(ChangePassword)