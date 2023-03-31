
const initState = {
    formData: [],
    oneresult: [],
    results: [],
     editresult:[],
    error: null,
    
  };


const resultReducer = (state = initState, action) => {
    
    
     const{type, payload} = action
    switch (type) {
        
        case 'ADD_RESULT':
             
            return {
                ...state,
                result: payload.data
            };
              
            case 'GET_RESULTS':
              
                return {
                    ...state,
                    results: payload.data === undefined ? [] :  payload.data
            };
            case 'DISPLAY_RESULT':
               
                return {
                    ...state,
                    oneresult:  payload.data
                };
            case 'EDIT_RESULT':
            
                return {
                    ...state,
                 oneresult: payload.data
            };
            case 'DELETE_RESULT':
                return {
                    ...state,
                    results: state.results.filter(item => item.result_id !== action.payload)
            };

            
        default:
            return state;
        
    }
    
}
  
  
export default resultReducer;