import * as React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserContext";
import Api from "../helper/Api";

const Login = () => {
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const { user, setUser } = React.useContext(UserAuthContext);
  const cookie = new Cookies();

  const Navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      Api.post("/auth/login", {
        username: Username,
        password: Password,
      }).then((response) => {
        console.log(response.data.data);
        const { token, user } = response.data.data;
        setUser(user);
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        cookie.set("token", token, { expires: expirationDate });
        if (user.role == "admin" && Password == 1) {
          Navigate("/reset-password");
        } else {
          Navigate("/home")
          
      
        }
      });
    } catch (error) {
      return;
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          YukPilih
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in to your account
            </h1>
            <form
              onSubmit={HandleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="usernameInput"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  id="usernameInput"
                  type="text"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
