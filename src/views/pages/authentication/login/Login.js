import React from "react"
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap"
import { Mail, Lock, Check } from "react-feather"
import { history } from "../../../../history"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
//import googleSvg from "../../../../assets/img/svg/google.svg"
import {loginData} from "../../../../redux/actions/login"
import { connect } from "react-redux"
import loginImg from "../../../../assets/img/pages/login.png"
import "../../../../assets/scss/pages/authentication.scss"


class Login extends React.Component {
  state = {
    activeTab: "1",
    email : "",
    password: ""
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  login = obj =>{
    console.log(obj)

    let fetchdata={
      email:obj.email,
        password: obj.password,
        admin_type:"super"
    }
      if(!this.state.email){
        this.setState({
          emailerror:"please fill the valid email."
        })
      }
      else if(!this.state.password){
            this.setState({
              passworderror:"please fill the password"
            })
      }
      else {
        this.props.loginData(fetchdata)
      }
  }

  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                <img src={loginImg} alt="loginImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2">
                      <CardBody style={{padding: "1.5rem 1.5rem 6.5rem 1.5rem"}}>
                        <h4>Login</h4>
                        <p>Welcome back, please login to your account.</p>
                        <Form onSubmit={e => e.preventDefault()}>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={e => this.setState({ email: e.target.value })}
                            />
                            <div className="form-control-position">
                              <Mail size={15} />
                            </div>
                            <Label>Email</Label>
                          </FormGroup>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="password"
                              placeholder="Password"
                              value={this.state.password}
                              onChange={e => this.setState({ password: e.target.value })}
                            />
                            <div className="form-control-position">
                              <Lock size={15} />
                            </div>
                            <Label>Password</Label>
                          </FormGroup>
                          <FormGroup className="d-flex justify-content-between align-items-center">
                            <Checkbox
                              color="primary"
                              icon={<Check className="vx-icon" size={16} />}
                              label="Remember me"
                            />
                            <div className="float-right">
                              Forgot Password?
                            </div>
                          </FormGroup>
                          <div className="d-flex justify-content-between">
                            {/* <Button.Ripple onClick={() => history.push("/register")} color="primary" outline>
                             Register                           
                            </Button.Ripple> */}
                            {/* <Button.Ripple color="primary" type="submit" onClick={() => history.push("/")}>
                                Login 
                            </Button.Ripple> */}
                            <Button.Ripple color="primary" type="submit" onClick={() => this.login(this.state)}>
                                Login 
                            </Button.Ripple>
                          </div>
                        </Form>
                      </CardBody>
                      {/* <div className="auth-footer">
                        <div className="divider">
                          <div className="divider-text">OR</div>
                        </div>
                        <div className="footer-btn">
                          <Button.Ripple className="btn-facebook" color="">
                            <Facebook size={14} />
                          </Button.Ripple>
                          <Button.Ripple className="btn-twitter" color="">
                            <Twitter size={14} stroke="white" />
                          </Button.Ripple>
                          <Button.Ripple className="btn-google" color="">
                            <img src={googleSvg} alt="google" height="15" width="15" />
                          </Button.Ripple>
                          <Button.Ripple className="btn-github" color="">
                            <GitHub size={14} stroke="white" />
                          </Button.Ripple>
                        </div>
                      </div> */}
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
  console.log(state)
  return {
  }
}

export default connect(mapStateToProps, {
    loginData
})(Login)

