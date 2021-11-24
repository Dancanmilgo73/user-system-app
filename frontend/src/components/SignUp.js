import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/signup.css"
import {Link, Navigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/users.action';
// import { registerUser } from '../Api/users';
export default function SignUp() {
  const dispatch = useDispatch();
  const { addUser, loading } = useSelector((state) => state.auth);
  // console.log(registerUserError);
    const [values, setValues] = useState({username: '', email: '', password: '', confirmPassword: '' });

 const handleChange = (evt) => {
        const value = evt.target.value;
        setValues({
          ...values,
          [evt.target.name]: value
        });
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(values))
      }
      if(addUser.registerUserSuccess) return <Navigate to={"/"} />;
    return (
        <Box
        sx={{
        //   width: 300,
        //   maxWidth: '100%',
        }}
        className='signup_con'
      >
        {addUser.registerUserError&&<p style={{color: "red"}}>{addUser.registerUserError}</p>}
          <form onSubmit={handleSubmit}>
        <div><TextField fullWidth name="username" label="Username" type="text" id="fullWidth" value={values.username}  onChange={handleChange}/></div>
        <div><TextField fullWidth name="email" label="Email" type="email" id="fullWidth" value={values.email}  onChange={handleChange}/></div>
        <div><TextField fullWidth name="password" type="password" label="Password" id="fullWidth" value={values.password}  onChange={handleChange}/></div>
        <div><TextField fullWidth name="confirmPassword" type="password" label="Password Confirm" id="fullWidth" value={values.confirmPassword}  onChange={handleChange}/></div>
        <div><Button fullWidth variant="contained" size="large" type='submit'>
          REGISTER
        </Button></div>
        </form>
        <div><p>Already have an account? <Link to="/login" style={{textDecoration: 'none'}}>Login here</Link></p></div>
      </Box>
    )
}
