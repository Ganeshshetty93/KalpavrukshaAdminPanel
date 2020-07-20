import React from "react"
import { Row, Col } from "reactstrap"
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
// import ThumbViewConfig from "./DataListConfig"
import Customers from "../pages/page-components/Customers/ManageCustomerConfig"
import queryString from "query-string"
class UserList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Breadcrumbs
          breadCrumbTitle="Thumb View"
          breadCrumbParent="Data List"
          breadCrumbActive="Thumb View"
        /> */}
        <Row>
          <Col sm="12">
            <Customers thumbView={true} parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default UserList
