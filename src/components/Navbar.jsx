import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.JPG";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center" aria-label="Association home">
                <img
                  src={Logo}
                  alt="Association logo"
                  className="h-10 w-10 object-cover rounded"
                />
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/guide" className="text-gray-700 hover:text-blue-600">Guide</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Open sidebar"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
