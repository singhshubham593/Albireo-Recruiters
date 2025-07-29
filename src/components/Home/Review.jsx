import React, { useEffect, useState } from "react";

const clients = [
  {
    name: "Danfoss",
    review:
      "We are a Denmark based company and expanding international operations. Thanks to Recruiting Hub who made our hiring process smooth and fast.",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Danfoss_Logo.svg",
  },
  {
    name: "Hexaware",
    review:
      "Recruiting Hub helped us scale our team across multiple locations with precision and speed. Highly professional!",
    logo:
      "https://companieslogo.com/img/orig/HXQ.F-97ef88f7.png?t=1640780653",
  },
  {
    name: "Temenos",
    review:
      "A fantastic partner in talent acquisition. Recruiting Hub understands our needs and delivers quality profiles every time.",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Temenos-logo.png",
  },
  {
    name: "redBus",
    review:
      "Recruiting Hub played a crucial role in scaling our tech and support teams. Their reach and service is excellent.",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Redbus_Logo.png",
  },
  {
    name: "FAB",
    review:
      "As a leading bank in the UAE, we value partners who deliver results fast — and Recruiting Hub has exceeded expectations.",
    logo: "https://www.bankfab.com/-/media/fabgroup/home/logo.png",
  },
  {
    name: "iLink Digital",
    review:
      "We loved working with Recruiting Hub — their platform is efficient and got us top talent in record time.",
    logo:
      "https://www.ilink-digital.com/wp-content/uploads/2023/04/ilink-logo-1.png",
  },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const activeClient = clients[activeIndex];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16 transition duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Testimonial */}
        <div className="">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">
            Client Reviews
          </h4>
          <p className="text-3xl leading-relaxed font-medium text-gray-800 mb-6 min-h-[160px]">
            {activeClient.review}
          </p>

          {/* Pagination + client */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-1 items-center">
              {clients.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-blue-600 border border-yellow-600"
                      : "bg-blue-300"
                  }`}
                />
              ))}
            </div>
            <div className="border-l border-purple-400 h-4 mx-2"></div>
            <span className="text-blue-700 font-semibold">
              {activeClient.name}
            </span>
          </div>
        </div>

        {/* RIGHT: Logos */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center p-10">
            <img
              src={activeClient.logo}
              alt={activeClient.name}
              className="max-h-12 object-contain"
            />
          </div>
          {clients
            .filter((_, idx) => idx !== activeIndex)
            .map((client, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm flex items-center justify-center p-6"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
