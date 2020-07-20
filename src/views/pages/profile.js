import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap"
import { connect } from "react-redux"
//import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy"
//import { Check } from "react-feather"
import {getProfileData} from "../../redux/actions/profile"
import Select from "react-select"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "flatpickr/dist/themes/light.css";
import "../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import "../../assets/scss/plugins/extensions/dropzone.scss"
//import { useDropzone } from "react-dropzone"

const colourOptions = [
    { value: "super", label: "Super", color: "#00B8D9", isFixed: true },
    { value: "area_manager", label: "Area Manager", color: "#0052CC", isFixed: true },
    { value: "warehouse", label: "Warehouse Admin", color: "#5243AA", isFixed: true }
  ]

  // const Languages = [
  //   { value: "English", label: "English" },
  //   { value: "Hindi", label: "Hindi" },
  //   { value: "Arabic", label: "Arabic" },
  // ]

  // const WorkType = [
  //   { value: "Full Time", label: "Full Time" },
  //   { value: "Freelancer", label: "Freelancer" }
    
  // ]

//   function BasicDropzone(props) {
//     const [files, setFiles] = useState([])
//     const { getRootProps, getInputProps } = useDropzone({
//       accept: "image/*",
//       onDrop: acceptedFiles => {
//         setFiles(
//           acceptedFiles.map(file =>
//             Object.assign(file, {
//               preview: URL.createObjectURL(file)
//             })
//           )
//         )
//       }
//     })
  
//     const thumbs = files.map(file => (
//       <div className="dz-thumb" key={file.name}>
//         <div className="dz-thumb-inner">
//           <img src={file.preview} className="dz-img" alt={file.name} />
//         </div>
//       </div>
//     ))
  
//     useEffect(
//       () => () => {
//         // Make sure to revoke the data uris to avoid memory leaks
//         files.forEach(file => URL.revokeObjectURL(file.preview))
//       },
//       [files]
//     )
  
//     return (
//       <section>
//         <div {...getRootProps({ className: "dropzone" })}>
//           <input {...getInputProps()} />
//           <p className="mx-1">
//             Drag 'n' drop some files here, or click to select files
//           </p>
//         </div>
//         <aside className="thumb-container">{thumbs}</aside>
//       </section>
//     )
//   }

class profile extends React.Component {
     state={
        img:[],
        name:"",
        profile_image: "",
        email:"",
        mobile:"",
        admin_type:"",
        errorProfilePic: "",
        errorProfileName: "",
        errorProfileEmail:"",
        errorMobile:"",
        errorAdmintype:"",
        errorOrderAed:"",
        errorCurrAdd:"",
        errorPerAdd:"",
        profileObj:{}
     }

     async componentDidMount() {
          let obj = {"id": localStorage.getItem('adminId')}
          console.log(obj)
          let data = await this.props.getProfileData(obj)
          console.log(data)
          this.setState({
            profileObj:data,
          })
          return this.props.show
      }
    handleClick = obj => {
        if(!this.state.name){
            this.setState({
              errorProfileName:"Please fill the first name",
            })
            return this.props.show
          }

        else if(this.state.img.length === 0){
            this.setState({
              errorProfilePic:"Please upload profile image",
            })
            return this.props.show
        }
        else if(!this.state.Email){
            this.setState({
              errorProfileEmail:"Please fill the Email",
            })
            return this.props.show
          }
        else if(!this.state.mobile){
            this.setState({
              errorMobile:"Please enter mobile number",
            })
            return this.props.show
          }
        // else if(!this.state.admin_type){
        //     this.setState({
        //         errorAdmintype:"Please enter work type",
        //     })
        //     return this.props.show
        //   }
    }

    // handleAdminType = selectedOption =>{
    //     console.log(`Option selected:`, selectedOption);
    //     this.setState({ admin_type: {admin_type: selectedOption.value}, errorAdmintype: ""});
    // }

    handleProfileImage = async(e) =>{
        let imageUrl = e.target.files[0]
        let obj = {
          "file":imageUrl
        }
        let profileUrl = obj
        this.setState({
          img: profileUrl,
          errorProfilePic: ""
        })
      }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(this.props.data, prevState,"this.props.data")
    // }
  render() {
    var errorMessageStyle={
        color:"red",
     }

    return (
      <Card>
        <CardHeader>
          {/* <CardTitle>Multiple Column</CardTitle> */}
        </CardHeader>
        <CardBody>
          {/* <Form className="mt-2"> */}
          <FormGroup className="">
          <img
                src={this.state.profileObj.profile_image}
                className="round"
                height="150"
                width="150"
                alt="avatar"
              />
              {/* <div className="d-flex flex-wrap justify-content-between mt-2 upload-image-div">
                <label
                  className="btn btn-flat-primary"
                  htmlFor="update-image"
                  color="primary">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*" 
                    id="update-image"
                    hidden
                    onChange={e => this.handleProfileImage(e)}
                  />
                </label>
              </div>
              <span style={errorMessageStyle}>
                  {this.state.profileObj.profile_image}
            </span> */}
            </FormGroup>
            <Row>
              <Col md="4" sm="12">
                {/* <FormGroup className="form-label-group"> */}
                <h5 className="text-bold-500">First Name</h5>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.profileObj.name}
                    id="name"
                    className="form-control"
                    //onChange={e => this.setState({ name: e.target.value, errorProfileName: "" })}
                    placeholder="Admin Name"
                  />
                  <span style={errorMessageStyle}>
                  {this.state.errorProfileName}
                  </span>
                  {/* <Label for="nameMulti">First Name</Label> */}
                {/* </FormGroup> */}
              </Col>
              <Col md="4" sm="12">
              <h5 className="text-bold-500">Email</h5>
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.profileObj.email}
                    onChange={e => this.setState({ email: e.target.value, errorProfileEmail: "" })}
                    placeholder="Email"
                  />
                  <span style={errorMessageStyle}>
                  {this.state.errorProfileEmail}
                  </span>
                  {/* <Label for="EmailMulti">Email</Label> */}
                </FormGroup>
              </Col>

              <Col md="4" sm="12">
              <h5 className="text-bold-500">Phone Number</h5>
                <FormGroup>
                <PhoneInput
                    country={'in'}
                    countryCodeEditable={false}
                    value={this.state.profileObj.mobile?this.state.profileObj.mobile.toString():""}
                    enableSearch={false}
                    disableSearchIcon={false}
                    onChange={mobile => this.setState({ mobile, errorMobile: ""})}
                    />
                    <span style={errorMessageStyle}>
                    {this.state.errorMobile}
                    </span>
                </FormGroup>
              </Col>

              <Col md="4" sm="12">
              <FormGroup className="form-label-group">
              <h5 className="text-bold-500">Work Type</h5>
                <Select
                    isDisabled={localStorage.getItem('admin_type') == "super" ? true : false}
                    className="React"
                    classNamePrefix="select"
                    id="admin_type"
                    value={{"label":this.state.profileObj.admin_type}}
                    onChange={this.handleAdminType}
                    name="admin_type"
                    options={colourOptions}
                    isClearable={true}
                />
                <span style={errorMessageStyle}>
                  {this.state.errorAdmintype}
                </span>
                </FormGroup>
              </Col>

              <Col sm="12">
                {/* <FormGroup className="form-label-group">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={ () => this.handleClick(this.state)}
                  >
                    Submit
                  </Button.Ripple>
                </FormGroup> */}
              </Col>
            </Row>
          {/* </Form> */}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
    console.log(state)
    return {
    }
  }
export default connect(mapStateToProps, {
    getProfileData,
  })(profile)