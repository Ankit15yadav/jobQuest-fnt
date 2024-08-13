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

export function createCompany(
    CompanyData
) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {

            console.log("company info", CompanyData)
            // console.log("company location", location)
            // console.log("company industry", industry)
            const response = await apiConnector("POST", CREATE_COMPANIES_API, {
                CompanyData,
            })

            console.log("CREATE COMPANY RESPONSE.....", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("company Created successfully");


        } catch (err) {

            console.log("CREATE_COMPANY_ERROR...", err)
            toast.error("creation failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId);
    }

}