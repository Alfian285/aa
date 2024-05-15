import * as React from "react";
import AuthApi from "../helper/AuthApi";
import { useNavigate } from "react-router-dom";

const CreatePoll = () => {
    const Navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    deadline: "",
    choices_1: "",
    choices_2: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
    const handleSubmit = (e) => {
          const choices = [formData.choices_1, formData.choices_2];

          const formattedData = {
            title: formData.title,
            description: formData.description,
            deadline: formData.deadline,
            choices: choices,
          };

    e.preventDefault();
      AuthApi.post("/poll", formattedData).then((response) => {
          Navigate("/home");          
    });
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl mb-5">New Poll</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="deadline"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="choices_1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choices 1
          </label>
          <input
            type="text"
            id="choices_1"
            value={formData.choices_1}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="choices_2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choices 2
          </label>
          <input
            type="text"
            id="choices_2"
            value={formData.choices_2}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePoll;
