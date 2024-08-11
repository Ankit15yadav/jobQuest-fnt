import { companyEndPoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";

const {
    GET_ALL_COMPANIES_API,
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