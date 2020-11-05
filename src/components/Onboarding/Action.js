import jsonPlaceholder from '../../apis/jsonPlaceholder';

import {
    CHECK_CIBIL_INIT,
    CHECK_CIBIL_SUCCESS,
    CHECK_CIBIL_FAILURE} from './Constants'

const initCheckCibil = (payload) => ({
    type: CHECK_CIBIL_INIT,
    payload
  })
const initCheckCibilSuccess = (payload) => ({
    type: CHECK_CIBIL_SUCCESS,
    payload
  })
const initCheckCibilFailure = (payload) => ({
    type: CHECK_CIBIL_FAILURE,
    payload
  })


const checkCibil = (data) => {
    return async (dispatch, getState) => {
      dispatch(initCheckCibil(data))
      try {
        const response = await jsonPlaceholder.post('/loan/eligibility', data);
        const responseData = response.data
        dispatch(initCheckCibilSuccess(responseData))
        console.log('Validated CIBIL',responseData)
        return responseData
      } catch (error) {
        console.log(error)
        dispatch(initCheckCibilFailure(error))
        console.log('ERROR while CIBIL check', error)
        throw error
      }
    }
  }

export {checkCibil} 