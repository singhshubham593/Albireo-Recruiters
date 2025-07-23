import React from 'react'

const Employers = () => {
  return (
                
                    <div className="absolute left-0 top-full w-screen bg-white shadow-lg rounded-b-xl z-50 px-10 py-6 grid grid-cols-3 gap-6 text-sm text-gray-800">
                      {/* Left Block */}
                      <div>
                        <img
                          src={jobseekerImg}
                          alt="Job Seeker"
                          className="rounded-md mb-3"
                        />
                        <h3 className="font-semibold">Start your job search</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Browse our jobs and apply for your next role.
                        </p>
                        <button className="bg-blue-800 text-white px-5 py-2 rounded-sm font-medium">
                          Find jobs
                        </button>
                      </div>
    
                      {/* Middle Navigation */}
                      <div>
                        <ul className="font-medium space-y-3">
                          <li className="hover:underline cursor-pointer">
                            Find a Job
                          </li>
                          <li className="hover:underline cursor-pointer">
                            Contract or Temp Jobs
                          </li>
                          <li className="hover:underline cursor-pointer">
                            Career Advice
                          </li>
                        </ul>
                      </div>
    
                      {/* Right: Job Opportunities & Resources */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Job Opportunities</h4>
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
                          <h4 className="font-semibold mb-2">Resources</h4>
                          <ul className="space-y-1 text-gray-600">
                            <li>Salary Guide</li>
                            <li>Salary Comparison Tool</li>
                            <li>Job Match</li>
                            <li>Resume Templates</li>
                            <li>Create an Account</li>
                            <li>Submit your CV</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
  )
}

export default Employers
