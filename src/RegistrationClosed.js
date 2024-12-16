import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
const RegistrationClosed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Internship Registration Closed</h1>
          <p className="text-center text-gray-600 text-lg mb-6">
            Thank you for your interest! The current batch is full. Please stay tuned for the next batch announcement.
          </p>
          <div className="flex justify-center">
            <button
              className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
              onClick={() => alert('Thank you for your patience!')}
            >
              Notify Me
            </button>
          </div>
        </div>
        <div className="bg-indigo-50 px-6 py-4">
          <p className="text-center text-sm text-gray-500">
            Follow us for updates on upcoming batches and opportunities.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/company/infotact-solutions/"
              className="text-indigo-600 hover:text-indigo-800 transition-all text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/infotacts"
              className="text-indigo-600 hover:text-indigo-800 transition-all text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61568978349528"
              className="text-indigo-600 hover:text-indigo-800 transition-all text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationClosed;
