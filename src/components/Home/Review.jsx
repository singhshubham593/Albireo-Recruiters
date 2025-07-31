import React, { useEffect, useState } from "react";
import CustomeFeedback from "../../assets/CustomerFeedack.png";

const clients = [
  {
    review:
      "We are a Denmark based company and expanding international operations. Thanks to Recruiting Hub who made our hiring process smooth and fast.",
    logo: CustomeFeedback,
  },
  {
    review:
      "Recruiting Hub helped us scale our team across multiple locations with precision and speed. Highly professional!",
    logo: CustomeFeedback,
  },
  {
    review:
      "A fantastic partner in talent acquisition. Recruiting Hub understands our needs and delivers quality profiles every time.",
    logo: CustomeFeedback,
  },
  {
    review:
      "Recruiting Hub played a crucial role in scaling our tech and support teams. Their reach and service is excellent.",
    logo: CustomeFeedback,
  },
  {
    review:
      "As a leading bank in the UAE, we value partners who deliver results fast — and Recruiting Hub has exceeded expectations.",
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
