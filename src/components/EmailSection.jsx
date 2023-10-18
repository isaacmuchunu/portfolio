import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedIn from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12  py-24 gap-4">
      <div>
        <h5 className="text-2xl font-bold  my-2 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Let's Connect
        </h5>
        <p className="max-w-md mb-4 text-[#ADB7BE]">
          I'm currently looking for new opportunities. My inbox is always open
          and is always open. Whether a queston or a job offer, feel free to
          contact me.
        </p>
        <div className="flex flex-row socials gap-2 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          <Link href="https://github.com">
            <Image src={GithubIcon} alt="github icon" />
          </Link>
          <Link href="https://linkedin.com">
            <Image src={LinkedIn} alt="linkedIn icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
