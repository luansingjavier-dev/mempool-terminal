import React, { useEffect, useState } from "react";

import { navItems } from "./../constants";
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(window.location.hash); // Initialize with the current hash

  // Function to handle link click and update the hash in the URL
  const handleLinkClick = (link) => {
    setActiveLink(link);
    window.location.hash = link; // Update the hash in the URL
  };

  // Update the active link when the hash changes (e.g., when the user manually changes the URL)
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="hidden w-1/4 p-4 lg:flex">
      <div className="fixed left-0 h-full w-1/4 pl-10 pt-4">
        <ul className="space-y-3">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                activeLink === item.link ? "text-blue-400" : "text-n-3"
              }`}
            >
              <a
                className="block w-[12rem] xl:mr-8 body"
                href={item.link}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default behavior of anchor link
                  handleLinkClick(item.link); // Set the active link on click
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
