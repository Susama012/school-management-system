import React from 'react'
import logo from '../assets/logo.png'

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <img
            src={logo}
            alt="SchoolLama Logo"
            className="mx-auto h-17 w-20"
          />
          <h1 className="text-2xl font-bold mt-4 mb-2 text-gray-700">
            SchooLama
          </h1>
          <p className="text-gray-500 mb-6">Sign in to your account</p>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>

  )
}

export default Login