import axios from "axios";
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./actionTypes";
import { toast } from "react-toastify";
import { css } from 'glamor';

const postLoginRequest =() =>{
    return{
        type: LOGIN_USER_REQUEST,
    }
}

const postLoginSuccess =(login) =>{
    return{
        type: LOGIN_USER_SUCCESS,
        payload: login
    }
}

const postLoginFailure =() =>{
    return{
        type:LOGIN_USER_FAILURE
    }
}

export const loginUser = (data,  props) => {
   
    return async (dispatch, getState) => {

        dispatch(postLoginRequest());

    const instance = axios.create({
    baseURL:'http://hotelanywhere.ng/background/api/auth',

    timeout: 20000,
     headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

});
    return await instance.post('/login', data)
       
        .then( (response) => {
           
            console.log('Login response', response);
             return response;
         } ) 
         .then(async data => {
           console.log('data', data.data)
            const login = data.data;
            localStorage.setItem('token', login !== null && login.access_token);
            await dispatch(postLoginSuccess(login));
                     if(login.user.user_type == 'internal'){
                    props.history.push('/internal/home');
                  
                 }

                 else if (login.user.user_type == 'external'){
                    console.log('Externalll', login.user.user_type)
                     props. history.push('/external/dashboard');
                 }
             
            
        })
            
            .catch(async function (error) {
                
            console.log('error', JSON.stringify(error.message));

            let errorMessage = error.message
            if(errorMessage == 'Network Error'){
                toast.error('check internet connection', {
                    className: css({
                      background: "#00FF00 !important",
                      color: "white !important",
                      fontWeight: "bold"
                    }),
                    position: toast.POSITION.TOP_CENTER,
                  });
                }
                dispatch(postLoginFailure(errorMessage));
                // if(JSON.stringify(error.message)== JSON.stringify( "Network Error")){
                //     console.log("errrrrrntttt")
                //       const message = 'No network connection'
                //   return await dispatch({type: 'NETWORK_ERROR',  payload: { network: message}})
                // }
                // else if(error !== null && (error.response.status >200 && error.response.status < 500)){
                //   const message = 'Inavlid Email or password'
                //     return await dispatch({type: 'LOGIN_ERROR',  payload: { error: message}})
                // }
                // else if (error.response.status >200 && error.response.status<500){
                //     let message = 'Invalid email or password';
                //     return message;
                // }
                // else if(error.response.status >= 500){
                //     console.log('server error');
                // }

                // console.log('before')
            //  return  dispatch({type: 'ADD_LOGIN',  payload: {error: error}})
                
            
               
                // let error = JSON.stringify(err.message);
                // console.log(promise.reject(error.message))
                

                // return {
                //     success: error,
                //     data: []
                // }
            })
               
    }
}
export const updatedLogin = (data) => {
    return {type: 'ADD_LOGIN', payload:data}
}

