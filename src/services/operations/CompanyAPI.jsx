import { companyEndPoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { setLoading } from "../../slice/authSlice";

const {
    GET_ALL_COMPANIES_API,
    CREATE_COMPANIES_API,
    GET_ALL_USER_COMPANIES_API,
    DELETE_COMPANY_API,
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

export const getUserCompany = async (token) => {
    const toastId = toast.loading("Loading...");
    let result = []

    try {
        // console.log("data of company", data);
        const response = await apiConnector("GET", GET_ALL_USER_COMPANIES_API, null,
            {
                Authorization: `Bearer ${token}`
            }
        )
        if (!response?.data?.success) {
            throw new Error("could not fetch company data");
        }

        console.log("USER_SPECIFIC_COMPANY_FOUND....", response);

        result = response?.data?.data

    } catch (err) {
        console.log("GET_USER_COMPANY_API ERROR....", err);
        toast.error(err.message);
    }
    toast.dismiss(toastId);
    return result;
}
export const deleteCompany = async (data, token) => {
    const toastId = toast.loading("Loading...");

    try {

        await apiConnector("DELETE", DELETE_COMPANY_API, data, {
            Authorization: `Bearer ${token}`
        })

        toast.success("course Deleted successfully");

    } catch (err) {
        console.log("Delete_company_api_error", err);
        toast.error(err.message);
    }
    toast.dismiss(toastId);
    return;
}