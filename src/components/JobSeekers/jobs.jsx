  import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Search, Filter, X } from 'lucide-react';
import JobButton from '../../pages/JobButton';
import Button from '../../pages/Button';

const jobs = [
  {
    id: 1,
    title: 'VP Information Technology in MNC Pharma company',
    location: 'Mumbai',
    contractType: 'Permanent',
    salary: 'INR9,000,000 - INR11,000,000 per year',
    description:
      'The IT role is crucial for enabling the entire organization to get productivity reports quickly and efficiently across Production, Sales, and Distribution channels. The role involves overseeing IT infrastructure, applications, cyber security, and ensuring compliance with regulatory standards, and playing a crucial role in doubling the topline in the next 5 years.',
    bullets: [
      'Drive tech enablement',
      'Double topline in 5 years'
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
      'DThe IT role is crucial for enabling the entire organization to get productivity reports quickly and efficiently across Production, Sales, and Distribution channels. The role involves overseeing IT infrastructure, applications, cyber security, and ensuring compliance with regulatory standards, and playing a crucial role in doubling the topline in the next 5 years.',
    bullets: [
      'Lead cyber security initiatives',
      'High-performing tech team'
    ],
    remote: true
  },{
    id: 3,
    title: 'VP Information Technology in MNC Pharma company',
    location: 'Mumbai',
    contractType: 'Permanent',
    salary: 'INR9,000,000 - INR11,000,000 per year',
    description:
      'TThe IT role is crucial for enabling the entire organization to get productivity reports quickly and efficiently across Production, Sales, and Distribution channels. The role involves overseeing IT infrastructure, applications, cyber security, and ensuring compliance with regulatory standards, and playing a crucial role in doubling the topline in the next 5 years.',
    bullets: [
      'Drive tech enablement',
      'Double topline in 5 years'
    ],
    remote: false
  },
  {
    id: 4,
    title: 'VP Information Technology in MNC Pharma company',
    location: 'Mumbai',
    contractType: 'Permanent',
    salary: 'INR9,000,000 - INR11,000,000 per year',
    description:
      'The IT role is crucial for enabling the entire organization to get productivity reports quickly and efficiently across Production, Sales, and Distribution channels. The role involves overseeing IT infrastructure, applications, cyber security, and ensuring compliance with regulatory standards, and playing a crucial role in doubling the topline in the next 5 years.',
    bullets: [
      'Drive tech enablement',
      'Double topline in 5 years'
    ],
    remote: false
  }
];

const filtersInitial = {
  location: '',
  contractType: '',
  remote: '',
  minSalary: '',
  maxSalary: ''
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

export default function App() {
  const [filters, setFilters] = useState(filtersInitial);
  const [tempFilters, setTempFilters] = useState(filtersInitial);
  const [sort, setSort] = useState('Relevance');
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const resetFilters = () => {
    setFilters(filtersInitial);
    setTempFilters(filtersInitial);
  };

  const applyFilters = () => {
    setFilters(tempFilters);
    setShowMobileFilters(false); // Close mobile filter modal after applying
  };

  const filteredJobs = jobs.filter((job) => {
    const salaryRange = job.salary.match(/\d+/g).map(Number);
    return (
      (!searchClicked ||
        (!searchTitle || job.title.toLowerCase().includes(searchTitle.toLowerCase()))) &&
      (!searchClicked ||
        (!searchLocation || job.location.toLowerCase().includes(searchLocation.toLowerCase()))) &&
      (!filters.location || job.location === filters.location) &&
      (!filters.contractType || job.contractType === filters.contractType) &&
      (!filters.remote || (filters.remote === 'Yes' ? job.remote : !job.remote)) &&
      (!filters.minSalary || parseInt(filters.minSalary) <= salaryRange[0]) &&
      (!filters.maxSalary || parseInt(filters.maxSalary) >= salaryRange[1])
    );
  });

  // Sort jobs based on selected sort option
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    const salaryA = parseInt(a.salary.match(/\d+/g)[0]);
    const salaryB = parseInt(b.salary.match(/\d+/g)[0]);
    
    switch (sort) {
      case 'Relevance':
        // Keep original order for relevance
        return 0;
      case 'Most recent':
        // Sort by ID (assuming higher ID means more recent)
        return b.id - a.id;
      case 'Salary (high to low)':
        return salaryB - salaryA;
      case 'Salary (low to high)':
        return salaryA - salaryB;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gray-50 p-4">
      {/* Top Search Bar */}
      <div className="bg-white p-4 rounded-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex flex-1 gap-2 w-full flex-col md:flex-row">
          <input
            type="text"
            placeholder="Information Technology"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-full"
          />
          <input
            type="text"
            placeholder="Region, City..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-full"
          />
          <button
            onClick={() => setSearchClicked(true)}
            className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300 flex items-center justify-center gap-2"
          >
            <Search size={16} />
            Search
          </button>
        </div>
        <Button type={"Create job alert"} />
      </div>

      {/* Mobile Filter and Sort Controls */}
      <div className="md:hidden mt-4 flex gap-2">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-md shadow-sm border"
        >
          <Filter size={16} />
          Filter
        </button>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="flex-1 px-4 py-3 bg-white rounded-md shadow-sm border"
        >
          <option value="Relevance">Relevance</option>
          <option value="Most recent">Most recent</option>
          <option value="Salary (high to low)">Salary (high to low)</option>
          <option value="Salary (low to high)">Salary (low to high)</option>
        </select>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 left-0 right-0 bg-white p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <FilterSection title="Location">
                <select
                  value={tempFilters.location}
                  onChange={(e) => setTempFilters({ ...tempFilters, location: e.target.value })}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">All</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Gurgaon">Gurgaon</option>
                </select>
              </FilterSection>
              
              <FilterSection title="Type of contract">
                <select
                  value={tempFilters.contractType}
                  onChange={(e) => setTempFilters({ ...tempFilters, contractType: e.target.value })}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">All</option>
                  <option value="Permanent">Permanent</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </FilterSection>
              
              <FilterSection title="Work from Home">
                <select
                  value={tempFilters.remote}
                  onChange={(e) => setTempFilters({ ...tempFilters, remote: e.target.value })}
                  className="w-full border rounded px-3 py-2"
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
                    value={tempFilters.minSalary}
                    onChange={(e) => setTempFilters({ ...tempFilters, minSalary: e.target.value })}
                    className="w-1/2 border rounded px-3 py-2"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={tempFilters.maxSalary}
                    onChange={(e) => setTempFilters({ ...tempFilters, maxSalary: e.target.value })}
                    className="w-1/2 border rounded px-3 py-2"
                  />
                </div>
              </FilterSection>
              
              <div className="flex gap-2 pt-4">
                <button
                  onClick={resetFilters}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-gray-700"
                >
                  Reset
                </button>
                <button
                  onClick={applyFilters}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-md"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Desktop Filter Sidebar */}
        <div className="hidden h-fit md:block col-span-1 bg-white p-4 rounded-md shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Filter</h3>
            <button onClick={resetFilters} className="text-sm text-blue-600">Reset</button>
          </div>
          <FilterSection title="Location">
            <select
              value={tempFilters.location}
              onChange={(e) => setTempFilters({ ...tempFilters, location: e.target.value })}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">All</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Gurgaon">Gurgaon</option>
            </select>
          </FilterSection>
          <FilterSection title="Type of contract">
            <select
              value={tempFilters.contractType}
              onChange={(e) => setTempFilters({ ...tempFilters, contractType: e.target.value })}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">All</option>
              <option value="Permanent">Permanent</option>
              <option value="Temporary">Temporary</option>
            </select>
          </FilterSection>
          <FilterSection title="Work from Home">
            <select
              value={tempFilters.remote}
              onChange={(e) => setTempFilters({ ...tempFilters, remote: e.target.value })}
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
                value={tempFilters.minSalary}
                onChange={(e) => setTempFilters({ ...tempFilters, minSalary: e.target.value })}
                className="w-1/2 border rounded px-2 py-1"
              />
              <input
                type="number"
                placeholder="Max"
                value={tempFilters.maxSalary}
                onChange={(e) => setTempFilters({ ...tempFilters, maxSalary: e.target.value })}
                className="w-1/2 border rounded px-2 py-1"
              />
            </div>
          </FilterSection>
          <button
            onClick={applyFilters}
            className="mt-4 py-3 w-full bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300"
          >
            Apply Filters
          </button>
        </div>

        <div className="col-span-1 md:col-span-3 space-y-4">
          {/* Desktop Results Header */}
          <div className="hidden md:flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {sortedJobs.length} Information Technology jobs in India
            </h2>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-3 py-2 rounded-md"
            >
              <option value="Relevance">Relevance</option>
              <option value="Most recent">Most recent</option>
              <option value="Salary (high to low)">Salary (high to low)</option>
              <option value="Salary (low to high)">Salary (low to high)</option>
            </select>
          </div>

          {/* Mobile Results Header */}
          <div className="md:hidden">
            <h2 className="text-lg font-semibold mb-2">
              {sortedJobs.length} Information Technology jobs in India
            </h2>
          </div>

          {sortedJobs.map((job) => (
            <div key={job.id} className="bg-white p-4 md:p-6 rounded-md shadow-sm">
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
              <div className="flex flex-wrap gap-2 md:gap-3">
                <Button type={"Save"} />
                <JobButton type={"Refer"} />
                <JobButton type={"Apply"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
