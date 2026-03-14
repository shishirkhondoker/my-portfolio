import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import myPic from "../assets/myPic.png";
const About = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Passionate About <span className="text-primary">Code</span> &{" "}
          <span className="text-secondary">Creativity</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl w-80">
              <img src={myPic} alt="profile" className="w-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              A Computer Science Engineering student passionate about technology
              and innovation.
            </h3>

            <p className="text-gray-500 mb-6">
              I thrive in challenging environments where I can apply my
              knowledge in programming, algorithms, and full-stack development.
              With a strong foundation in data structures, databases, and modern
              web frameworks, I’m constantly growing as a developer.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="card bg-base-100 shadow p-4">
                <p className="text-sm text-gray-400">FULL NAME</p>
                <p className="font-semibold">Shishir Khondoker</p>
              </div>

              <div className="card bg-base-100 shadow p-4 flex gap-2 items-center">
                <FaMapMarkerAlt className="text-primary" />
                <div>
                  <p className="text-sm text-gray-400">LOCATION</p>
                  <p className="font-semibold">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow p-4 flex gap-2 items-center">
                <MdEmail className="text-primary" />
                <div>
                  <p className="text-sm text-gray-400">EMAIL</p>
                  <p className="font-semibold">shishirkhondoker32@gmail.com</p>
                </div>
              </div>

              <div className="card bg-base-100 shadow p-4 flex gap-2 items-center">
                <FaPhoneAlt className="text-primary" />
                <div>
                  <p className="text-sm text-gray-400">PHONE</p>
                  <p className="font-semibold">01725576134</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.dropbox.com/scl/fi/uadwk1gxc0btn27g3qtbd/Shishir_Khondoker_CV_1.pdf?rlkey=33e3z9884vlac1lsrju9aary6&st=3xnjyuda&dl=0"
                className="btn btn-primary"
                target="_blank"
              >
                Download CV
              </a>

              <a
                href="https://github.com/shishirkhondoker"
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>

              <a
                href="#"
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
