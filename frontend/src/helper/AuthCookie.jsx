import Axios from 'axios';
import Cookies from 'universal-cookie'

const cookie = new Cookies();
const AuthCookie = cookie.get("token");


export default AuthCookie;
