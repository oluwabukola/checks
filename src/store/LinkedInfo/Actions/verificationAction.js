import axios from 'axios';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';

import { GET_HOMETOWN, GET_REFEREE, GET_GUARANTOR, GET_CREDITCHECK, GET_CRIMINALSTATUS,
GET_EDUCATIONALCHECK, GET_PREVIOUSEMPLOYER, GET_NYSC, GET_RESIDENTIAL, UPDATE_HOMETOWN,
UPDATE_GUARANTOR, UPDATE_REFEREE, UPDATE_EMPLOYER} from '../../External/Actions/ActionTypes';


export const VerifyHometown = (homeTown, Id) =>{

    const token = localStorage.getItem('token');
  
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.put(`/home_town_address/${Id}`, homeTown)

        .then( response => {
        
             return response;
         }
        ) 

        .then(async response =>{
            let home=  await getState().externalDisplay.getHometownAddress;
            const index = home !== null && home.findIndex(x => x.employee_id == Id);
            home[index]= response.data.data;
            
            let data ={
                 data: home
             }
            await  dispatch({type:UPDATE_HOMETOWN,  payload:home});
              
          })
            
            .catch(async function (error) {
           
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}


export const VerifyResidential= (residential, Id) =>{
    const token = localStorage.getItem('token');
  
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.put(`/residential_address/${Id}`, residential)

        .then( (response) => {
            
             return response;
         }
        ) 

        .then(async response =>{
              let resident=  await getState().externalDisplay. getResidentialAdddress;
            resident = response.data.data
            let data ={
                data: resident
            }
            console.log('resident after', resident);
            await  dispatch({type:GET_RESIDENTIAL,  payload:resident})
          })
            
            .catch(async function (error) {
                
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}


export const VerifyEducational= (educationalCheck, Id) =>{
    
    const token = localStorage.getItem('token');
  
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.put(`/educational_check/${Id}`, educationalCheck)

        .then( (response) => {
             return response;
         }
        ) 

        .then(async response =>{
            let education = getState().externalDisplay.getEducationalCheck;
             education = response.data.data;
             await  dispatch({type:GET_EDUCATIONALCHECK,  payload:education});
            
          })
            
            .catch(async function (error) {
                
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}

export const VerifyNysc= (nyscCheck, Id) =>{
    const token = localStorage.getItem('token');
  
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.put(`/verify_nysc/${Id}`, nyscCheck)

        .then( (response) => {
             return response;
         }
        ) 

        .then(async response =>{
            let nysc=  getState().externalDisplay.getNysc;
            nysc = response.data.data;
            await dispatch({type:GET_NYSC,  payload:nysc})
          })
            
            .catch(async function (error) {
                
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}


export const VerifyEmployer = (previousEmployer, Id) =>{
    const token = localStorage.getItem('token');
 
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.put(`/previous_employee_check/${Id}`, previousEmployer)

        .then( response => {
           
             return response;
         }
        ) 

        .then(async response =>{
            let employer=  getState().externalDisplay.getPreviousEmployer;
            console.log('employereree',response.data.data);
            const index = employer.findIndex(x => x.employee_id == Id);
            employer[index] = response.data.data;
           
            await  dispatch({type:UPDATE_EMPLOYER,  payload:employer})
          })
            
            .catch(async function (error) {
                
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}

export const VerifyReferees = (referee, Id) =>{
   
    const token = localStorage.getItem('token');
  
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await instance.put(`/refree/${Id}`, referee)
        .then( response => {
             return response;
         }) 
         
        .then(async response =>{
            let ref=  getState().externalDisplay.getReferee;
            const index = ref.findIndex(x => x.employee_id == Id);
             ref[index] = response.data.data;
             await  dispatch({type:UPDATE_REFEREE,  payload:ref})
          })
            
            .catch(async function (error) {
                
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}

export const VerifyGuarantors = (guarantor, Id) =>{
    const token = localStorage.getItem('token');
  
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.put(`/getGuarantor/${Id}`, guarantor)

        .then( (response) => {
            console.log('Guarantor response', response);
             return response;
         }
        ) 

        .then(async response =>{
            let guarant=  getState().externalDisplay.getGuarantor;
            console.log('Guarant',guarant);
            const index = guarant.findIndex(x => x.employee_id == Id);
            console.log('indexxx', index);
            guarant[index] = response.data.data;
            console.log('guarantor after', guarant);
            await  dispatch({type:UPDATE_GUARANTOR,  payload:guarant})
            // toast.notify('Guarantor successfully verified!');
          })
            
            .catch(async function (error) {
                
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}

export const VerifyCredit= (creditCheck, Id) =>{
    const token = localStorage.getItem('token');
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.put(`/credit_check/${Id}`, creditCheck)

        .then( (response) => {
             return response;
         }) 
        .then(async response=>{
            let credit=  getState().externalDisplay.getCreditCheck;
            credit = response.data.data 
            await  dispatch({type:GET_CREDITCHECK,  payload:credit})
            
          })
            
            .catch(async function (error) {
                
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}


export const VerifyCriminal = (criminalCheck, Id) =>{
    console.log('data being sent', criminalCheck);
    const token = localStorage.getItem('token');
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 2500,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.put(`/criminal_status/${Id}`, criminalCheck)

        .then( (response) => {
            console.log('criminal check response', response)
             return response;
         }
        ) 

        .then(async response=>{
            let criminal=  getState().externalDisplay.getCriminalStatus;
           
             criminal = response.data.data;
            console.log('criminal after',criminal)
            await  dispatch({type:GET_CRIMINALSTATUS,  payload:criminal})
            
          })
            
            .catch(async function (error) {
                
            // console.log('reeor', JSON.stringify(error.message));
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
            })
    }
}



