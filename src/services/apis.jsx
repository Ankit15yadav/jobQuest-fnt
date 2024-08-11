
// require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
}

export const companyEndPoints = {
    GET_ALL_COMPANIES_API: BASE_URL + "/jobs/getCompany"
}