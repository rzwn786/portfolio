"use client"
import React, { useState, useRef } from "react";
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion";

const projectData = [
    {
        id:1,
        title: "Green Wrld - Recycling Mobile Application",
        description: "Tech Stack : React Native, Firebase, Google Cloud Vision",
        images: "images/projects/2.jpg",
        tag: ["All","Mobile"],
        gitUrl: "https://github.com/rzwn786/green-wrld-app",
        previewUrl: "https://play.google.com/store/apps/details?id=com.greenwrld",
    },
    {
        id:3,
        title: "IIC Marketplace - Web Application",
        description: "Tech Stack : PHP, MySQL",
        images: "images/projects/4.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/rzwn786/IIC-Marketplace-Web-Application",
        previewUrl: "/",
    },
    {
        id:4,
        title: "IIC Marketplace - Mobile Application",
        description: "Tech Stack : Java, MySQL",
        images: "images/projects/3.jpg",
        tag: ["All","Mobile"],
        gitUrl: "https://github.com/rzwn786/IIC-Marketplace-Android",
        previewUrl: "/",
    },
    {
        id:5,
        title: "Spare Part Management System",
        description: "Tech Stack : PHP, MySQL",
        images: "images/projects/5.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/rzwn786/Spare-Part-Management-System-",
        previewUrl: "/",
    },
    
]

const ProjectsSection = () => {
    const [tag,setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const handleTagChange = (newTag) =>{
        setTag(newTag);
    };

    const filteredProject = projectData.filter((project) => 
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };


  return (
    <section id="projects" className='lg:py-16'>
         <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProject.map((project,index) => (
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
                    imgUrl={project.images}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection