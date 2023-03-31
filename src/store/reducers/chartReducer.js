const initState = {
    guarantor: [],
    previousEmployers: [],
    referees: [],
    address: [],
    result: [],
   
}

const chartReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case 'GUARANTORS_CHART':
          
            return {
                ...state,
            guarantor: payload
            };
            case 'PREVIOUSEMPLOYERS_CHART':
              
                return {
                    ...state,
            previousEmployers: payload
                };
                case 'REFEREES_CHART':
                    return {
                        ...state,
                referees: payload
            };
            case 'ADDRESS_CHART':
              
                return {
                    ...state,
                address: payload
            };
            case 'RESULT_CHART':
              
                return {
                    ...state,
                result: payload
                };
         
        default: return state;
        
    }
    
}

export default chartReducer;