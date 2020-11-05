import React from 'react'
import axios from 'axios';
import {Box, Grid, Button, Typography, TextField} from '@material-ui/core'

// import Camera from 'react-html5-camera-photo'
// import 'react-html5-camera-photo/build/css/index.css'

// class Onboarding_Wrapper extends React.PureComponent{
//     constructor(props){
//         super(props)
//         this.state={ flag: false}
//     }

//     handleTakePhoto (dataUri) {
//         // Do stuff with the photo...
//         console.log('takePhoto');
//       }
    
//     render(){
//         const {flag} = this.state
//         return(
//             <>
//             <Box
//                 height='100vh'
//                 bgcolor='#ffd5cd'
//             >
//                 <Box
//                 bgcolor='#f9813a'
//                 p={3}
//                 >
//                 <Typography variant='h3'>
//                     PAN verification
//                 </Typography>
//             </Box>
//             <Box pt={4}>
//                 <Grid
//                     container
//                     direction='column'
//                     alignContent='space-between'
//                 >
//                     <Grid
//                         item container
//                         xs={12}
//                         justify='center'
//                     >
//                         <Box>
//                         <TextField 
//                             label='PAN ID'
//                             placeholder='Enter your PAN'
//                             color='secondary'
//                         />
//                         <Box my={3}>
//                         <Button variant='outlined' >Click a photo of your PAN</Button>
//                         </Box>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12}>
//                     <Box px={3}>
//                     <Camera
//                         onTakePhoto = { (data) => { this.handleTakePhoto(data) } }
//                     />
//                     <Box py={2}>
//                     <Typography variant='h7'>Hold your PAN card still and click on the round button</Typography>
//                     </Box>
//                     </Box>
//                     </Grid>
//                 </Grid>
//                 </Box>
//             </Box>
//             </>
//         )
//     }
// }

// export default Onboarding_Wrapper


class Onboarding_Wrapper extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        document: '',
        success : false,
        url : ""
    }
  }
  
  componentDidMount(){
    const {pan}=this.props
    if (pan ){
      if (pan[3].toUpperCase()==='P'){
        this.setState({document:'Aadhar'})
      }
      else{
        this.setState({document:'GSTIN'})
      }
    }
  }

  handleChange = (ev) => {
    this.setState({success: false, url : ""});
    
  }
  // Perform the upload
  handleUpload = (ev) => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");
    axios.post("http://3.139.27.174:8080/loan/eligibility",{
      fileName : fileName,
      fileType : fileType
    })
    .then(response => {
      var returnData = response.data.data.returnData;
      var signedRequest = returnData.signedRequest;
      var url = returnData.url;
      this.setState({url: url})
      console.log("Recieved a signed request " + signedRequest);
      
     // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': fileType
        }
      };
      axios.put(signedRequest,file,options)
      .then(result => {
        console.log("Response from s3")
        this.setState({success: true});
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
    })
    .catch(error => {
      alert(JSON.stringify(error));
    })
  }
  
  
  render() {
    const {document}=this.props;
    const Success_message = () => (
      <div style={{padding:50}}>
        <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.url}>Access the file here</a>
        <br/>
      </div>
    )
    return (
        <>
             <Box
                height='100vh'
                bgcolor='#ffd5cd'
                style={{background: 'linear-gradient(180deg, #ffd5cd 80%, pink 100%)'}}
            >
                <Box
                bgcolor='#fc3a6c'
                p={3} 
                py={6}
                style={{borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px'}}               
                >
                <Typography variant='h4' style={{color: '#fff'}}>
                    {`${document} verification`}
                </Typography>
            </Box>
            <Box pt={8}>
                <Grid
                    container
                >
                    <Grid
                        item container
                        xs={12}
                        justify='center'
                    >
                        <Box>
                        <TextField 
                            label={document}
                            placeholder={`Enter your ${document}`}
                            color='secondary'
                            variant='outlined'
                        />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                     <Box px={3} pt={3}>
                         <center>
                         <br/>
                         <Box bgcolor='#fff' p={2} borderRadius='10px'>
                        {this.state.success ? <Success_message/> : null}
                        <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
                        <br/>
                        <Box mt={3}>
                        <Button variant='contained' style={{color: '#fff',backgroundColor: '#fc3a6c'}} onClick={this.handleUpload}>{`Upload ${document} proof`}</Button>
                        </Box>
                        </Box>
                        </center>
                    </Box>
                     </Grid>
                 </Grid>
                 </Box>
             </Box>
             </>


    );
  }
}
export default Onboarding_Wrapper;