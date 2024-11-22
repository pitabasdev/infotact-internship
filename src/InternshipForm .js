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
      const response = await fetch("https://infotact-internship-backend.onrender.com/submit-form", {
        method: "POST",
        body: formDataToSend, // Sending FormData as body
      });

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

      {/* Form Information */}
      <div className="mb-6 text-center text-gray-700">
        <p className="text-xl font-medium mb-4">
          Thank you for your interest in the internship opportunities at
          Agronni. We are excited to learn more about you! Please fill out this
          form to apply for our internship program. All information will be kept
          confidential.
        </p>
        <p className="mb-4 text-left">
          Please fill all the required fields carefully, information provided
          will be used in offer letter and Completion Certificate.
        </p>
        <p className="text-red-500 font-bold mb-4 text-left">
          𝐍𝐨𝐭𝐞: 𝐏𝐥𝐞𝐚𝐬𝐞 𝐝𝐨 𝐧𝐨𝐭 𝐬𝐩𝐚𝐦 (𝐚𝐩𝐩𝐥𝐲 𝐦𝐮𝐥𝐭𝐢𝐩𝐥𝐞 𝐭𝐢𝐦𝐞𝐬 𝐟𝐨𝐫 𝐬𝐚𝐦𝐞 𝐝𝐨𝐦𝐚𝐢𝐧), 𝐢𝐧
          𝐭𝐡𝐢𝐬 𝐜𝐚𝐬𝐞 𝐲𝐨𝐮𝐫 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐜𝐨𝐧𝐬𝐢𝐝𝐞𝐫 𝐚𝐬 𝐢𝐧𝐯𝐚𝐥𝐢𝐝.
        </p>
        <ul className="list-disc list-inside mb-4 text-left">
          <li>Offer Letter</li>
          <li>Internship Certificate</li>
          <li>Letter of recommendation based on Performance</li>
        </ul>
        <p className="font-medium mb-4 text-left">
          Q. How can I register for this Internship Program?
        </p>
        <p className="text-left">
          A. Fill up the form and Internship Offer Letter will be released
          within 24-48 hours.
        </p>
        <p className="mt-4 text-left">
          Just apply and stay relaxed—we have something great for you. The
          application process is very simple.
        </p>

        <div className="mt-6">
          <p className="font-medium">Our Socials:</p>
          <ul className="flex justify-center space-x-4 text-center">
            <li>
              <a href="https://web" className="text-blue-500">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://web" className="text-blue-500">
                Official Site
              </a>
            </li>
            <li>
              <a href="https://web" className="text-blue-500">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://web" className="text-blue-500">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://web" className="text-blue-500">
                Telegram
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <p>
            If you are located in Sampark Vihar, Patia, Bhubaneswar, Odisha
            751024.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:info@agronni.com" className="text-blue-500">
              info@agronni.com
            </a>{" "}
            |{" "}
            <a href="tel:+918455066018" className="text-blue-500">
              8455066018
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
          <p className="text-xs text-gray-500 mt-2">
            Important: Connect on LinkedIn for the latest updates.{" "}
            <a
              href="https://www.linkedin.com/company/infotact-solution/"
              className="text-blue-500"
            >
              Here is the link
            </a>
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
