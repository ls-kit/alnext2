import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "/modules/auth"
export const rootReducer  = combineReducers({
    AUTH: authReducers,
})