
  
import axios from "axios";

export const userLogin = async(user) => {
    const res = await axios.post("http://localhost:3001/user/login", user
    );
    console.log(res);
    return res.data;
}

export const userRegistration = async(user) => {
   
    const res = await axios.post("http://localhost:3001/user/register", user);
    // console.log(res);
    return res;
  
}