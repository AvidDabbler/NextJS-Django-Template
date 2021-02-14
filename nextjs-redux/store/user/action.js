import axios from 'axios'

export const userActionTypes = {
  USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
  USER_LOGOUT: 'USER_LOGOUT',
  USER_REGISTER: 'USER_REGISTER',
  GET_USER_INFO: 'GET_USER_INFO',
}

const loginRequest = async (e, payload) => {
  e.preventDefault()
  const request = await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/users/login/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
  });
  
    return request
}

const registerRequest = async (e, payload) => {
  e.preventDefault()
  const request = await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/v1/users/auth/register/',
      headers: {},
      data: {
        email: payload.email, 
        password: payload.password,
        username: payload.username, 
        occupation: payload.occupation,
      }
  });
  return {
    token: request.data.key,
  }
}

export const checkLocalStorage = (payload) =>  (dispatch) => {
    // dispatch GET_USER_INFO if still good
    dispatch({type: userActionTypes.GET_USER_INFO, payload: payload ? payload : null})

    // redirect to /login if credentials are no good
}

export const login = (e, payload) =>  async (dispatch) => {
    try {
      dispatch({
        type: userActionTypes.USER_LOGIN_REQUEST,
      })
      const auth = await loginRequest(e, payload)      
      dispatch({ type: userActionTypes.USER_LOGIN_SUCCESS, payload: auth.data})
      localStorage.setItem('userInfo', JSON.stringify(auth.data))
      return auth
    }
    catch(error) {
      dispatch({ 
        type: userActionTypes.USER_LOGIN_FAIL, 
        payload: error.response && error.response.data.detail ?
          error.response.data.detail :
          error.message
      })
      return {message: "The email and password combination is incorrect", status: 400}
    }
  }
  
  export const logout = (payload) => (dispatch) => {
    return dispatch({ type: userActionTypes.LOGOUT, payload })
  }
  
  export const register = (payload) => async (dispatch) => {
  const auth = await registerRequest(e, payload);
  return dispatch({ type: userActionTypes.REGISTER, payload: auth })
}
