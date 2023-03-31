import { store } from "../storage";

export const createdEmployee = () => {
    const token = localStorage.getItem('token');
    console.log('internal token', token)
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/employee', {
            method: 'GET',
        headers: {
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            
        })
            .then(response => {
              console.log('created employee', response)
             return response.json()
            })
            .then(data => {
                console.log('created employee date', data)
                dispatch({type: 'ADDED_EMPLOYEE', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    }
}

export const updatedEmployee = (data) => {
    
    return {type: 'ADDED_EMPLOYEE', payload:data}
}

export const creatingEmployee = (employee) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
       
        return  fetch('http://hotelanywhere.ng/background/api/employee', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(employee),
        })
            .then(response => {
             
                return response.json(); 
            }).catch(e => {
                
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const createGuarantor = (guarantor) => {
    const token = localStorage.getItem('token');
 
    return (dispatch, getState) => {
       
        return  fetch('http://hotelanywhere.ng/background/api/guarantor', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                'Accept':  'application/json',
        
            },
            body: JSON.stringify(guarantor),
          
        })
      
            .then(response => {
                
                return response.json(); 
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const createEmployer = (employer) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {
       
        return  fetch('http://hotelanywhere.ng/background/api/previous_employee', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
                    
            },
            body: JSON.stringify(employer),
        })
            .then(response => {
             
                return response.json();
                       
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}



export const createRegion= (region) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {
       
        return fetch('http://hotelanywhere.ng/background/api/region', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
             body: JSON.stringify(region),
          
        })
            .then(response => {
            
                return response.json();
                    
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}


export const createResult = (formData) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {
       
        return fetch('http://hotelanywhere.ng/background/api/employee_result', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                    
            },
            
            body: formData
        }).then(response => {
                return response.json();

            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })      
    }
}


export const displayRegion = (regionName) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/region', {
            method: 'GET',
        headers: {
            'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            
        })
            .then(response => {
              return  response.json();
                
            })
            .then(data => {
              
              dispatch({type: 'DISPLAY_REGION', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
        
        
    }
}

export const editRegion= (region) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/region/${region.id}`, {
        
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(region),
        })
            .then(response => {
               
                return response.json();
                    
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const createReferee= (referee) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
       
        return  fetch('http://hotelanywhere.ng/background/api/referee', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
                    
            },
            body: JSON.stringify(referee),
        })
            .then(response => {
       
                return response.json();
                       
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}



export const searchBoxCandidate = (candidateWord) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {

        return  fetch('http://hotelanywhere.ng/background/api/search_web_employee', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
                    
            },
            body: JSON.stringify(candidateWord),
        })
            .then(response => {
                return response.json();
                       
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
     }
}

export const updateCandidateSearch= (data) => {
    
    return { type: 'UPDATE_EMPLOYEE', payload: data }
}
