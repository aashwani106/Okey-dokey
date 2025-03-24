import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import loginSidebar from "./assets/login-sidebar.png";
import logo from "./assets/okey-dokey-logo.png";
import google from "./assets/google.png";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      {/* Sidebar */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center text-white p-8 flex-col justify-center items-center h-full"
        style={{ backgroundImage: `url(${loginSidebar})` }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Okey Dokey
          </h1>
          <p className="text-lg text-center">
            Find your People, Your Passion, Your Purpose
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-full">
        <img src={logo} className="w-[120px] mb-6" alt="Logo" />
        <div className="border-2 border-gray-300 rounded-xl shadow-xl p-10 bg-white w-full sm:w-[450px] md:w-[500px]">
          <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
          <p className="text-gray-500 mb-6 text-center">
            Please login to continue
          </p>

          <button className="bg-white border border-gray-300 rounded-full py-2 px-4 mb-4 w-full flex items-center justify-center text-gray-500">
            <img src={google} alt="Google Logo" className="w-6 h-6 mr-2" />
            Continue with Google
          </button>

          <div className="flex items-center mb-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="username"
              >
                Email address
              </label>
              <div className="relative">
                <input
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10"
                  id="username"
                  type="text"
                  placeholder="example@gmail.com"
                />
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <Mail size={20} />
                </div>
              </div>
            </div>

            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 pr-10"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <Lock size={20} />
                </div>
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end mb-4">
              <a
                className="text-black hover:text-indigo-800 text-sm font-bold underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>

            <button className="bg-[#8d34dc] hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">
              Login
            </button>

            <div className="mt-5 text-center">
              <span className="text-gray-500">New user? </span>
              <a href="#" className="text-blue-500 font-bold">
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
