import axios from "axios";
import config from "../../../configs/properties";

export const addProduct = params => {
  return async () => {
    // const headers = { "Content-Type": "multipart/form-data" };
    // try {
    //   const addProduct = await axios.post(
    //     config.base_url + "api/admin/product",
    //     params,
    //     {
    //       headers: headers
    //     }
    //   );
    //   if (addProduct.data.statusCode == 200) {
    //     return addProduct;
    //   }
    // } catch (e) {}
    await axios({
        method: 'post',
        url:  config.base_url + "api/admin/product",
        data: params,
        headers: {'Content-Type': 'multipart/form-data' }
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
  };
};
