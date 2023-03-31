
export const displayCandidate = (candidate) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/getallcandidatestobeverified', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
              
               dispatch({ type: 'DISPLAY_CANDIDATES', payload: data })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
}
             
}

export const updatedVerification = (data) => {
    return (dispatch, getState) => {
    dispatch ({type: 'DISPLAY_CANDIDATES', payload:data})
        return data;
    }
}

export const Guarantors = (guarantors) => {
   
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeesguarantor/${guarantors}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
             .then(async (data) => {
          
            await dispatch({ type: 'DISPLAY_GUARANTORS', payload: data })
             })
            .catch((error) => {
                 console.error('Error:', error);
            });
}
             
}

export const PreviousEmployers = (prevEmployers) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeespreviousemployer/${prevEmployers}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
         
                dispatch({ type: 'DISPLAY_PREVEMPLOYERS', payload: data })
            })
            .catch((error) => {
                 console.error('Error:', error);
            });
}
             
}

export const displayReferees = (referees) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getemployeereferee/${referees}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
     
                dispatch({ type: 'DISPLAY_REFEREES', payload: data })
            })
            .catch((error) => {
                 console.error('Error:', error);
            });
}
             
}

export const verifyGuarantor = (guarantor) => {
    const token = localStorage.getItem('token');
  
    return (dispatch, getState) => {
       
       
        return  fetch(`http://hotelanywhere.ng/background/api/updateguarantor/${guarantor.id}`, {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                'Accept':  'application/json',
                    
            },
            body: JSON.stringify(guarantor),
           
        })
             .then(response =>  response.json())
             . then(response => {
                
                 let guarantorss = getState().verification.guarantors;
                 const index = guarantorss.findIndex(guarantors=> guarantors.guarantor_id == guarantor.id);
                 guarantorss[index] = response.data;
                
                 let data = {
                     data: guarantorss
                 }
                  dispatch({ type: 'DISPLAY_GUARANTORS', payload: data })
            
            })

            .catch(e => {
                console.log('error', e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}


export const verifyEmployer = (employer) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {
       
        return  fetch(`http://hotelanywhere.ng/background/api/updateemployeespreviousemployer/${employer.id}`, {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                    
            },
            body: JSON.stringify(employer),
        })
            .then(response => response.json())
            .then(response => {
              let employerss = getState().verification.prevEmployers;
            
                const index = employerss.findIndex(x => x.previousemployer_id == employer.id);
             
                employerss[index] = response.data
                let data = {
                    data: employerss,
                }
                dispatch({ type: 'DISPLAY_PREVEMPLOYERS', payload: data })
             
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


export const verifyReferee = (referee) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {
       
        return  fetch(`http://hotelanywhere.ng/background/api/updateemployeesreferee/${referee.id}`, {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(referee),
        })
            .then(response => response.json())
            .then(response => {
                let refereess = getState().verification.referees
                const index = refereess.findIndex(x => x.referee_id == referee.id);
            
                refereess[index] = response.data
               let data = {
                data: refereess,
            }
            dispatch({ type: 'DISPLAY_REFEREES', payload: data })
            
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

export const verifyAddress = (address) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
       
        return  fetch(`http://hotelanywhere.ng/background/api/updateemployee/${address.id}`, {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(address),
        })
            .then(response => response.json())
            .then(response => {
                let addresss = getState().verification.oneEmployee;
             addresss = response.data
               let data = {
                data: addresss,
            }
            dispatch({ type: 'GET_EMPLOYEE', payload: data })
           
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



export const oneGuarantor = (guarantor) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeeguarantor/${guarantor}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'GET_GUARANTOR', payload: data })
            })
            .catch((error) => {
                 console.error('Error:', error);
            });
}
             
}

export const onePreviousEmployer = (employer) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeepreviousemployer/${employer}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'GET_EMPLOYER', payload: data })
            })
            .catch((error) => {
                 console.error('Error:', error);
            });
}
             
}

export const oneReferee = (referee) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getemployeerefereee/${referee}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'GET_REFEREE', payload: data })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
}
             
}
export const oneEmployee= (employee) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getemployee/${employee}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'GET_EMPLOYEE', payload: data });
            })
            .catch((error) => {
                 console.error('Error:', error);
            });
}
             
}

export const Paginate = (page) => {
    const token = localStorage.getItem(token);
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallcandidatestobeverified?page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                return response.json();
            
            })
        
            .then(data => {
                dispatch({ type: 'GET_EMPLOYEE', payload: data });
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

}


export const Results = (results) => {
  
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeesresult/${results}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
             .then(async (data) => {
          
            await dispatch({ type: 'DISPLAY_RESULTS', payload: data })
             })
            .catch((error) => {
                // console.error('Error:', error);
            });
}            
}


export const oneResult = (result) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getemployeeresult/${result}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                return response.json();   
            })
            .then(data => {
                dispatch({ type: 'GET_RESULT', payload: data })
            })
            .catch((error) => {
                 console.error('Error:', error);
            });
}          
}

export const verifyResult= (result) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {
       
        return  fetch(`http://hotelanywhere.ng/background/api/updateemployeeresult/${result.id}`, {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(result),
        })
            .then(response => response.json())
            .then(response => {
                let resultss = getState().verification.results
                const index = resultss.findIndex(x => x.result_id == result.id);
            
                resultss[index] = response.data
               let data = {
                data: resultss,
            }
            dispatch({ type: 'DISPLAY_RESULTS', payload: data })
            
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


export const verifiedEmployee = () => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/verifiedemployees', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                return response.json();   
            })
            .then(data => {
                dispatch({ type: 'GET_VERIFIED', payload: data })
            })
            .catch((error) => {
                 console.error('Error:', error);
            });
}          
}


export const searchBox = (word) => {
    const token = localStorage.getItem('token');

    return (dispatch, getState) => {

        return  fetch('http://hotelanywhere.ng/background/api/search_unverified_employee', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
                    
            },
            body: JSON.stringify(word),
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
export const updateUnverifiedSearch = (data) => {
    
    return { type: 'UPDATE_UNVERIFIED', payload: data }
}



export const searchBoxVerified = (verifiedWord) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {

        return  fetch('http://hotelanywhere.ng/background/api/search_verified_employee', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
                    
            },
            body: JSON.stringify(verifiedWord),
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

export const updateVerifiedSearch = (data) => {
    
    return { type: 'UPDATE_VERIFIED', payload: data }
}
