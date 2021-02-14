import { userActionTypes } from './action'
import React, {useEffect} from 'react'

const userInitialState = {
      isLoggedIn: false, userInfo: null
  }

export function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.USER_LOGIN_REQUEST:
      return {loading: true}
    case userActionTypes.USER_LOGIN_SUCCESS:
      return {loading: false, userInfo: action.payload}
    case userActionTypes.USER_LOGIN_FAIL:
      return {loading: false, userInfo: action.payload}
    case userActionTypes.USER_LOGOUT:
      return {loading: false, userInfo: action.payload}
    case userActionTypes.GET_USER_INFO:
      return {loading: false, userInfo: action.payload}
      
    default:
      return {... state}
  }
}
