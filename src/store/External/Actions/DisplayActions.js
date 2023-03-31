import axios from "axios";
import { GET_CANDIDATE, GET_RESIDENTIAL, GET_HOMETOWN, GET_EDUCATIONALCHECK,
     GET_PREVIOUSEMPLOYER, GET_REFEREE, GET_GUARANTOR, GET_CRIMINALSTATUS, 
     GET_NYSC, GET_CREDITCHECK, GET_ALLEMPLOYEE, GET_LINK } from "./ActionTypes";

     export const AllEmployee = (order_id) =>{
        const token = localStorage.getItem('token');
         return async(dispatch, getState) => {
             const instance = axios.create({
                baseURL: 'http://hotelanywhere.ng/background/api',
    
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
             });
              return await  instance.get(`all_external_employee/${order_id}`)
              .then(response => 
                {   console.log('employeee', response)
                    return response
                })
                .then(async data =>{
                    
                  await dispatch({type: GET_ALLEMPLOYEE,  payload: data.data.data})
                })
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

export const DisplayCandidate = (employee_id) =>{
    const token = localStorage.getItem('token');
     return async(dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return await instance.get(`external_employee/${employee_id}`)
          .then(response => 
            {   console.log('particular employee response', response)
                return response
            })
            .then(async data =>{
                
               await dispatch({type: GET_CANDIDATE,  payload: data.data.data})
            })
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

export const DisplayResidential = (employee_id) =>{
    const token = localStorage.getItem('token');
     return async(dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return  await instance.get(`residential_address/${employee_id}`)
          .then( response =>  {  
            console.log('Res', response )
            return response;
           
            })
            .then(async data =>{
               
                 await dispatch({type: GET_RESIDENTIAL,  payload: data.data.data})
            })
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

export const DisplayHometown = (employee_id) =>{
    const token = localStorage.getItem('token');
     return (dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return instance.get(`home_town_address/${employee_id}`)
          .then(response =>  {   
              console.log('Homeeee', response)
                return response
            })
            .then(data =>{
                
               dispatch({type: GET_HOMETOWN,  payload: data.data.data})
            })
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

export const DisplayEducationalCheck = (employee_id) =>{
    const token = localStorage.getItem('token');
     return async(dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return await instance.get(`educational_check/${employee_id}`)
          .then(response =>  { 
               
                return response
            })
            .then(async data =>{
               
               await dispatch({type: GET_EDUCATIONALCHECK,  payload: data.data.data})
            })
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

export const DisplayPreviousEmployer = (employee_id) =>{
    const token = localStorage.getItem('token');
     return async(dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return await instance.get(`previous_employee_check/${employee_id}`)
          .then(response =>  {  
                console.log('employer', response)
                return response
            })
            .then(async data =>{
                
              await  dispatch({type: GET_PREVIOUSEMPLOYER,  payload: data.data.data})
            })
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

export const DisplayReferee= (employee_id) =>{
    const token = localStorage.getItem('token');
     return async (dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return await  instance.get(`getReferee/${employee_id}`)
          .then(response =>  {   
          
                return response
            })
            .then(data =>{
               
               dispatch({type: GET_REFEREE,  payload: data.data.data})
            })
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

export const DisplayGuarantor = (employee_id) =>{
    const token = localStorage.getItem('token');
     return async(dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return await instance.get(`getGuarantor/${employee_id}`)
          .then(response =>  {  
              
                return response
            })
            .then(data =>{
                
               dispatch({type: GET_GUARANTOR,  payload: data.data.data})
            })
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

export const DisplayCreditCheck = (employee_id) =>{
    const token = localStorage.getItem('token');
     return (dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return instance.get(`credit_check/${employee_id}`)
          .then(response =>  {
                
                return response
            })
            .then(data =>{
                
               dispatch({type: GET_CREDITCHECK,  payload: data.data.data})
            })
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


export const DisplayCriminalStatus = (employee_id) =>{
    const token = localStorage.getItem('token');
     return (dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return instance.get(`criminal_status/${employee_id}`)
          .then(response =>  {
               
                return response
            })
            .then(data =>{
                
               dispatch({type: GET_CRIMINALSTATUS,  payload: data.data.data})
            })
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

export const DisplayNysc= (employee_id) =>{
    const token = localStorage.getItem('token');
     return (dispatch, getState) => {
         const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
          return instance.get(`verify_nysc/${employee_id}`)
          .then(response =>  {   
             
                return response
            })
            .then(data =>{

               dispatch({type: GET_NYSC,  payload: data.data.data})
            })
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

// Link sent out

export const CompanyLink =(order_id) =>{
    const token = localStorage.getItem('token');
    return async (dispatch, getState) =>{
        const instance = axios.create({
            baseURL: 'http://hotelanywhere.ng/background/api',

            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
         return await instance.get(`getLink/${order_id}`)
         .then(response => {
             
             return response
         })
        //  .then(data =>{

        //     dispatch({type: GET_LINK,  payload: data.data.data})
        //  })
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