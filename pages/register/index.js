import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utlis/firebase";
import { useRouter } from "next/router";
const Register = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      push("/");
    } catch (error) {
      const index = error.message.indexOf("auth");
      const message = error.message.slice(index + 5, -2);
      setError(message.split("-").join(" "));
    }
  };

  return (
    <div className="flex min-h-full h-screen bg-gray-50 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            To{" "}
            <span className="font-medium text-indigo-600 hover:text-indigo-500">
              build your dream website
            </span>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm space-x-2">
              <span>Already have an account?</span>
              <span
                onClick={() => {
                  push("/login");
                }}
                className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500"
              >
                Login
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={register}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create an account
            </button>
            <p className="text-red-500 h-4 text-center mt-2 text-sm">{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
