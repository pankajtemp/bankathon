
const DEFAULT_STATE = {
  pan:''
}

// const AuthenticationReducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case AUTHENTICATE_USER_INIT:
//       return { ...state, loading: true }
//     case AUTHENTICATE_USER_SUCCESS: {
//       return { 
//           ...state, 
//           loading: false, 
//           errors: [], 
//           token: action.payload.token,
//           otherDetails: action.payload.draft 
//         }
//     }
//     case AUTHENTICATE_USER_FAILURE: {
//       return { 
//           ...state, 
//           loading: false, 
//           errors: action.payload 
//         }
//     }
//     default:
//       return state
//   }
// }

const PANReducer = (state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case 'PAN_VERIFICATION_SUCCESS':{
            return{
                ...state,
                pan: action.payload.pan
            }
        }
        default:{
            return state
        }
    }
}

export default PANReducer
