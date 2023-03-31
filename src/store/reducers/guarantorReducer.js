
const initState = {
    oneguarantor:[],
    guarantor: [],
    guarantors: [],
    error: null,
    editguarator:[]
    
  };


const guarantorReducer = (state = initState, action) => {
    
    
     const{type, payload} = action
    switch (type) {

        
        case 'ADD_GUARANTOR':
           
            return {
                ...state,
                guarantor: payload.data
            };
            case 'DISPLAY_GUARANTOR':
               
                return {
                    ...state,
                    oneguarantor: payload.data
            };
            case 'GET_GUARANTORS':
              
                return {
                    ...state,
                    guarantors: payload.data === undefined ? [] :  payload.data
                };
            
            case 'EDIT_GUARANTOR':
            
                return {
                    ...state,
                    editguarantor: payload.data
            };
            case 'DELETE_GUARANTOR':
              
                return {
                    ...state,
                    guarantors: state.guarantors.filter(item => item.guarantor_id !== action.payload)
                };
        
        default:
            return state;
        
    }
    
}
  
  
export default guarantorReducer;