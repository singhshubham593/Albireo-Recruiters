 import React from "react";
import { motion } from "framer-motion";

// Clients with logo + original color
const clients = [
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com", color: "bg-yellow-400" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com", color: "bg-blue-400" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com", color: "bg-black" },
  { name: "Calens", logo: "https://logo.clearbit.com/calendar.com", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  { name: "Taskus", logo: "https://logo.clearbit.com/taskus.com", color: "bg-blue-400" },
  { name: "Teleperformance", logo: "https://logo.clearbit.com/teleperformance.com", color: "bg-black" },
  { name: "NTT Data", logo: "https://logo.clearbit.com/nttdata.com", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  { name: "Rockwell Automation", logo: "https://logo.clearbit.com/rockwellautomation.com", color: "bg-blue-300" },
  { name: "PayTM", logo: "https://logo.clearbit.com/paytm.com", color: "bg-black" },
  { name: "AirBNB", logo: "https://logo.clearbit.com/airbnb.com", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  { name: "Birdeye", logo: "https://logo.clearbit.com/birdeye.com", color: "bg-blue-700" },
  { name: "Fujitsu", logo: "https://logo.clearbit.com/fujitsu.com", color: "bg-black" },
];

const Row = ({ reverse = false, delay = 0 }) => {
  const animation = {
    animate: {
      x: reverse ? ["100%", "-100%"] : ["-100%", "100%"],
    },
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 20,
      delay,
    },
  };

  return (
    <div className="overflow-hidden whitespace-nowrap my-4">
      <motion.div className="flex gap-6" {...animation}>
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl text-white font-medium ${client.color}`}
          >
            <div className="w-8 h-8 bg-white rounded-full p-1 flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain rounded-full"
                onError={(e) =>
                  (e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg")
                }
              />
            </div>
            {client.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Clients = () => {
  return (
    <div className="bg-white text-center py-12 px-4">
      <h2 className="text-3xl font-bold mb-2">Our Clients</h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Forward-thinking brands trust us to drive scalable growth and
        engagement.
      </p>
      <div className="mt-10">
        <Row reverse={false} />
        <Row reverse={true} delay={2} />
        <Row reverse={false} delay={4} />
      </div>
    </div>
  );
};

export default Clients;
