import React from 'react'
import {Box, Grid, Button, Typography, TextField} from '@material-ui/core'

class SignUp_Wrapper extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={ contact: '', otp: '', flag: false}
    }
    handleClick1= () =>{
        const {contact} = this.state
        if (contact.length===10){
            this.setState({flag:true})
        }
        else{
            console.log("Wrong input format")
        }
    }
    handleClick2= () =>{
        const {contact, otp} = this.state
        const {authenticate} = this.props
        if (otp.length===6){
            authenticate(contact, otp)
        }
        else{
            console.log("Wrong input format")
        }
    }
    render(){
        const {contact, otp, flag} = this.state
        return(
            <Box
                height='100vh'
                bgcolor='#ffd5cd'
                p={2}
                pt={8}
            >
                <Grid
                    container
                    direction='column'
                    alignContent='space-between'
                >
                    <Grid
                        item container
                        xs={12}
                        justify='center'
                    >
                        <Box 
                            p={3}
                            bgcolor='#f9813a'
                            borderRadius='8px'
                        >
                        <Typography
                            variant='h2'
                            style={{color: '#fff'}}
                        >
                            Mitra
                        </Typography>
                        <Typography
                            variant='h6'
                            style={{color: '#fff'}}
                        >
                            To be filled later
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box height='100px'></Box>
                    </Grid>
                    <Grid
                        item container
                        xs={12}
                        justify='center'
                    >
                        <Box>
                        <TextField 
                            type='number' 
                            value={contact} 
                            label='Contact number'
                            placeholder='Enter your mobile number'
                            color='secondary'
                            onChange={(e)=> this.setState({contact: e.target.value})}
                        />
                        <Box mt={3}>
                        <Button variant='outlined' onClick={this.handleClick1}>Sign me up</Button>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item container
                        xs={12}
                        justify='center'
                    >
                        <Box mt={3} display={flag?'block':'none'}>
                        <TextField 
                            type='number' 
                            size='small'
                            value={otp} 
                            label='Contact number'
                            placeholder='Enter your mobile number'
                            color='secondary'
                            onChange={(e)=> this.setState({otp: e.target.value})}
                        />
                        <Box mt={3}>
                        <Button variant='outlined' onClick={this.handleClick2}>Verify OTP</Button>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default SignUp_Wrapper