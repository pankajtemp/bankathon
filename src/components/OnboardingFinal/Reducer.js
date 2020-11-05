// import {
//     AUTHENTICATE_USER_INIT,
//     AUTHENTICATE_USER_SUCCESS,
//     AUTHENTICATE_USER_FAILURE} from './Constants'

// const DEFAULT_STATE = {
//   loading: false,
//   token: '',
//   otherDetails: {},
//   errors: []
// }

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

// export default AuthenticationReducer
