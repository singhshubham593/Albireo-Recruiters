// JobMatchSection.jsx
import React from "react";

export default function JobMatchSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-blue-50 py-14 px-4 md:px-20 rounded-b-3xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Circular Match Icon */}
        <div className="relative w-24 h-24 bg-white rounded-full shadow-xl border-4 border-blue-600 flex items-center justify-center animate-pulse">
          <span className="text-blue-600 font-bold text-lg">match</span>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left flex-1 space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">Job Match</h2>
          <p className="text-gray-600 text-base">
            Try our smart new tool to find your perfect job. It’s simple, fast and accurate!
          </p>
        </div>

        {/* Upload CV Button */}
        <label className="group relative inline-block">
          <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
          <span className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out group-hover:bg-blue-600 group-hover:text-white cursor-pointer">
            Upload your CV
            <svg className="w-4 h-4 transition-transform transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </label>
      </div>
    </section>
  );
}
