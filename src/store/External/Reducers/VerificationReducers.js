import { CREATE_ORDER, CREATE_TRANSACTION, GET_TRANSACTION, GET_ORDER } from "../Actions/ActionTypes";
const initState = {
    verificationType : [],
    Order: null,
    createdTransaction: null,
    getTransaction:[],
    getOrder:[],
}

const ExternalVerificationReducer = (state=initState, action) => {
    console.log('reducerrr created transaction', state.createdTransaction);
   
    const {type, payload} = action;
   
switch(type){
   

    case 'GET_verificationType':
        
        return {
            ...state, 
            verificationType : payload
        }
    

        case CREATE_ORDER : return {
            ...state,
            Order: payload
        }

        case CREATE_TRANSACTION: return {
            ...state,
            createdTransaction:payload
        }
        case GET_TRANSACTION: return {
            ...state,
            getTransaction: payload

        }
        
        case GET_ORDER: return{
            ...state,
            getOrder: payload
        }

        default: 
        return state
}
}

export default ExternalVerificationReducer;