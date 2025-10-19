import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
        <button
          onClick={onClose}
          className="text-gray-700 hover:text-red-500 focus:outline-none"
          aria-label="Close sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col p-4 space-y-3">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          to="/guide"
          className="text-gray-700 hover:text-blue-600"
          onClick={onClose}
        >
          Guide
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-600"
          onClick={onClose}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
