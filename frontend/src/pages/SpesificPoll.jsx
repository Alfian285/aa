import * as React from 'react';
import AuthApi from "../helper/AuthApi";
import { useParams } from "react-router-dom";

const SpesificPoll = () => {
let { poll_id } = useParams();
console.log(poll_id);
const [Poll, setPoll] = React.useState([]);
React.useEffect(() => {
  AuthApi.get(`/poll/${poll_id}`).then((response) => {
    setPoll(response.data.data);
    console.log(response.data.data);
  });
}, []);

  return React.createElement(
    "div",
    { className: "h-screen w-full flex justify-center items-center" },
    React.createElement(
      "div",
      {
        className:
          "w-2/5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700",
      },
      React.createElement(
        "div",
        { className: "flex justify-between" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h5",
            {
              className:
                "mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white",
            },
            "Title"
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement("p", null, "Deadline : 2024-02-10")
        )
      ),
      React.createElement(
        "p",
        { className: "text-sm font-normal text-gray-500 dark:text-gray-400" },
        "description"
      ),
      React.createElement(
        "ul",
        { className: "my-4 space-y-3" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "button",
            {
              href: "#",
              className:
                "flex items-center p-3 w-full text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white",
            },
            React.createElement(
              "span",
              { className: "flex-1 ms-3 whitespace-nowrap" },
              "MetaMask"
            )
          )
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "a",
          {
            href: "#",
            className:
              "inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400",
          },
          React.createElement(
            "svg",
            {
              className: "w-3 h-3 me-2",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 20 20",
            },
            React.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
            })
          ),
          React.createElement("p", null, "only one vote per user")
        )
      )
    )
  );
};

export default SpesificPoll;
