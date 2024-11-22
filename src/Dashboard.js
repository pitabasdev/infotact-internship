import React, { useState, useEffect } from "react";

// Function to convert data to CSV format
const convertToCSV = (data) => {
  const headers = [
    "Full Name",
    "Email",
    "Gender",
    "Qualification",
    "College/University",
    "Contact Number",
    "WhatsApp Number",
    "Skill Level",
    "Internship Program",
    "Source of Information",
    "LinkedIn",
    "Instagram",
  ];

  const rows = data.map((row) => [
    row.fullName,
    row.email,
    row.gender,
    row.qualification,
    row.collegeUniversity,
    row.contactNumber,
    row.whatsappNumber,
    row.skillLevel,
    row.internshipProgram,
    row.sourceOfInformation,
    row.linkedinConnection,
    row.instagramConnection,
  ]);

  // Create CSV content as a string
  const csvContent = [
    headers.join(","), // Add headers
    ...rows.map((row) => row.join(",")), // Add rows
  ].join("\n");

  return csvContent;
};

// Dashboard component to display the form data in a table format
const Dashboard = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Fetch the form data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("https://infotact-internship-backend.onrender.com/get-form-data"); // Change this URL to your actual API
        const data = await response.json();
        setFormData(data); // Assuming the response contains an array of form data
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle CSV download
  const downloadCSV = () => {
    const csvData = convertToCSV(formData);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "form_data.csv"; // Set the file name for the CSV
    link.click();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <button
        onClick={downloadCSV}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Download CSV
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Full Name</th>
              <th className="border-b p-2 text-left">Email</th>
              <th className="border-b p-2 text-left">Gender</th>
              <th className="border-b p-2 text-left">Qualification</th>
              <th className="border-b p-2 text-left">College/University</th>
              <th className="border-b p-2 text-left">Contact Number</th>
              <th className="border-b p-2 text-left">WhatsApp Number</th>
              <th className="border-b p-2 text-left">Skill Level</th>
              <th className="border-b p-2 text-left">Internship Program</th>
              <th className="border-b p-2 text-left">Source of Information</th>
              <th className="border-b p-2 text-left">LinkedIn</th>
              <th className="border-b p-2 text-left">Instagram</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{data.fullName}</td>
                <td className="p-2">{data.email}</td>
                <td className="p-2">{data.gender}</td>
                <td className="p-2">{data.qualification}</td>
                <td className="p-2">{data.collegeUniversity}</td>
                <td className="p-2">{data.contactNumber}</td>
                <td className="p-2">{data.whatsappNumber}</td>
                <td className="p-2">{data.skillLevel}</td>
                <td className="p-2">{data.internshipProgram}</td>
                <td className="p-2">{data.sourceOfInformation}</td>
                <td className="p-2">{data.linkedinConnection}</td>
                <td className="p-2">{data.instagramConnection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;