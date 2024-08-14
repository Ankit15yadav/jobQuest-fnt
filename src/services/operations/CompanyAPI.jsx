import { companyEndPoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { setLoading } from "../../slice/authSlice";

const {
    GET_ALL_COMPANIES_API,
    CREATE_COMPANIES_API
} = companyEndPoints

export const getAllCompany = async () => {
    const toastId = toast.loading("Loading...");
    let result = []

    try {

        const response = await apiConnector("GET", GET_ALL_COMPANIES_API)
        if (!response?.data?.success) {
            throw new Error("could not fetch company data");
        }

        result = response?.data?.data

    } catch (err) {
        console.log("GET_ALL_COMPANY_API ERROR....", err);
        toast.error(err.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const createCompany = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...");
    try {
        console.log("form data in api", data)
        const response = await apiConnector("POST", CREATE_COMPANIES_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        })

        console.log("COMPANY CREATED SUCCESSFULLY.....", response);
        if (!response?.data?.success) {
            throw new Error("Could not create company");
        }

        toast.success("company created successfully");
        result = response?.data?.data

    } catch (err) {
        console.log("CREATE COMPANY API ERROR....", err)
        toast.error(err.message);
    }
    toast.dismiss(toastId);
    return result;
}