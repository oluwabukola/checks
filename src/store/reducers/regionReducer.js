const initState = {
    region: [],
    regionName: [],
    editedRegion: [],
    oneregion:[],
}

const regionReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case 'ADD_REGION':
    
            return {
                ...state,
                region: payload.region.data
            };
        
        case 'DISPLAY_REGION':
            return {
                ...state,
                regionName: payload.data
            };
            case 'GET_REGION':
               
                return {
                    ...state,
                    oneregion: payload.data
            };
        
            case 'EDIT_REGION':
                return {
                    ...state,
                    editedRegion: payload.data
            };
            case 'DELETE_REGION':
         
                return {
                    ...state,
                    regionName: state.regionName.filter(item => item.id !== action.payload)
                };
        default:
            return state;
    }
}

export default regionReducer;