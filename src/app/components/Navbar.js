"use client";
import React, { useState, useEffect } from "react";

const Sidebar = ({ showIcons, toggleIcons }) => {
  return (
    <div
      className={`grid sidebar fixed top-0 right-0 h-1/2 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        showIcons ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <a
        href="/"
        className="home font-bold pl-3 text-orange-500"
        style={{ fontSize: "20px", height: "20px" }}
      >
        Home
      </a>
      <a
        href="/"
        className="about-us font-bold pl-5"
        style={{ fontSize: "20px", height: "40px" }}
      >
        About Us
      </a>
      <a
        href="/"
        className="pricing font-bold pl-5"
        style={{ fontSize: "20px", height: "40px" }}
      >
        Pricing
      </a>
      <a
        href="/"
        className="features font-bold pl-5"
        style={{ fontSize: "20px", height: "40px" }}
      >
        Features
      </a>
    </div>
  );
};

const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".sidebar") && !event.target.closest(".side-bar-icon")) {
      setShowIcons(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (showIcons) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showIcons]);

  return (
    <>
      <div className="nav w-full p-4 pl-8 pt-7 flex">
        <div className="company-logo pl-3 pt-4 cursor-pointer">
          <img
            src="https://www.batchsys.com/assets/img/batch_logo_black.png"
            className=""
            style={{ width: "75%" }}
            alt="Company Logo"
          />
        </div>

        <div
          className={`sub-pages flex w-full ${isMobile ? "hidden" : "lg:flex"}`}
        >
          <a
            href="/"
            className="home pt-6 font-bold pl-3 text-orange-500"
            style={{ fontSize: "20px" }}
          >
            Home
          </a>
          <a
            href="/"
            className="about-us pt-6 font-bold pl-5"
            style={{ fontSize: "20px" }}
          >
            About Us
          </a>
          <a
            href="/"
            className="pricing pt-6 font-bold pl-5"
            style={{ fontSize: "20px" }}
          >
            Pricing
          </a>
          <a
            href="/"
            className="features pt-6 font-bold pl-5"
            style={{ fontSize: "20px" }}
          >
            Features
          </a>
          <a
            href="/"
            className="download p-2 bg-black text-white ml-auto mr-7 flex items-center justify-center"
            style={{ height: "50px", width: "130px", borderRadius: "6px" }}
          >
            Download
          </a>
        </div>

        <div className={`side-bar-icon ${!isMobile ? "hidden" : "flex"}`}>
          <img
            onClick={toggleIcons}
            className="ml-auto cursor-pointer"
            style={{ height: "20%" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABoaGjg4OCqqqrm5uatra0nJyfY2Nh6enpcXFycnJz19fW7u7uLi4uQkJBjY2NTU1PGxsY3Nze0tLRvb29KSkomJiYLCwsZGRkdHR1tbW3Z2dnma09bAAABWElEQVR4nO3dCW7CMBBAUbeUJRD2nfb+5yyNcoNqOmj63g2+LJIg2Z7WAAAAAAAAAAAAAOAXFtvuPU+3XQT39bu3bLs+NPCa3fd0jUzcZ9cN9nGBh+y20SGssMtOG3VhhcfstNExrHCenTaahxUus9NGy7DCVXbaaBVW2N+y2wa3wBfiOjtusI4LbO2UXfd0igxsbXpO7jtPYwOHyEmeP8gDAAAAAAAAAACoZTH7yDOLPlDS2uyevHPvPosNzN6Z+OMcGbjJrhts4gIn2W2jSVjhayxh5CJestNGl7DC+idK6q9h/d9h/Wdp22a3DQLfh//gm+b5XfpI7nsEf5e2+v8tAAAAAAAAAAAAiil+j/D0M3nnXvRd0OXv8y5/J3v9e/Xrz0aoP9+i/omS+nNm6s8Kqj/vqf7Mrta/wrNmHjtarvrsvJY///AruA8AAAAAAAAAAACA4r4Bj9MjQ5qVjE4AAAAASUVORK5CYII="
            alt="Menu Icon"
          />
        </div>

        <Sidebar showIcons={showIcons} toggleIcons={toggleIcons} />
      </div>
    </>
  );
};

export default Navbar;
