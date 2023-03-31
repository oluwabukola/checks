
const initState = {
    error: null,
    network: null,
  };


const errorReducer = (state = initState, action) => {
   
     const{type, payload} = action
  
     switch (type) {
        case 'LOGIN_ERROR':
            console.log('payload', payload);
            return {
                ...state,
                error: payload
            };

            case 'NETWORK_ERROR':
            console.log('payload', payload);
            return {
                ...state,
                network: payload
            };
           
        default:
            return state;
    }
}
  
  
export default errorReducer;