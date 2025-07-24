 import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const menuItems = ["JobSeekers", "Employers", "About", "Contact"];

  const megaMenuData = {
    JobSeekers : {
      leftCard: {
        img: "https://via.placeholder.com/150",
        title: "Ready to recruit",
        desc: "The right candidate is just a few clicks away.",
        btn: "Request a call back",
      },
      leftNav: ["Looking to Hire?", "Contracting", "Reports and Resources"],
      talent: [
        "Technology",
        "Banking & Financial Services",
        "Finance & Accounting",
        "Healthcare and Life Sciences",
        "Human Resources",
      ],
      advantages: [
        "Candidate Verification",
        "Our Sourcing Methodology",
        "Executive Search",
        "Recruitment Outsourcing",
        "Job advertising: ReachTalent",
        "Google Reviews",
      ],
    },
    Employers: {
      leftCard: {
        img: "https://via.placeholder.com/150",
        title: "Ready to recruit",
        desc: "The right candidate is just a few clicks away.",
        btn: "Request a call back",
      },
      leftNav: ["Looking to Hire?", "Contracting", "Reports and Resources"],
      talent: [
        "Technology",
        "Banking & Financial Services",
        "Finance & Accounting",
        "Healthcare and Life Sciences",
        "Human Resources",
      ],
      advantages: [
        "Candidate Verification",
        "Our Sourcing Methodology",
        "Executive Search",
        "Recruitment Outsourcing",
        "Job advertising: ReachTalent",
        "Google Reviews",
      ],
    },
    About: {
      leftCard: {
        img: "https://via.placeholder.com/150",
        title: "Ready to recruit",
        desc: "The right candidate is just a few clicks away.",
        btn: "Request a call back",
      },
      leftNav: ["Looking to Hire?", "Contracting", "Reports and Resources"],
      talent: [
        "Technology",
        "Banking & Financial Services",
        "Finance & Accounting",
        "Healthcare and Life Sciences",
        "Human Resources",
      ],
      advantages: [
        "Candidate Verification",
        "Our Sourcing Methodology",
        "Executive Search",
        "Recruitment Outsourcing",
        "Job advertising: ReachTalent",
        "Google Reviews",
      ],
    },
    Contact: {
      leftCard: {
        img: "https://via.placeholder.com/150",
        title: "Ready to recruit",
        desc: "The right candidate is just a few clicks away.",
        btn: "Request a call back",
      },
      leftNav: ["Looking to Hire?", "Contracting", "Reports and Resources"],
      talent: [
        "Technology",
        "Banking & Financial Services",
        "Finance & Accounting",
        "Healthcare and Life Sciences",
        "Human Resources",
      ],
      advantages: [
        "Candidate Verification",
        "Our Sourcing Methodology",
        "Executive Search",
        "Recruitment Outsourcing",
        "Job advertising: ReachTalent",
        "Google Reviews",
      ],
    },
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 rounded-full">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-800">
          Albieo<span className="text-orange-500"> Recruiter</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-medium text-sm relative">
          {menuItems.map((item) => (
            <div
              key={item}
              onMouseEnter={() => setActiveTab(item)}
              onMouseLeave={() => setActiveTab(null)}
              className=""
            >
              <span className="cursor-pointer hover:text-blue-600">
                {item}
              </span>

              {/* Mega Menu (Desktop Only) */}
              {activeTab === item && megaMenuData[item] && (
                <div className="absolute top-8 left-0 w-[800px] bg-white shadow-2xl rounded-xl p-6 flex gap-6 z-50">
                  {/* Left Card */}
                  <div className="w-1/4 border-r pr-4">
                    <img
                      src={megaMenuData[item].leftCard.img}
                      alt="recruit"
                      className="rounded-xl mb-3"
                    />
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {megaMenuData[item].leftCard.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">
                      {megaMenuData[item].leftCard.desc}
                    </p>
                    <button className="bg-blue-800 text-white px-3 py-1 rounded text-sm">
                      {megaMenuData[item].leftCard.btn}
                    </button>
                  </div>

                  {/* Middle Nav */}
                  <div className="w-1/4 text-sm border-r pr-4">
                    <h5 className="font-semibold mb-2">Looking to Hire?</h5>
                    <ul className="space-y-1 text-gray-700">
                      {megaMenuData[item].leftNav.map((nav, i) => (
                        <li key={i}>{nav}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Talent Section */}
                  <div className="w-1/4 text-sm border-r pr-4">
                    <h5 className="font-semibold mb-2">
                      Looking for Talent in
                    </h5>
                    <ul className="space-y-1 text-gray-700">
                      {megaMenuData[item].talent.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Competitive Advantage */}
                  <div className="w-1/4 text-sm">
                    <h5 className="font-semibold mb-2">
                      Our Competitive Advantages
                    </h5>
                    <ul className="space-y-1 text-gray-700">
                      {megaMenuData[item].advantages.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search jobs here"
              className="rounded-full px-4 py-1 text-sm border border-gray-300"
            />
            <span className="absolute right-2 top-1.5 text-blue-600">🔍</span>
          </div>

          {/* Notifications */}
          <div className="relative ">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              7
            </span>
          </div>

          {/* Profile */}
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full "
            alt="profile"
          />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          {menuItems.map((item) => (
            <div key={item} className="py-2 border-b text-gray-700">
              <button
                className="w-full text-left font-semibold"
                onClick={() =>
                  setMobileDropdown(mobileDropdown === item ? null : item)
                }
              >
                {item}
              </button>
                            {mobileDropdown === item && (
                <div className="pl-4 pt-2 text-sm text-gray-600 space-y-1">
                  {megaMenuData[item].leftNav.map((nav, i) => (
                    <div key={i}>{nav}</div>
                  ))}
                  {megaMenuData[item].talent.slice(0, 2).map((t, i) => (
                    <div key={i}>{t}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
