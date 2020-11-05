import React from 'react'
import { connect } from 'react-redux'

import SignUp_Wrapper from './Wrapper'
import {authenticate} from './Action'

class SignUp_Container extends React.PureComponent{
    render(){
        const {actions} = this.props
        return(
            <SignUp_Wrapper
            authenticate={(contact, otp) =>
                actions.authenticate({
                    "mobile": contact,
                    "otp": otp
                })
            }
            />
        )
    }
}

const mapStateToProps = state => ({
  })

const mapDispatchToProps = dispatch => ({
    actions: {
      authenticate: data => {
        return dispatch(authenticate(data))
      }
    }
  })
  
export default   connect(mapStateToProps, mapDispatchToProps)(SignUp_Container)