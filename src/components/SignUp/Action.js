import jsonPlaceholder from '../../apis/jsonPlaceholder';

import {
    AUTHENTICATE_USER_INIT,
    AUTHENTICATE_USER_SUCCESS,
    AUTHENTICATE_USER_FAILURE} from './Constants'

const initAuthentication = (payload) => ({
    type: AUTHENTICATE_USER_INIT,
    payload
  })
const initAuthenticationSuccess = (payload) => ({
    type: AUTHENTICATE_USER_SUCCESS,
    payload
  })
const initAuthenticationFailure = (payload) => ({
    type: AUTHENTICATE_USER_FAILURE,
    payload
  })


const authenticate = (data) => {
    return async (dispatch, getState) => {
      dispatch(initAuthentication(data))
      try {
        const response = await jsonPlaceholder.post('/auth/login', data);
        const responseData = response.data
        dispatch(initAuthenticationSuccess(responseData))
        console.log('Validated SIGNUP',responseData)
        return responseData
      } catch (error) {
        console.log(error)
        dispatch(initAuthenticationFailure(error))
        console.log('ERROR while signing up', error)
        throw error
      }
    }
  }

export {authenticate} 