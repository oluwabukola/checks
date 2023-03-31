const initState = {
    condition: null,
    conditions: null,
    user: null,
    role: null,
    roles: null,
    permissions: null,
    arrayofPermissions: [],
    allUsers: null,
    userinfo: null,
    // edituser: null,
    deleteuser: null,
    selectedpermission: [],
    merge:null,
  
}

const settingReducer = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_CONDITIONS': 
            return {
                ...state,
                condition: payload.data
            }
        
            case 'ADD_USER':
                return {
                    ...state,
                    user: payload.data
            }
        case 'GET_ALLUSERS':
           
                return {
                    ...state,
                    allUsers: payload.data
                }
               
            case 'ADD_ROLE':
                return {
                    ...state,
                    role: payload.data
            }
        case 'GET_ROLES': 
       
            return {
                ...state,
                roles: payload,
               
            }
            case 'GET_PERMISSIONS': 
            return {
                ...state,
                permissions: payload
            }
        case 'ADD_PERMISSIONSTOROLE':
            
            return {
                ...state,
                arrayofPermissions: payload.data
            }
            case 'GET_USERDETAILS':
            
                return {
                    ...state,
                    userinfo: payload.data
            }
            case 'ADD_EDITUSER':
            
                return {
                    ...state,
                    userinfo: payload.data
                }
        case 'GET_DELETEUSER':
         
                    return {
                        ...state,
                     
                         allUsers: state.allUsers.filter(item => item.id !== payload.data.id)
            }
        case 'GET_SELECTEDPERMISSION':
            state.selectedpermission = [];
            return {
                            
                            ...state,
                            selectedpermission: payload.data
                        }

                        case 'GET_CONDITIONS':
                            return {
                              ...state,
                            conditions: payload.data
            }
        case 'GET_MERGE':
            
                return {
                  ...state,
                merge: payload
                }
        default: return state
    }
}
export default settingReducer;