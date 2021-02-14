import React, {useState} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { register } from '../store/user/action'


import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { textInput } from '../components/MaterialUI';



function Register({register}) {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [username, setUsername] = useState('');
    const [occupation, setOccupation] = useState('');

    const classStyle = textInput();

    const validateAndSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password1,
            username,
            occupation,
        } 
        const registrationRequest = () => {
            if(password1 !== password2) {
                alert('Passwords do not match!')
                return
            }
        }
        registrationRequest()
    }
  

    return (
        <div className='flex flex-column center m-20 w-750'>
            <h3 className='m-20'>Register</h3>
            <form className='flex flex-column w-750 center'>
                <TextField
                    required
                    className={classStyle.root}
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={e=>setEmail(e.target.value)}

                />
                {/* <FormControl 
                    className='w-100' 
                    label="Required" 
                    variant='outlined' 
                    className={classStyle.root} 
                    onChange={e=>setOccupation(e.target.value)}>
                    <InputLabel 
                        required id="demo-customized-select-label">
                        Occupation
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"> 
                        <MenuItem value={'analyst'}>Analyst</MenuItem>
                        <MenuItem value={'grants'}>Grant Writer</MenuItem>
                        <MenuItem value={'planner'}>Planner</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                    </Select>
                </FormControl> */}
                <TextField
                    required
                    className={classStyle.root}
                    id="password1"
                    label="Password"
                    variant="outlined"
                    type='password'
                    onChange={e=>setPassword1(e.target.value)} />
                <TextField
                    required
                    className={classStyle.root}
                    id="email"
                    label="Retype Password"
                    variant="outlined"
                    type='password'
                    onChange={e=>setPassword2(e.target.value)} />
                <input 
                    type='submit'
                    className='purple-button mt-20 h-3' 
                    onClick={e=>validateAndSubmit(e)}
                    value='Register' />
            </form>
        </div>
    )
}

  
const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(register, dispatch),
    }
}
  
export default connect(null, mapDispatchToProps)(Register)
  