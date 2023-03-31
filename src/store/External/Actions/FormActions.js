import axios from "axios";
import { CREATE_CANDIDATE, RESIDENTIAL_ADDRESS, HOME_TOWN, EDUCATIONAL_CHECKS,
PREVIOUS_EMPLOYER, CREATE_REFEREE, CREATE_GUARANTOR, CREDIT_CHECK, CRIMINAL_STATUS,
NYSC_RESULT} from "./ActionTypes";

export const Candidates =  (data, link) => {
    const token = localStorage.getItem('token');
     return async(dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api/auth',

             headers: {
                //  'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
             }
         });
        //  return  instance.post(`/create_external_employee/${order_id}`, data)
        return  await instance.post(`/employee_signup/${link}`, data)
         .then(response => 
            {
                return response
            })
            // .then(data =>{
            
            //    dispatch({type: CREATE_CANDIDATE,  payload: data.data.data})
            // })
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
  export const residentialAddress = (address) =>{

    const token = localStorage.getItem('candidateToken');
 
     return async(dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',

             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
             }
         });
         return await  instance.post('create_residential_address', address)
         .then(response => 
            {
                return response
            })
            .then(data =>{
                console.log('res data', data)
               dispatch({type: RESIDENTIAL_ADDRESS, payload: data.data.data})
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

  export const homeTown = (home) =>{

    const token = localStorage.getItem('candidateToken');
    console.log('home town token', token)
 
     return async (dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',

             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
             }
         });
         return await instance.post('create_home_town_address', home)
         .then(response => 
            {
                console.log('response hometown', response)
                return response
            })
            .then(data =>{
                console.log('how data', data)
               dispatch({type: HOME_TOWN, payload: data.data.data})
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

  export const ResultChecks = (result) =>{

    const token = localStorage.getItem('candidateToken');
  
     return async (dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',

             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
             }
         });
         return await  instance.post('create_educational_check', result)
         .then(response => 
            {
        
                return response
            })
            .then(data =>{
               
               dispatch({type: EDUCATIONAL_CHECKS, payload: data.data.data})
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

  export const PreviousEmployers = (previousEmployer) =>{
   
    const token = localStorage.getItem('candidateToken');
    
     return async (dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',

             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',  
             }
         });
         return await instance.post('previous_employee_check', previousEmployer)
         .then(response => 
            {console.log('previous employer response', response)
                return response
            })
            .then(data =>{
                
               dispatch({type: PREVIOUS_EMPLOYER, payload: data.data.data})
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

  
  export const Referee = (referee) =>{

    const token = localStorage.getItem('candidateToken');
    
     return async(dispatch, getState) => {
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',
             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',  
             }
         });
         return await instance.post('create_referee', referee)

         .then(response => 
            {
             
                return response
            })
            .then(data =>{
                
               dispatch({type: CREATE_REFEREE, payload: data})
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

  
  export const Guarantor = (guarantor )=>{
     

    const token = localStorage.getItem('candidateToken');
     return async(dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',
             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',  
             }
         });
         return await instance.post('create_guarantor', guarantor)

         .then(response => 
            {
              
                return response
            })
            .then(async data =>{
              await dispatch({type: CREATE_GUARANTOR, payload: data.data.data})
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

  
  export const CreditCheck = (credit )=>{
    const token = localStorage.getItem('candidateToken');
    
     return async (dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',
             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',  
             }
         });
         return await instance.post('credit_check', credit)

         .then(response => 
            {
                console.log('credit response', response)
                return response
            })
            .then(data =>{
                console.log('data', data);
               dispatch({type: CREDIT_CHECK,  payload: data.data.data})
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

  export const criminalStatus= (criminal )=>{
    const token = localStorage.getItem('candidateToken');
    
     return async (dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',
             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',  
             }
         });
         return await  instance.post('criminal_status', criminal)

         .then(response => {
                console.log('criminal response', response);
                return response
            })
            .then(data =>{
                
               dispatch({type: CRIMINAL_STATUS,  payload: data.data.data})
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

  export const NyscResult= (nysc )=>{
    const token = localStorage.getItem('candidateToken');
    
     return async (dispatch, getState) => {
         
         const instance = axios.create({

             baseURL: 'http://hotelanywhere.ng/background/api',
             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',  
             }
         });
         return await  instance.post('verify_nysc', nysc)

         .then(response => 
            {
                console.log('nysc response', response)
                return response
            })
            .then(data =>{
                
               dispatch({type: NYSC_RESULT,  payload: data.data.data})
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
