import React from 'react'
import { connect } from 'react-redux'

import Onboarding_Wrapper from './Wrapper'
// import {} from './Action'

class Onboarding_Container extends React.PureComponent{
    render(){
        const {actions, pan} = this.props
        return(
            <Onboarding_Wrapper
              pan={pan}
            />
        )
    }
}

const mapStateToProps = state => ({
    userLoginData: state.SignUpData,
    pan: state.PanVerificationData.pan
  })

const mapDispatchToProps = dispatch => ({
    actions: {
    }
  })
  
export default   connect(mapStateToProps, mapDispatchToProps)(Onboarding_Container)