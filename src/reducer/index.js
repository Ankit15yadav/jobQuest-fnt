import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import profileReducer from "../slice/profileSlice";
import companyReducer from "../slice/CompanySlice";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    company: companyReducer,
})

export default rootReducer;