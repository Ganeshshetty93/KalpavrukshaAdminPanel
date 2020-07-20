import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"
import ChangePassword from "./views/pages/authentication/ChangePassword"
const manageDesignerView = lazy(() => import("./views/pages/ManageDesigner"))
const productListView = lazy(() => import("./views/pages/Product"))
const UserList = lazy(() => import("./views/pages/UserList"))
const Orders = lazy(() => import("./views/pages/Orders"))
const PaymentHistory = lazy(() => import("./views/pages/PaymentHistory"))
const AdminUsers = lazy(() => import("./views/pages/AdminDetails"))
const FutureProducts = lazy(() => import("./views/pages/FutureProducts"))
const Catogoery = lazy(() => import("./views/pages/catogoery"))

// const addDesigner = lazy(() => import("./views/pages/addDesigner"))
const Profile = lazy(() => import("./views/pages/profile"))

// Route-based code splitting
const Dashboard = lazy(() =>
  import("./views/pages/dashboard")
)

const Page2 = lazy(() =>
  import("./views/pages/Page2")
)

const List = lazy(() =>
  import("./views/ui-elements/data-list/ListView")
)



const login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

const Register = lazy(() =>
  import("./views/pages/authentication/register/Register")
)
// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={login} fullLayout
          />
          <AppRoute
            path="/register"
            component={Register} fullLayout
          />
          <AppRoute
            path="/page2"
            component={Page2}
          />
          <AppRoute
            path="/list"
            component={List}
          />
          <AppRoute
            path="/dashboard"
            component={Dashboard}
          />
          <AppRoute
            path="/profile"
            component={Profile}
          />
          <AppRoute
            path="/change-password"
            component={ChangePassword}
          />
           <AppRoute path="/designer-view" component={manageDesignerView} />
           <AppRoute path="/productlist" component={productListView} />
           <AppRoute path="/userlist" component={UserList} />
           <AppRoute path="/orders" component={Orders} />
           <AppRoute path="/paymenthistory" component={PaymentHistory} />
           <AppRoute path="/adminusers" component={AdminUsers} />
           <AppRoute path="/futureproducts" component={FutureProducts} />
           <AppRoute path="/catogoery" component={Catogoery} />
           
           {/* <AppRoute path="/addDesigner" component={addDesigner} /> */}
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
