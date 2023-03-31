import { GET_CANDIDATE, GET_RESIDENTIAL, GET_HOMETOWN, GET_EDUCATIONALCHECK,
GET_PREVIOUSEMPLOYER, GET_REFEREE, GET_GUARANTOR, GET_CREDITCHECK, GET_ALLEMPLOYEE, 
GET_CRIMINALSTATUS, GET_NYSC, GET_LINK, UPDATE_HOMETOWN, UPDATE_GUARANTOR,
UPDATE_REFEREE, UPDATE_EMPLOYER } from "../Actions/ActionTypes";

const initState ={
    getCandidate : null,
    oneEmployee: null,
    getResidentialAdddress: null,
    getHometownAddress: null,
    getEducationalCheck: null,
    getPreviousEmployer: null,
    getReferee: null,
    getGuarantor: null,
    getCreditCheck: null,
    getCriminalStatus: null,
    getNysc: null,
    getLink: null,

}

const ExternalDisplayReducer = (state=initState, action) => {
const {type, payload} = action;
console.log('Home town payload', state.getHometownAddress);
switch(type){
    case GET_ALLEMPLOYEE:
        
        return {
            ...state, 
            getCandidate: payload
        }

        case GET_CANDIDATE:
        return {
            ...state,
            oneEmployee: payload
        }
        
        case GET_RESIDENTIAL:
            return {
                ...state,
                getResidentialAdddress: payload
            }
             case GET_HOMETOWN: 
            
                 return {
                     ...state,
                     getHometownAddress: payload
                 }

                 case UPDATE_HOMETOWN: 
                 let town = payload
                 state.getHometownAddress =[]
                 return {
                     ...state,
                     getHometownAddress: state.getHometownAddress.concat(town),
                 }
                
                 case GET_EDUCATIONALCHECK: 
                 return {
                     ...state,
                     getEducationalCheck : payload
                 }
                  case GET_PREVIOUSEMPLOYER:
                      return{
                          ...state, 
                          getPreviousEmployer: payload
                      }

                      case UPDATE_EMPLOYER:
                        let employer = payload
                        state.getPreviousEmployer =[]
                      return{
                          ...state, 
                          getPreviousEmployer: state.getPreviousEmployer.concat(employer)
                      }
                       case GET_REFEREE: 
                       return {
                           ...state,
                           getReferee: payload
                       }

                       case UPDATE_REFEREE:
                        let referee= payload
                        state.getReferee =[]
                      return{
                          ...state, 
                          getReferee: state.getReferee.concat(referee)
                      }
                        case GET_GUARANTOR: 
                        return {
                            ...state,
                            getGuarantor: payload
                        }

                        case UPDATE_GUARANTOR: 
                        let guarant = payload
                        console.log('gurant reducer', guarant)
                        state.getGuarantor =[]
                        return {
                            ...state,
                            getGuarantor: state.getGuarantor.concat(guarant)
                        }
                         case GET_CREDITCHECK:
                             return {
                                 ...state,
                                 getCreditCheck: payload
                             }

                             case GET_CRIMINALSTATUS:
                             return {
                                 ...state,
                                getCriminalStatus: payload
                             }

                             case GET_NYSC:
                             return {
                                 ...state,
                                getNysc: payload
                             }

                             case GET_LINK:
                                return {
                                    ...state,
                                   getLink: payload
                                }
             
        default:
            return state
}
}
 export default ExternalDisplayReducer