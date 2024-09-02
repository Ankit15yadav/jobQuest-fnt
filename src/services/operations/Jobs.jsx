import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { jobsEndPoints } from "../apis";

const {
    CREATE_JOBS_API,
} = jobsEndPoints

export const createJobforCompany = async (data, token) => {
    let result = null;
    const toastId = toast.loading("Loading....");

    try {

        console.log("form Data");

        for (const [key, value] of data.entries()) {
            console.log(`${key}: ${value}`);
        }

        const response = await apiConnector("POST", CREATE_JOBS_API, data, {
            // "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })

        console.log("JOB_CREATED_SUCCESSFULLY....", response);
        if (!response?.data?.success) {
            throw new Error("could not create jobs");
        }

        toast.success("Jobs Created successfully");
        result = response?.data?.data;

    } catch (err) {
        console.log("CREATE_JOBS_API_ERROR", err);
        toast.error(err.message);
    }
    toast.dismiss(toastId);
    return result;
}