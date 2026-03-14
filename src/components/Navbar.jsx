import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const navbarHeight = 80;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });

      // Update the URL hash without reloading
      window.history.replaceState(null, "", `/#${id}`);
    }
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                onClick={() => handleScroll("hero")}
                className="cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("about")}
                className="cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("skills")}
                className="cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("projects")}
                className="cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("contact")}
                className="cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Logo / Name */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-primary">Shishir</span>{" "}
          <span className="text-accent italic">Khondoker</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 font-medium">
          <li>
            <a onClick={() => handleScroll("hero")} className="cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => handleScroll("about")} className="cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("skills")}
              className="cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("projects")}
              className="cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("contact")}
              className="cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Theme Button */}
      <div className="navbar-end">
        <button onClick={toggleTheme} className="btn btn-primary btn-sm">
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
