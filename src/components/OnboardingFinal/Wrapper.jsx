import React from 'react'
import axios from 'axios';
import {Box, Grid, Button, Typography, TextField} from '@material-ui/core'


class OnboardingFinal_Wrapper extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        success : false,
        url : ""
    }
  }

  handleSubmit = () => {
    const {submitPan}=this.props;
    const {pan}=this.state;
    this.setState({success: true})
    submitPan(pan)
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
                    Documents verification
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
                         <br/>
                         <Box bgcolor='#fff' p={2} borderRadius='10px'>
                        <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
                        <br/>
                        <Box mt={3}>
                        <Button variant='contained' style={{color: '#fff',backgroundColor: '#fc3a6c'}} onClick={this.handleUpload}>Upload PAN card</Button>
                        </Box>
                        </Box>
                        </center>
                    </Box>
                     </Grid>
                    <Grid item xs={12}>
                     <Box px={3} pt={3} >
                         <center>
                         <br/>
                         <Box bgcolor='#fff' p={2} borderRadius='10px'>
                        <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
                        <br/>
                        <Box mt={3}>
                        <Button variant='contained' style={{color: '#fff',backgroundColor: '#fc3a6c'}} onClick={this.handleUpload}>Upload Aadhar card</Button>
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
export default OnboardingFinal_Wrapper;