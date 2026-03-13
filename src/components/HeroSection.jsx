import React from "react";
import myPic from "../assets/myPic.png";
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-primary">Shishir Khondoker</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-base-content/80">
              Full Stack Developer
            </h2>

            <p className="text-base-content/70 mb-6 max-w-lg mx-auto lg:mx-0">
              I am a passionate developer who loves building modern web
              applications using React, Node.js, and MongoDB. I enjoy learning
              new technologies and creating responsive user-friendly designs.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <button className="btn btn-primary">View Projects</button>
              <button className="btn btn-outline">Contact Me</button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="avatar">
              <div className="w-64 md:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img src={myPic} alt="Shishir Khondoker" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
