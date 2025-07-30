 import React from "react";
import AlbireoLogo from "../../assets/AlbireoLogo.png"; // Replace with your actual image
import Contact from "../Home/Contact"; // Importing Contact component

const About = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-yellow-50 text-black">
      {/* Hero Section */}
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
          <p className="text-gray-700 text-md">
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

      {/* Stats Section */}
      <div className="bg-gradient-to-t from-yellow-400 via-yellow-100 via-blue-300 to-blue-400 py-16 lg:px-15 md:px-10 sm:px-6 px-5">
        <div className="lg:max-w-6xl md:max-w-xl sm:max-w-lg mx-auto grid grid-cols-2 md:grid-cols-4  gap-6 text-center text-white">
          {[
            { number: "500+", label: "Successful Placements" },
            { number: "50+", label: "Tier-1 Clients" },
            { number: "7+", label: "Years of Excellence" },
            { number: "15+", label: "Expert Recruiters" },
          ].map((item, index) => (
            <div key={index} className="bg-black/30 p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-yellow-300">{item.number}</h3>
              <p className="mt-2 text-sm text-gray-100">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="text-blue-600">What Sets Us Apart</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Industry Focused Hiring",
              desc: "We understand niche industries and deliver candidates that match precise domain requirements.",
            },
            {
              title: "Agile & Transparent Process",
              desc: "We ensure timely communication and maintain transparency from sourcing to onboarding.",
            },
            {
              title: "Human-Centric Approach",
              desc: "We value long-term relationships with both clients and candidates based on trust and mutual respect.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <Contact />
    </section>
  );
};

export default About;
