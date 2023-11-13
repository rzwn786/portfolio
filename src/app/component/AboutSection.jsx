'use client'
import React ,{useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2"> 
                <li>React</li>
                <li>Tailwind</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>Java</li>
                <li>PHP</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Diploma in Computer Science @ International Islamic College</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Tester @ i3matrix Sdn Bhd. </li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
                <li>Oracle Certified Professional: Java SE 11</li>
            </ul>
        )
    },
    
]



const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending ,startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        });
    }

  return (
    <section id='about' className='min-h-screen lg:py-5'>
        <div className="md:grid md:grid-cols-1 gap-12 items-center justify-center py-20 px-4 xl:gap-16 sm:py-15 xl:px-16 mt-10  relative">
            {/*Photo / 3D Object later */}
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="font-bold text-3xl text-white justify-start mb-4">About Me</h2>
                <p className="text-base lg:text-lg text-slate-400">
                As a web developer, mobile developer, and UI/UX designer, I bring a diverse skill set to the table. My love for coding is matched only by my enthusiasm for creating seamless and visually appealing user experiences. Whether it's crafting elegant code or designing intuitive interfaces, I thrive on the challenges of the digital landscape.<br></br>
                <br></br>
                Constantly evolving and staying up-to-date with the latest trends in technology, I am committed to continuous learning. Every project is an opportunity to push boundaries, solve problems, and refine my skills. I believe in the power of collaboration, and I am always excited to work with like-minded individuals and organizations to bring innovative ideas to life.<br></br>
                <br></br>
                When I'm not immersed in the world of code, you can find me exploring new coffee shops, doodling in my sketchbook, or contemplating the next adventure in my favorite book. I'm not just a developer; I'm a storyteller using code as my medium.<br></br>
                <br></br>
                </p>
                <div className="flex flex-row justify-center mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                        {" "}
                        Experience{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                        {" "}
                        Certification{" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection