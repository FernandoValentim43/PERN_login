import { FormEvent, useState } from "react";
import { Layout } from "../components/layout";
import "../index.css";
const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = () => {};

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className=" mt-12 h-[30rem] flex flex-col  items-center">
        <form className="bg-white rounded mt-12 flex flex-col items-center w-[30rem]">
          <h2 className="block text-gray-700 text-sm font-bold mb-2">
            Register
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
