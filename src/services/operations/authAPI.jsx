import { endpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slice/authSlice"
import { setUser } from "../../slice/profileSlice"

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

export function login(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading....")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            })

            console.log("LOGIN  API RESPONSE..", response);
            toast.success("Login successful")

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            dispatch(setToken(response.data.token))
            const userImage = response?.data?.user?.image ?
                response?.data?.user?.image :
                `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

            dispatch(setUser({ ...response.data.user, image: userImage }))

            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate("/dashboard/profile");

        } catch (err) {
            console.log("LOGIN API ERROR.........", err);
            toast.error("login failed");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function signup(
    role,
    firstName, lastName, email, password, confirmPassword, otp, navigate
) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {

            console.log(role);
            const response = await apiConnector("POST", SIGNUP_API, {
                role,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
            })
            console.log("SIGNUP API RESPONSE......", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("SignUp Successful")
            navigate("/login");
        } catch (error) {
            console.log("SIGNUP API ERROR............", error)
            toast.error("Signup Failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}       