import React from "react"
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap"
//import PerfectScrollbar from "react-perfect-scrollbar"
import axios from "axios"
import * as Icon from "react-feather"
//import classnames from "classnames"
//import Autocomplete from "../../../components/@vuexy/autoComplete/AutoCompleteComponent"
import { history } from "../../../history"


const UserDropdown = props => {
  return (
    <DropdownMenu right>
      <DropdownItem tag="a" href="#" onClick={e => history.push("/profile")}>
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Profile</span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag="a" href="#" onClick={e => history.push("/change-password")}>
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Change Password</span>
      </DropdownItem>
      {/* <DropdownItem tag="a" href="#">
        <Icon.Mail size={14} className="mr-50" />
        <span className="align-middle">My Inbox</span>
      </DropdownItem>
      <DropdownItem tag="a" href="#">
        <Icon.CheckSquare size={14} className="mr-50" />
        <span className="align-middle">Tasks</span>
      </DropdownItem>
      <DropdownItem tag="a" href="#">
        <Icon.MessageSquare size={14} className="mr-50" />
        <span className="align-middle">Chats</span>
      </DropdownItem>
      <DropdownItem tag="a" href="#">
        <Icon.Heart size={14} className="mr-50" />
        <span className="align-middle">WishList</span>
      </DropdownItem> */}
      <DropdownItem divider />
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => history.push("/")
      }
      >
        <Icon.Power size={14} className="mr-50" />
        <span className="align-middle">Log Out</span>
      </DropdownItem>
    </DropdownMenu>
  )
}

class NavbarUser extends React.PureComponent {
  state = {
    navbarSearch: false,
    suggestions: []
  }

  componentDidMount() {
    axios.get("/api/main-search/data").then(({ data }) => {
      this.setState({ suggestions: data.searchResult })
    })
  }

  handleNavbarSearch = () => {
    this.setState({
      navbarSearch: !this.state.navbarSearch
    })
  }


  render() {
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {this.props.userName}
              </span>
              {/* <span className="user-status">Available</span> */}
            </div>
            <span data-tour="user">
              <img
                src= "https://niuli-images.s3.ap-south-1.amazonaws.com/21372076.jpg"
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    )
  }
}
export default NavbarUser
