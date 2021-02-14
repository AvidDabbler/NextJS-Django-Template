import '../styles/globals.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Login} from '../components/Login'
import React, {useEffect} from 'react'
import {checkLocalStorage} from '../store/user/action'

import { wrapper } from '../store/store'
import { useRouter } from 'next/router'

const WrappedApp = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <div>
      <div className="App-header ">
        <h3 className='ml-20' href='/'><a onClick={()=>router.push('/')}>BetterCensus.com</a></h3>
        <Login />
      </div>
      <Component {...pageProps} />
    </div>)
}

// export default (WrappedApp)

const mapStateToProps = (state) => ({
  username: state.user.username,
  token: state.user.token,
  isLoggedIn: state.user.isLoggedIn,
  userInfo: state.user.userInfo
})

const mapDispatchToProps = (dispatch) => {
  return {
  //     login: bindActionCreators(login, dispatch),
  }
}

export default wrapper.withRedux(connect(mapStateToProps, mapDispatchToProps)(WrappedApp))
