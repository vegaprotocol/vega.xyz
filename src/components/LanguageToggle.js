import React, { useState } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

const LanguageToggle = () => {
  const { language, languages, changeLanguage } = useI18next();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const switchLanguage = (lng) => {
    changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative uppercase w-20 text-center">
      <button className="uppercase px-5" onClick={() => toggleDropdown()}>
        {language}
      </button>
      {isDropdownOpen && (
        <ul className="languages absolute top-8 left-0 right-0 text-center">
          {languages.map((lng) => (
            <li key={lng}>
              <a
                href="#"
                className="inline-block px-5 py-1.5"
                onClick={(e) => {
                  e.preventDefault();
                  switchLanguage(lng);
                }}
              >
                {lng}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageToggle;
