import React, { useState } from "react";
import Select from "react-select";
import useCountries from "react-select-country-list";
import LOFO from "./default.png";
import { useNavigate } from "react-router-dom";
const InternshipForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    gender: "",
    qualification: "",
    currentYear: "",
    collegeUniversity: "",
    contactNumber: "",
    whatsappNumber: "",
    skillLevel: "",
    internshipProgram: "",
    resume: null,
    sourceOfInformation: "",
    linkedinConnection: "",
    instagramConnection: "",
  });

  const countries = useCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        resume: files[0], // For file upload
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "resume" && formData[key]) {
        formDataToSend.append(key, formData[key]); // Append file
      } else {
        formDataToSend.append(key, formData[key]); // Append other form data
      }
    });

    try {
      const response = await fetch(
        "https://infotact-internship-backend.onrender.com/submit-form",
        {
          method: "POST",
          body: formDataToSend, // Sending FormData as body
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Form data submitted:", responseData);

        navigate("/success");
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Image Section */}
      <div className="mb-6">
        <img
          src={LOFO} // Replace with your actual image URL
          alt="Agronni Internship Program"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="mb-6 text-center text-gray-800 bg-gradient-to-r from-blue-50 to-purple-100 p-8 rounded-lg shadow-lg">
        <p className="text-2xl font-bold text-gray-700 mb-6">
          🚀 Thank you for your interest in the exciting internship
          opportunities at{" "}
          <span className="text-indigo-600">Infotact Solutions</span>!
        </p>
        <p className="text-xl font-medium mb-6">
          We are thrilled to know more about you and help you kickstart your
          career. Our internship program is designed to provide hands-on
          experience and valuable exposure to industry-leading projects.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Please fill out the application form below, and rest assured, all your
          information will remain confidential. We strive to make this process
          smooth and beneficial for you.
        </p>
        <p className="text-red-500 font-bold mb-6 text-left">
          <span className="italic">𝐍𝐨𝐭𝐞:</span> Please refrain from applying
          multiple times for the same domain, as it will be considered an
          invalid application.
        </p>

        <ul className="list-disc list-inside text-left text-lg mb-6">
          <li className="mb-2">Internship Offer Letter</li>
          <li className="mb-2">Remote Flexibility 🏠</li>
          <li className="mb-2">Free Access to Learning</li>
          <li className="mb-2">Mentorship and Guidance</li>
          <li className="mb-2">Networking Opportunities 🤝</li>
          <li className="mb-2">Verified Course Completion Certificate</li>
          <li className="mb-2">Verified Training Completion Certificate 🥇</li>
          <li className="mb-2">Verified Internship Completion Certificate</li>
          <li className="mb-2">Collaboration with International Students</li>
          <li className="mb-2">Recommendation Letter (if performed well)</li>
        </ul>

        <div className="bg-indigo-100 p-6 rounded-lg shadow-md mb-8">
          <p className="font-semibold text-xl mb-4">
            Frequently Asked Questions:
          </p>
          <p className="text-lg mb-2">
            <strong>Q. How can I register for the Internship Program?</strong>
          </p>
          <p className="text-lg mb-4">
            A. Simply fill up the form, and your Internship Offer Letter will be
            released within 24-48 hours!
          </p>
          <p className="text-lg">
            The process is simple, just apply, and stay relaxed—we’ve got
            exciting opportunities lined up for you!
          </p>
        </div>

        <div className="mt-6 mb-8">
          <p className="text-xl font-semibold text-left mb-4">
            We are offering more than just an internship:
          </p>
          <ul className="list-disc list-inside text-left text-lg mb-6 space-y-2">
            <li>
              <span className="font-bold">LMS Access:</span> Gain access to our
              advanced Learning Management System, designed to help you grow.
            </li>
            <li>
              <span className="font-bold">Placement Assistance:</span> We guide
              you through the job application process with personalized support.
            </li>
            <li>
              <span className="font-bold">Interview Preparation:</span> Get
              ready for success with our tailored interview preparation
              resources.
            </li>
            <li>
              <span className="font-bold">Resume Building:</span> Craft a
              professional resume that stands out with expert tips and guidance.
            </li>
            <li>
              <span className="font-bold">
                Real-time AI-based Live Projects:
              </span>{" "}
              Work on cutting-edge AI projects that simulate real-world
              scenarios.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <p className="font-medium">Connect with us:</p>
          <ul className="flex justify-center space-x-6 text-center">
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

        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">Visit us at:</p>
          <p className="text-gray-700 mb-2">
            Electronic City Bengaluru,Karnataka
          </p>
          <p className="text-gray-700">
            Contact us:{" "}
            <a
              href="mailto:info@infotactsolutions.com"
              className="text-indigo-600 hover:text-indigo-800 transition-all"
            >
              info@infotactsolution.tech
            </a>{" "}
            |{" "}
            <a
              href="tel:+918455066018"
              className="text-indigo-600 hover:text-indigo-800 transition-all"
            >
              +91 84550 66018
            </a>
          </p>
        </div>
      </div>

      {/* Internship Form */}
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Infotact Internship Application Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
            <p className="text-xs text-gray-500 mt-2">
              (Please make sure your email ID is correct: Common mistakes -
              GMAIL.COM, GMAIL.CON, GNAIL.COM. All communications will be sent
              to the above email ID.)
            </p>
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
            <p className="text-xs text-gray-500 mt-2">
              Your full name which should appear on the certificates. Please
              make sure there is no SPELLING mistake. It will not be corrected
              later.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Highest Academic Qualification
          </label>
          <select
            name="qualification"
            required
            value={formData.qualification}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Qualification</option>
            <option value="BA/B.Com/B.Ed/BBA/Diploma">
              BA/B.Com/B.Ed/BBA/Diploma
            </option>
            <option value="BCA/B.Tech/B.E/B.Sc">BCA/B.Tech/B.E/B.Sc</option>
            <option value="MA/M.Com/MBA/M.Ed/PG Diploma/PG Program">
              MA/M.Com/MBA/M.Ed/PG Diploma/PG Program
            </option>
            <option value="MCA/M.Tech/M.Sc/ITI">MCA/M.Tech/M.Sc/ITI</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Current Year of your Course
          </label>
          <select
            name="currentYear"
            required
            value={formData.currentYear}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Current Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            College/University
          </label>
          <input
            type="text"
            name="collegeUniversity"
            required
            value={formData.collegeUniversity}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          <p className="text-xs text-gray-500 mt-2">
            Name of the college/university last attended or currently enrolled
            in pursuing the degree mentioned above.
          </p>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Preferred Internship Program
          </label>
          <select
            name="internshipProgram"
            required
            value={formData.internshipProgram}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Internship Program</option>
            <option value="Software Development">Software Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Marketing">Marketing</option>
            <option value="Business Development">Business Development</option>
          </select>
          <p className="text-xs text-gray-500 mt-2">
            It will be mentioned on your Certificate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              required
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium">WhatsApp Number</label>
            <input
              type="text"
              name="whatsappNumber"
              required
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium">Country</label>
            <Select
              options={countries.getData()} // Ensure you are using getData()
              value={selectedCountry}
              onChange={handleCountryChange}
              className="mt-2 border border-gray-100 rounded-md"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium">
              Skill Level of Preferred Program
            </label>
            <select
              name="skillLevel"
              required
              value={formData.skillLevel}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Skill Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Resume / LinkedIn / Portfolio / GitHub Link (Any one link, if don't
            have write NA)
          </label>
          <input
            type="text"
            name="profileLink"
            value={formData.profileLink}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Where did you learn about us?
          </label>
          <select
            name="sourceOfInformation"
            value={formData.sourceOfInformation}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Source</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Twitter">Twitter</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
          </select>
          <p className="text-xs text-gray-500 mt-2">
            Help us improve our online presence.
          </p>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Have you connected with us on LinkedIn?
          </label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="linkedinConnection"
                value="Yes"
                checked={formData.linkedinConnection === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="linkedinConnection"
                value="No"
                checked={formData.linkedinConnection === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Follow us on LinkedIn for updates!{" "}
            <a
              href="https://www.linkedin.com/company/infotact-solution/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              LinkedIn Link
            </a>
          </p>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Have you connected with us on Instagram?
          </label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="instagramConnection"
                value="Yes"
                checked={formData.instagramConnection === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="instagramConnection"
                value="No"
                checked={formData.instagramConnection === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Follow us for updates!{" "}
            <a
              href="https://www.instagram.com/infotactsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Instagram Link
            </a>
          </p>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Resume (PDF or Word)
          </label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">
            Any other relevant information
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InternshipForm;
