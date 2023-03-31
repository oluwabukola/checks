import { VERIFY_HOMETOWN } from "../Actions/ActionTypes";
const initState = {
    verifyHomeTown : null
}


export const verifyReducer = (state = initState, action) =>{
const {type, payload} = action;

switch(type){
    case VERIFY_HOMETOWN: 
    return {
        ...state,
        verifyHomeTown: payload
    }

    default: 
    return state
}
}

 export default verifyReducer;