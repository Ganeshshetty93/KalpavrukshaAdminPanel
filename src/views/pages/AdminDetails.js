import React from "react"
import { Row, Col } from "reactstrap"
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
// import ThumbViewConfig from "./DataListConfig"
import AdminUsers from "../pages/page-components/AdminUsers/ManageAdminConfig"
import queryString from "query-string"
class AdminUsersList extends React.Component {
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
            <AdminUsers thumbView={true} parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AdminUsersList
