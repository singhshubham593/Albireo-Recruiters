import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const jobsData = [
  {
    title: "VP Information Technology in MNC Pharma company",
    location: "Mumbai",
    type: "Permanent",
    wfh: "No",
    function: "IT",
    specialization: "Software",
    salary: 10000000,
    salaryText: "INR9,000,000 - INR11,000,000 per year",
    description:
      "The IT role is crucial for enabling the entire organization to get productivity reports quickly and efficiently...",
    highlights: [
      "Be an active part in pushing the technology pillar in the firm",
      "Ability to drive the top line by 2X in the next 5 years",
    ],
  },
  {
    title: "Head of IT Security - Leading Telecom Infrastructure company",
    location: "Gurgaon",
    type: "Permanent",
    wfh: "Yes",
    function: "Security",
    specialization: "Cyber Security",
    salary: 9500000,
    salaryText: "Confidential",
    description:
      "Define security policies & monitor all assurance activities related to the company's information security policies...",
    highlights: [
      "Be recognised as a Leader in Security",
      "Join a high-performing business, backing talented individuals",
    ],
  },
  {
    title: "IT Infrastructure & Digital Transformation Leader",
    location: "Mumbai",
    type: "Permanent",
    wfh: "No",
    function: "IT",
    specialization: "Infrastructure",
    salary: 4800000,
    salaryText: "INR4,500,000 - INR5,000,000 per year",
    description:
      "Lead the digital transformation journey with focus on IT infrastructure strategy and implementation...",
    highlights: [
      "Drive strategic initiatives",
      "Opportunity to scale IT operations",
    ],
  },
];

const JobSeekers = () => {
  const defaultFilters = {
    location: "",
    function: "",
    specialization: "",
    type: "",
    wfh: "",
    salaryMin: "",
    salaryMax: "",
  };

  const [filters, setFilters] = useState(defaultFilters);
  const [sortOrder, setSortOrder] = useState("recent");

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    setSortOrder("recent");
  };

  const filteredJobs = jobsData
    .filter((job) => {
      const {
        location,
        function: func,
        specialization,
        type,
        wfh,
        salaryMin,
        salaryMax,
      } = filters;

      const matchLocation = location ? job.location === location : true;
      const matchFunction = func ? job.function === func : true;
      const matchSpec = specialization
        ? job.specialization === specialization
        : true;
      const matchType = type ? job.type === type : true;
      const matchWFH = wfh ? job.wfh === wfh : true;
      const matchSalaryMin = salaryMin ? job.salary >= Number(salaryMin) : true;
      const matchSalaryMax = salaryMax ? job.salary <= Number(salaryMax) : true;

      return (
        matchLocation &&
        matchFunction &&
        matchSpec &&
        matchType &&
        matchWFH &&
        matchSalaryMin &&
        matchSalaryMax
      );
    })
    .sort((a, b) => {
      if (sortOrder === "salaryHigh") return b.salary - a.salary;
      if (sortOrder === "salaryLow") return a.salary - b.salary;
      return 0; // recent order (original)
    });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold mb-4">
          {filteredJobs.length} Information Technology jobs in India
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full h-100 lg:w-72 bg-white border rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Filter</h3>
              <button
                onClick={handleReset}
                className="text-sm text-blue-600 underline"
              >
                Reset
              </button>
            </div>

            <select
              name="location"
              onChange={handleChange}
              value={filters.location}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Location</option>
              <option>Mumbai</option>
              <option>Gurgaon</option>
            </select>

            <select
              name="function"
              onChange={handleChange}
              value={filters.function}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Function</option>
              <option>IT</option>
              <option>Security</option>
            </select>

            <select
              name="specialization"
              onChange={handleChange}
              value={filters.specialization}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Specialization</option>
              <option>Software</option>
              <option>Cyber Security</option>
              <option>Infrastructure</option>
            </select>

            <select
              name="type"
              onChange={handleChange}
              value={filters.type}
              className="w-full border p-2 rounded"
            >
              <option value="">Type of Contract</option>
              <option>Permanent</option>
              <option>Contract</option>
            </select>

            <select
              name="wfh"
              onChange={handleChange}
              value={filters.wfh}
              className="w-full border p-2 rounded"
            >
              <option value="">Work from Home</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <div className="flex gap-2">
              <input
                name="salaryMin"
                type="number"
                placeholder="Min Salary"
                className="w-1/2 p-2 border rounded"
                value={filters.salaryMin}
                onChange={handleChange}
              />
              <input
                name="salaryMax"
                type="number"
                placeholder="Max Salary"
                className="w-1/2 p-2 border rounded"
                value={filters.salaryMax}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h3 className="text-lg font-semibold">Job Results</h3>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border p-2 rounded"
              >
                <option value="recent">Most Recent</option>
                <option value="salaryHigh">Salary: High to Low</option>
                <option value="salaryLow">Salary: Low to High</option>
              </select>
            </div>

            {filteredJobs.map((job, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg p-6 shadow-sm transition hover:shadow-md"
              >
                <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                <div className="text-sm text-gray-600 mb-2">
                  {job.location} | {job.type} | {job.salaryText}
                </div>
                <p className="mb-2 text-sm">{job.description}</p>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                  {job.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap justify-end gap-3 mt-4">
                  <button className="border px-4 py-2 rounded hover:bg-gray-100">
                    Save Job
                  </button>
                  <button className="inline-flex items-center gap-2 px-2 py-3 sm:px-2 sm:py-3 md:px-4 md:py-3 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300">
                    Refer Friend
                    <span className="bg-black text-white rounded-full p-1 sm:p-2">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-2 py-3 sm:px-2 sm:py-3 md:px-4 md:py-3 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300">
                    Apply
                    <span className="bg-black text-white rounded-full p-1 sm:p-2">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </button>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center p-8 bg-white border rounded-lg shadow">
                <h4 className="text-lg font-semibold text-red-600 mb-2">
                  No jobs found!
                </h4>
                <p className="text-gray-500">
                  Try adjusting the filters to see more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;
