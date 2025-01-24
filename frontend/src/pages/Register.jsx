export const Register = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-md">
          <h2 className="text-5xl font-bold text-center mb-8 text-indigo-600">
            Register
          </h2>
          <form>
            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full mt-2 px-5 py-3 text-lg border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
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
            <div className="mb-6">
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
  
            {/* Confirm Password */}
            <div className="mb-8">
              <label
                htmlFor="confirmPassword"
                className="block text-lg font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter your password"
                className="w-full mt-2 px-5 py-3 text-lg border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 text-xl rounded-full hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>
  
          {/* Already Registered? */}
          <p className="text-lg text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    );
  };
  