export const deleteEmployee = (id) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/employee/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
        
        })
            .then(response => {
         
                return response.json();
                    
            })
            .then(data => {
                // console.log(data)
                dispatch({ type: 'DELETE_EMPLOYEE', payload: id })
          
                return data

            })
            .catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const deleteGuarantor = (id) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/guarantor/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'DELETE_GUARANTOR', payload:id })
                return data
            })
            .catch(e => {
             
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const deleteResult = (id) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/employee_result/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
           
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'DELETE_RESULT', payload:id })
                return data
            })
            .catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}


export const deleteEmployer = (id) => {
    
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/previous_employee/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'DELETE_EMPLOYER', payload:id })
                return data
            })
            .catch(e => {
                // console.log(e)
                return {
                    success: false,
                    data: []
                }
            })         
    }
}

export const deleteRegion = (id) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/region/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
            },
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'DELETE_REGION', payload:id })
                return data
            })
            .catch(e => {

                return {
                    success: false,
                    data: []
                }
            })         
    }
}

export const deleteReferee = (id) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/referee/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
          
        })
            .then(response => {
             
                return response.json();
                    
            })
            .then(data => {
              
                dispatch({ type: 'DELETE_REFEREE', payload:id })
                return data
            })
            .catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}