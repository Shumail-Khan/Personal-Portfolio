import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-700 pb-10">
          
          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold mb-3">Shumail</h3>
            <p className="text-gray-400 max-w-md">
              Full-Stack Developer specializing in modern web and software
              solutions. Building scalable and efficient systems.
            </p>
          </div>

          {/* Right - Newsletter */}
          <div>
            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-r-lg font-semibold hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Shumail Khan. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 text-xl">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;