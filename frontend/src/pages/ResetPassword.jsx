import * as React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserContext";
import AuthApi from "../helper/AuthApi";

const ResetPassword = () => {
  const [OldPassword, setOldPassword] = React.useState("");
  const [NewPassword, setNewPassword] = React.useState("");
  const { user, setUser } = React.useContext(UserAuthContext);
  const cookie = new Cookies();

  const Navigate = useNavigate();
    console.log(user);
    console.log(cookie.get("token"))
  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      AuthApi.post("/auth/reset-password", {
        OldPassword: OldPassword,
        NewPassword: NewPassword,
      }).then((response) => {
          setUser({ type: 'RESET' });
          cookie.remove("token", { path: '/' })
          Navigate("/login");
     
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
              Reset Your Default Password
            </h1>
            <form
              onSubmit={HandleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="OldPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Old Password
                </label>
                <input
                  id="OldPassword"      type="text"
                  value={OldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="MewPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="NewPassword"
                  value={NewPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
