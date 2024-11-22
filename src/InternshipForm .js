import React, { useState, useEffect } from "react";
import Select from "react-select";
import useCountries from "react-select-country-list";
import LOFO from "./header.png";
import { useNavigate } from "react-router-dom";
const InternshipForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This will scroll to the top of the page
  }, []);
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
    internshipDuration: "",
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
    // Set start and end date based on internship duration
    const startDate = new Date();
    const durationMap = {
      "1 Month": 1,
      "2 Months": 2,
      "3 Months": 3,
    };

    const monthsToAdd = durationMap[formData.internshipDuration] || 1;
    const endDate = new Date(startDate);
    endDate.setMonth(startDate.getMonth() + monthsToAdd);

    // Append start and end date to form data
    formDataToSend.append("startDate", startDate);
    formDataToSend.append("endDate", endDate);

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
          <a href="https://infotactsolution.tech/">
            <span className="text-indigo-600">Infotact Solutions</span>!
          </a>
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
            <option value="Graduated">Graduated</option>
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
        <div className="mt-4 flex space-x-4">
          <div className="flex-1">
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

          <div className="flex-1">
            <label className="block text-sm font-medium">
              Internship Duration
            </label>
            <select
              name="internshipDuration"
              required
              value={formData.internshipDuration}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Duration</option>
              <option value="1 Month">1 Month</option>
              <option value="2 Months">2 Months</option>
              <option value="3 Months">3 Months</option>
            </select>
            <p className="text-xs text-gray-500 mt-2">
              Choose the duration that suits you best
            </p>
          </div>
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
