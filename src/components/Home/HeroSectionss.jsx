import React from 'react';

const HeroSectionss = () => {
  return (
    <div className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16 min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh]">
      {/* Left Section */}
      <div className="w-full flex-1 flex flex-col lg:order-1 md:order-2 lg:mr-8 xl:mr-12 items-center lg:items-start justify-center text-center lg:text-left mb-8 lg:mb-0 px-2 sm:px-4 md:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
          Building careers.<br />Building organisations.
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 w-full leading-relaxed">
          Albireo Recruiters is a leading recruitment agency in India, specializing in hiring for Tier 1 companies across industries. We deliver fast, reliable, and domain-specific talent solutions with a focus on quality, speed, and long-term fit. Your trusted hiring partner, pan-India.
        </p>
      </div>
      {/* Right Section */}
      <div className="w-full flex-1 flex items-center justify-center lg:order-2 md:order-2 lg:items-start">
        <img
          loading='lazy'
          src="/assets/Home1.png"
          alt="Recruitment"
          className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] h-auto object-cover object-center mb-4 sm:mb-6 lg:mb-0 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HeroSectionss;
 