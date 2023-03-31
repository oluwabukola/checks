import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from "../actions/actionTypes";
import { SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from '../actions/actionTypes';
import { toast } from "react-toastify";

const initState = {
    login:null,
    register: null,
    loading: false, 
    error: null
  };


const loginReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case LOGIN_USER_REQUEST: return {...state, loading:true};
       
        case LOGIN_USER_SUCCESS: {
            
            toast.success("Login successful",
        {
            position: toast.POSITION.BOTTOM_CENTER,
            className: 'newTest',
            bodyClassName: "grow-font-size",
            progressClassName: 'fancy-progress-bar'
        })
        return {loading: false, login: payload, access: payload.access_token}
        };

        case SIGNUP_USER_FAILURE: return {loading: false, error:payload};

        case SIGNUP_USER_REQUEST: return {...state, loading:true};
       
        case SIGNUP_USER_SUCCESS: {
            
            toast.success("registration successful",
        {
            position: toast.POSITION.BOTTOM_CENTER,
            className: 'newTest',
            bodyClassName: "grow-font-size",
            progressClassName: 'fancy-progress-bar'
        })
        return {loading: false, register: payload}
        };

        case LOGIN_USER_FAILURE: return {loading: false, error:payload};


        // case 'ADD_LOGIN':
    
        //     return {
        //         ...state,
        //         login: payload,
        //         access: payload.access_token, 
               
        //     };
        
        default:
            return state;
        
    }
    
}
  
export default loginReducer;