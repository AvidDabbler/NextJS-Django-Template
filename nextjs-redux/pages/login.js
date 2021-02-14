import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkLocalStorage, login } from '../store/user/action'
import { useRouter } from 'next/router'

import TextField from '@material-ui/core/TextField';
import { textInput } from '../components/MaterialUI';



function Signin({login, checkLocalStorage, userInfo}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorDisplay, setErrorDisplay] = useState('none');
    // const loginDisplay = useRef()
    
    const router = useRouter();

    useEffect(()=>{
            checkLocalStorage(JSON.parse(localStorage.getItem('userInfo')))
            
    }, [])
    useEffect(()=>{
        if(!userInfo) return
        if(!userInfo.token) return
        router.push('/register')           
            
    }, [userInfo])

    const clickRegister = (e) => {
        e.preventDefault();
        router.push('/register')
    }

    const clickLogin = async (e, p) => {
        e.preventDefault();
        const response = await login(e, p)
        response.status == 200 ? 
            router.push('/register') : 
            setErrorDisplay('inline')
        }

    const classStyle = textInput();


    return (
        <div className='flex flex-column center m-20 w-750'>
            <h3 className='m-20'>Login</h3>
            <form className='flex flex-column w-750 center' onSubmit={e=>login(e, {email, password})} >
                <TextField
                    className={classStyle.root}
                    required
                    type='text'
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={e=>setUsername((e.target.value).toLowerCase())}
                />
                <TextField
                    className={classStyle.root}
                    required
                    type='password'
                    id="password"
                    label="Password"
                    variant="outlined"
                    onChange={e=>setPassword(e.target.value)}
                />
                <p style={{
                    display: `${errorDisplay}`, 
                    backgroundColor: 'rgba(203, 8, 34, 0.7)', 
                    padding: 10, 
                    color: 'white'
                }}>Invalid Username and Password</p>
                <input 
                    type='submit'
                    className='purple-button mt-20 h-3' 
                    onClick={e=>clickLogin(e, {username, password})}
                    value='Login' />
            </form>
            <p>Don't Have an account?</p>
            <form onSubmit='/register'>
                <input value='Register' type='submit' className='flex flex-column w-750 center purple-button h-3' onClick={e=>clickRegister(e)} />
            </form>

        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.user.username,
    token: state.user.token,
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch),
        checkLocalStorage: bindActionCreators(checkLocalStorage, dispatch),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
  