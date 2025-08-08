
import Albireo from '../../assets/AlbireoLogo.png';
 import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaGlassCheers,
} from "react-icons/fa";

const footerData = {
  links: {
    "Albireo Links": [
      "Home",
      "Life at Albireo",
      "Contact Us",
      "Blog",
      "Newsroom",
      "Initiatives",
    ],
    Services: [
      "Board Advisory Services",
      "Executive Search",
      "Leadership Hiring",
      "Talent Advisory Solutions",
    ],
    Jobs: ["Browse Jobs", "Submit your CV"],
  },
  socialIcons: [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/albireo-recruiters/posts/?feedView=all" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
   {/* { icon: <FaGlassCheers />, link: "#" }, // Placeholder for Glassdoor */}
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white  py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="col-span-1">
          <img
            src={Albireo}
            alt="Alberio Logo"
            className="h-12 mb-4"
          />
          <p className="text-gray-900 text-sm">
            Celebrating 8+ years of connecting talent with opportunity.
          </p>
        </div>

        {/* Dynamic Links */}
        {Object.entries(footerData.links).map(([title, items], idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">{title}</h3>
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex items-center gap-4 mt-2">
            {footerData.socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-900 text-xl hover:text-white transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Albireo recruiters. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
