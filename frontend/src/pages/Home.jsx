import * as React from 'react';
import { UserAuthContext } from '../context/UserContext';
import Cookies from 'universal-cookie';
import { useNavigate, Link } from 'react-router-dom'
import AuthApi from '../helper/AuthApi';


const Home = () => {
    const Navigate = useNavigate();
    const Logout = () => {
      AuthApi.post("/logout")
      .then(() => {
        const cookie = new Cookies();
        cookie.remove("token", { path: "/" });
        Navigate("/login");
      });
  };
  

    const { user } = React.useContext(UserAuthContext);
    return (
        <div>
        <p>hello {user.username}</p>
        <Link to="/create-poll">Create Poll</Link>
        </div>
    );
}

export default Home;
