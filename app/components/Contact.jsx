import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

const Contact = ({ isDarkMode }) => {
  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.175, delay: 0.1 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Get in touch
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.17 }}
        className="text-center text-3xl font-sans"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.28, delay: 0.25 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I’m available for freelance work, collaboration, or new projects. Send a message and I’ll respond as soon as possible.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="border border-gray-300 rounded-3xl p-8 text-center dark:border-gray-700 dark:bg-slate-900">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="email"
            className="w-12 mx-auto"
          />
          <h3 className="mt-6 text-xl font-semibold">Email</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">surajganesh404@gmail.com</p>
          <a
            href="mailto:surajganesh404@gmail.com"
            className="inline-flex items-center justify-center mt-6 rounded-full border border-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-100 dark:border-white dark:hover:bg-white/10"
          >
            Send email
          </a>
        </div>

        <div className="border border-gray-300 rounded-3xl p-8 text-center dark:border-gray-700 dark:bg-slate-900">
          <Image
            src={assets.github}
            alt="GitHub"
            className="w-12 mx-auto"
          />
          <h3 className="mt-6 text-xl font-semibold">GitHub</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Check out my portfolio and projects</p>
          <a
            href="https://github.com/suraj-ganesh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center mt-6 rounded-full border border-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-100 dark:border-white dark:hover:bg-white/10"
          >
            View profile
          </a>
        </div>

        <div className="border border-gray-300 rounded-3xl p-8 text-center dark:border-gray-700 dark:bg-slate-900">
          <Image
            src={assets.linkedin}
            alt="LinkedIn"
            className="w-12 mx-auto"
          />
          <h3 className="mt-6 text-xl font-semibold">LinkedIn</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Connect with me professionally</p>
          <a
            href="https://www.linkedin.com/in/suraj-ganesh-8313532aa/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center mt-6 rounded-full border border-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-100 dark:border-white dark:hover:bg-white/10"
          >
            Visit profile
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
