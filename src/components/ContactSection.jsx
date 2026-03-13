import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-base-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-6">
          I'm open to work or freelance projects. Feel free to reach out!
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            rows={5}
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/shishirkhondoker"
            target="_blank"
            className="btn btn-ghost btn-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shishirkhondoker"
            target="_blank"
            className="btn btn-ghost btn-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
