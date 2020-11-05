import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import Onboarding_Wrapper from './Wrapper'

class Onboarding_Container extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={flag: false}
  }
    render(){
        const {actions} = this.props
        const {flag}=this.state
        return(
          <>
          {!flag?
            <Onboarding_Wrapper
            // pan={pan}
            uploadDoc = {()=>
              {console.log('dummy upload')
            setTimeout(this.setState({flag: true}), 3000)
          }
        }
            />
            :<Link to='/next-final'>Navigate to next page</Link>}
           </> 
        )
    }
}

const mapStateToProps = state => ({
    // pan: state.PanVerificationData.pan
  })

const mapDispatchToProps = dispatch => ({
  actions: {
  }
  })
  
export default   connect(mapStateToProps, mapDispatchToProps)(Onboarding_Container)