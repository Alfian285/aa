import Axios from "axios";
import AuthCookie from "./AuthCookie";

const AuthApi = Axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        'Authorization': 'Bearer ' + AuthCookie,
    }
});

export default AuthApi;