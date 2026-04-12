"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assets, serviceData, workData } from "@/assets/assets";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";

const ServiceDetailsProfile = ({ slug }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related projects utilizing the tag mapped previously
  const relatedProjects = workData.filter((project) => project.tag === service.tag);

  return (
    <>
      {/* We reuse the Navbar, preserving Dark Mode state seamlessly */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Container mirroring the image's cream (#FAF9F6) layout */}
      <main className="min-h-screen pt-32 px-[5%] sm:px-[10%] bg-[#FAF9F6] dark:bg-[#121212] transition duration-300 pb-20">
        
        {/* Top Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 font-Ovo mb-8">
          <Link href="/" className="hover:text-black dark:hover:text-white">Home</Link> 
          <span>&gt;</span> 
          <span className="font-semibold text-black dark:text-white">{service.title}</span>
        </div>

        {/* Floating Card Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-darkTheme rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-black/40 overflow-hidden flex flex-col lg:flex-row mb-20"
        >
          {/* Left Poster Frame */}
          <div className="lg:w-1/2 w-full min-h-[300px] bg-yellow-300 dark:bg-black/20 flex items-center justify-center overflow-hidden">
             {service.image && (
               <Image src={service.image} alt={service.title} className="w-full h-full object-cover" />
             )}
          </div>

          {/* Right Information Frame */}
          <div className="lg:w-1/2 w-full p-8 sm:p-12 flex flex-col justify-center">
             <h1 className="text-4xl sm:text-5xl font-bold font-sans text-gray-900 dark:text-white mb-4">
               {service.title}
             </h1>
             <p className="text-lg text-gray-600 dark:text-gray-300 font-Ovo mb-6">
               {service.detailedDescription}
             </p>

             {/* Star Ratings Section */}
             <div className="flex items-center gap-6 mb-8 text-sm font-Ovo flex-wrap">
                <div className="flex items-center gap-2 text-yellow-500">
                   <span className="font-bold text-[16px]">{service.stats.rating}</span>
                   <span className="text-lg tracking-widest">★★★★★</span>
                   <span className="text-gray-500 dark:text-gray-400 pl-1">{service.stats.label}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 border-l pl-6 border-gray-300 dark:border-gray-600">
                   <Image src={assets.edu_icon} alt="icon" className="w-4 opacity-50 dark:invert" />
                   {service.stats.enrolled}
                </div>
             </div>

             {/* Author and Tools Section */}
             <div className="flex items-center gap-3 mb-8">
                <Image src={assets.profile_img} alt="author" className="w-10 h-10 rounded-full bg-gray-200 object-cover border border-gray-300" />
                <span className="font-semibold text-gray-800 dark:text-white font-sans text-sm">Suraj Ganesh</span>
                
                {/* Dynamically mapped rounded tools */}
                <div className="flex items-center gap-2 ml-auto">
                    {service.tools.map((Tool, index) => (
                      <div key={index} className="w-10 h-10 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center bg-gray-50 dark:bg-black/50 shadow-sm hover:scale-110 transition">
                        <Image src={Tool} alt="tool" className="w-6" />
                      </div>
                    ))}
                </div>
             </div>

             {/* 3 Column Feature Grids */}
             <div className="grid grid-cols-3 gap-2 mb-10 text-sm border-t border-b border-gray-100 dark:border-gray-800 py-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-1 pr-2">
                     <span className="font-bold font-sans text-[15px] text-gray-900 dark:text-white">{feature.title}</span>
                     <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-2 mt-1">
                        <div className="w-3 h-3 rounded-full border border-gray-400 dark:border-gray-500 flex-shrink-0"></div>
                        <span className="truncate">{feature.subtitle}</span>
                     </span>
                  </div>
                ))}
             </div>

             {/* Enquiry action Button */}
             <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="bg-[#ED703B] hover:bg-[#d45e2a] text-white font-sans font-medium py-[14px] px-8 rounded-xl w-max transition-colors shadow-md shadow-[#ED703B]/20"
              >
                Send an Enquiry
              </motion.a>
          </div>
        </motion.div>

        {/* Dynamic Associated Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="mb-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-sans mb-10 text-center dark:text-white"
            >
              Projects built
            </motion.h3>
            <div className="grid grid-cols-auto gap-6 sm:w-10/12 w-full mx-auto">
              {relatedProjects.map((project, index) => (
                 <motion.a
                    href={project.link || "#"}
                    target={project.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                    key={index}
                    style={{ backgroundImage: `url(${project.bgImage})`, backgroundPosition: project.bgPos || 'center' }}
                    className="aspect-square bg-no-repeat bg-cover rounded-xl relative cursor-pointer group block overflow-hidden shadow-lg max-w-[400px] mx-auto w-full"
                 >
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                     {project.tag}
                   </div>
                   <div className="bg-white/95 backdrop-blur-md w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex justify-between items-center duration-500 group-hover:bottom-7 border border-gray-100">
                     <div>
                       <h2 className="font-semibold text-black">{project.title}</h2>
                       <p className="text-sm text-gray-700">{project.description}</p>
                     </div>
                     <div className="border rounded-full border-black aspect-square w-9 flex items-center justify-center shadow-[1px_1px_0_#000] group-hover:bg-[#ED703B] transition">
                       <Image src={assets.send_icon} alt="send_icon" className="w-5" />
                     </div>
                   </div>
                 </motion.a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Existing Footers / Contact bound to bottom explicitly */}
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default ServiceDetailsProfile;
