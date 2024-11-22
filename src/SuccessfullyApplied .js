import React from "react";

const SuccessfullyApplied = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-4xl text-center">
        {/* Success Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mx-auto text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M1 12l4 4L9 7" />
        </svg>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Your Application is Successfully Submitted!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your interest! Your internship journey begins now. Our
          team will get back to you soon with the next steps.
        </p>

        {/* Benefits Section */}
        <div className="bg-indigo-50 p-6 rounded-lg shadow-md mb-8 text-left">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Here's What You'll Gain in Our Internship Program:
          </h2>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>
              <span className="font-bold text-indigo-800">
                Internship Offer Letter:
              </span>{" "}
              A professional start to your career.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Remote Flexibility:
              </span>{" "}
              Learn and grow from the comfort of your home 🏠.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Exclusive LMS Access:
              </span>{" "}
              Advanced learning at your fingertips.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Live AI Projects:
              </span>{" "}
              Hands-on experience with real-world challenges.
            </li>
            <li>
              <span className="font-bold text-indigo-800">Certificates:</span>{" "}
              Verified Internship, Training, and Course Completion Certificates
              🥇.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Personalized Mentorship:
              </span>{" "}
              Expert guidance to ensure success.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Networking Opportunities:
              </span>{" "}
              Collaborate with international peers 🤝.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Recommendation Letters:
              </span>{" "}
              Earn glowing recommendations for exceptional performance.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Placement Boost:
              </span>{" "}
              Top performers will receive interview opportunities with leading
              companies!
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Interview Preparation:
              </span>{" "}
              Gain confidence with tailored guidance and resources.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Resume Building:
              </span>{" "}
              Create standout resumes to showcase your skills effectively.
            </li>
            <li>
              <span className="font-bold text-indigo-800">
                Mock Interviews with AI:
              </span>{" "}
              Practice real-world interview scenarios with intelligent feedback.
            </li>
          </ul>
        </div>

        {/* FAQs Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8 text-left">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Frequently Asked Questions:
          </h2>

          <p className="text-lg mb-2">
            <strong>Q. How do I get started?</strong>
          </p>
          <p className="text-lg mb-4">
            A. Simply submit your application. Your Internship Offer Letter will
            be sent to you within 24-48 hours!
          </p>

          <p className="text-lg mb-2">
            <strong>Q. What kind of projects will I work on?</strong>
          </p>
          <p className="text-lg mb-4">
            A. You'll work on cutting-edge projects, including AI, web
            development, and real-world applications tailored to build your
            skills.
          </p>

          <p className="text-lg mb-2">
            <strong>Q. Will I work on the project individually?</strong>
          </p>
          <p className="text-lg mb-4">
            A. No, you will be assigned to a group with 5 to 6 members to
            collaborate and learn together.
          </p>

          <p className="text-lg mb-2">
            <strong>Q. When will I get access to the LMS?</strong>
          </p>
          <p className="text-lg">
            A. Once you accept the Internship Offer Letter, you will receive all
            the necessary details, including LMS access.
          </p>
        </div>

        {/* Connect Section */}
        <div className="text-left">
          <h2 className="text-lg text-center font-medium text-gray-800 mb-4">
            Connect with Us
          </h2>
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://www.linkedin.com/company/infotact-solution/"
                className="text-blue-600 hover:text-blue-800 transition-all"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://infotactsolution.tech/"
                className="text-blue-600 hover:text-blue-800 transition-all"
              >
                Official Website
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                className="text-blue-600 hover:text-blue-800 transition-all"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Get in Touch:</h3>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> Electronic City, Bengaluru, Karnataka
          </p>
          <p className="text-gray-700">
            <strong>Contact:</strong>{" "}
            <a
              href="mailto:info@infotactsolution.tech"
              className="text-indigo-600 hover:text-indigo-800"
            >
              info@infotactsolution.tech
            </a>{" "}
            |{" "}
            <a
              href="tel:+918455066018"
              className="text-indigo-600 hover:text-indigo-800"
            >
              +91 84550 66018
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullyApplied;
