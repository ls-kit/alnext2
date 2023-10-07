import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "/modules/auth"
import initReducers from "/modules/init"
export const rootReducer  = combineReducers({
    AUTH: authReducers,
    INIT: initReducers,
})