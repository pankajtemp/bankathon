import React from 'react'
import axios from 'axios';
import {Box, Grid, Button, Typography, TextField} from '@material-ui/core'


class OnboardingFinal_Wrapper extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        pan : '',
        success : false,
        url : ""
    }
  }

  handleSubmit = () => {
    const {submitPan}=this.props;
    const {pan, success}=this.state;
    if (success) {submitPan(pan)}
    else { this.setState({success: true})  }
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
                    PAN authentication
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
                        <Box     style={{textAlign:'center'}}>
                        <TextField 
                            label='PAN ID'
                            placeholder='Enter your PAN'
                            color='secondary'
                            variant='outlined'
                            value={pan}
                            onChange={(e)=>this.setState({pan: e.target.value})}
                        />
                        {success &&
                        <Box my={1}>
                        <TextField 
                        label='OTP'
                        placeholder='Enter your OTP'
                        color='secondary'
                        variant='outlined'
                    /></Box>}
                        <Box mt={2} textAlign='center'>
                          <Box px={3} py={2}>
                          {/* <p>&nbsp;</p> */}
                          <input type='checkbox'/>
                          <label>I agree to the &nbsp;
                          <a 
                          href='https://arogyafinance.com/assets/documents/Arogya-Finance-Terms-Revised.pdf' target='_blank'>
                            terms and conditions
                            </a></label>
                          {/* <p>&nbsp;</p> */}
                          </Box>
                          <Button onClick={this.handleSubmit} variant='contained'  style={{color: '#fff',backgroundColor: '#fc3a6c'}}>
                            Apply for loan
                          </Button>
                        </Box>
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