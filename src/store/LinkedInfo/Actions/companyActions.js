import axios from 'axios';
import {ALL_COMPANIES, COMPANY_ORDERS} from './ActionTypes'

export const AllCompanies = () =>{
    const token = localStorage.getItem('token');
  
    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',
            timeout: 20000,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return await instance.get('/getAllCompany')

        .then( (response) => {
           
             return response;
         }
        ) 

        .then(async data =>{
              
            await  dispatch({type:ALL_COMPANIES,  payload:data.data.Company})
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


export const CompanyOrders = (user_id) =>{
    const token = localStorage.getItem('token');

    return async (dispatch, getState) => {
        const instance = axios.create({
            baseURL:'http://hotelanywhere.ng/background/api',

            timeout: 20000,
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await instance.get(`/getUserOrder/ ${user_id}`)

        .then( (response) => {
       
             return response;
         }) 

        .then(async data =>{
            console.log('companyyyy', data.data.data)
            
            await  dispatch({type:COMPANY_ORDERS,  payload:data.data.data})
          })
            
            .catch(async function (error) {
                
            console.log('reeor', JSON.stringify(error.message));
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