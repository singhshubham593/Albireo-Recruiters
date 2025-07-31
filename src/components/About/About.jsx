 import React from "react";
import AlbireoLogo from "../../assets/AlbireoLogo.png"; // Replace with your actual image
import Contact from "../Home/Contact"; // Importing Contact component
import HeroAbout from "./HeroAbout";
import Stats from "./Stats";
import OurValue from "./OurValue"; // Importing OurValue component

const About = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-yellow-50 text-black">
      {/* Hero Section */}
      <HeroAbout />
      {/* Stats Section */} 
      <Stats />
      {/* Our Values */}
       <OurValue />
      {/* CTA Section */}
      <Contact />
    </section>
  );
};

export default About;
