import React from "react";
import Card from "../pages/Card"; // Assuming you have a Card component for displaying each feature
import AlbireoLogo from "../assets/AlbireoLogo.png"; // Replace with your actual image

function WhyChooseUs() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-200 uppercase">Why Choose Us?</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mt-2">Why Choose Us?</h2>
        <p className=" text-md sm:text-lg text-black font-semibold mt-2">Great Clients across the world</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
        <Card
          title="Weight Discrepancy"
          icon="⚖️"
          image={AlbireoLogo}
          description="Resolve disputes effortlessly with our unique Weight Discrepancy Model. Say goodbye to the hassle – address weight-related issues easily."
        />
        <Card
          title="Courier Partner Recommendation"
          icon="📦"
          image={AlbireoLogo}
          description="We recommend courier partners tailored to your delivery needs, improving shipping efficiency."
        />
        <Card
          title="Sync & Import Orders"
          icon="🛠️"
          image={AlbireoLogo}
          description="Integrate and import orders with a single click, enhancing automation and productivity."
        />
        <Card
          title="Weight Discrepancy"
          icon="⚖️"
          image={AlbireoLogo}
          description="Resolve disputes effortlessly with our unique Weight Discrepancy Model. Say goodbye to the hassle – address weight-related issues easily."
        />
        <Card
          title="Courier Partner Recommendation"
          icon="📦"
          image={AlbireoLogo}
          description="We recommend courier partners tailored to your delivery needs, improving shipping efficiency."
        />
        <Card
          title="Sync & Import Orders"
          icon="🛠️"
          image={AlbireoLogo}
          description="Integrate and import orders with a single click, enhancing automation and productivity."
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
