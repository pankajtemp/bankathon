import React from 'react'
import axios from 'axios';
import {Box, Grid, Button, Typography, TextField} from '@material-ui/core'

import money from './money.jpeg'

class BankStatementWrapper extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        success : false,
        url : ""
    }
  }

  handleSubmit = () => {
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
                style={{backgroundImage: `url(${money})`}}
            >
                <Box
                bgcolor='#999'
                p={3} 
                py={6}
                style={{borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px'}}               
                >
                <Typography variant='h4' style={{color: '#fff'}}>
                    Bank Credits Check
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
                        <Button variant='contained' style={{color: '#fff',backgroundColor: '#999'}} onClick={this.handleSubmit}>Upload bank statement of last 6 months</Button>
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
export default BankStatementWrapper;