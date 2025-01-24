import { Facebook, Twitter, Instagram } from "react-feather";

const Footer = () => {
  return (
    <div className="bg-indigo-800/80 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="text-center mb-4">
          <h3 className="text-3xl font-semibold mb-2">Contact Us</h3>
          <p className="text-md mb-3">We'd love to hear from you!</p>

          <div className="flex justify-center gap-6">
            <div className="flex flex-col items-center">
              <p className="text-md">Phone</p>
              <p className="text-sm">+1 234 567 890</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-md">Email</p>
              <p className="text-sm">contact@prioris.com</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-md">Address</p>
              <p className="text-sm">123, Main Street, City, Country</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6 text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-pink-500" />
          </a>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="bg-gray-900 text-center py-2 text-xs text-gray-400">
        <p>&copy; 2025 PRIORIS. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
