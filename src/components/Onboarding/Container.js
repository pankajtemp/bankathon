import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import Onboarding_Wrapper from './Wrapper'
import {checkCibil} from './Action'

class Onboarding_Container extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={flag: false}
  }
    render(){
        const {actions, userLoginData} = this.props
        const {flag}=this.state
        return(
          <>
          {!flag?
            <Onboarding_Wrapper
            userLoginData
            submitPan={(pan)=> {
              actions.checkCibil({
              'pan':pan,
              'id': (userLoginData && userLoginData.details)?userLoginData.details._id:'0'
            })
            setTimeout(this.setState({flag: true}), 3000)
          }
        }
            />
            :<Link to='/gst-aadhar'>Navigate to next page</Link>}
           </> 
        )
    }
}

const mapStateToProps = state => ({
    userLoginData: state.SignUpData
  })

const mapDispatchToProps = dispatch => ({
  actions: {
    checkCibil: data => {
      return dispatch(checkCibil(data))
    }
  }
  })
  
export default   connect(mapStateToProps, mapDispatchToProps)(Onboarding_Container)