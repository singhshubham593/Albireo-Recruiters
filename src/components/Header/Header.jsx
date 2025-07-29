 import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

const NAV = {
  JobSeekers: {
    left: ["Find a Job", "Contract or Temp Jobs", "Career Advice"],
    right: {
      "Find a Job": {
        "Job Opportunities": [
          "Technology Jobs",
          "Sales Jobs",
          "Remote Jobs",
          "Returning to India",
          "Pre-MBA Roles",
          "View all jobs"
        ],
        Resources: [
          "Salary Guide",
          "Comparison Tool",
          "Job Match",
          "Resume Templates",
          "Create Account",
          "Submit CV"
        ]
      },
      "Contract or Temp Jobs": {
        "Contracting Jobs": ["Tech Contracting", "All contracting jobs"],
        Resources: ["Contracting Career Tips", "Permanent vs Contract"]
      },
      "Career Advice": {
        "Career Tips": [
          "Changing Jobs",
          "Career Progression",
          "Salary Negotiation",
          "Tech Descriptions",
          "Explore All"
        ],
        "Most Popular Articles": [
          "Resignation Templates",
          "Rejecting Offers",
          "Negotiation Tips",
          "AI Resume Advice",
          "Latest Articles"
        ]
      }
    }
  },
  Employers: {
    left: ["Post a Job", "Browse Candidates", "Resources"],
    right: {
      "Post a Job": {
        Options: ["Standard Post", "Premium Post", "Bulk Posting"],
        Help: ["Posting Tips", "Job Post Guidelines"]
      },
      "Browse Candidates": {
        Categories: ["Technology", "Finance", "Marketing"],
        Filters: ["Experience", "Location", "Skills"]
      },
      Resources: {
        Help: ["Hiring Advice", "Employer Guide"],
        Tools: ["Salary Calculator", "Interview Templates"]
      }
    }
  },
  About: {
    left: ["Who We Are", "Leadership", "Careers"],
    right: {
      "Who We Are": {
        Company: ["Our Story", "Vision & Mission", "Global Presence"],
        Culture: ["Values", "Diversity", "Impact"]
      },
      Leadership: {
        Team: ["Executive Team", "Board Members"],
        Profiles: ["CEO", "CTO", "COO"]
      },
      Careers: {
        Jobs: ["Join Us", "Life at Company"],
        Opportunities: ["Open Roles", "Internships"]
      }
    }
  },
  Contact: {
    left: ["Customer Support", "Press", "Offices"],
    right: {
      "Customer Support": {
        Help: ["FAQs", "Submit a Request"],
        Channels: ["Chat", "Email", "Phone"]
      },
      Press: {
        News: ["Latest Press", "Media Kit"],
        Contact: ["PR Team"]
      },
      Offices: {
        Locations: ["India", "USA", "UK"],
        Details: ["Maps", "Hours"]
      }
    }
  },
  Partner: {
    left: ["Why Partner", "Affiliate", "Agencies"],
    right: {
      "Why Partner": {
        Benefits: ["Shared Revenue", "Brand Boost"],
        Support: ["Partner Helpdesk"]
      },
      Affiliate: {
        Join: ["Sign Up", "Affiliate Dashboard"],
        Tips: ["Best Practices"]
      },
      Agencies: {
        Services: ["Recruitment Services", "Bulk Hiring"],
        Perks: ["Priority Access"]
      }
    }
  }
};

