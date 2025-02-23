"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData: {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}[] = [
    {
      id: 1,
      title: "Hangman",
      description: "Hangman is a word-guessing game built using typescript that allows users to guess the letters of the word and also helps to improve their vocabulary.",
      image: "/images/projects/hangman.png",
      tag: ["All"],
      gitUrl: "https://github.com/ShivaniMakvana/Hangman",
      previewUrl: "https://shivanimakvana.github.io/Hangman",
    },
    {
      id: 2,
      title: "Image & Video Detection",
      description: "TensorFlow models for real-time object detection in images and videos, enhancing visual recognition and analysis.",
      image: "/images/projects/image.png",
      tag: ["All", "Next"],
      gitUrl: "https://github.com/ShivaniMakvana/Image-Video-Object-Detection",
      previewUrl: "https://shivanimakvana.github.io/Image-Video-Object-Detection",
    },
    {
      id: 3,
      title: "Netflix Clone",
      description: "A Netflix clone is a platform typically features a user-friendly interface that allows users to search for content content based on user preferences.",
      image: "/images/projects/clone.png",
      tag: ["All"],
      gitUrl: "https://github.com/ShivaniMakvana/Netflix-clone",
      previewUrl: "https://shivanimakvana.github.io/Netflix-clone",
    },
  ];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef<HTMLUListElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-2 md:mb-2">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next"
          isSelected={tag === "Next"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
