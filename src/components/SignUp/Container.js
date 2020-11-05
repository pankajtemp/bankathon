import React from 'react'
import { connect } from 'react-redux'
import {Link, Route, BrowserRouter} from 'react-router-dom'

import SignUp_Wrapper from './Wrapper'
import {authenticate} from './Action'
import OnboardingContainer from '../Onboarding/Container'

class SignUp_Container extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={flag: false}
  }
    render(){
        const {actions} = this.props
        const {flag} = this.state
        return(
          <>
          {!flag ?
            <SignUp_Wrapper
            authenticate={(contact, otp) =>
                {actions.authenticate({
                    "mobile": contact,
                    "otp": otp
                })
                setTimeout(this.setState({flag: true}), 3000)
              }
            }
            />
            : <Link to='/pan'>Navigate to next page</Link>}
            </>
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