

import axios from "axios"
//import { toast } from "react-toastify"
import { history } from "../../../history"
import swal from 'sweetalert';
import config from "../../../configs/properties";

export const registerData = (params) => {
console.log(params)
{
    return async ()=>{
        try{
            const registerDataRequest=await axios.post(config.base_url + "admin/signup",params,
         )
         console.log(registerDataRequest, "registerDataRequest")
          if(registerDataRequest.data.statusCode == 200){
            return registerDataRequest.data;
          }
        }
        catch(e)
        {}
    }
}
}

export const changePassword = (params) => {
  console.log(params)
  {
      return async ()=>{
          try{
              const changePasswordRequest=await axios.post(config.base_url + "/admin/changePassword",params,
           )
           console.log(changePasswordRequest, "changePassword")
            if(changePasswordRequest.data.status_code == 200){
              swal(changePasswordRequest.data.message,"","success");
              history.push('/dashboard')
            }
            else{
              swal(changePasswordRequest.data.message,"","error");
            }
          }
          catch(e)
          {}
      }
  }
  }