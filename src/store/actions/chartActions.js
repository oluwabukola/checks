export const guarantorChart = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/getguarantorcount', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
            
                dispatch({ type: 'GUARANTORS_CHART', payload: data })
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
        
}

export const employerChart = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/getpreviousemployercount', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
               
                dispatch({ type: 'PREVIOUSEMPLOYERS_CHART', payload: data })
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
        
}

export const refereeChart = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/getrefereecount', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
               
                dispatch({ type: 'REFEREES_CHART', payload: data })
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
        
}


export const addressChart = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/getaddresscount', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
               
                dispatch({ type: 'ADDRESS_CHART', payload: data })
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
        
}


export const resultChart = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/getemployeeresultcount', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
              
                dispatch({ type: 'RESULT_CHART', payload: data })
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
        
}