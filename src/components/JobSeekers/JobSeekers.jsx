// src/components/JobSearchPage.jsx
import React, { useState } from "react";
import JobButton from "../../pages/JobButton.jsx";
import UnderDevelopment from "../../pages/UnderDevelopment.jsx";
import Jobs from "./jobs.jsx";

const JobSeekers = () => {
  return(
    <>
    <Jobs />
    {/* <UnderDevelopment /> */}
    </>
  )
  // const [showMobileFilter, setShowMobileFilter] = useState(false);
  // const [jobs] = useState([
  //   {
  //     title: "Sales Executive",
  //     company: "XeroDebt",
  //     location: "Agra",
  //     salary: "₹ 2,00,000 - 3,00,000",
  //     experience: "1 year(s)",
  //     date: "2 days ago",
  //   },
  //   {
  //     title: "Field Sales Associate",
  //     company: "Semsons Tech",
  //     location: "Mumbai",
  //     salary: "₹ 2,00,000 - 5,00,000",
  //     experience: "1 year(s)",
  //     date: "Today",
  //   },
  //   {
  //     title: "Sales Executive (Female)",
  //     company: "S.K.K Findouts Detectives LLP",
  //     location: "Ghaziabad",
  //     salary: "₹ 2,20,000 - 3,50,000",
  //     experience: "0 year(s)",
  //     date: "2 days ago",
  //   },
  //   {
  //     title: "Junior Media Buyer (Marketing Consultant)",
  //     company: "The First Time CEO",
  //     location: "Work from home",
  //     salary: "₹ 2,60,000 - 3,40,000",
  //     experience: "0 year(s)",
  //     date: "1 day ago",
  //   },
  // ]);

  // const toggleFilter = () => setShowMobileFilter(!showMobileFilter);

  // return (
  //   <div className="bg-gray-50 text-gray-800 min-h-screen">
  //     <div className="md:hidden p-4">
  //       <button
  //         onClick={toggleFilter}
  //         className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md"
  //       >
  //         Filters
  //       </button>
  //     </div>

  //     {showMobileFilter && (
  //       <div className="fixed inset-0 bg-white z-50 p-4   md:hidden">
  //         <div className="flex justify-between items-center mb-4">
  //           <h2 className="text-lg font-semibold">Filters</h2>
  //           <button onClick={toggleFilter} className="text-xl">
  //             &times;
  //           </button>
  //         </div>
  //         <input type="checkbox" className="mr-2" /> As per my{" "}
  //         <a href="#" className="text-blue-500">
  //           preferences
  //         </a>
  //         <input
  //           type="text"
  //           placeholder="e.g. Marketing"
  //           className="w-full border p-2 mb-3 rounded-md"
  //         />
  //         <input
  //           type="text"
  //           placeholder="e.g. Delhi"
  //           className="w-full border p-2 mb-3 rounded-md"
  //         />
  //         <label className="block text-left">
  //           <input type="checkbox" /> Jobs in my city
  //         </label>
  //         <label className="block text-left">
  //           <input type="checkbox" /> Work from home
  //         </label>
  //         <label className="block text-left mb-3">
  //           <input type="checkbox" /> Part-time
  //         </label>
  //         <input
  //           type="text"
  //           placeholder="At least ₹ 4 lakhs"
  //           className="w-full border p-2 mb-3 rounded-md"
  //         />
  //         <select className="w-full border p-2 mb-4 rounded-md">
  //           <option>Select years of experience</option>
  //           <option>0</option>
  //           <option>1</option>
  //           <option>2+</option>
  //         </select>
  //         <div className="flex justify-between">
  //           <button onClick={toggleFilter} className="text-blue-500">
  //             Clear All
  //           </button>
  //           <button
  //             onClick={toggleFilter}
  //             className="bg-blue-500 text-white px-4 py-2 rounded-md"
  //           >
  //             Apply
  //           </button>
  //         </div>
  //       </div>
  //     )}

  //     <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-4 gap-6">
  //       <aside className="hidden h-155  md:block w-full md:w-1/4 bg-white rounded-xl p-4 shadow-sm">
  //         <h2 className="text-lg font-semibold mb-4">Filters</h2>
  //         <label className="flex items-center space-x-2 mb-3">
  //           <input type="checkbox" className="form-checkbox" />
  //           <span>
  //             As per my{" "}
  //             <a href="#" className="text-blue-500">
  //               preferences
  //             </a>
  //           </span>
  //         </label>
  //         <input
  //           type="text"
  //           placeholder="e.g. Marketing"
  //           className="w-full border p-2 mb-3 rounded-md"
  //         />
  //         <input
  //           type="text"
  //           placeholder="e.g. Delhi"
  //           className="w-full border p-2 mb-3 rounded-md"
  //         />
  //         <div className="space-y-2 mb-4 text-left">
  //           <label className="block">
  //             <input type="checkbox" /> Jobs in my city
  //           </label>
  //           <label className="block">
  //             <input type="checkbox" /> Work from home
  //           </label>
  //           <label className="block">
  //             <input type="checkbox" /> Part-time
  //           </label>
  //         </div>
  //         <div className="mb-4">
  //           <label className="block mb-2 font-medium">
  //             Annual salary (in lakhs)
  //           </label>
  //           <input type="range" min="0" max="10" className="w-full " />
  //         </div>
  //         <div className="mb-4">
  //           <label className="block mb-2 font-medium">
  //             Years of experience
  //           </label>
  //           <select className="w-full border p-2 rounded-md">
  //             <option>Select years of experience</option>
  //             <option>0</option>
  //             <option>1</option>
  //             <option>2+</option>
  //           </select>
  //         </div>
  //         <input
  //           type="text"
  //           placeholder="e.g. Design, Infosys"
  //           className="w-full border p-2 rounded-md mb-3"
  //         />
  //         <button className="bg-blue-500 w-full py-2 text-white rounded-md">
  //           Search
  //         </button>
  //       </aside>

  //       <main className="flex-1 space-y-6 text-left">
  //         <div className="text-lg font-semibold">
  //           {jobs.length} Jobs Available
  //         </div>

  //         <div className="space-y-4">
  //           {jobs.map((job, idx) => (
  //             <div
  //               key={idx}
  //               className="bg-white p-4 rounded-xl shadow-sm  hover:shadow-md transition"
  //             >
  //               <div className="flex justify-between items-start">
  //                 <div>
  //                   <h4 className="font-semibold text-blue-700">{job.title}</h4>
  //                   <p className="text-sm text-gray-600">
  //                     {job.company}{" "}
  //                     <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs ml-1">
  //                       Actively hiring
  //                     </span>
  //                   </p>
  //                   <p className="text-sm mt-1">
  //                     📍 {job.location} | {job.salary} | {job.experience}
  //                   </p>
  //                   <p className="text-xs text-blue-500 mt-1">
  //                     <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mx-1"></span>
  //                     {job.date}{" "}
  //                     <span className="text-yellow-600 ml-2">
  //                       ⚡ Be an early applicant
  //                     </span>
  //                   </p>
  //                 </div>
  //                 <div className="w-10 h-10 bg-gray-200 rounded"></div>
  //               </div>
  //               <div className="mt-4 flex gap-2 ">
  //                 <button className=" inline-flex items-center gap-2 px-3 py-2 sm:px-3 sm:py-3 md:px-3 md:py-2 bg-gradient-to-r from-yellow-400 to-blue-400 text-black font-semibold rounded-full text-sm sm:text-base md:text-lg shadow-md hover:scale-105 transition transform duration-30">
  //                   Save Job
  //                 </button>
  //                 <JobButton type="Refer Friend" />
  //                 <JobButton type="Apply" />
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </main>
  //     </div>
  //   </div>
  // );
};

export default JobSeekers;
