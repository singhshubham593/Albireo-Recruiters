import React, { useState } from "react";
import { ChevronDown, ChevronRight, Search, Filter, X } from "lucide-react";
import JobButton from "../../pages/JobButton";
import Button from "../../pages/Button";
import { useQuery } from "@tanstack/react-query";
import fetchJobs from "../../api/axios.js";
import { useSelector, useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";

  const filtersInitial = {
    title:'',
    location: '',
    experence: '' 
};

export default function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filters, setFilters] = useState(filtersInitial);
  const [tempFilters, setTempFilters] = useState(filtersInitial);
  const { jobdata } = useSelector((state) => state.jobdata);
  console.log("Jobsdata", jobdata);

  const navigate = useNavigate();

  const {
    data: jobs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });
  
  // console.log("Jobsdata", jobdata);
  // // console.log("Jobssss",job);
  // console.log("data1", jobs?.data);
  // console.log("data3",jobs?.data.map((j) => j.locations) );
  // // console.log("data2", Jobdata);

  // console.log("data3", jobs?.data.map((j) => j.title));
  // console.log("data4", jobs?.data.map((j) => j.locations));
  // console.log("data5", jobs?.data.map((j) => j.min_exp));
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;
  console.log("hh",jobs.locations?.some((loc) => console.log(loc)))

  const resetFilter =() => {
    setFilters(filtersInitial);
    setTempFilters(filtersInitial);
  }

  const applyFilter =() => {
    setFilters(tempFilters);

  }

 

  const FilterSection =() =>{}

  const distinctTitles = [...new Set(jobs?.data.map(job => job.title))];
  distinctTitles.map(title => console.log(title));
{console.log("Jobs Data:", jobs?.data)} 

 // all location in one array
  const locationGather = jobs?.data.flatMap( job => job.locations || []);
  // all location needed in log
  const uniquelocation = [...new Set(locationGather)];
 
  const filterJobs = jobs?.data.filter((job) => {
    const titleMatchSearch = job.title ?.toLowerCase().includes(searchTitle.toLocaleLowerCase());
    const locationMatchSearch = searchLocation ? job.locations?.some((loc) =>
          loc.toLowerCase().includes(searchLocation.toLowerCase())
        )
      : true;

    // const titleSearch= jobs?.data.filter((job) => {console.log("hai",job.title ) ,console.log("h",  filters.title)})
    // console.log("location hai",titleSearch);
    // return titleMatch && locationMatch;
     // --- Sidebar applied filters ---
  const titleMatchFilter = filters.title
    ? job.title.toLowerCase() === filters.title.toLowerCase()
    : true;

  const locationMatchFilter = filters.location
    ? job.locations?.some(
        (loc) => loc.toLowerCase() === filters.location.toLowerCase()
      )
    : true;

  const expMatchFilter = filters.experence
    ? job.min_exp >= Number(filters.experence)
    : true;

  // Combine all
  return (
    titleMatchSearch &&
    locationMatchSearch &&
    titleMatchFilter &&
    locationMatchFilter &&
    expMatchFilter
  );
  });

  const handleShare = (job) => {
  const jobLink = `${window.location.origin}/JobSeekers/apply/${job.job_id}`;

  if (navigator.share) {
    navigator
      .share({
        title: job.title,
        text: `Check out this job: ${job.title} (${job.locations.join(", ")})`,
        url: jobLink,
      })
      .then(() => console.log("Job shared successfully"))
      .catch((error) => console.log("Error sharing:", error));
  } else {
    // fallback: copy to clipboard
    navigator.clipboard.writeText(jobLink);
    alert("Job link copied! Share it anywhere.");
  }
};


  return (
    <div className="bg-gray-50 p-4">
      {/* Top Search Bar */}
      <div className="bg-white p-4 rounded-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm ">
        <div className="flex flex-1 gap-2 w-full flex-col md:flex-row">
          <input
            type="text"
            placeholder="Search Job Tittle"
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
          {/* <button
            onClick={() => setSearchClicked(true)}
            className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300 flex items-center justify-center gap-2"
          >
            <Search size={16} />
            Search
          </button> */}
        </div>
        <Button type={"Create job alert"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6"> 
        {/* Desktop Filter Sider */}
         <div className="hidden h-fit md:block col-span-1 bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Filter</h3>
            <button onClick={resetFilter} className="text-sm text-blue-600">Reset</button>
          </div>
          <div>
               <h2 className="font-medium">Tittle</h2>
            <select
              value={tempFilters.title}
              onChange={(e) => setTempFilters({ ...tempFilters, title: e.target.value })}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">All</option>
              {/* <option value="Permanent">Permanent</option>
              <option value="Temporary">Temporary</option> */}
              { distinctTitles.map((title,id) => (
                <option key={id} value={title} > {title}</option>
                
                )) }
            </select>
            </div>
            <div>
              <h2 className="font-medium">Location</h2>
            <select
               value={tempFilters.location}
              onChange={(e) => setTempFilters({ ...tempFilters, location: e.target.value })}
              className="w-full border rounded px-2 py-1"
            >
               <option value="">All</option>
               {/*<option value="Mumbai">Mumbai</option>
              <option value="Gurgaon">Gurgaon</option> */}
               { uniquelocation.map((loc ,id) => (
                <option key={id} value={loc}> {loc}</option>
                ))   }
            </select>
            </div>
             
            <div>
               <h2 className="font-medium">experience</h2>
            <input 
              type="text" 
              placeholder="Experence"
              value={tempFilters.experence}
              onChange={(e) => setTempFilters({ ...tempFilters, experence: e.target.value })}
              className="w-full border rounded px-2 py-1"
            />
            </div>
             
         
          <button
             onClick={applyFilter}
            className="mt-4 py-3 w-full bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-300"
          >
            Apply Filters
          </button>
        </div> 
        <div className="col-span-1 md:col-span-3 space-y-4">
        {/* Desktop Results Header */}
          <div className="hidden md:flex justify-between items-center">
            <h2 className="text-xl font-semibold mx-4 my-2">
              {filterJobs.length} Total jobs 
            </h2>
            {/* <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-3 py-2 rounded-md"
            >
              <option value="Relevance">Relevance</option>
              <option value="Most recent">Most recent</option>
              <option value="Salary (high to low)">Salary (high to low)</option>
              <option value="Salary (low to high)">Salary (low to high)</option>
            </select> */}
          </div>

        
        {filterJobs.length > 0 ? (
          filterJobs.map((job) => (
            <div
              key={job.job_id}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#1e1e1e] mb-1">
                {job.title}
              </h3>
              <div className="text-sm text-gray-500 mb-2">
                •{" "}{job.employment_type} • {job.job_nature} •{" "}
                {job.industry || "N/A"} •{" "}{job.max_exp} - {job.min_exp}
              </div>

              <ul className="list-disc ml-5 text-sm text-gray-600 mb-4">
                <li>{job.locations.join(", ")}</li>
              </ul>

              <ul className="list-disc ml-5 text-sm text-gray-600 mb-4">
                <li>{job.shifts.join(", ")}</li>
              </ul>

              <ul className="list-disc ml-5 text-sm text-gray-600 mb-4">
                <li>{job.skills.join(", ")}</li>
              </ul>

              <p className="text-sm text-gray-700 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {/* <Button type={"Save"} /> */}
                <JobButton type="Share" onClick={() => handleShare(job)}/>
                <JobButton type="Apply" onClick={() => navigate(`/JobSeekers/apply/${job.job_id}`,  { state: { job } })} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-4">No jobs found</p>
        )}

        </div> 
      </div>
    </div>
  );
}
