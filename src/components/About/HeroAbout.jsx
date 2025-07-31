import React from 'react'
import AlbireoLogo from '../../assets/AlbireoLogo.png'; // Adjust the path as necessary

const HeroAbout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-20 lg:px-3 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="lg:px-10">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  About <span className="text-yellow-500">Albireo Recruiters</span>
                </h1>
                <p className="text-lg text-gray-800 mb-6">
                  At <strong>Albireo Recruiters</strong>, we are a premier recruitment agency committed to delivering
                  high-quality talent solutions to <span className="text-blue-600 font-semibold">Tier 1 organizations</span> across India.
                  Established in <strong>2017</strong>, we specialize in identifying, engaging, and placing top-tier professionals
                  across key industries including <strong>Technology, BFSI, Consulting, VLSI</strong>, and <strong>Shared Services</strong>.
                </p>
                <p className="text-gray-700 text-md mx-12 mb-6">
                  Our mission is simple — <em>connecting exceptional talent with world-class companies</em>.
                </p>
              </div>
              <div className="mx-12">
                <img
                  src={AlbireoLogo}
                  alt="Recruitment Team"
                  className="rounded-3xl shadow-xl mx-auto object-cover"
                />
              </div>
            </div>
    </>
  )
}

export default HeroAbout
