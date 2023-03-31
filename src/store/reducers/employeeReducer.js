const initState = {
    create: [],
    employee: [],
    employed: [],
    page:null,
    display: [],
    result: [],
    editemployee: [],
    guarantors: [],
    // deleteemployee: [],
    candidateWord: [],
  
}

const employeeReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case 'ADD_EMPLOYEE':
    
            return {
                ...state,
            create: payload.data
            };
        
        case 'ADDED_EMPLOYEE': {

            state.page = null;
            let newData = payload.data.data
           let employed = state.employed
            const extract = employed.filter(search =>  !newData.some(word => word.id === search.id) )
            
            return {
                ...state,
                employed: extract.concat(newData),
                page : payload.data 
            }
         
        }
            case 'DISPLAY_EMPLOYEE':
             
                return {
                    ...state,
                    display: payload.data
            };
    
        case 'EDIT_EMPLOYEE':
         
            return {
                ...state,
                editemployee: payload.data
            };
        case 'DELETE_EMPLOYEE':
            
            let pages = state.page;
            const extract2 = state.page.data.filter(item => item.employee_id !== action.payload)
            pages.data = extract2
           const extract = state.employed.filter(item => item.employee_id !== action.payload )
            state.employed =[]
            // console.log('pages', pages)
  
                return {
                    ...state,
                    employed: state.employed.concat(extract),
                    page: pages
            };
        
        case 'CANDIDATE_WORD':
         
            return {
                ...state,
             
                candidateWord: payload.data
            
            }
            case 'UPDATE_EMPLOYEE':
         
                return {
                    ...state,
                 employed:payload.data
                
                }
        default:
            return state;
        
    }
    
}

export default employeeReducer;