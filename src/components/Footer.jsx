import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 shadow-md text-base-content p-10">
      <nav className="grid grid-flow-col gap-4">
        {/* <Link to="/" className="link link-hover">
          Home
        </Link> */}
        <a href="#hero" className="link link-hover">
          Home
        </a>
        <a href="#about" className="link link-hover">
          About
        </a>

        <a href="#skills" className="link link-hover">
          Skills
        </a>

        <a href="#projects" className="link link-hover">
          Projects
        </a>

        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Twitter */}
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631..." />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5..." />
            </svg>
          </a>
        </div>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          <span className="font-semibold"> Shishir Khondoker</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
