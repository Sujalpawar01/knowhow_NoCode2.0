export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-6">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-indigo-700">PRIORIS</h1>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-6 bg-black text-white px-6 py-3 rounded-full text-lg">
            <li className="p-4 hover:bg-zinc-500 hover:rounded-full">
              <a href="#home">Home</a>
            </li>
            <li className="p-4 hover:bg-zinc-500 hover:rounded-full">
              <a href="#tracking">Application Tracking</a>
            </li>
            <li className="p-4 hover:bg-zinc-500 hover:rounded-full">
              <a href="#registration">Vehicle Registration</a>
            </li>
            <li className="p-4 hover:bg-zinc-500 hover:rounded-full">
              <a href="#license">License</a>
            </li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="text-lg font-medium text-gray-700 cursor-pointer">
          Account
        </div>
      </nav>
    </div>
  );
};
