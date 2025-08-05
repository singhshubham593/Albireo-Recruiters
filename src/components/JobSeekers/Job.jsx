 import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
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
      'The IT role is crucial for enabling productivity across Production, Sales, and Distribution.',
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
      'Define security policies and lead cyber risk management for telecom infrastructure.',
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
      'The IT role is crucial for enabling productivity across Production, Sales, and Distribution.',
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
      'The IT role is crucial for enabling productivity across Production, Sales, and Distribution.',
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

  const resetFilters = () => {
    setFilters(filtersInitial);
    setTempFilters(filtersInitial);
  };

  const applyFilters = () => {
    setFilters(tempFilters);
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

  return (
    <div className=" bg-gray-50 p-4">
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
            className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300"
          >
            Search
          </button>
        </div>
        {/* <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50">
          Create Job Alert
        </button> */}
        <Button type={"Create job alert"} />
      </div>

      <div className="grid grid-cols-1  md:grid-cols-4 gap-6 mt-6">
        <div className="col-span-1 h-110 bg-white p-4 rounded-md shadow-sm">
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
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {filteredJobs.length} Information Technology jobs in India
            </h2>
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
              <div className="flex gap-3">
                {/* <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50">Save Job</button> */}
                <Button type={"Save"} />
                <JobButton type={"Refer"} />
                <JobButton type={"Apply"} />
                {/* <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50">Refer</button> */}
                {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">View Job →</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
