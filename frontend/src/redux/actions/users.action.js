import { userLogin, userRegistration } from "../../Api/users"
import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS} from "../actionTypes";

export const loginUser = (user) => async(dispatch) => {
    dispatch({type: GET_USER_REQUEST})
try {
    const res = await userLogin(user);
    // console.log(res);
    dispatch({type: GET_USER_SUCCESS, payload: res})
} catch (err) {
    // console.log(err.response.data.message);
    dispatch({type: GET_USER_FAIL,payload: err.response.data.message})
}
}


export const registerUser = (user) => async(dispatch) =>{
    // console.log(user);
    dispatch({type: REGISTER_USER_REQUEST});
    try{
    const res = await userRegistration(user)
    console.log(res.statusText);
    dispatch({type: REGISTER_USER_SUCCESS, payload: res})}
    catch(err){
        console.log(err.response);
        dispatch({type: REGISTER_USER_FAIL, payload: err.response.data.message})
    }
}