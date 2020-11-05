import React from 'react'
import { connect } from 'react-redux'

import Onboarding_Wrapper from './Wrapper'
// import {} from './Action'

class Onboarding_Container extends React.PureComponent{
    render(){
        const {actions, userLoginData} = this.props
        return(
            <Onboarding_Wrapper
            userLoginData
            />
        )
    }
}

const mapStateToProps = state => ({
    userLoginData: state.SignUpData
  })

const mapDispatchToProps = dispatch => ({
    actions: {
    }
  })
  
export default   connect(mapStateToProps, mapDispatchToProps)(Onboarding_Container)