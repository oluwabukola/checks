
const initState = {
    employer: [],
    employers: [],
    oneemployer: [],
    editemployer: [],
    error: null
};
  
const employerReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {

        case 'ADD_EMPLOYER':
           
            return {
                ...state,
                 error: null,
                employer: payload.data
            };
            case 'GET_EMPLOYERS':
    
            return {
                ...state,
                
                employers: payload.data
            };
             case 'DISPLAY_EMPLOYER':
       
            return {
                ...state,
                oneemployer: payload.data
            };
            case 'EDIT_EMPLOYER':
            
                return {
                    ...state,
                    editemployer: payload.data
            };
            case 'DELETE_EMPLOYER':
         
                return {
                    ...state,
                    employers: state.employers.filter(item => item.previousemployer_id !== action.payload)
                };
            
        default:
            return state;
    }
    
}
  
export default employerReducer;