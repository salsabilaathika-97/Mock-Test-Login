import TYPES from "../types";

const initState = {
    username: "",
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case TYPES.POST_LOGIN:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;