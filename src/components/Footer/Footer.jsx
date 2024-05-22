import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <p className="text-gray-600 mb-2">About Us</p>
            <p className="text-gray-600 mb-2">Careers</p>
            <p className="text-gray-600 mb-2">Press</p>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <p className="text-gray-600 mb-2">Blog</p>
            <p className="text-gray-600 mb-2">Help Center</p>
            <p className="text-gray-600 mb-2">Privacy Policy</p>
          </div>

          {/* Column 3: Contact & Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-2">Email: contact@company.com</p>
            <p className="text-gray-600 mb-2">Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-gray-600">
            &copy; 2024 ( Shakil | Fazlay | Tuhin ). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
