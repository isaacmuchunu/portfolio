"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node Js</li>
        <li>React</li>
        <li>TailwindCSS</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BE CSE Osmania University</li>
        <li>Harvard CS50</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fortinet Network Associate</li>
        <li>Google Cloud Certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 py-8 gap-8 px-4 items-center xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/about.png"} alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left h-full flex flex-col">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 sm:mt-4 capitalize font-poppins">
            About Me
          </h2>
          <p className="text-base md:text-lg font-poppins">
            Are you in need of expertly crafted captivating and informative
            content on topics related to Cybersecurity, ITAR, NIST, CMMC, or
            CUI? Look no further! I am here to provide you with top-notch
            content that not only meets your needs but exceeds your
            expectations.
          </p>
          <div className="flex flex-row mt-8 font-poppins space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
