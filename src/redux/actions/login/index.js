// export const changeRole = role => {
//   return dispatch => dispatch({ type: "CHANGE_ROLE", userRole: role })
// }

import axios from "axios"
//import { toast } from "react-toastify"
import { history } from "../../../history"
import swal from 'sweetalert';
import config from "../../../configs/properties";

export const loginData = (params) => {
console.log(params)
  return async dispatch => {
   const loginRequest = await axios.post(config.base_url + "admin/login",params
   )
   console.log(loginRequest)
   if(loginRequest.data.status_code === 200)
   {
   dispatch({
    type: "LOGIN_REQUEST",
    data: loginRequest.data.response,
    })
    console.log(loginRequest)
    localStorage.setItem('email',loginRequest.data.response.email)
    localStorage.setItem('adminId',loginRequest.data.response._id)
    localStorage.setItem('name',loginRequest.data.response.name)
    localStorage.setItem('userProfilePic',loginRequest.data.response.profile_image)
    localStorage.setItem('admin_type',loginRequest.data.response.admin_type)
    localStorage.setItem('token',loginRequest.data.token)
    history.push('/dashboard')
   }
   else{
        swal(loginRequest.data.message,"","info");
   }
  }
}