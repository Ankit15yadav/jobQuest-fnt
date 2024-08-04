import { endpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";

const {
    SENDOTP_API,
    LOGIN_API,
    SIGNUP_API,
} = endpoints;

export function sendOtp(email, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading..");
        dispatch(setLoading(true))
        try {

            const response = await apiConnector("POST", SENDOTP_API, {
                email,
                userPresent: true,
            })

            console.log("SENDOTP API RESPONSE......", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("OTP sent successfully...\n");
            navigate("/verify-email");

        } catch (err) {
            console.log("SENDOTP API ERROR............", console.err);
            toast.error("Email Already exist ");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}