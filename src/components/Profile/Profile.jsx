import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Edit, Eye, EyeOff, X, ChevronDown, ChevronRight, Mail, Phone, MapPin, FileText, Settings, Globe, Briefcase, Award, Download, Upload, Trash2, FilePlus2, Plus } from "lucide-react";

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
  const [avatarUrl, setAvatarUrl] = useState(
    typeof window !== 'undefined' && localStorage.getItem('avatarUrl')
      ? localStorage.getItem('avatarUrl')
      : 'https://i.pravatar.cc/100?img=8'
  );

  // Profile editable datasets
  const [qualData, setQualData] = useState({
    educationDegree: 'B.Eng',
    educationDetail: 'Bachelors, Information technology',
    educationList: [
      { degree: 'B.Eng', detail: 'Bachelors, Information technology' }
    ],
    skills: [
      'AJAX', 'APIs', 'Application development', 'Communication skills',
      'Debugging', 'JSON', 'Mobile marketing', 'Node.js', 'OOP',
      'Performance marketing', 'React', 'Redux', 'Responsive web design (1 year)',
      'REST', 'SDLC', 'Software troubleshooting', 'TypeScript', 'UI',
      'UI design', 'Version control systems', 'Web accessibility',
      'Web design', 'Web development', 'XML'
    ],
    languages: ['Bengali, BASIC', 'English, Intermediate'],
    experiences: [],
    certifications: []
  });

  const [jobPrefs, setJobPrefs] = useState({
    salary: '₹8,00,000 - ₹12,00,000 per annum',
    salaryNote: 'Based on experience and skills',
    salaryList: [
      { value: '₹8,00,000 - ₹12,00,000 per annum', note: 'Based on experience and skills' }
    ],
    schedule: 'Full-time, Remote/Hybrid',
    scheduleNote: 'Flexible with office visits when needed',
    scheduleList: [
      { value: 'Full-time, Remote/Hybrid', note: 'Flexible with office visits when needed' }
    ],
    locations: 'Noida, Delhi NCR, Remote',
    relocateNote: 'Willing to relocate for the right opportunity',
    locationList: [
      { value: 'Noida, Delhi NCR, Remote', note: 'Willing to relocate for the right opportunity' }
    ],
    industries: ['Technology', 'E-commerce', 'Fintech', 'Healthcare', 'Education'],
    industryList: [
      { value: ['Technology', 'E-commerce', 'Fintech', 'Healthcare', 'Education'] }
    ]
  });

  const [readyWorkData, setReadyWorkData] = useState({
    startDate: 'Immediately',
    noticePeriod: '2 weeks',
    workType: 'Full-time, Part-time',
    startDateList: [
      { value: 'Immediately' }
    ],
    noticePeriodList: [
      { value: '2 weeks' }
    ],
    workTypeList: [
      { value: 'Full-time, Part-time' }
    ]
  });

  // Generic edit modal state
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [editValues, setEditValues] = useState({});

  // Experience modal state
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);
  const [experienceForm, setExperienceForm] = useState({ jobTitle: '', companyName: '' });

  // Certification modal state
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [certForm, setCertForm] = useState({ name: '', month: '', year: '', noExpire: false });

  // Add new item modals
  const [addWorkCultureModal, setAddWorkCultureModal] = useState(false);
  const [addTravelModal, setAddTravelModal] = useState(false);
  const [addContractModal, setAddContractModal] = useState(false);
  const [addLicensesModal, setAddLicensesModal] = useState(false);
  const [addAvailabilityModal, setAddAvailabilityModal] = useState(false);
  const [addInterviewModal, setAddInterviewModal] = useState(false);
  const [addRelocationModal, setAddRelocationModal] = useState(false);
  const [addCommunicationModal, setAddCommunicationModal] = useState(false);
  
  // Add new items to existing sections modals
  const [addEducationModal, setAddEducationModal] = useState(false);
  const [addSkillsModal, setAddSkillsModal] = useState(false);
  const [addLanguagesModal, setAddLanguagesModal] = useState(false);
  const [addSalaryModal, setAddSalaryModal] = useState(false);
  const [addScheduleModal, setAddScheduleModal] = useState(false);
  const [addLocationModal, setAddLocationModal] = useState(false);
  const [addIndustryModal, setAddIndustryModal] = useState(false);
  const [addStartDateModal, setAddStartDateModal] = useState(false);
  const [addNoticePeriodModal, setAddNoticePeriodModal] = useState(false);
  const [addWorkTypeModal, setAddWorkTypeModal] = useState(false);

  // Form states for new items
  const [workCultureForm, setWorkCultureForm] = useState({ preference: '' });
  const [travelForm, setTravelForm] = useState({ willingness: '', frequency: '' });
  const [contractForm, setContractForm] = useState({ type: '' });
  const [licensesForm, setLicensesForm] = useState({ name: '', issuingAuthority: '', expiryDate: '' });
  const [availabilityForm, setAvailabilityForm] = useState({ calendar: '' });
  const [interviewForm, setInterviewForm] = useState({ times: '' });
  const [relocationForm, setRelocationForm] = useState({ willingness: '', locations: '' });
  const [communicationForm, setCommunicationForm] = useState({ preference: '' });
  
  // Form states for adding to existing sections
  const [educationForm, setEducationForm] = useState({ degree: '', detail: '' });
  const [skillsForm, setSkillsForm] = useState({ skillsText: '' });
  const [languagesForm, setLanguagesForm] = useState({ languagesText: '' });
  const [salaryForm, setSalaryForm] = useState({ value: '', note: '' });
  const [scheduleForm, setScheduleForm] = useState({ value: '', note: '' });
  const [locationForm, setLocationForm] = useState({ value: '', note: '' });
  const [industryForm, setIndustryForm] = useState({ listText: '' });
  const [startDateForm, setStartDateForm] = useState({ value: '' });
  const [noticePeriodForm, setNoticePeriodForm] = useState({ value: '' });
  const [workTypeForm, setWorkTypeForm] = useState({ value: '' });

  useEffect(() => {
    return () => {
      if (resumeFileUrl) URL.revokeObjectURL(resumeFileUrl);
    };
  }, [resumeFileUrl]);

  useEffect(() => {
    try {
      localStorage.setItem('avatarUrl', avatarUrl || '');
    } catch {}
  }, [avatarUrl]);

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

  // Open specific edit modal with current values
  const openEditModal = (target) => {
    setEditTarget(target);
    switch (target) {
      case 'education':
        setEditValues({ degree: qualData.educationDegree, detail: qualData.educationDetail });
        break;
      case 'skills':
        setEditValues({ skillsText: qualData.skills.join(', ') });
        break;
      case 'languages':
        setEditValues({ line1: qualData.languages[0] || '', line2: qualData.languages[1] || '' });
        break;
      case 'salary':
        setEditValues({ value: jobPrefs.salary, note: jobPrefs.salaryNote });
        break;
      case 'schedule':
        setEditValues({ value: jobPrefs.schedule, note: jobPrefs.scheduleNote });
        break;
      case 'locations':
        setEditValues({ value: jobPrefs.locations, note: jobPrefs.relocateNote });
        break;
      case 'industries':
        setEditValues({ listText: jobPrefs.industries.join(', ') });
        break;
      case 'startDate':
        setEditValues({ value: readyWorkData.startDate });
        break;
      case 'noticePeriod':
        setEditValues({ value: readyWorkData.noticePeriod });
        break;
      case 'workType':
        setEditValues({ value: readyWorkData.workType });
        break;
      default:
        setEditValues({});
    }
    setEditModalOpen(true);
  };

  const saveEditModal = () => {
    switch (editTarget) {
      case 'education':
        setQualData(prev => ({ ...prev, educationDegree: editValues.degree || '', educationDetail: editValues.detail || '' }));
        break;
      case 'skills':
        setQualData(prev => ({ ...prev, skills: (editValues.skillsText || '').split(',').map(s => s.trim()).filter(Boolean) }));
        break;
      case 'languages':
        setQualData(prev => ({ ...prev, languages: [editValues.line1 || '', editValues.line2 || ''].filter(Boolean) }));
        break;
      case 'salary':
        setJobPrefs(prev => ({ ...prev, salary: editValues.value || '', salaryNote: editValues.note || '' }));
        break;
      case 'schedule':
        setJobPrefs(prev => ({ ...prev, schedule: editValues.value || '', scheduleNote: editValues.note || '' }));
        break;
      case 'locations':
        setJobPrefs(prev => ({ ...prev, locations: editValues.value || '', relocateNote: editValues.note || '' }));
        break;
      case 'industries':
        setJobPrefs(prev => ({ ...prev, industries: (editValues.listText || '').split(',').map(s => s.trim()).filter(Boolean) }));
        break;
      case 'startDate':
        setReadyWorkData(prev => ({ ...prev, startDate: editValues.value || '' }));
        break;
      case 'noticePeriod':
        setReadyWorkData(prev => ({ ...prev, noticePeriod: editValues.value || '' }));
        break;
      case 'workType':
        setReadyWorkData(prev => ({ ...prev, workType: editValues.value || '' }));
        break;
      default:
        break;
    }
    setEditModalOpen(false);
    setEditTarget(null);
  };

  // Experience modal handlers
  const openExperienceModal = () => {
    setExperienceForm({ jobTitle: '', companyName: '' });
    setExperienceModalOpen(true);
  };
  const saveExperience = () => {
    if (!experienceForm.jobTitle.trim()) return;
    setQualData(prev => ({ ...prev, experiences: [...prev.experiences, { ...experienceForm }] }));
    setExperienceModalOpen(false);
  };

  // Certification modal handlers
  const openCertificationModal = () => {
    setCertForm({ name: '', month: '', year: '', noExpire: false });
    setCertModalOpen(true);
  };
  const saveCertification = (keepOpen = false) => {
    if (!certForm.name.trim()) return;
    const exp = certForm.noExpire ? 'No expiration' : [certForm.month, certForm.year].filter(Boolean).join(' ');
    setQualData(prev => ({ ...prev, certifications: [...prev.certifications, { name: certForm.name, expiration: exp }] }));
    if (keepOpen) {
      setCertForm({ name: '', month: '', year: '', noExpire: false });
    } else {
      setCertModalOpen(false);
    }
  };

  // Generic save function for new items
  const saveNewItem = (type) => {
    switch (type) {
      case 'workCulture':
        if (workCultureForm.preference.trim()) {
          setJobPrefs(prev => ({ ...prev, workCulture: workCultureForm.preference }));
          setAddWorkCultureModal(false);
          setWorkCultureForm({ preference: '' });
        }
        break;
      case 'travel':
        if (travelForm.willingness.trim()) {
          setJobPrefs(prev => ({ ...prev, travel: travelForm }));
          setAddTravelModal(false);
          setTravelForm({ willingness: '', frequency: '' });
        }
        break;
      case 'contract':
        if (contractForm.type.trim()) {
          setJobPrefs(prev => ({ ...prev, contract: contractForm.type }));
          setAddContractModal(false);
          setContractForm({ type: '' });
        }
        break;
      case 'licenses':
        if (licensesForm.name.trim()) {
          setQualData(prev => ({ ...prev, licenses: [...(prev.licenses || []), licensesForm] }));
          setAddLicensesModal(false);
          setLicensesForm({ name: '', issuingAuthority: '', expiryDate: '' });
        }
        break;
      case 'availability':
        if (availabilityForm.calendar.trim()) {
          setReadyWorkData(prev => ({ ...prev, availability: availabilityForm.calendar }));
          setAddAvailabilityModal(false);
          setAvailabilityForm({ calendar: '' });
        }
        break;
      case 'interview':
        if (interviewForm.times.trim()) {
          setReadyWorkData(prev => ({ ...prev, interviewTimes: interviewForm.times }));
          setAddInterviewModal(false);
          setInterviewForm({ times: '' });
        }
        break;
      case 'relocation':
        if (relocationForm.willingness.trim()) {
          setReadyWorkData(prev => ({ ...prev, relocation: relocationForm }));
          setAddRelocationModal(false);
          setRelocationForm({ willingness: '', locations: '' });
        }
        break;
      case 'communication':
        if (communicationForm.preference.trim()) {
          setReadyWorkData(prev => ({ ...prev, communication: communicationForm.preference }));
          setAddCommunicationModal(false);
          setCommunicationForm({ preference: '' });
        }
        break;
      // New cases for adding to existing sections
      case 'education':
        if (educationForm.degree.trim()) {
          setQualData(prev => ({ 
            ...prev, 
            educationList: [...prev.educationList, { degree: educationForm.degree, detail: educationForm.detail }] 
          }));
          setAddEducationModal(false);
          setEducationForm({ degree: '', detail: '' });
        }
        break;
      case 'skills':
        if (skillsForm.skillsText.trim()) {
          const newSkills = skillsForm.skillsText.split(',').map(s => s.trim()).filter(Boolean);
          setQualData(prev => ({ 
            ...prev, 
            skills: [...prev.skills, ...newSkills] 
          }));
          setAddSkillsModal(false);
          setSkillsForm({ skillsText: '' });
        }
        break;
      case 'languages':
        if (languagesForm.languagesText.trim()) {
          const newLanguages = languagesForm.languagesText.split(',').map(s => s.trim()).filter(Boolean);
          setQualData(prev => ({ 
            ...prev, 
            languages: [...prev.languages, ...newLanguages] 
          }));
          setAddLanguagesModal(false);
          setLanguagesForm({ languagesText: '' });
        }
        break;
      case 'salary':
        if (salaryForm.value.trim()) {
          setJobPrefs(prev => ({ 
            ...prev, 
            salaryList: [...prev.salaryList, { value: salaryForm.value, note: salaryForm.note }] 
          }));
          setAddSalaryModal(false);
          setSalaryForm({ value: '', note: '' });
        }
        break;
      case 'schedule':
        if (scheduleForm.value.trim()) {
          setJobPrefs(prev => ({ 
            ...prev, 
            scheduleList: [...prev.scheduleList, { value: scheduleForm.value, note: scheduleForm.note }] 
          }));
          setAddScheduleModal(false);
          setScheduleForm({ value: '', note: '' });
        }
        break;
      case 'location':
        if (locationForm.value.trim()) {
          setJobPrefs(prev => ({ 
            ...prev, 
            locationList: [...prev.locationList, { value: locationForm.value, note: locationForm.note }] 
          }));
          setAddLocationModal(false);
          setLocationForm({ value: '', note: '' });
        }
        break;
      case 'industry':
        if (industryForm.listText.trim()) {
          const newIndustries = industryForm.listText.split(',').map(s => s.trim()).filter(Boolean);
          setJobPrefs(prev => ({ 
            ...prev, 
            industryList: [...prev.industryList, { value: newIndustries }] 
          }));
          setAddIndustryModal(false);
          setIndustryForm({ listText: '' });
        }
        break;
      case 'startDate':
        if (startDateForm.value.trim()) {
          setReadyWorkData(prev => ({ 
            ...prev, 
            startDateList: [...prev.startDateList, { value: startDateForm.value }] 
          }));
          setAddStartDateModal(false);
          setStartDateForm({ value: '' });
        }
        break;
      case 'noticePeriod':
        if (noticePeriodForm.value.trim()) {
          setReadyWorkData(prev => ({ 
            ...prev, 
            noticePeriodList: [...prev.noticePeriodList, { value: noticePeriodForm.value }] 
          }));
          setAddNoticePeriodModal(false);
          setNoticePeriodForm({ value: '' });
        }
        break;
      case 'workType':
        if (workTypeForm.value.trim()) {
          setReadyWorkData(prev => ({ 
            ...prev, 
            workTypeList: [...prev.workTypeList, { value: workTypeForm.value }] 
          }));
          setAddWorkTypeModal(false);
          setWorkTypeForm({ value: '' });
        }
        break;
    }
  };

  const renderProfileSection = () => (
    <div className="w-full max-w-7xl mx-auto my-10 p-4 sm:p-6 bg-white rounded-lg shadow-sm overflow-x-hidden">
      {/* Mobile/Tablet Layout (md and below) */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0 mb-8">
          <div className="flex-shrink-0 self-center md:self-start">
            <img
              src={avatarUrl}
              alt="profile avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 w-full">
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full md:flex-1 text-2xl md:text-3xl font-bold text-gray-900 border-b-2 border-blue-500 focus:outline-none"
                />
              ) : (
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 break-words">{profileData.name}</h2>
              )}
              <button
                onClick={isEditing ? handleSave : handleEdit}
                className="self-start md:self-auto text-blue-600 hover:text-blue-800"
              >
                {isEditing ? 'Save' : <Edit className="w-5 h-5" />}
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 w-full">
              <div className="flex items-center space-x-3 min-w-0">
                <Mail className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="flex-1 w-full min-w-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  />
                ) : (
                  <span className="text-gray-700 break-all">{profileData.email}</span>
                )}
              </div>

              <div className="flex items-center space-x-3 min-w-0">
                <Phone className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 w-full min-w-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  />
                ) : (
                  <span className="text-gray-700">{profileData.phone}</span>
                )}
              </div>

              <div className="flex items-center space-x-3 min-w-0">
                <MapPin className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="flex-1 w-full min-w-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                  />
                ) : (
                  <span className="text-gray-700 break-words">{profileData.location}</span>
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

        {/* Job Match Sections for Mobile/Tablet */}
        <div className="mb-8">
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

        {/* Show active section content for mobile/tablet */}
        {activeSection && (
          <div className="mt-8">
            {activeSection === 'qualifications' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Qualifications</h2>
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
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setAddEducationModal(true)} className="text-blue-600 hover:text-blue-800">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button onClick={() => openEditModal('education')} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {qualData.educationList.map((edu, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">{edu.degree}</p>
                        <p className="text-gray-600 text-sm">{edu.detail}</p>
                      </div>
                    ))}
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
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setAddSkillsModal(true)} className="text-blue-600 hover:text-blue-800">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button onClick={() => openEditModal('skills')} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex flex-wrap gap-2">
                      {qualData.skills.map((skill, index) => (
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
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setAddLanguagesModal(true)} className="text-blue-600 hover:text-blue-800">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button onClick={() => openEditModal('languages')} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {qualData.languages.map((lng, i) => (
                      <p key={i} className={i === 0 ? 'text-gray-700' : 'text-gray-600 text-sm'}>{lng}</p>
                    ))}
                  </div>
                </div>

                {/* Add Sections */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Add more details</h3>
                  {[
                    {
                      title: "Add most recent work experience",
                      icon: Briefcase,
                      description: "Highlight your professional background",
                      onClick: openExperienceModal
                    },
                    {
                      title: "Add licences",
                      icon: Award,
                      description: "Include relevant certifications",
                      onClick: () => setAddLicensesModal(true)
                    },
                    {
                      title: "Add certifications",
                      icon: Award,
                      description: "Show your qualifications",
                      onClick: openCertificationModal
                    }
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={item.onClick}
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
                        <Plus className="w-5 h-5 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Dynamic Lists */}
                {qualData.experiences.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Work experience</h3>
                    <div className="space-y-3">
                      {qualData.experiences.map((exp, idx) => (
                        <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                          <p className="font-medium text-gray-900">{exp.jobTitle}</p>
                          <p className="text-sm text-gray-600">{exp.companyName}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {qualData.certifications.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                    <div className="space-y-3">
                      {qualData.certifications.map((c, idx) => (
                        <div key={idx} className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{c.name}</p>
                            <p className="text-sm text-gray-600">{c.expiration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeSection === 'jobPreferences' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Preferences</h2>
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
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setAddSalaryModal(true)} className="text-blue-600 hover:text-blue-800">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button onClick={() => openEditModal('salary')} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {jobPrefs.salaryList.map((salary, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">{salary.value}</p>
                        <p className="text-gray-600 text-sm">{salary.note}</p>
                      </div>
                    ))}
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
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setAddScheduleModal(true)} className="text-blue-600 hover:text-blue-800">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button onClick={() => openEditModal('schedule')} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {jobPrefs.scheduleList.map((schedule, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">{schedule.value}</p>
                        <p className="text-gray-600 text-sm">{schedule.note}</p>
                      </div>
                    ))}
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
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setAddLocationModal(true)} className="text-blue-600 hover:text-blue-800">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button onClick={() => openEditModal('locations')} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {jobPrefs.locationList.map((location, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">{location.value}</p>
                        <p className="text-gray-600 text-sm">{location.note}</p>
                      </div>
                    ))}
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
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setAddIndustryModal(true)} className="text-blue-600 hover:text-blue-800">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button onClick={() => openEditModal('industries')} className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {jobPrefs.industryList.map((industryGroup, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex flex-wrap gap-2">
                          {industryGroup.value.map((industry, idx) => (
                            <span key={idx} className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add More Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Add more preferences</h3>
                  {[
                    {
                      title: "Add work culture preferences",
                      icon: Briefcase,
                      description: "Specify your preferred work environment",
                      onClick: () => setAddWorkCultureModal(true)
                    },
                    {
                      title: "Add travel preferences",
                      icon: MapPin,
                      description: "Indicate willingness to travel",
                      onClick: () => setAddTravelModal(true)
                    },
                    {
                      title: "Add contract preferences",
                      icon: Briefcase,
                      description: "Specify contract vs permanent preferences",
                      onClick: () => setAddContractModal(true)
                    }
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={item.onClick}
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
                        <Plus className="w-5 h-5 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Display added preferences */}
                {jobPrefs.workCulture && (
                  <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Work Culture Preference</h4>
                    <p className="text-gray-700">{jobPrefs.workCulture}</p>
                  </div>
                )}
                {jobPrefs.travel && (
                  <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Travel Preference</h4>
                    <p className="text-gray-700">{jobPrefs.travel.willingness}</p>
                    {jobPrefs.travel.frequency && <p className="text-gray-600 text-sm">{jobPrefs.travel.frequency}</p>}
                  </div>
                )}
                {jobPrefs.contract && (
                  <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Contract Preference</h4>
                    <p className="text-gray-700">{jobPrefs.contract}</p>
                  </div>
                )}
              </div>
            )}

            {activeSection === 'hideJobs' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hide Jobs</h2>
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
            )}

            {activeSection === 'readyToWork' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Work</h2>
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
                        value: readyWorkData.startDate,
                        description: "When you can start working",
                        editKey: 'startDate',
                        addKey: 'startDate'
                      },
                      {
                        title: "Notice Period",
                        value: readyWorkData.noticePeriod,
                        description: "Time needed to leave current role",
                        editKey: 'noticePeriod',
                        addKey: 'noticePeriod'
                      },
                      {
                        title: "Work Type",
                        value: readyWorkData.workType,
                        description: "Types of work you're open to",
                        editKey: 'workType',
                        addKey: 'workType'
                      }
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{setting.title}</h4>
                          <p className="text-sm text-gray-600">{setting.description}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-700 font-medium">{setting.value}</span>
                          <div className="flex items-center space-x-2">
                            <button onClick={() => {
                              switch(setting.addKey) {
                                case 'startDate': setAddStartDateModal(true); break;
                                case 'noticePeriod': setAddNoticePeriodModal(true); break;
                                case 'workType': setAddWorkTypeModal(true); break;
                              }
                            }} className="text-blue-600 hover:text-blue-800">
                              <Plus className="w-5 h-5" />
                            </button>
                            <button onClick={() => openEditModal(setting.editKey)} className="text-blue-600 hover:text-blue-800">
                              <Edit className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Additional Options</h3>
                    {[
                      {
                        title: "Set availability calendar",
                        onClick: () => setAddAvailabilityModal(true)
                      },
                      {
                        title: "Add preferred interview times",
                        onClick: () => setAddInterviewModal(true)
                      },
                      {
                        title: "Specify relocation preferences",
                        onClick: () => setAddRelocationModal(true)
                      },
                      {
                        title: "Set communication preferences",
                        onClick: () => setAddCommunicationModal(true)
                      }
                    ].map((option, index) => (
                      <button
                        key={index}
                        onClick={option.onClick}
                        className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-900">{option.title}</span>
                          <Plus className="w-5 h-5 text-gray-400" />
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Display added options */}
                  {readyWorkData.availability && (
                    <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Availability Calendar</h4>
                      <p className="text-gray-700">{readyWorkData.availability}</p>
                    </div>
                  )}
                  {readyWorkData.interviewTimes && (
                    <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Preferred Interview Times</h4>
                      <p className="text-gray-700">{readyWorkData.interviewTimes}</p>
                    </div>
                  )}
                  {readyWorkData.relocation && (
                    <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Relocation Preferences</h4>
                      <p className="text-gray-700">{readyWorkData.relocation.willingness}</p>
                      {readyWorkData.relocation.locations && <p className="text-gray-600 text-sm">{readyWorkData.relocation.locations}</p>}
                    </div>
                  )}
                  {readyWorkData.communication && (
                    <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Communication Preferences</h4>
                      <p className="text-gray-700">{readyWorkData.communication}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Desktop Layout (lg and above) - Two Column */}
      <div className="hidden lg:flex lg:gap-8 ">
        {/* Left Column: Profile + Menu */}
        <div className="lg:w-1/3">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0 mb-8">
            <div className="flex-shrink-0 self-center md:self-start">
              <img
                src={avatarUrl}
                alt="profile avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0 w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 w-full">
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full md:flex-1 text-2xl md:text-3xl font-bold text-gray-900 border-b-2 border-blue-500 focus:outline-none"
                  />
                ) : (
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 break-words">{profileData.name}</h2>
                )}
                <button
                  onClick={isEditing ? handleSave : handleEdit}
                  className="self-start md:self-auto text-blue-600 hover:text-blue-800"
                >
                  {isEditing ? 'Save' : <Edit className="w-5 h-5" />}
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 w-full">
                <div className="flex items-center space-x-3 min-w-0">
                  <Mail className="w-5 h-5 text-gray-500" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="flex-1 w-full min-w-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                  ) : (
                    <span className="text-gray-700 break-all">{profileData.email}</span>
                  )}
                </div>

                <div className="flex items-center space-x-3 min-w-0">
                  <Phone className="w-5 h-5 text-gray-500" />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 w-full min-w-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                  ) : (
                    <span className="text-gray-700">{profileData.phone}</span>
                  )}
                </div>

                <div className="flex items-center space-x-3 min-w-0">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="flex-1 w-full min-w-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                  ) : (
                    <span className="text-gray-700 break-words">{profileData.location}</span>
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
          <div className="sticky top-20">
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
                  className={`w-full text-left p-4 border rounded-lg transition-colors ${
                    activeSection === item.section 
                      ? 'border-blue-400 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-gray-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${
                      activeSection === item.section ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Active Section Content */}
        <div className="lg:w-2/3 mt-8 lg:mt-0">
          {activeSection === 'qualifications' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Qualifications</h2>
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
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setAddEducationModal(true)} className="text-blue-600 hover:text-blue-800">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={() => openEditModal('education')} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {qualData.educationList.map((edu, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">{edu.degree}</p>
                      <p className="text-gray-600 text-sm">{edu.detail}</p>
                    </div>
                  ))}
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
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setAddSkillsModal(true)} className="text-blue-600 hover:text-blue-800">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={() => openEditModal('skills')} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-wrap gap-2">
                    {qualData.skills.map((skill, index) => (
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
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setAddLanguagesModal(true)} className="text-blue-600 hover:text-blue-800">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={() => openEditModal('languages')} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  {qualData.languages.map((lng, i) => (
                    <p key={i} className={i === 0 ? 'text-gray-700' : 'text-gray-600 text-sm'}>{lng}</p>
                  ))}
                </div>
              </div>

              {/* Add Sections */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Add more details</h3>
                {[
                  {
                    title: "Add most recent work experience",
                    icon: Briefcase,
                    description: "Highlight your professional background",
                    onClick: openExperienceModal
                  },
                  {
                    title: "Add licences",
                    icon: Award,
                    description: "Include relevant certifications",
                    onClick: openCertificationModal
                  },
                  {
                    title: "Add certifications",
                    icon: Award,
                    description: "Show your qualifications",
                    onClick: openCertificationModal
                  }
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={item.onClick}
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

              {/* Dynamic Lists */}
              {qualData.experiences.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Work experience</h3>
                  <div className="space-y-3">
                    {qualData.experiences.map((exp, idx) => (
                      <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                        <p className="font-medium text-gray-900">{exp.jobTitle}</p>
                        <p className="text-sm text-gray-600">{exp.companyName}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {qualData.certifications.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                  <div className="space-y-3">
                    {qualData.certifications.map((c, idx) => (
                      <div key={idx} className="p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{c.name}</p>
                          <p className="text-sm text-gray-600">{c.expiration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeSection === 'jobPreferences' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Preferences</h2>
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
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setAddSalaryModal(true)} className="text-blue-600 hover:text-blue-800">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={() => openEditModal('salary')} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {jobPrefs.salaryList.map((salary, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">{salary.value}</p>
                      <p className="text-gray-600 text-sm">{salary.note}</p>
                    </div>
                  ))}
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
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setAddScheduleModal(true)} className="text-blue-600 hover:text-blue-800">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={() => openEditModal('schedule')} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {jobPrefs.scheduleList.map((schedule, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">{schedule.value}</p>
                      <p className="text-gray-600 text-sm">{schedule.note}</p>
                    </div>
                  ))}
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
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setAddLocationModal(true)} className="text-blue-600 hover:text-blue-800">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={() => openEditModal('locations')} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {jobPrefs.locationList.map((location, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">{location.value}</p>
                      <p className="text-gray-600 text-sm">{location.note}</p>
                    </div>
                  ))}
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
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setAddIndustryModal(true)} className="text-blue-600 hover:text-blue-800">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={() => openEditModal('industries')} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {jobPrefs.industryList.map((industryGroup, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex flex-wrap gap-2">
                        {industryGroup.value.map((industry, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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
          )}

          {activeSection === 'hideJobs' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hide Jobs</h2>
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
          )}

          {activeSection === 'readyToWork' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Work</h2>
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
                      value: readyWorkData.startDate,
                      description: "When you can start working",
                      editKey: 'startDate',
                      addKey: 'startDate'
                    },
                    {
                      title: "Notice Period",
                      value: readyWorkData.noticePeriod,
                      description: "Time needed to leave current role",
                      editKey: 'noticePeriod',
                      addKey: 'noticePeriod'
                    },
                    {
                      title: "Work Type",
                      value: readyWorkData.workType,
                      description: "Types of work you're open to",
                      editKey: 'workType',
                      addKey: 'workType'
                    }
                  ].map((setting, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{setting.title}</h4>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-700 font-medium">{setting.value}</span>
                        <div className="flex items-center space-x-2">
                          <button onClick={() => {
                            switch(setting.addKey) {
                              case 'startDate': setAddStartDateModal(true); break;
                              case 'noticePeriod': setAddNoticePeriodModal(true); break;
                              case 'workType': setAddWorkTypeModal(true); break;
                            }
                          }} className="text-blue-600 hover:text-blue-800">
                            <Plus className="w-5 h-5" />
                          </button>
                          <button onClick={() => openEditModal(setting.editKey)} className="text-blue-600 hover:text-blue-800">
                            <Edit className="w-5 h-5" />
                          </button>
                        </div>
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
          )}

          {!activeSection && (
            <div className="flex items-center justify-center h-full min-h-[400px] border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-center">
                <div className="text-gray-400 mb-2">
                  <Settings className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a section</h3>
                <p className="text-gray-500">Choose from the left menu to view and edit details</p>
              </div>
            </div>
          )}
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
                    Only employers you've applied to can see you. Other employers can't find your profile or contact you about jobs.
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

  // Generic small edit modal
  const renderEditModal = () => {
    if (!editModalOpen) return null;
    const close = () => setEditModalOpen(false);
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={close} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Edit</h2>
            <button onClick={close} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            {editTarget === 'education' && (
              <>
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <input value={editValues.degree || ''} onChange={e => setEditValues(v => ({...v, degree: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
                <label className="block text-sm font-medium text-gray-700">Detail</label>
                <input value={editValues.detail || ''} onChange={e => setEditValues(v => ({...v, detail: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
              </>
            )}
            {editTarget === 'skills' && (
              <>
                <label className="block text-sm font-medium text-gray-700">Skills (comma separated)</label>
                <textarea rows={4} value={editValues.skillsText || ''} onChange={e => setEditValues(v => ({...v, skillsText: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
              </>
            )}
            {editTarget === 'languages' && (
              <>
                <label className="block text-sm font-medium text-gray-700">Language 1</label>
                <input value={editValues.line1 || ''} onChange={e => setEditValues(v => ({...v, line1: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
                <label className="block text-sm font-medium text-gray-700">Language 2</label>
                <input value={editValues.line2 || ''} onChange={e => setEditValues(v => ({...v, line2: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
              </>
            )}
            {['salary','schedule','locations','industries','startDate','noticePeriod','workType'].includes(editTarget) && (
              <>
                {['salary','schedule','locations'].includes(editTarget) && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">Value</label>
                    <input value={editValues.value || ''} onChange={e => setEditValues(v => ({...v, value: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
                    <label className="block text-sm font-medium text-gray-700">Note</label>
                    <input value={editValues.note || ''} onChange={e => setEditValues(v => ({...v, note: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
                  </>
                )}
                {['industries'].includes(editTarget) && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">Industries (comma separated)</label>
                    <textarea rows={3} value={editValues.listText || ''} onChange={e => setEditValues(v => ({...v, listText: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
                  </>
                )}
                {['startDate','noticePeriod','workType'].includes(editTarget) && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">Value</label>
                    <input value={editValues.value || ''} onChange={e => setEditValues(v => ({...v, value: e.target.value}))} className="w-full border rounded-md px-3 py-2" />
                  </>
                )}
              </>
            )}
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={close} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={saveEditModal} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  // Experience modal (Image 1 style)
  const renderExperienceModal = () => {
    if (!experienceModalOpen) return null;
    const close = () => setExperienceModalOpen(false);
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={close} />
        <div className="relative bg-white w-[92vw] max-w-2xl rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Add most recent work experience</h2>
            <button onClick={close} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-800">Job title <span className="text-red-600">*</span></label>
              <input value={experienceForm.jobTitle} onChange={e => setExperienceForm(v => ({...v, jobTitle: e.target.value}))} className="mt-2 w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">Company name</label>
              <input value={experienceForm.companyName} onChange={e => setExperienceForm(v => ({...v, companyName: e.target.value}))} className="mt-2 w-full border rounded-lg px-3 py-2" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={close} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={saveExperience} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  // Certification modal (Image 2 style)
  const renderCertificationModal = () => {
    if (!certModalOpen) return null;
    const close = () => setCertModalOpen(false);
    const months = ['Month','January','February','March','April','May','June','July','August','September','October','November','December'];
    const years = ['Year', ...Array.from({length: 31}, (_,i) => String(2024+i))];
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={close} />
        <div className="relative bg-white w-[92vw] max-w-2xl rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Add certification</h2>
            <button onClick={close} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-800">Certification name <span className="text-red-600">*</span></label>
              <input placeholder="Example: MOS Associate" value={certForm.name} onChange={e => setCertForm(v => ({...v, name: e.target.value}))} className="mt-2 w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Expiration date</label>
              <div className="grid grid-cols-2 gap-4">
                <select value={certForm.month} onChange={e => setCertForm(v => ({...v, month: e.target.value}))} className="border rounded-lg px-3 py-2">
                  {months.map(m => <option key={m} value={m === 'Month' ? '' : m}>{m}</option>)}
                </select>
                <select value={certForm.year} onChange={e => setCertForm(v => ({...v, year: e.target.value}))} className="border rounded-lg px-3 py-2">
                  {years.map(y => <option key={y} value={y === 'Year' ? '' : y}>{y}</option>)}
                </select>
              </div>
              <label className="mt-3 inline-flex items-center gap-2">
                <input type="checkbox" checked={certForm.noExpire} onChange={e => setCertForm(v => ({...v, noExpire: e.target.checked}))} />
                <span>Does not expire</span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={close} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveCertification(true)} className="px-5 py-2 rounded border border-blue-600 text-blue-700 hover:bg-blue-50">Save and add another</button>
            <button onClick={() => saveCertification(false)} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  // Add new item modals
  const renderAddWorkCultureModal = () => {
    if (!addWorkCultureModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddWorkCultureModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Work Culture Preferences</h2>
            <button onClick={() => setAddWorkCultureModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Work Culture Preference</label>
            <textarea 
              value={workCultureForm.preference} 
              onChange={e => setWorkCultureForm(v => ({...v, preference: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              rows={3}
              placeholder="Describe your preferred work environment..."
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddWorkCultureModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('workCulture')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddTravelModal = () => {
    if (!addTravelModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddTravelModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Travel Preferences</h2>
            <button onClick={() => setAddTravelModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Willingness to Travel</label>
            <input 
              value={travelForm.willingness} 
              onChange={e => setTravelForm(v => ({...v, willingness: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Willing to travel 25% of the time"
            />
            <label className="block text-sm font-medium text-gray-700">Travel Frequency</label>
            <input 
              value={travelForm.frequency} 
              onChange={e => setTravelForm(v => ({...v, frequency: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Monthly, Weekly, etc."
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddTravelModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('travel')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddContractModal = () => {
    if (!addContractModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddContractModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Contract Preferences</h2>
            <button onClick={() => setAddContractModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Contract Type</label>
            <select 
              value={contractForm.type} 
              onChange={e => setContractForm(v => ({...v, type: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select contract type</option>
              <option value="Permanent">Permanent</option>
              <option value="Contract">Contract</option>
              <option value="Both">Both</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddContractModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('contract')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddLicensesModal = () => {
    if (!addLicensesModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddLicensesModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add License</h2>
            <button onClick={() => setAddLicensesModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">License Name</label>
            <input 
              value={licensesForm.name} 
              onChange={e => setLicensesForm(v => ({...v, name: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Driver's License, Professional License"
            />
            <label className="block text-sm font-medium text-gray-700">Issuing Authority</label>
            <input 
              value={licensesForm.issuingAuthority} 
              onChange={e => setLicensesForm(v => ({...v, issuingAuthority: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., State Department, Professional Board"
            />
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input 
              type="date"
              value={licensesForm.expiryDate} 
              onChange={e => setLicensesForm(v => ({...v, expiryDate: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddLicensesModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('licenses')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddAvailabilityModal = () => {
    if (!addAvailabilityModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddAvailabilityModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Set Availability Calendar</h2>
            <button onClick={() => setAddAvailabilityModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Availability Details</label>
            <textarea 
              value={availabilityForm.calendar} 
              onChange={e => setAvailabilityForm(v => ({...v, calendar: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              rows={4}
              placeholder="Describe your availability schedule..."
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddAvailabilityModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('availability')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddInterviewModal = () => {
    if (!addInterviewModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddInterviewModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Preferred Interview Times</h2>
            <button onClick={() => setAddInterviewModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Preferred Interview Times</label>
            <textarea 
              value={interviewForm.times} 
              onChange={e => setInterviewForm(v => ({...v, times: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              rows={3}
              placeholder="e.g., Weekdays 9 AM - 5 PM, Evenings after 6 PM..."
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddInterviewModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('interview')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddRelocationModal = () => {
    if (!addRelocationModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddRelocationModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Specify Relocation Preferences</h2>
            <button onClick={() => setAddRelocationModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Willingness to Relocate</label>
            <select 
              value={relocationForm.willingness} 
              onChange={e => setRelocationForm(v => ({...v, willingness: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select willingness</option>
              <option value="Willing to relocate">Willing to relocate</option>
              <option value="Not willing to relocate">Not willing to relocate</option>
              <option value="Open to relocation for the right opportunity">Open to relocation for the right opportunity</option>
            </select>
            <label className="block text-sm font-medium text-gray-700">Preferred Locations</label>
            <input 
              value={relocationForm.locations} 
              onChange={e => setRelocationForm(v => ({...v, locations: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., New York, California, Remote"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddRelocationModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('relocation')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddCommunicationModal = () => {
    if (!addCommunicationModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddCommunicationModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Set Communication Preferences</h2>
            <button onClick={() => setAddCommunicationModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Communication Preference</label>
            <select 
              value={communicationForm.preference} 
              onChange={e => setCommunicationForm(v => ({...v, preference: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select preference</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="Video call">Video call</option>
              <option value="In-person">In-person</option>
              <option value="Any method">Any method</option>
            </select>
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddCommunicationModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('communication')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  // New modals for adding to existing sections
  const renderAddEducationModal = () => {
    if (!addEducationModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddEducationModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Education</h2>
            <button onClick={() => setAddEducationModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Degree</label>
            <input 
              value={educationForm.degree} 
              onChange={e => setEducationForm(v => ({...v, degree: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., B.Eng, MBA, PhD"
            />
            <label className="block text-sm font-medium text-gray-700">Details</label>
            <input 
              value={educationForm.detail} 
              onChange={e => setEducationForm(v => ({...v, detail: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Bachelors, Information technology"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddEducationModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('education')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddSkillsModal = () => {
    if (!addSkillsModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddSkillsModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Skills</h2>
            <button onClick={() => setAddSkillsModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Skills (comma separated)</label>
            <textarea 
              value={skillsForm.skillsText} 
              onChange={e => setSkillsForm(v => ({...v, skillsText: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              rows={4}
              placeholder="e.g., JavaScript, React, Node.js, Python"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddSkillsModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('skills')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddLanguagesModal = () => {
    if (!addLanguagesModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddLanguagesModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Languages</h2>
            <button onClick={() => setAddLanguagesModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Languages (comma separated)</label>
            <textarea 
              value={languagesForm.languagesText} 
              onChange={e => setLanguagesForm(v => ({...v, languagesText: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              rows={4}
              placeholder="e.g., Spanish, Fluent, French, Intermediate"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddLanguagesModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('languages')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddSalaryModal = () => {
    if (!addSalaryModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddSalaryModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Salary Expectation</h2>
            <button onClick={() => setAddSalaryModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Salary Range</label>
            <input 
              value={salaryForm.value} 
              onChange={e => setSalaryForm(v => ({...v, value: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., ₹8,00,000 - ₹12,00,000 per annum"
            />
            <label className="block text-sm font-medium text-gray-700">Note</label>
            <input 
              value={salaryForm.note} 
              onChange={e => setSalaryForm(v => ({...v, note: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Based on experience and skills"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddSalaryModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('salary')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddScheduleModal = () => {
    if (!addScheduleModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddScheduleModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Work Schedule</h2>
            <button onClick={() => setAddScheduleModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Schedule</label>
            <input 
              value={scheduleForm.value} 
              onChange={e => setScheduleForm(v => ({...v, value: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Full-time, Remote/Hybrid"
            />
            <label className="block text-sm font-medium text-gray-700">Note</label>
            <input 
              value={scheduleForm.note} 
              onChange={e => setScheduleForm(v => ({...v, note: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Flexible with office visits when needed"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddScheduleModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('schedule')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddLocationModal = () => {
    if (!addLocationModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddLocationModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Location Preference</h2>
            <button onClick={() => setAddLocationModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Locations</label>
            <input 
              value={locationForm.value} 
              onChange={e => setLocationForm(v => ({...v, value: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Noida, Delhi NCR, Remote"
            />
            <label className="block text-sm font-medium text-gray-700">Note</label>
            <input 
              value={locationForm.note} 
              onChange={e => setLocationForm(v => ({...v, note: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Willing to relocate for the right opportunity"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddLocationModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('location')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddIndustryModal = () => {
    if (!addIndustryModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddIndustryModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Industry Preferences</h2>
            <button onClick={() => setAddIndustryModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Industries (comma separated)</label>
            <textarea 
              value={industryForm.listText} 
              onChange={e => setIndustryForm(v => ({...v, listText: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              rows={3}
              placeholder="e.g., Technology, E-commerce, Fintech, Healthcare"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddIndustryModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('industry')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddStartDateModal = () => {
    if (!addStartDateModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddStartDateModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Start Date</h2>
            <button onClick={() => setAddStartDateModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input 
              value={startDateForm.value} 
              onChange={e => setStartDateForm(v => ({...v, value: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Immediately, 2 weeks, 1 month"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddStartDateModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('startDate')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddNoticePeriodModal = () => {
    if (!addNoticePeriodModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddNoticePeriodModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Notice Period</h2>
            <button onClick={() => setAddNoticePeriodModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Notice Period</label>
            <input 
              value={noticePeriodForm.value} 
              onChange={e => setNoticePeriodForm(v => ({...v, value: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., 2 weeks, 1 month, Immediate"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddNoticePeriodModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('noticePeriod')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddWorkTypeModal = () => {
    if (!addWorkTypeModal) return null;
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={() => setAddWorkTypeModal(false)} />
        <div className="relative bg-white w-[92vw] max-w-lg rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Add Work Type</h2>
            <button onClick={() => setAddWorkTypeModal(false)} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
          </div>
          <div className="p-5 space-y-4">
            <label className="block text-sm font-medium text-gray-700">Work Type</label>
            <input 
              value={workTypeForm.value} 
              onChange={e => setWorkTypeForm(v => ({...v, value: e.target.value}))} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="e.g., Full-time, Part-time, Contract"
            />
          </div>
          <div className="flex items-center justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl">
            <button onClick={() => setAddWorkTypeModal(false)} className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Cancel</button>
            <button onClick={() => saveNewItem('workType')} className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  // Always render the main profile section with modal
  return (
    <>
      {renderProfileSection()}
      {renderVisibilityModal()}
      {renderEditModal()}
      {renderExperienceModal()}
      {renderCertificationModal()}
      {renderAddWorkCultureModal()}
      {renderAddTravelModal()}
      {renderAddContractModal()}
      {renderAddLicensesModal()}
      {renderAddAvailabilityModal()}
      {renderAddInterviewModal()}
      {renderAddRelocationModal()}
      {renderAddCommunicationModal()}
      {renderAddEducationModal()}
      {renderAddSkillsModal()}
      {renderAddLanguagesModal()}
      {renderAddSalaryModal()}
      {renderAddScheduleModal()}
      {renderAddLocationModal()}
      {renderAddIndustryModal()}
      {renderAddStartDateModal()}
      {renderAddNoticePeriodModal()}
      {renderAddWorkTypeModal()}
    </>
  );
}