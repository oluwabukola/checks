import { CREATE_CANDIDATE, RESIDENTIAL_ADDRESS, HOME_TOWN, EDUCATIONAL_CHECKS,
PREVIOUS_EMPLOYER, CREATE_REFEREE, CREATE_GUARANTOR, CREDIT_CHECK,
CRIMINAL_STATUS,
NYSC_RESULT } from "../Actions/ActionTypes";
const initState = {
  createEmployee: null,
  residentialAddress: null,
  resultChecks: null,
  previousEmployer: null,
createReferee: null,
createGuarantor: null,
creditCheck: null,
criminalStatus: null,
nyscResult: null,
homeTown: null,
isDisableTab: true
    
}

const ExternalFormReducer = (state=initState, action) => {
   
    const {type, payload} = action;
     console.log('Disable reducer', state.createEmployee)
  
    
switch(type){

    case CREATE_CANDIDATE:
        return {
            ...state, 
            createEmployee : payload, isDisableTab:false
        }
        case RESIDENTIAL_ADDRESS:
            return {
                ...state,
                residentialAddress: payload
            }

            case HOME_TOWN:
                return {
                    ...state,
                    homeTown: payload
                }

            case EDUCATIONAL_CHECKS:
                return {
                    ...state,
                    resultChecks: payload
                }

                case PREVIOUS_EMPLOYER:
                return {
                    ...state,
                    previousEmployer: payload
                }

                case CREATE_REFEREE:
                return {
                    ...state,
                    createReferee: payload
                }

                case CREATE_GUARANTOR:
                return {
                    ...state,
                    createGuarantor: payload
                }

                case CREDIT_CHECK:
                    console.log('payload', payload)
                    return {
                        ...state,
                        creditStatus: payload
                    }

                    case CRIMINAL_STATUS:
                        return {
                            ...state,
                            creditCheck: payload
                        }

                    case NYSC_RESULT:
                    return {
                        ...state,
                        nyscResult: payload
                    }
        default: 
        return state
}
}

export default ExternalFormReducer;