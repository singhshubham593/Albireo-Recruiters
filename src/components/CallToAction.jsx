import React from "react";
import { BriefcaseIcon, UsersIcon } from "@heroicons/react/24/solid";

const CallToAction = () => {
  return (
    <div className="relative bg-white flex items-center justify-center overflow-hidden rounded-lg">
      {/* Background blob */}
      {/*<div className="absolute -top-32 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-green-300 via-green-400 to-green-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>*/}
      <div className="absolute -top-27 -left-110 w-[600px] h-[600px] bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-500 rounded-full"></div>
        <div className="absolute -top-27 -right-110 w-[600px] h-[600px] bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-500 rounded-full"></div>


      {/* Card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-3 m-8 md:p-16 w-full max-w-3xl text-center border border-gray-200 transition duration-500">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 leading-snug">
          What would you like to do <br className="hidden md:block" /> today?
        </h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
          <button className="flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            <BriefcaseIcon className="h-5 w-5" />
            Find a Job
          </button>

          <button className="flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            <UsersIcon className="h-5 w-5" />
            Find Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