export default function Header() {
  const [activeTab, setActiveTab] = useState(null);
  const [hoverSection, setHoverSection] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const menuItems = Object.keys(NAV);

  // Render the dropdown for a given tab (desktop)
  const renderDropdown = (tab) => {
    const left = NAV[tab].left;
    const right = NAV[tab].right;
    const hoverKey = hoverSection[tab] || left[0];

    return (
      <div className="absolute top-full left-0 lg:mx-50  flex flex-col lg:flex-row bg-white border-t z-50 shadow-xl rounded-b-lg">
        {/* Left Image Section */}
        <div className="w-full lg:w-[280px] p-4 border-b lg:border-b-0 lg:border-r">
          <img
            src="https://img.freepik.com/free-photo/handsome-man-working-laptop_23-2147780110.jpg"
            alt="sidebar"
            className="rounded-md w-full h-[150px] object-cover"
          />
          <div className="font-semibold text-sm mt-3 mb-1">Start your search</div>
          <p className="text-sm text-gray-600 mb-3">
            Browse content and discover opportunities.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-sm rounded font-medium transition">
            Explore Now
          </button>
        </div>

        {/* Left Side Menu */}
        <div className="w-full lg:w-[200px] bg-gray-50 border-b lg:border-b-0 lg:border-r">
          {left.map((item) => (
            <div
              key={item}
              className={`flex justify-between items-center px-4 py-3 cursor-pointer text-sm transition hover:bg-white hover:font-semibold ${
                hoverKey === item ? "bg-white font-semibold" : ""
              }`}
              onMouseEnter={() => setHoverSection((prev) => ({ ...prev, [tab]: item }))}
            >
              {item}
              <span className="text-lg">→</span>
            </div>
          ))}
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:flex-1 flex flex-col sm:flex-row flex-wrap gap-6 p-6 overflow-y-auto max-h-[400px]">
          {Object.entries(right[hoverKey]).map(([title, list], idx) => (
            <div key={idx} className="min-w-[180px]">
              <div className="font-semibold text-blue-800 text-sm mb-2">{title}</div>
              <ul className="text-sm space-y-1 text-gray-700">
                {list.map((li, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-600 cursor-pointer transition"
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header className="bg-white shadow-md sticky top-0 lg:mx-20 md:mx-10 mx-3 lg:mt-8 mt-5 z-50 rounded-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-blue-800 sm:text-sm md:text-lg lg:text-xl cursor-pointer">
          Albireo Recruiters.in
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-medium text-sm sm:relative lg:static">
          {menuItems.map((tab) => (
            <div
              key={tab}
              className=""
              onMouseEnter={() => setActiveTab(tab)}
              onMouseLeave={() => {
                setActiveTab(null);
                setHoverSection({});
              }}
            >
              <span className="cursor-pointer hover:text-blue-700 px-2 py-1 block">
                {tab}
              </span>

              {/* Mega Dropdown */}
              {activeTab === tab && renderDropdown(tab)}
            </div>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              7
            </span>
          </div>
          {/* Profile */}
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
            alt="profile"
          />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t shadow-lg rounded-b-lg min-h-screen">
          {menuItems.map((tab) => (
            <div key={tab} className="py-2 border-b text-gray-700">
              <button
                className="w-full text-left font-semibold"
                onClick={() =>
                  setMobileDropdown(mobileDropdown === tab ? null : tab)
                }
              >
                {tab}
              </button>

              {mobileDropdown === tab && (
                <div className="pl-4 pt-2 text-sm text-gray-600 space-y-2 max-h-64 overflow-auto">
                  {/* Show Left menu items */}
                  <div>
                    <div className="font-semibold mb-1">Sections</div>
                    {NAV[tab].left.map((item, i) => (
                      <div key={i} className="pl-2 py-0.5 cursor-pointer hover:text-blue-600">
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Show Right submenu for the first left item */}
                  <div className="mt-3">
                    <div className="font-semibold mb-1">Details</div>
                    {Object.entries(NAV[tab].right[NAV[tab].left[0]]).map(
                      ([sectionTitle, items], idx) => (
                        <div key={idx} className="mb-2">
                          <div className="text-gray-800 font-semibold text-xs mb-1">{sectionTitle}</div>
                          <ul className="list-disc list-inside text-gray-600 text-xs space-y-0.5">
                            {items.map((li, i) => (
                              <li key={i} className="hover:text-blue-600 cursor-pointer">
                                {li}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
