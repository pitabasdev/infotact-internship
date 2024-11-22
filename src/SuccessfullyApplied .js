import React from "react";

const SuccessfullyApplied = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mx-auto text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M1 12l4 4L9 7" />
        </svg>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Application Submitted
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          You have successfully applied! Thank you for your submission. We will
          get back to you shortly.
        </p>
      </div>
    </div>
  );
};

export default SuccessfullyApplied;
