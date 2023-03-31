const initState = {
    candidate: [],
    guarantors:[],
    prevEmployers: [],
    referees: [],
    verifyGuarantor: [],
    verifyResult: [],
    verifyEmployer: [],
    verifyReferee: [],
    verifyAddress: [],
    oneGuarantor: [],
    oneEmployer: [],
    oneReferee: [],
    oneEmployee: [],
    results: [],
    oneResult: [],
    verif: [],
    verified: [],
    updatedVerified: [],
    employeeStatus: null,
    word: null,
     verifiedWord: null
}
const verificationReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        
        case 'DISPLAY_CANDIDATES':
            
        //     let newData = payload.data.data
        //    let verification = state.verification
        //     const extract = verification(search =>  !newData.some(word => word.id === search.id) )
            return {
                ...state,
            verif: payload.data.data,
            candidate: payload.data
            };
        
            case 'DISPLAY_GUARANTORS':
           
                return {
                    ...state,
                guarantors: payload.data
            };
        
            case 'DISPLAY_PREVEMPLOYERS':
              
                return {
                    ...state,
                prevEmployers: payload.data
            };
        
                case 'DISPLAY_REFEREES':
              
                    return {
                        ...state,
                    referees: payload.data
            };
        
            case 'VERIFY_GUARANTOR':
            
                return {
                    ...state,
                verifyGuarantor: payload.data
            };
            case 'VERIFY_EMPLOYER':
            
                return {
                    ...state,
                    verifyEmployer: payload.data
            }; 
            case 'VERIFY_REFEREE':
            
                return {
                    ...state,
                    verifyReferee: payload.data
            }; 
            case 'VERIFY_ADDRESS':
                 
                  return {
                      ...state,
                      verifyAddress: payload.data
              }; 
            case 'GET_GUARANTOR':
               
                return {
                    ...state,
                    oneGuarantor: payload.data
            }; 
            case 'GET_EMPLOYER':
            
                 return {
                     ...state,
                     oneEmployer: payload.data
            }; 
            case 'GET_REFEREE':
            
                 return {
                     ...state,
                     oneReferee: payload.data
            };
            case 'GET_EMPLOYEE':
                 
                 return {
                     ...state,
                     oneEmployee: payload.data
            };
          
            case 'DISPLAY_RESULTS':
                
                    return {
                        ...state,
                    results: payload.data
            };
            case 'GET_RESULT':
                
                 return {
                     ...state,
                     oneResult: payload.data
             };

             case 'VERIFY_RESULT':
            
                return {
                    ...state,
                verifyResult: payload.data
            };
            case 'GET_VERIFIED':
            
                return {
                    ...state,
                    updatedVerified: payload.data.data,
                verified: payload.data
            };
        case 'SEARCH_WORD':
           
                return {
                    ...state,
                word: payload.data
            };
            
            case 'VERIFIED_WORD':
           
                return {
                    ...state,
                verifiedWord: payload.data
            };
            case 'UPDATE_UNVERIFIED':
         
                return {
                    ...state,
                    verif: payload.data
                 
            }
            case 'UPDATE_VERIFIED':
         
                return {
                    ...state,
                   updateVerified: payload.data
                 
                }
        
        default:
            return state;
        
    }
    
}

export default verificationReducer;