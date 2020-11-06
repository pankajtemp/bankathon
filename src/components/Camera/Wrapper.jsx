import React from 'react'
import axios from 'axios';
import {Box, Grid, Button, Typography, TextField} from '@material-ui/core'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class CameraWrapper extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        success : false,
        url : ""
    }
  }

  handleTakePhoto = (dataUri) => {
    const {uploadDoc}=this.props
  uploadDoc()
}
  
  
  render() {
    const {success, pan}=this.state
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
                    Identity Check
                </Typography>
            </Box>
            <Box pt={4}>
                <Grid
                    container
                >
                    <Grid
                        item container
                        xs={12}
                        justify='center'
                    >
                    </Grid>
                    <Grid item xs={12}>
                     <Box px={3} pt={3} >
                         <center>
                         <Camera
                            onTakePhoto = { (dataUri) => { this.handleTakePhoto(dataUri); } }
                        />
                        </center>
                        <Box pt={2}>
                        <Typography variant='h6'>Click a picture of yourself</Typography>
                        <Typography variant='caption'>* By clicking a picture of yourself, you also give us consent to analyze 
                        your photo and make a conclusion if you are indeed a human (not a robot) and a loan can be made available for you.</Typography>                        </Box>
                    </Box>
                     </Grid>
                 </Grid>
                 </Box>
             </Box>
             </>
    );
  }
}
export default CameraWrapper;