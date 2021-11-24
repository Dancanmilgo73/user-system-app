import React from 'react'
import {Link } from "react-router-dom";
import {useSelector} from 'react-redux';
export default function Home() {
    const {loginuser, addUser } = useSelector(
        (state) => state.auth
      );
      let isUserSignedIn = addUser.registerUserSuccess || loginuser.loginUserSuccess; 
    //   console.log(showAuthLinks);
    return (
        <div>
            <h1>Welcome Home</h1>
           {!isUserSignedIn && <p><Link to="/register">Register</Link> or <Link to="/login">Login</Link> if you already have an account</p>}
            
        </div>
    )
}
