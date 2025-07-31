import React, { useState } from "react";

const Card = ({ title, description, image, icon }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm sm:max-w-sm transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative bg-white border rounded-2xl overflow-hidden shadow-xl p-5 min-h-[400px] flex flex-col items-center justify-center">
        {!hover ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-65 h-65 object-contain"
            />
            <h2 className="text-xl font-semibold text-center text-black">
              {title}
            </h2>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-400 text-white flex flex-col justify-center items-start p-6 animate-slide-up rounded-2xl">
            <div className="text-3xl mb-4 mx-auto">{icon}</div>
            <h2 className="text-2xl  font-bold mb-2 mx-auto">{title}</h2>
            <p className="text-sm opacity-90 mb-4">{description}</p>
            {/* <a href="#" className="text-white font-bold underline">
              READ MORE
            </a> */}
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;