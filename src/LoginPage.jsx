import React from 'react';
import loginSidebar from './assets/login-sidebar.png';
import logo from './assets/okey-dokey-logo.png';

function LoginPage() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className="hidden md:w-1/2 bg-cover bg-center md:block text-white p-8 flex flex-col justify-center items-center h-full"
        style={{ backgroundImage: `url(${loginSidebar})` }}
      >
        <div className='flex flex-col justify-center items-center'>
       <h1 className="text-4xl font-bold text-center !important md:mr-50 md:mt-100">Welcome to Okey Dokey</h1>
        <p className="text-lg text-center !important md:mr-50">
          Find your People, Your Passion, Your Purpose
        </p>
        </div>

 
      </div>

      {/* Login Form */}
  
      <div className="w-full md:w-1/2 flex h-full items-center justify-center flex-col">
  <div className="border-2 border-gray-300 rounded-lg shadow-lg p-6 bg-white w-full sm:w-3/4 md:w-100">
    <div className="logo mb-3 flex justify-center">
      <img src={logo} className="w-[100px]" alt="Logo" />
    </div>
    <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
    <p className="text-gray-500 mb-4 text-center">Please login to continue</p>
    
    <button className="bg-white border border-gray-300 rounded-full py-2 px-4 mb-4 w-full flex items-center justify-center">
      <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-web-design-logo-1.png" alt="Google Logo" className="w-6 h-6 mr-2" />
      Continue with Google
    </button>

    <div className="flex items-center mb-4">
      <div className="border-t border-gray-300 flex-grow"></div>
      <span className="mx-4 text-gray-500">Or</span>
      <div className="border-t border-gray-300 flex-grow"></div>
    </div>

    <form className="w-full">
      <div className="mb-4">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="username">
          Email address
        </label>
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          id="username"
          type="text"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>

      <div className="flex justify-end">
        <a className="text-indigo-500 hover:text-indigo-800 text-sm font-bold" href="#">
          Forgot password?
        </a>
      </div>

      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3">
        Login
      </button>

      <div className="mt-5">
        <p className="text-center">
          New user? <a href="#" className="text-blue-500">Create account</a>
        </p>
      </div>
    </form>
  </div>
</div>

    </div>
  );
}

export default LoginPage;
