import React from "react";
import Card from"../../pages/Card" // Assuming you have a Card component for displaying each feature
import AlbireoLogo from "../../assets/AlbireoLogo.png" // Replace with your actual image
import ProfilingRafiki from "../../assets/ProfilingRafiki.png"; // Replace with your actual image
import ResumeAmico from "../../assets/ResumeAmico.png"; // Replace with your actual image
import BusinessDeal from "../../assets/BusinessDeal.png"; // Replace with your actual image

function WhyChooseUs() {
  return (
    <div className="bg-white  py-16 px-4 sm:mb-5 md:mb-7 lg:mb-10 sm:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-200 uppercase">Why Choose Us?</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mt-2">Why Choose Us?</h2>
        <p className=" text-md sm:text-lg text-black font-semibold mt-2">Great Clients across the world</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
        <Card
          title="Trusted by Tier 1 Companies"
          icon="⚖️"
          image={BusinessDeal}
          description="We’ve built long-term partnerships with top enterprises across India by consistently delivering high-quality talent across industries."
        />
        <Card
          title="Domain-Specialized Hiring"
          icon="📦"
          image={ResumeAmico}
          description="Whether it’s VLSI, BFSI, Consulting, Tech, or Shared Services — we bring deep industry expertise to every mandate."
        />
        <Card
          title=" Fast & SLA-Driven Delivery"
          icon="🛠️"
          image={ProfilingRafiki}
          description="We follow a structured, metrics-driven process with quick turnaround times and guaranteed service levels."
        />
        <Card
          title="Pan-India Reach"
          icon="⚖️"
          image={ProfilingRafiki}
          description="Our network of recruiters spans all major metros and Tier 2 cities, enabling us to fulfill hiring needs across India."
        />
        <Card
          title="Candidate-Centric Approach"
          icon="📦"
          image={ProfilingRafiki}
          description="We prioritize long-term fit and retention through rigorous screening, engagement, and career alignment strategies"
        />
        <Card
          title="Driven by values"
          icon="🛠️"
          image={ProfilingRafiki}
          description="Integrity, transparency, and accountability are at the core of everything we do — both with clients and candidates."
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
