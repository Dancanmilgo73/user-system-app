import {combineReducers} from 'redux';
import { loginReducer } from './users.reducer';


const rootReducer = combineReducers({auth: loginReducer});

export default rootReducer;