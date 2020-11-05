import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import BankStatementWrapper from './Wrapper'

class BankStatementContainer extends React.PureComponent{
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
            <BankStatementWrapper
            // pan={pan}
            uploadDoc = {()=>
              {console.log('dummy upload')
            setTimeout(this.setState({flag: true}), 3000)
          }
        }
            />
            :<Link to='/next-next'>Navigate to next page</Link>}
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
  
export default   connect(mapStateToProps, mapDispatchToProps)(BankStatementContainer)