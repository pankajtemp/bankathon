import React from 'react'
import axios from 'axios';
import {Box, Grid, Button, Typography, TextField} from '@material-ui/core'

import map from './map.jpeg'

class LocationWrapper extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        success : false,
        url : ""
    }
  }

  componentDidMount(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      }
      function getPosition(position) {
        console.log(position.coords.latitude, position.coords.longitude);
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
                style={{backgroundImage:`url(${map})`}}
            >
                <Grid
                    container
                    justifyContent='center'
                justifyItems='center'
                alignContent='center'
                alignItems='center'
                >
                    <Box p={4}>
                    <Typography variant='h4' style={{border:'2px solid #555', color: '#fff'}}>
                        Please allow location access
                    </Typography>
                    </Box>
                </Grid>
             </Box>
             </>
    );
  }
}
export default LocationWrapper;