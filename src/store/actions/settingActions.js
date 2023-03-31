
import {store } from '../storage'

export const verificationCondition = (condition) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch('http://hotelanywhere.ng/background/api/setting', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
            body: JSON.stringify(condition),

        }).then(response => {
          
            return response.json()
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

export const getConditions = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch('http://hotelanywhere.ng/background/api/setting/show', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
        }).then(response => {
           
           return response.json()
        })
            .then(data => {
                dispatch({ type: 'GET_CONDITIONS', payload: data })
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

export const createUser = (user) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch('http://hotelanywhere.ng/background/api/auth/signup', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
            body: JSON.stringify(user),

        }).then(response => {
            return response.json()
        }).then(data => {
            let newdata = getState().settings.allUsers;
            let user = data.user
             newdata.push(user);
             dispatch({ type: 'GET_ALLUSERS', payload: {data: newdata}});
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

export const createRole = (role) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch('http://hotelanywhere.ng/background/api/role', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
            body: JSON.stringify(role),

        }).then(response => {
            return response.json()
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

export const getRoles = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch('http://hotelanywhere.ng/background/api/roles', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
        }).then(response => {
          
           return response.json()
        })
            .then(data => {
            dispatch({type: 'GET_ROLES', payload:data})
               
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


export const getPermissions = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch('http://hotelanywhere.ng/background/api/permissions', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
        }).then(response => {
           
           return response.json()
        })
            .then(data => {
            dispatch({type: 'GET_PERMISSIONS', payload:data})
               
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

export const getAllUsers = () => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch('http://hotelanywhere.ng/background/api/getallusers', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
        }).then(response => {
           
           return  response.json()
        })
            .then(data => {
            
            dispatch({type: 'GET_ALLUSERS', payload:data})
               
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


export const assignPermissionsToRole = (role, id) => {
  
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch(`http://hotelanywhere.ng/background/api/roles/${id}/permission`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
            body: JSON.stringify(role),

        })
            .then(response => {
           
            return response.json()
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

export const userDetails = (id) => {

    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch(`http://hotelanywhere.ng/background/api/user_show/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
            
        })
            .then(response => {
           
            return response.json()
            })
            .then(data =>
                dispatch({type: 'GET_USERDETAILS', payload:data})
                )
                .catch((error) => {
                    console.error('Error:', error);
                  });
            
    }
}

export const editUser = (user, id) => {

    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch(` http://hotelanywhere.ng/background/api/user_update/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
            body: JSON.stringify(user),

        })
            .then(response => {
               
               return  response.json();
            
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

export const deleteUser = ( id) => {
   
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch(` http://hotelanywhere.ng/background/api/user_delete/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data =>{
                dispatch({ type: 'GET_DELETEUSER', payload: data });
                return data;
                
            })
                .catch((error) => {
                    console.error('Error:', error);
                  });
    }
}

export const getSelectedPermissions = ( role) => {
   
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        return fetch(` http://hotelanywhere.ng/background/api/role/${role}/permissions`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
               
                 MergePermission(data);
                
                dispatch({ type: 'GET_SELECTEDPERMISSION', payload: data });
                return data;
                
            })
                .catch((error) => {
                    console.error('Error:', error);
                  });
    }
}

function MergePermission(selectedpermission)
{
    let merge = [];
    let allpermission = store.getState().settings.permissions
    allpermission.data.forEach(function (permission) {
        merge.push({
            id: permission.id,
            name: permission.name,
            created_at: permission.created_at
        });
    });
    selectedpermission.data.forEach(function (permission) {
        let index = merge.findIndex(x => x.name == permission.name);
        if (index > -1) {

            merge[index].access = 1;
        }
        else {
            merge[index].access = -1;
        }
    });

    store.dispatch({ type: 'GET_MERGE', payload: merge });
    return merge;

}

