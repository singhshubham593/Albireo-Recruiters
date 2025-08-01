import React, { useEffect, useState } from "react";
import CustomeFeedback from "../../assets/CustomerFeedack.png";

const clients = [
   {
    name: "SaaS Industry",
    review:"Albireo really understood what we needed. They found great people for our sales and customer support teams—quickly and without much back and forth. The process was clear, simple, and saved us a lot of time.",
    logo: CustomeFeedback,
  },
  {
    name: "Management Consulting",
    review:"Recruiting Hub helped us scale our team across multiple locations with precision and speed. Highly professional!We were looking for the right kind of people who could fit into our high-pressure and fast-moving work environment. Albireo took the time to understand that and helped us hire professionals who got what we do from day one. CustomeFeedback."
  },
  {
    name: "Banking and Finance",
    review:"Hiring in the finance space can be tricky, but Albireo made it easy. They shared strong profiles that matched both our role and compliance needs. Their support throughout the process was solid and reliable.",
    logo: CustomeFeedback,
  },
  {
    name: "Technology",
    review:"Finding good tech talent is always tough, especially when you need to scale fast. Albireo helped us fill key roles quickly, and the candidates were all skilled and easy to work with. The whole hiring cycle was handled smoothly. ",
    logo: CustomeFeedback,
  },
  {
    name: "BPO Industry",
    review:"For us, keeping up with hiring needs in a fast-paced setup is tough. Albireo understood the urgency and delivered candidates who were ready to hit the ground running. Their team stayed in touch and made things simple from the first call.",
    logo: CustomeFeedback,
  }
  //,
  // {
  //   review:
  //     "We loved working with Recruiting Hub — their platform is efficient and got us top talent in record time.",
  //   logo: CustomeFeedback,
  // },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeClient = clients[activeIndex];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16 transition duration-500">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Client Reviews
        </h2>
        <p className="text-gray-600 text-md md:text-lg">
          Here's what our clients are saying about Recruiting Hub. We are proud
          to help companies grow by delivering top talent with precision and speed.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT MAIN CARD */}
        <div className="relative rounded-xl p-8 shadow-xl overflow-hidden bg-white">
          {/* Gradient Glow Background */}
          <div className="absolute   w-40 h-40 bg-gradient-to-t from-blue-600 via-blue-300 via-yellow-100 to-yellow-500 blur-2xl opacity-100 z-0"></div>
          <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-gradient-to-br from-yellow-600 via-blue-400 to-blue-600 blur-2xl opacity-100 z-0"></div>

          <div className="relative z-10">
            <h4 className="text-sm font-semibold text-gray-600 mb-4">
              Client Reviews
            </h4>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 min-h-[160px]">
              {activeClient.review}
            </p>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mt-4">
              {clients.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-blue-600 border border-yellow-500"
                      : "bg-blue-300"
                  }`}
                />
              ))}
              <span className="text-blue-700 font-semibold">
              {activeClient.name}
            </span>
            </div>
             
          </div>
        </div>

        {/* RIGHT SMALL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {clients
            .filter((_, idx) => idx !== activeIndex)
            .map((client, idx) => (
              <div
                key={idx}
                className="relative rounded-xl shadow-md p-4 overflow-hidden bg-white"
              > 
                <span className="text-sm font-semibold text-gray-900">
                    {client.name}
                  </span>
                {/* Gradient Backdrop */}
                <div className="absolute  w-40 h-40 bg-gradient-to-t from-blue-600 via-blue-300 via-yellow-100 to-yellow-500 blur-2xl opacity-100 z-0"></div>
                <div className="absolute -bottom-25 -right-5 w-40 h-40 bg-gradient-to-br from-yellow-600 via-blue-400 to-blue-600 blur-2xl opacity-100 z-0"></div>

                <div className="relative z-10">
                  <p className="text-gray-700 text-sm">{client.review}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
