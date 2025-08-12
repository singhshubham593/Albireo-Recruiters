import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Edit, Eye, EyeOff, X, ChevronDown, ChevronRight, Mail, Phone, MapPin, FileText, Settings, Globe, Briefcase, Award, Download, Upload, Trash2, FilePlus2 } from "lucide-react";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: "Shubham Singh",
    email: "rajputshubhamsingh593@gmail.com",
    phone: "093307 89940",
    location: "Noida, Uttar Pradesh, IN",
    resume: {
      name: "ShubhFront (2).pdf",
      date: "Added 18 Jun 2025"
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [visibilityModalOpen, setVisibilityModalOpen] = useState(false);
  const [employersCanFind, setEmployersCanFind] = useState(true);
  const [pendingVisibility, setPendingVisibility] = useState(null);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const [resumeFileUrl, setResumeFileUrl] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resumeFileUrl) URL.revokeObjectURL(resumeFileUrl);
    };
  }, [resumeFileUrl]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleResumeChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      resume: {
        ...prev.resume,
        [field]: value
      }
    }));
  };

  const renderProfileSection = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header (no back button on main profile) */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
      </div>

      {/* Profile Info */}
      <div className="flex items-start space-x-6 mb-8">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">SS</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-4">
            {isEditing ? (
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 focus:outline-none"
              />
            ) : (
              <h2 className="text-3xl font-bold text-gray-900">{profileData.name}</h2>
            )}
            <button
              onClick={isEditing ? handleSave : handleEdit}
              className="text-blue-600 hover:text-blue-800"
            >
              {isEditing ? 'Save' : <Edit className="w-5 h-5" />}
            </button>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              {isEditing ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="flex-1 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              ) : (
                <span className="text-gray-700">{profileData.email}</span>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-500" />
              {isEditing ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="flex-1 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              ) : (
                <span className="text-gray-700">{profileData.phone}</span>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="flex-1 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              ) : (
                <span className="text-gray-700">{profileData.location}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Visibility Banner */}
      <button
        type="button"
        onClick={() => {
          setPendingVisibility(employersCanFind);
          setVisibilityModalOpen(true);
        }}
        className={`${employersCanFind ? "bg-green-100 border-green-200" : "bg-gray-100 border-gray-200"} border rounded-lg p-4 mb-8 w-full flex items-center justify-between text-left`}
      >
        <div className="flex items-center space-x-3">
          {employersCanFind ? (
            <Eye className="w-5 h-5 text-green-600" />
          ) : (
            <EyeOff className="w-5 h-5 text-gray-600" />
          )}
          <span className={`${employersCanFind ? "text-green-800" : "text-gray-800"} font-medium`}>
            {employersCanFind ? "Employers can find you" : "Employers can't find you"}
          </span>
        </div>
        <ChevronDown className={`${employersCanFind ? "text-green-600" : "text-gray-600"} w-5 h-5`} />
      </button>

      {/* Resume Section */}
      <div className="mb-8 relative">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Resume</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">{profileData.resume.name}</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">PDF</span>
              </div>
              <p className="text-sm text-gray-500">{profileData.resume.date}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={() => setResumeMenuOpen((v) => !v)} className="text-gray-400 hover:text-gray-600">
              <span className="text-2xl">⋮</span>
            </button>
          </div>
          <input ref={fileInputRef} type="file" accept="application/pdf" className="hidden" onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            if (resumeFileUrl) URL.revokeObjectURL(resumeFileUrl);
            const url = URL.createObjectURL(file);
            setResumeFile(file);
            setResumeFileUrl(url);
            setProfileData((prev) => ({
              ...prev,
              resume: {
                name: file.name,
                date: `Added ${new Date().toLocaleDateString()}`
              }
            }));
            setResumeMenuOpen(false);
          }} />
          {resumeMenuOpen && (
            <>
              <div className="fixed inset-0" onClick={() => setResumeMenuOpen(false)} />
              <div className="absolute right-2 top-20 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                <button onClick={() => {
                  if (resumeFileUrl) {
                    window.open(resumeFileUrl, "_blank");
                  } else {
                    alert("No resume file. Use Replace file to upload.");
                  }
                  setResumeMenuOpen(false);
                }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <span>View</span>
                </button>
                <button onClick={() => {
                  if (resumeFileUrl) {
                    const link = document.createElement('a');
                    link.href = resumeFileUrl;
                    link.download = profileData.resume.name || 'resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                  } else {
                    alert("No resume file to download.");
                  }
                  setResumeMenuOpen(false);
                }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left">
                  <Download className="w-5 h-5 text-gray-600" />
                  <span>Download</span>
                </button>
                <button onClick={() => {
                  setIsEditing(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setResumeMenuOpen(false);
                }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left">
                  <Edit className="w-5 h-5 text-gray-600" />
                  <span>Update saved information</span>
                </button>
                <button onClick={() => {
                  alert('Converted to Indeed Resume (demo)');
                  setResumeMenuOpen(false);
                }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left">
                  <FilePlus2 className="w-5 h-5 text-gray-600" />
                  <span>Convert to Indeed Resume</span>
                </button>
                <button onClick={() => fileInputRef.current?.click()} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left">
                  <Upload className="w-5 h-5 text-gray-600" />
                  <span>Replace file</span>
                </button>
                <button onClick={() => {
                  if (confirm('Delete the resume file?')) {
                    if (resumeFileUrl) URL.revokeObjectURL(resumeFileUrl);
                    setResumeFileUrl(null);
                    setResumeFile(null);
                    setProfileData((prev) => ({ ...prev, resume: { name: 'No resume', date: '' } }));
                  }
                  setResumeMenuOpen(false);
                }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left">
                  <Trash2 className="w-5 h-5 text-red-600" />
                  <span className="text-red-600">Delete</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Job Match Sections */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Improve your job matches</h3>
        <div className="space-y-3">
          {[
            {
              title: "Qualifications",
              description: "Highlight your skills and experience.",
              icon: Settings,
              section: "qualifications"
            },
            {
              title: "Job preferences",
              description: "Save specific details like minimum desired pay and schedule.",
              icon: Briefcase,
              section: "jobPreferences"
            },
            {
              title: "Hide jobs with these details",
              description: "Manage the qualifications or preferences used to hide jobs from your search.",
              icon: Eye,
              section: "hideJobs"
            },
            {
              title: "Ready to work",
              description: "Let employers know that you're available to start working as soon as possible.",
              icon: Award,
              section: "readyToWork"
            }
          ].map((item) => (
            <button
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-gray-500" />
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisibilityModal = () => {
    if (!visibilityModalOpen) return null;
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={() => setVisibilityModalOpen(false)} />
        <div className="relative bg-white w-[90vw] max-w-md rounded-xl shadow-xl border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Profile settings</h2>
            <button onClick={() => setVisibilityModalOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 space-y-4">
            {/* Option 1 */}
            <label className={`block rounded-lg border ${pendingVisibility === true ? "border-blue-500 ring-1 ring-blue-300" : "border-gray-200"} p-4 cursor-pointer`}> 
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <Eye className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">Recommended</span>
                    <span className="sr-only">recommended</span>
                  </div>
                  <h3 className="mt-1 font-semibold text-gray-900">Employers can find you</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Employers can find your profile and contact you about jobs. We attempt to hide identifiable details until you respond to employers.
                  </p>
                </div>
                <input
                  type="radio"
                  name="visibility"
                  className="ml-3 mt-1"
                  checked={pendingVisibility === true}
                  onChange={() => setPendingVisibility(true)}
                />
              </div>
            </label>

            {/* Option 2 */}
            <label className={`block rounded-lg border ${pendingVisibility === false ? "border-blue-500 ring-1 ring-blue-300" : "border-gray-200"} p-4 cursor-pointer`}>
              <div className="flex items-start">
                <div className="mt-1 mr-3">
                  <EyeOff className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Employers can't find you</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Only employers you’ve applied to can see you. Other employers can’t find your profile or contact you about jobs.
                  </p>
                </div>
                <input
                  type="radio"
                  name="visibility"
                  className="ml-3 mt-1"
                  checked={pendingVisibility === false}
                  onChange={() => setPendingVisibility(false)}
                />
              </div>
            </label>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button
              onClick={() => setVisibilityModalOpen(false)}
              className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setEmployersCanFind(Boolean(pendingVisibility));
                setVisibilityModalOpen(false);
              }}
              className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderQualificationsSection = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => setActiveSection(null)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Profile
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Qualifications</h1>
      </div>
      
      <p className="text-gray-600 mb-8">
        We use these details to show you jobs that match your unique skills and experience.
      </p>

      {/* Education Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded">
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Education</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">B.Eng</p>
          <p className="text-gray-600 text-sm">Bachelors, Information technology</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded">
              <Settings className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex flex-wrap gap-2">
            {[
              "AJAX", "APIs", "Application development", "Communication skills", 
              "Debugging", "JSON", "Mobile marketing", "Node.js", "OOP", 
              "Performance marketing", "React", "Redux", "Responsive web design (1 year)",
              "REST", "SDLC", "Software troubleshooting", "TypeScript", "UI", 
              "UI design", "Version control systems", "Web accessibility", 
              "Web design", "Web development", "XML"
            ].map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">Bengali, BASIC</p>
          <p className="text-gray-600 text-sm">English, Intermediate</p>
        </div>
      </div>

      {/* Add Sections */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Add more details</h3>
        {[
          {
            title: "Add most recent work experience",
            icon: Briefcase,
            description: "Highlight your professional background"
          },
          {
            title: "Add licences",
            icon: Award,
            description: "Include relevant certifications"
          },
          {
            title: "Add certifications",
            icon: Award,
            description: "Show your qualifications"
          }
        ].map((item, index) => (
          <button
            key={index}
            className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-2 rounded">
                  <item.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <span className="text-2xl text-gray-400">+</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderJobPreferencesSection = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => setActiveSection(null)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Profile
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Job Preferences</h1>
      </div>
      
      <p className="text-gray-600 mb-8">
        Save specific details like minimum desired pay and schedule to get better job matches.
      </p>

      {/* Salary Preferences */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded">
              <Briefcase className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Salary Expectations</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">₹8,00,000 - ₹12,00,000 per annum</p>
          <p className="text-gray-600 text-sm">Based on experience and skills</p>
        </div>
      </div>

      {/* Work Schedule */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded">
              <Settings className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Work Schedule</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">Full-time, Remote/Hybrid</p>
          <p className="text-gray-600 text-sm">Flexible with office visits when needed</p>
        </div>
      </div>

      {/* Location Preferences */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Location Preferences</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">Noida, Delhi NCR, Remote</p>
          <p className="text-gray-600 text-sm">Willing to relocate for the right opportunity</p>
        </div>
      </div>

      {/* Industry Preferences */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded">
              <Briefcase className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Industry Preferences</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex flex-wrap gap-2">
            {["Technology", "E-commerce", "Fintech", "Healthcare", "Education"].map((industry, index) => (
              <span key={index} className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Add More Preferences */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Add more preferences</h3>
        {[
          {
            title: "Add work culture preferences",
            icon: Briefcase,
            description: "Specify your preferred work environment"
          },
          {
            title: "Add travel preferences",
            icon: MapPin,
            description: "Indicate willingness to travel"
          },
          {
            title: "Add contract preferences",
            icon: Briefcase,
            description: "Specify contract vs permanent preferences"
          }
        ].map((item, index) => (
          <button
            key={index}
            className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-2 rounded">
                  <item.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <span className="text-2xl text-gray-400">+</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderHideJobsSection = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => setActiveSection(null)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Profile
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Hide Jobs</h1>
      </div>
      
      <p className="text-gray-600 mb-8">
        Manage the qualifications or preferences used to hide jobs from your search.
      </p>

      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Filters</h3>
          <p className="text-gray-600">No active filters. All jobs are visible.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Add filters to hide jobs</h3>
          {[
            "Hide jobs below salary threshold",
            "Hide jobs in specific locations",
            "Hide jobs from certain companies",
            "Hide jobs requiring specific skills you don't have"
          ].map((filter, index) => (
            <button
              key={index}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900">{filter}</span>
                <span className="text-2xl text-gray-400">+</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReadyToWorkSection = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => setActiveSection(null)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Profile
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Ready to Work</h1>
      </div>
      
      <p className="text-gray-600 mb-8">
        Let employers know that you're available to start working as soon as possible.
      </p>

      <div className="space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-2 rounded">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-900">Status: Available</h3>
          </div>
          <p className="text-green-800">You're currently marked as available for immediate work.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Availability Settings</h3>
          {[
            {
              title: "Start Date",
              value: "Immediately",
              description: "When you can start working"
            },
            {
              title: "Notice Period",
              value: "2 weeks",
              description: "Time needed to leave current role"
            },
            {
              title: "Work Type",
              value: "Full-time, Part-time",
              description: "Types of work you're open to"
            }
          ].map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{setting.title}</h4>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">{setting.value}</span>
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Additional Options</h3>
          {[
            "Set availability calendar",
            "Add preferred interview times",
            "Specify relocation preferences",
            "Set communication preferences"
          ].map((option, index) => (
            <button
              key={index}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900">{option}</span>
                <span className="text-2xl text-gray-400">+</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Render based on active section
  if (activeSection === 'qualifications') {
    return <>
      {renderQualificationsSection()}
      {renderVisibilityModal()}
    </>;
  } else if (activeSection === 'jobPreferences') {
    return <>
      {renderJobPreferencesSection()}
      {renderVisibilityModal()}
    </>;
  } else if (activeSection === 'hideJobs') {
    return <>
      {renderHideJobsSection()}
      {renderVisibilityModal()}
    </>;
  } else if (activeSection === 'readyToWork') {
    return <>
      {renderReadyToWorkSection()}
      {renderVisibilityModal()}
    </>;
  }

  return <>
    {renderProfileSection()}
    {renderVisibilityModal()}
  </>;
}
