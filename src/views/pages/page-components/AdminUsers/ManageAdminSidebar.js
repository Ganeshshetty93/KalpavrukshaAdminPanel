import React, { Component } from "react"
// import { Label, Input, FormGroup, Button } from "reactstrap"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import Select from "react-select"
import { connect } from "react-redux"
import PhoneInput from 'react-phone-input-2'
import { X } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import classnames from "classnames"

class ManageAdminSidebar extends Component {
  state = {
    id: "",
    name: "",
    category: "Audio",
    order_status: "pending",
    price: "",
    img: "",
    popularity: {
      popValue: ""
    },
   
        email: "",
        password: "",
        name: "",
        mobile: "",
        confirmPass: "",
        admin_type: ""
      
  }

  addNew = false

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({ id: this.props.data.id })
      }
      if (this.props.data.name !== prevState.name) {
        this.setState({ name: this.props.data.name })
      }
      if (this.props.data.category !== prevState.category) {
        this.setState({ category: this.props.data.category })
      }
      if (this.props.data.popularity.popValue !== prevState.popularity) {
        this.setState({
          popularity: {
            ...this.state.popularity,
            popValue: this.props.data.popularity.popValue
          }
        })
      }
      if (this.props.data.order_status !== prevState.order_status) {
        this.setState({ order_status: this.props.data.order_status })
      }
      if (this.props.data.price !== prevState.price) {
        this.setState({ price: this.props.data.price })
      }
      if (this.props.data.img !== prevState.img) {
        this.setState({ img: this.props.data.img })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: "",
        name: "",
        category: "Audio",
        order_status: "pending",
        price: "",
        img: "",
        popularity: {
          popValue: ""
        }
      })
    }
    if (this.addNew) {
      this.setState({
        id: "",
        name: "",
        category: "Audio",
        order_status: "pending",
        price: "",
        img: "",
        popularity: {
          popValue: ""
        }
      })
    }
    this.addNew = false
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
  handleSubmit = obj => {
    if (this.props.data !== null) {
      this.props.updateData(obj)
    } else {
      this.addNew = true
      this.props.addData(obj)
    }
    let params = Object.keys(this.props.dataParams).length
      ? this.props.dataParams
      : { page: 1, perPage: 4 }
    this.props.handleSidebar(false, true)
    this.props.getData(params)
  }

  render() {
    var errorMessageStyle={
        color:"red",
     }
    let { show, handleSidebar, data } = this.props
    let { name, category, order_status, price, popularity, img } = this.state
    return (
      <div
        className={classnames("data-list-sidebar", {
          show: show
        })}>
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          <h4>{data !== null ? "UPDATE DATA" : "ADD NEW DATA"}</h4>
          <X size={20} onClick={() => handleSidebar(false, true)} />
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{ wheelPropagation: false }}>
         
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
          
            <div className="d-flex justify-content-between">
              
              <Button.Ripple color="primary" type="submit">
                Register
              </Button.Ripple>
            </div>
           
        </PerfectScrollbar>
        <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
          <Button color="primary" onClick={() => this.handleSubmit(this.state)}>
            {data !== null ? "Update" : "Submit"}
          </Button>
          <Button
            className="ml-1"
            color="danger"
            outline
            onClick={() => handleSidebar(false, true)}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}
export default ManageAdminSidebar
