


  import axios from "axios"
  import config from "../../../configs/properties";

  export const getProfileData = (params) => {
      return async () => {
       const profileRequest = await axios.post(config.base_url + "admin/adminProfile",params
       )
       console.log(profileRequest)
       if(profileRequest.data.status_code === 200)
       {
           return profileRequest.data.response;
    //    dispatch({
    //     type: "GET_PROFILE_DATA",
    //     data: profileRequest.data.response,
    //     })
       }
      }
    }