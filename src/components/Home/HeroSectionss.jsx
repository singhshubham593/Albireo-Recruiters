import React from 'react';

const HeroSectionss = () => {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-between md:px-10 lg:px-20 py-6 lg:py-0 min-h-[60vh]">
      {/* Left Section */}
      <div className="flex-1 flex flex-col md:order-1 md:mr-4 items-center md:items-start justify-center text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Building careers.<br />Building organisations.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          Albireo Recruiters is a leading recruitment agency in India, specializing in hiring for Tier 1 companies across industries. We deliver fast, reliable, and domain-specific talent solutions with a focus on quality, speed, and long-term fit. Your trusted hiring partner, pan-India.
        </p>
      </div>
      {/* Right Section */}
      <div className="flex-1 flex items-center sm:item-start md:order-2 justify-center w-full h-full">
        <img
          loading='lazy'
          src="/assets/Home1.png"
          alt="Recruitment"
          className="w-[340px] h-[455px] md:w-350 md:h-[500px] lg:w-[480px] lg:h-[670px] object-cover object-center p-6 lg:px-10 "
        />
      </div>
    </div>
  );
};

export default HeroSectionss;
 