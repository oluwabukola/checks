
const initState = {
    referee: [],
    getReferees: [],
    oneReferee: [],
    editreferee: [],
  
  };


const refereeReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        
        case 'ADD_REFEREE':
          
           
            return {
                ...state,
                referee: payload.data
            };
            case 'GET_REFEREES':
               
               
                return {
                    ...state,
                    getReferees: payload.data
                };
        
                case 'DISPLAY_REFEREE':
               
                    return {
                        ...state,
                        oneReferee: payload.data
            };
        
            case 'EDIT_REFEREE':
            
                return {
                    ...state,
                    editreferee: payload.data
            };
            case 'DELETE_REFEREE':
               
                return {
                    ...state,
                    getReferees: state.getReferees.filter(item => item.referee_id !== action.payload)
                };
            
        default:
            return state;
        
    }
    
}
  
  
export default refereeReducer;