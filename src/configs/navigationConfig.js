import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/dashboard"
  },
  // {
  //   id: "managestaff",
  //   title: "Manage Staff",
  //   type: "collapse",
  //   icon: <Icon.User size={20} />,
    // children: [
    //   {
    //     id: "designers",
    //     title: "Designers",
    //     type: "item",
    //     icon: <Icon.Circle size={15} />,
    //     permissions: ["admin", "editor"],
    //     children: [
    //       {
    //         id: "designers_list",
    //         title: "Designer List",
    //         type: "item",
    //         icon: <Icon.Circle size={12} />,
    //         permissions: ["admin", "editor"],
    //         navLink: "/data-list/manage-designer-view",
    //       },
    //       {
    //         id: "addDesiner",
    //         title: "Add Designer",
    //         type: "item",
    //         icon: <Icon.Circle size={12} />,
    //         permissions: ["admin", "editor"],
    //         navLink: "/addDesigner"
    //       },
    //       ]
    //   },
    //   {
    //     id: "fitters",
    //     title: "Fitters",
    //     type: "item",
    //     icon: <Icon.Circle size={15} />,
    //     permissions: ["admin", "editor"],
    //     navLink: "/"
    //   },
    //   {
    //     id: "deliverers",
    //     title: "Deliverers",
    //     type: "item",
    //     icon: <Icon.Circle size={15} />,
    //     permissions: ["admin", "editor"],
    //     navLink: ""
    //   },
    //   {
    //     id: "areamgrs",
    //     title: "Area Mgrs",
    //     type: "item",
    //     icon: <Icon.Circle size={15} />,
    //     permissions: ["admin", "editor"],
    //     navLink: ""
    //   },
    // ]
//   },
//   {
//   id: "managestaff",
//   title: "Products",
//   type: "collapse",
//   icon: <Icon.User size={20} />,
// }
{
  id: "userlist",
  title: "Customers",
  type: "item",
  icon: <Icon.Home size={20} />,
  permissions: ["admin", "editor"],
  navLink: "/userlist"
},
{
  id: "catogoery",
  title: "Catogoery",
  type: "item",
  icon: <Icon.Home size={20} />,
  permissions: ["admin", "editor"],
  navLink: "/catogoery"
},
{
  id: "product",
  title: "Products",
  type: "item",
  icon: <Icon.Home size={20} />,
  permissions: ["admin", "editor"],
  navLink: "/productlist"
},
{
  id: "futureproducts",
  title: "Future Products",
  type: "item",
  icon: <Icon.Home size={20} />,
  permissions: ["admin", "editor"],
  navLink: "/futureproducts"
},

{
  id: "orderdetails",
  title: "Orders",
  type: "item",
  icon: <Icon.Home size={20} />,
  permissions: ["admin", "editor"],
  navLink: "/orders"
},
{
  id: "paymenthistory",
  title: "Payment History",
  type: "item",
  icon: <Icon.Home size={20} />,
  permissions: ["admin", "editor"],
  navLink: "/paymenthistory"
},

{
  id: "admindetails",
  title: "Create Admin",
  type: "item",
  icon: <Icon.Home size={20} />,
  permissions: ["admin", "editor"],
  navLink: "/adminusers"
},
]

export default navigationConfig
