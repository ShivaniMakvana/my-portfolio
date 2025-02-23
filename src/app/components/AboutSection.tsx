"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA: {
  title: string;
  id: string;
  content: React.ReactElement;
}[] = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>React</li>
          <li>Redux</li>
          <li>GraphQL</li>
          <li>Tailwind</li>
          <li>JavaScript</li>
          <li>Git</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Bachelor of Engineering - Information Technology</li>
          <li>Gujarat Technological University</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/my-portfolio/images/about.png" width={500} height={500} alt='about-img' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a skilled Front End developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React JS and Node.js. I have experience
            working with React, Redux, GraphQL, HTML, CSS, JavaScript, and Git.
            I'm a quick learner and collaborate closely with clients to create
            efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to
            life!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || <p>No content available</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
