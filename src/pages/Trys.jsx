import React from 'react'

const try = () => {
    const [activeTab, setActiveTab] = useState(null);
    
      const handleMouseEnter = (tab) => setActiveTab(tab);
      const handleMouseLeave = () => setActiveTab(null);
  return (
    <div>
        <nav className="relative bg-blue-900 text-white z-50">
        <div className="flex justify-between items-center px-10 py-4">
          {/* Menu Items */}
          <div className="flex gap-8 text-sm font-medium">
            {["Job Seekers", "Employers", "About", "Contact"].map((item) => (
              <div
                key={item}
                className={`cursor-pointer hover:underline ${
                  activeTab === item ? "underline" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-md shadow-sm flex items-center gap-1 text-sm">
            📄 Salary Guide
          </button>
        </div>

        {/* DROPDOWN FOR JOB SEEKERS */}
        {activeTab === "Job Seekers" && (
          <div
            onMouseEnter={() => setActiveTab("Job Seekers")}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 top-full w-full bg-white shadow-lg rounded-b-xl z-40 px-10 py-6 grid grid-cols-3 gap-6 text-sm"
          >
            {/* Image and CTA */}
            <div>
              <img
                src="https://via.placeholder.com/200x120"
                alt="Job Seeker"
                className="rounded-md mb-3"
              />
              <h3 className="font-semibold text-gray-800">
                Start your job search
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Browse our jobs and apply for your next role.
              </p>
              <button className="bg-blue-800 text-white px-5 py-2 rounded-sm font-medium">
                Find jobs
              </button>
            </div>

            {/* Middle Navigation */}
            <div>
              <ul className="font-medium text-gray-700 space-y-3">
                <li className="hover:underline cursor-pointer">Find a Job</li>
                <li className="hover:underline cursor-pointer">
                  Contract or Temp Jobs
                </li>
                <li className="hover:underline cursor-pointer">
                  Career Advice
                </li>
              </ul>
            </div>

            {/* Opportunities & Resources */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">
                  Job Opportunities
                </h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Technology Jobs</li>
                  <li>Sales Jobs</li>
                  <li>Work from Home</li>
                  <li>Returning to India</li>
                  <li>Pre-MBA Roles</li>
                  <li className="font-medium text-blue-700 cursor-pointer">
                    View all jobs →
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Resources</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Salary Guide</li>
                  <li>Job Match</li>
                  <li>Resume Templates</li>
                  <li>Submit your CV</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* DROPDOWN FOR EMPLOYERS */}
        {activeTab === "Employers" && (
          <div
            onMouseEnter={() => setActiveTab("Employers")}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 top-full w-full bg-white shadow-lg rounded-b-xl z-40 px-10 py-6 grid grid-cols-3 gap-6 text-sm"
          >
            {/* Image and CTA */}
            <div>
              <img
                src="https://via.placeholder.com/200x120/FFDDCC"
                alt="Employers"
                className="rounded-md mb-3"
              />
              <h3 className="font-semibold text-gray-800">Hire Top Talent</h3>
              <p className="text-gray-600 text-sm mb-4">
                Post jobs and get access to a pool of quality candidates.
              </p>
              <button className="bg-blue-800 text-white px-5 py-2 rounded-sm font-medium">
                Post a Job
              </button>
            </div>

            {/* Employer Services */}
            <div>
              <ul className="font-medium text-gray-700 space-y-3">
                <li className="hover:underline cursor-pointer">
                  Recruitment Services
                </li>
                <li className="hover:underline cursor-pointer">
                  Hire Contract Workers
                </li>
                <li className="hover:underline cursor-pointer">Job Posting</li>
              </ul>
            </div>

            {/* Additional Tools */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Solutions</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Talent Search</li>
                  <li>Executive Hiring</li>
                  <li>Campus Hiring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">
                  Company Tools
                </h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Dashboard</li>
                  <li>Manage Applicants</li>
                  <li>Reports</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    
      
    </div>
  )
}

export default try
