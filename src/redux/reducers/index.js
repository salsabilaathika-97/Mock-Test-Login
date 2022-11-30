import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers ({
        authReducer,
        dataReducer,
})

export default rootReducer