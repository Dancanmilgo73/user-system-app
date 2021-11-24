import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS,REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../actionTypes";

// const initialState = {
//     token: null,
//     loading: false
// }
const initialState = {
   addUser: {
       registerUserError: null,
       registerUserSuccess: null,
   },
   loginuser: {
       loginUserError: null,
       loginUserSuccess: false,
       accessToken: null
   },
   loading: false
  };

export const loginReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case REGISTER_USER_REQUEST:
            return {...state, loading: true}
        case REGISTER_USER_SUCCESS:
            return {...state, addUser: {registerUserSuccess: payload}, loading: false}
        case REGISTER_USER_FAIL:
            return {...state, addUser: {registerUserError: payload}, loading: false} 
        case GET_USER_REQUEST:
            return {...state, loading: true};
        case GET_USER_SUCCESS: 
            return{...state, loginuser: {...state.loginuser,loginUserSuccess: true, accessToken: payload}, loading: false}
        case GET_USER_FAIL:
            return {...state, loginuser: {...state.loginuser,loginUserError: payload},loading: false};    
        default:
            return state;
    }
}