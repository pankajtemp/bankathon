import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'

import SignUpReducer from '../components/SignUp/Reducer'
import PANReducer from '../components/Onboarding/Reducer'

const allReducer = {
  SignUpData: SignUpReducer,
  PanVerificationData: PANReducer
}

const combinedReducer = () =>
  combineReducers({
    ...allReducer,
  })

export default combinedReducer
