export const Login = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-md">
          <h2 className="text-5xl font-bold text-center mb-8 text-indigo-600">
            Login
          </h2>
          <form>
            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-5 py-3 text-lg border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Password */}
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-2 px-5 py-3 text-lg border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 text-xl rounded-full hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
  
          {/* Forgot Password and Sign Up Links */}
          <div className="text-lg text-center text-gray-600 mt-6">
            <p>
              Forgot your password?{" "}
              <a href="/reset-password" className="text-indigo-600 hover:underline">
                Reset here
              </a>
            </p>
            <p className="mt-4">
              Don't have an account?{" "}
              <a href="/register" className="text-indigo-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  