 import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X, Search } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'VP Information Technology in MNC Pharma company',
    location: 'Mumbai',
    contractType: 'Permanent',
    salary: 'INR9,000,000 - INR11,000,000 per year',
    description:
      'Lead IT across production, sales, and distribution with compliance and cybersecurity.',
    bullets: [
      'Drive tech adoption in pharma manufacturing',
      'Double the topline in 5 years'
    ],
    remote: false
  },
  {
    id: 2,
    title: 'Head of IT Security - Leading Telecom Infrastructure company',
    location: 'Gurgaon',
    contractType: 'Permanent',
    salary: 'INR6,000,000 - INR8,000,000 per year',
    description:
      'Own cyber policies and align with leadership to reduce risk exposure.',
    bullets: [
      'Become Telecom Infra Security Leader',
      'Lead cross-functional cyber operations'
    ],
    remote: true
  }
];

const filtersInitial = {
  location: '',
  function: '',
  specialization: '',
  contractType: '',
  remote: '',
  minSalary: '',
  maxSalary: '',
  searchTitle: '',
  searchLocation: ''
};

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full py-2 font-medium"
      >
        {title} {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      {open && <div className="space-y-2 text-sm">{children}</div>}
    </div>
  );
};

export default function Job() {
  const [filters, setFilters] = useState(filtersInitial);
  const [sort, setSort] = useState('Relevance');
  const [searchOverlay, setSearchOverlay] = useState(false);
  const [error, setError] = useState('');

  const resetFilters = () => setFilters(filtersInitial);

  const filteredJobs = jobs.filter((job) => {
    const salaryRange = job.salary.match(/\d+/g).map(Number);
    return (
      (!filters.searchTitle ||
        job.title.toLowerCase().includes(filters.searchTitle.toLowerCase())) &&
      (!filters.searchLocation ||
        job.location.toLowerCase().includes(filters.searchLocation.toLowerCase())) &&
      (!filters.location || job.location === filters.location) &&
      (!filters.contractType || job.contractType === filters.contractType) &&
      (!filters.remote || (filters.remote === 'Yes' ? job.remote : !job.remote)) &&
      (!filters.minSalary || parseInt(filters.minSalary) <= salaryRange[0]) &&
      (!filters.maxSalary || parseInt(filters.maxSalary) >= salaryRange[1])
    );
  });

  const handleSearch = () => {
    if (!filters.searchTitle.trim()) {
      setError('This field is required');
      return;
    }
    setSearchOverlay(false);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 relative">
      {/* Top Search + Alert */}
      <div className="bg-white p-4 rounded-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div
          className="flex flex-1 gap-2 w-full cursor-pointer"
          onClick={() => setSearchOverlay(true)}
        >
          <input
            type="text"
            placeholder="Information Technology"
            value={filters.searchTitle}
            readOnly
            className="flex-1 px-4 py-2 border rounded-full bg-white cursor-pointer"
          />
          <input
            type="text"
            placeholder="Region, City..."
            value={filters.searchLocation}
            readOnly
            className="flex-1 px-4 py-2 border rounded-full bg-white cursor-pointer"
          />
        </div>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full">
          Search
        </button>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full">
          Create Job Alert
        </button>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option>Relevance</option>
          <option>Date Posted</option>
          <option>Salary</option>
        </select>
      </div>

      {/* Fullscreen Search Overlay */}
      {searchOverlay && (
        <div className="fixed inset-80 z-50 top-22 bg-white  p-6 flex flex-col gap-4 items-center justify-start">
          <div className="w-full max-w-4xl mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="This field is required"
                value={filters.searchTitle}
                onChange={(e) => setFilters({ ...filters, searchTitle: e.target.value })}
                className={`w-full px-4 py-3 border rounded-full ${
                  error ? 'border-red-500' : ''
                }`}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1 ml-2">{error}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Region, city..."
                value={filters.searchLocation}
                onChange={(e) => setFilters({ ...filters, searchLocation: e.target.value })}
                className="w-full px-4 py-3 border rounded-full"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-blue-800 text-white rounded-full"
            >
              Search
            </button>
            <button
              onClick={() => setSearchOverlay(false)}
              className="text-gray-600 text-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Sidebar Filters */}
        <div className="col-span-1 bg-white p-4 rounded-md shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Filter</h3>
            <button onClick={resetFilters} className="text-sm text-blue-600">Reset</button>
          </div>

          <FilterSection title="Location">
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">All</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Gurgaon">Gurgaon</option>
            </select>
          </FilterSection>

          <FilterSection title="Type of contract">
            <select
              value={filters.contractType}
              onChange={(e) => setFilters({ ...filters, contractType: e.target.value })}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">All</option>
              <option value="Permanent">Permanent</option>
              <option value="Temporary">Temporary</option>
            </select>
          </FilterSection>

          <FilterSection title="Work from Home">
            <select
              value={filters.remote}
              onChange={(e) => setFilters({ ...filters, remote: e.target.value })}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">All</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </FilterSection>

          <FilterSection title="Yearly salary (INR)">
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.minSalary}
                onChange={(e) => setFilters({ ...filters, minSalary: e.target.value })}
                className="w-1/2 border rounded px-2 py-1"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.maxSalary}
                onChange={(e) => setFilters({ ...filters, maxSalary: e.target.value })}
                className="w-1/2 border rounded px-2 py-1"
              />
            </div>
            <button className="mt-2 w-full border border-blue-600 text-blue-600 py-1 rounded-full hover:bg-blue-50">
              Filter Salary
            </button>
          </FilterSection>
        </div>

        {/* Job Listings */}
        <div className="col-span-1 md:col-span-3 space-y-4">
          <h2 className="text-xl font-semibold">{filteredJobs.length} Information Technology jobs in India</h2>
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-lg font-bold text-[#1e1e1e] mb-1">{job.title}</h3>
              <div className="text-sm text-gray-500 mb-2">
                {job.location} • {job.contractType} • {job.salary}
              </div>
              <p className="text-sm text-gray-700 mb-2">{job.description}</p>
              <ul className="list-disc ml-5 text-sm text-gray-600 mb-4">
                {job.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50">Save Job</button>
                <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50">Refer</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">View Job →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
