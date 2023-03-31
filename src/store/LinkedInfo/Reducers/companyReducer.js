import { ALL_COMPANIES, COMPANY_ORDERS } from '../Actions/ActionTypes';

const initState = {
    companies: null,
    companyOrders: null,
}

const companyReducer = (state= initState, action) => {
const {type, payload} = action;

switch(type){
    
  case ALL_COMPANIES :
      return {
          ...state,
          companies: payload,
      };
       case COMPANY_ORDERS :
           return{
               ...state,
               companyOrders: payload,
           }

      default:
            return state;
}
}

 export default companyReducer