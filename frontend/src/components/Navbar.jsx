import { Link } from "react-router-dom";
import { User } from "react-feather";

export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-indigo-700">PRIORIS</h1>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-6 bg-black text-white px-6 py-2 rounded-full text-lg">
            <li className="p-4 hover:bg-zinc-500 hover:rounded-full">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 hover:bg-zinc-500 hover:rounded-full">
              <Link to="/tracking">Application Tracking</Link>
            </li>
            <li className="p-4 hover:bg-zinc-500 hover:rounded-full">
              <Link to="/registration">Vehicle Registration</Link>
            </li>
            <li className="p-4 hover:bg-zinc-500 hover:rounded-full">
              <Link to="/license">License</Link>
            </li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="flex items-center text-lg font-medium text-gray-700 cursor-pointer hover:text-indigo-700">
          <User className="text-2xl mr-2" /> 
          <Link to="/register">Account</Link>
        </div>
      </nav>
    </div>
  );
};
