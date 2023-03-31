import axios from "axios";
import { CREATE_ORDER, CREATE_TRANSACTION, GET_TRANSACTION,
GET_ORDER } from "./ActionTypes";


export const CreateOrder =   (id) =>{
    const token = localStorage.getItem('token');
    return(dispatch,getState) => {
        const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
         return  instance.post(`/createOrder/${id.Id}`)
         .then ( response => {

             console.log('create order',response)
            return response
        }
            )
            // .then(  data => {
                
            //      dispatch({type: CREATE_ORDER, payload: data})
             
            //     console.log('data', data )
                
            // } )
            .catch(error => {
                console.log(error);
                return {
                    success: error,
                    data: []
                }
            })
    }
} 
 export const CreateTransaction =  (transaction) => {
    const token = localStorage.getItem('token');
    console.log('transaction', transaction)
     return async (dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',

             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
             }
         });
         return await instance.post('/createTransaction', transaction )
         .then(async response => 
            {
                console.log('created transaction', response)
                 return  response
            })
        //     .then(data =>{
                
        //        dispatch({type: CREATE_TRANSACTION, payload: data})
        //     })
            .catch(
                error => {
                    console.log(error)
                    return {
                        success: error,
                        data: []
                    }
                })
     }
 }

export const SelectType = () => {
    const token = localStorage.getItem('token');
    return async (dispatch, getState) => {

    const instance = axios.create({
     baseURL:'http://hotelanywhere.ng/background/api',
    
     headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

});
    return await instance.get('/types')
     .then(response => { 
            return  response;   
          }) 
          .then( async data => {

              let Choice = data.data.types; 
            await dispatch({type: 'GET_verificationType', payload: Choice})
           
        })
            .catch(error => {
                console.log(error)
                return {
                    success: error,
                    data: []
                }
            })}
}

export const GetTransaction = (user_id, order_id) => {
    // const token = localStorage.getItem('token');
     return async  (dispatch, getState) =>{

         const instance = axios.create({
             baseURL: 'http://hotelanywhere.ng/background/api',
             headers: {
                // 'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         }); 
         
         return await instance.get(`/getTransaction/${user_id}/${order_id}`)
         .then(response => {
             return response
         })
         
         .catch(error =>{
            console.log(error)

            return {
                success: error,
                data: []
            }
         })
     }
}

export const GetOrder = (Id) => {
    const token = localStorage.getItem('token');
    console.log('iddddd', Id)
     return async (dispatch, getState) =>{

         const instance = axios.create({
             baseURL: 'http://hotelanywhere.ng/background/api',
             headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         }); 
         
         return await instance.get(`/getUserOrder/${Id}`)
         .then(response => {
            
             return response
         })
         .then(async data =>{
             console.log('Get user order', data.data.data)
            
            await  dispatch({type:GET_ORDER, payload:data.data.data})
         })
         .catch(error =>{
            console.log(error)

            return {
                success: error,
                data: []
            }
         })
     }
}