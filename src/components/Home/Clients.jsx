 import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com", color: "bg-yellow-400" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com", color: "bg-blue-400" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com", color: "bg-black" },
  { name: "Calance", logo: "https://logo.clearbit.com/calance.com", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  { name: "TaskUs", logo: "https://img.logo.dev/taskus.com?token=pk_U0ZE7b2TQ8epysPhQMxelw", color: "bg-blue-400" },
  { name: "Teleperformance", logo: "https://img.logo.dev/teleperformance.com?token=pk_U0ZE7b2TQ8epysPhQMxelw", color: "bg-black" },
  { name: "NTT Data", logo: "https://logo.clearbit.com/nttdata.com", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  { name: "Rockwell", logo: "https://logo.clearbit.com/rockwellautomation.com", color: "bg-blue-300" },
  { name: "PayTM", logo: "https://logo.clearbit.com/paytm.com", color: "bg-black" },
  { name: "AirBNB", logo: "https://logo.clearbit.com/airbnb.com", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  { name: "Birdeye", logo: "https://logo.clearbit.com/birdeye.com", color: "bg-blue-700" },
  { name: "Fujitsu", logo: "https://img.logo.dev/fujitsu.com?token=pk_U0ZE7b2TQ8epysPhQMxelw", color: "bg-black" },
  { name: "Admiral Solutions", logo: "https://img.logo.dev/admiralsolutions.in?token=pk_U0ZE7b2TQ8epysPhQMxelw", color: "bg-gradient-to-br from-purple-500 to-orange-400" },
  
];

// Create two identical rows side by side
const InfiniteRow = () => {
  const animation = {
    animate: {
      x: ["0%", "-100%"],
    },
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 20, // speed of scroll
    },
  };

  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex whitespace-nowrap"
        {...animation}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-xl text-white font-medium ${client.color}`}
          >
            <div className="w-8 h-8 bg-white rounded-full p-1 flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                }}
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
        Forward-thinking brands trust us to drive scalable growth and engagement.
      </p>

      <div className="mt-10">
        <InfiniteRow />
      </div>
    </div>
  );
};

export default Clients;
