 import { useParams,useLocation } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineFileText,
} from "react-icons/ai";
import { MdWork, MdLocationOn, MdOutlineCurrencyRupee} from "react-icons/md";
import { CheckCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import fetchJobs from "../../api/axios"; // your API fetch
import api from "../../api/jobFromdata"; // your axios instance
 


export default function ApplyForm() {
  const { jobId } = useParams();
  const location = useLocation();
  // const job=location.state?.job;
  // console.log("t",job);
  // console.log("Job Details:", job?.title);

  // 1️⃣ First try state
  const jobFromState = location.state?.job;

  // 2️⃣ Fallback: fetch from API if state is missing
  const { data: jobFromApi, isLoading } = useQuery({
    queryKey: ["job", jobId],
    queryFn: async () => {
      const jobs = await fetchJobs();
      return jobs?.data.find((j) => String(j.job_id) === String(jobId));
    },
    enabled: !jobFromState, // only fetch if needed
  });

  const job = jobFromState || jobFromApi;

  console.log("Job Details:", job);

  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    experience: "",
    designation: "",
    role: "",
    location: "",
    pinCode: "",
    relocate: "No",
    currentCTC: "",
    expectedCTC: "",
    resume: null,
  });

   const [applied, setApplied] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Candidate applied:", { jobId, ...formData });
  try {
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
      
    const response = await api.post(`/${jobId}/apply`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Application Response:", response.data);
    setApplied(true);
  } catch (error) {
    console.error("Error applying:", error.response?.data || error.message);
    alert("Application failed. Try again.");
  }
  };

  
  if (isLoading && !jobFromState) {
    return <p className="text-center mt-10">Loading job details...</p>;
  }

  if (!job) {
    return (
      <p className="text-center mt-10 text-red-500">
        Job not found for ID: {jobId}
      </p>
    );
  }

  if (applied) {
    return (
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 mt-10 text-center border border-yellow-500">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Application Submitted!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you <span className="font-semibold">{formData.fullName}</span>,
          your application for job role <b>{job.title}</b> has been successfully submitted.
        </p>
        <div className="bg-gradient-to-r from-yellow-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold inline-block">
          We will contact you soon 🚀
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-blue-100 flex items-center justify-center p-6 rounded-xl">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Apply for Job  <span className="text-yellow-500">{job.title}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
            <AiOutlineUser className="text-gray-400 mr-3 text-xl" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
            <AiOutlinePhone className="text-gray-400 mr-3 text-xl" />
            <input
              type="tel"
              name="contactNo"
              placeholder="Contact Number"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>

          {/* Experience, Designation, Role */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center border rounded-lg px-1 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <MdWork className="text-gray-400 mr-2 text-xl" />
              <input
                type="number"
                name="experience"
                placeholder="Experience (Years)"
                value={formData.experience}
                onChange={handleChange}
                className="w-full outline-none"
                min="0"
                required
              />
            </div>
            <div className="flex items-center border rounded-lg px-1 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <MdWork className="text-gray-400 mr-2 text-xl" />
              <input
                type="text"
                name="designation"
                placeholder="Current Designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
            <div className="flex items-center border rounded-lg px-1 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <MdWork className="text-gray-400 mr-2 text-xl" />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Location & Pin Code */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <MdLocationOn className="text-gray-400 mr-3 text-xl" />
              <input
                type="text"
                name="location"
                placeholder="City"
                value={formData.location}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                value={formData.pinCode}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Relocation */}
          <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
            <select
              name="relocate"
              value={formData.relocate}
              onChange={handleChange}
              className="w-full outline-none"
            >
              <option value="Yes">Ready to Relocate: Yes</option>
              <option value="No">Ready to Relocate: No</option>
            </select>
          </div>

          {/* CTC */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              <MdOutlineCurrencyRupee className="text-gray-400 mr-3 text-xl" />
              <input
                type="text"
                name="currentCTC"
                placeholder="Current CTC"
                value={formData.currentCTC}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-500">
              < MdOutlineCurrencyRupee className="text-gray-400 mr-3 text-xl" />
              <input
                type="text"
                name="expectedCTC"
                placeholder="Expected CTC"
                value={formData.expectedCTC}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="flex items-center border rounded-lg px-4 py-2 cursor-pointer hover:bg-yellow-50 transition">
            <AiOutlineFileText className="text-gray-400 mr-3 text-xl" />
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full outline-none cursor-pointer"
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

        {/* 
          //Preview Section 
        <div className="bg-gray-50 p-4 rounded-lg border mt-4">
          <h3 className="text-lg font-semibold text-yellow-600 mb-2">Preview</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><b>Name:</b> {formData.fullName}</li>
            <li><b>Contact:</b> {formData.contactNo}</li>
            <li><b>Experience:</b> {formData.experience} years</li>
            <li><b>Designation:</b> {formData.designation}</li>
            <li><b>Role:</b> {formData.role}</li>
            <li><b>Location:</b> {formData.location}</li>
            <li><b>Relocate:</b> {formData.relocate}</li>
            <li><b>Current CTC:</b> {formData.currentCTC} LPA</li>
            <li><b>Expected CTC:</b> {formData.expectedCTC} LPA</li>
            <li><b>Resume:</b> {formData.resume && formData.resume.name}</li>
          </ul>
        </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className=" py-3 px-15 bg-gradient-to-r from-yellow-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:from-blue-500 hover:to-yellow-500 transition-all"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
