"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
    <section className='lg:py-20'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
            initial= {{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}} 
            transition={{duration:0.5}} 
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EAC696] via-[#765827] to-[#C8AE7D]">
                        Hi, I&apos;m {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Rizuwan',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web Developer',
                        1000,
                        'Mobile Developer',
                        1000,
                        'UI/UX Designer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    /> 
                </h1>
                <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6">
                    Welcome to my simple portfolio! My name is Rizuwan and I have a strong interest in web and mobile app development and enjoy exploring new technologies and frameworks to build modern and user-friendly applications. I am passionate about learning and am constantly looking for ways to improve my skills
                </p>
                <div>
                    <Link
                    href="mailto:me@rzwn.xyz"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#EAC696] via-[#765827] to-[#C8AE7D] hover:bg-slate-200 text-white"
                    >
                    Hire Me
                    </Link>
                    <Link
                    href="/files/resume.pdf"
                    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full  hover:bg-slate-200 text-white mt-3"
                    >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </Link>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] relative">
                    <Image
                    className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    src="/images/home.JPG"
                    alt="hero image"
                    width={270}
                    height={270}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}
export default HeroSection;
