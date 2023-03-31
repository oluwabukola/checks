import axios from 'axios';
import { SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from '../../actions/actionTypes';
import { toast } from "react-toastify";
import { css } from 'glamor';
// import {REGISTER, CANDIDATE_LOGIN} from '../Actions/ActionTypes'


const postUserRequest =() =>{
    return{
        type: SIGNUP_USER_REQUEST
    }
}

const postUserSuccess =(register) =>{
    return{
        type: SIGNUP_USER_SUCCESS,
        payload: register
    }
}

const postUserFailure =() =>{
    return{
        type: SIGNUP_USER_FAILURE
    }
}

export const Registration=  (Data, props) => {
 
     return async (dispatch, getState) => {
        dispatch(postUserRequest());
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',

             headers: {
                //  'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
             }
         });
         return  await instance.post('/auth/signup', Data)
         .then(response => {
            return response
        })
        .then(data => {
            console.log('dataa', data)
            const register = data.data;
            dispatch(postUserSuccess(register));
            props. history.push('/');
        })
        .catch(error =>{
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
                dispatch(postUserFailure(errorMessage));;
        })
     }
 }


 export const EmployeeLogin = (data) =>{
    //  const token = localStorage.getItem('token');
    console.log('data sent', data)
      return async(dispatch, getState) => {

        const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api/auth',
            headers:{
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                 'Accept': 'application/json',
            }
        });
         return await instance.post('employee_login', data)
         .then(response => {
             return response;
         })
        //  .then(data => {
        //      dispatch({type:CANDIDATE_LOGIN, payload: data.data.data})
        //  })
         .catch(error => {
                    console.log(error)
                    return {
                        success: error,
                        data: []
                    }  }  
         )
      }
 }


 export const companyLogout = () =>{
     const token = localStorage.getItem('token');
     console.log('logoutoken t token', token )
        return async(dispatch, getState) => {

        const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api/auth',
            headers:{
                 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                 'Accept': 'application/json',
            }
        });
         return await instance.get('/logout')
         .then(response => {
             console.log('employee logout response', response)
             return response;
         })
        //  .then(data => {
        //     window.localStorage.clear();
        //  })
         .catch(error => {
                    console.log(error)
                    return {
                        success: error,
                        data: []
                    }
             }
            
         )
      }
 }