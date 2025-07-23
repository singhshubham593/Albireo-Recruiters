 // src/components/Header.jsx
import React, { useState } from "react";
import Albireo from "../assets/AlbireoLogo.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (tab) => setActiveTab(tab);
  const handleMouseLeave = () => setActiveTab(null);

  return (
    <header className="px-4 py-3 shadow-lg bg-white rounded-2xl mb-10 w-full">
      <div className="flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <img
            src={Albireo}
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-bold text-xl text-gray-800">Albireo</span>
          <span className="font-bold text-xl text-gray-800 hidden sm:inline">Recruiters</span>
        </div>

        {/* Right Section (Mobile Hamburger + Profile Icons) */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Profile & Notification in Mobile */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </span>
            </div>
            <div className="relative flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=3')` }}
              ></div>
              <span className="absolute -top-1 -right-2 bg-yellow-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-600 text-2xl focus:outline-none">
            ☰
          </button>
        </div>

        {/* Main Nav & Controls */}
        <div className={`w-full md:flex md:items-center md:justify-between ${menuOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
          {/* Nav Links */}
          <nav className="text-gray-900 z-50 mb-4 md:mb-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-8 text-sm font-medium">
              {["Job Seekers", "Employers", "About", "Contact"].map((item) => (
                <div
                  key={item}
                  className={`cursor-pointer hover:text-blue-600 transition-all duration-300 ${
                    activeTab === item ? "text-yellow-500 underline" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item}
                </div>
              ))}
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search jobs here"
              className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-blue-500 hover:bg-blue-600 transition-all rounded-full p-2 text-white">
              🔍
            </button>
          </div>

          {/* Notifications & Profile - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <span className="text-2xl">🔔</span>
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </span>
            </div>

            <div className="relative flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url('https://i.pravatar.cc/150?img=3')` }}
              ></div>
              <span className="absolute -top-1 -right-2 bg-yellow-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
