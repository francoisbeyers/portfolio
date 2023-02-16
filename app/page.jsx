"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { AiFillClockCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
// import { titleAnim } from "./animation";

// projects
import projects from "../projects";

import avatar from "../public/avatar_profile.png";
import resumeCYM from "../public/Resume-cym.jpg";
import resumeBL from "../public/Resume-big_lemon.jpg";
import resumeCF from "../public/Resume-catchf_fire.jpg";
import resumeYS from "../public/Resume-yellowsub.jpg";
import ProjectList from "./ProjectList";
import SocialMediaLinks from "./SocialMediaLinks";
import WorkExperience from "./WorkExperince";

export default function Home() {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <>
      {/* hero */}
      <main className="flex flex-col p-10 py-10 text-center md:flex-row">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:text-left md:w-1/2 md:mx-auto"
        >
          <motion.h1
            variants={titleAnim}
            className="py-2 text-lg md:text-xl text-dark-grey"
          >
            hi, i&apos;m{" "}
          </motion.h1>
          <motion.h2
            variants={titleAnim}
            className="py-2 text-5xl text-dark-grey font-clash md:text-9xl"
          >
            Francois Beyers
          </motion.h2>
          <motion.h3
            variants={titleAnim}
            className="py-4 text-3xl text-gray-600 md:text-5xl"
          >
            Experienced Web Developer and SEO for Hire
          </motion.h3>
          <motion.p
            variants={titleAnim}
            className="max-w-xl py-5 text-xl leading-8 text-gray-600"
          >
            Transform Your Online Presence with My Personalised Web Development
            and SEO Services. As a friendly and dedicated freelancer, I take
            pride in crafting custom websites that not only look great, but also
            perform well in search engines. Let&apos;s work together to bring
            your web vision to life!
          </motion.p>
        </motion.div>
        <SocialMediaLinks />
      </main>
      {/* projects */}
      <ProjectList projects={projects} />
      {/* work */}
      <WorkExperience />
      {/* services */}
      <section>
        <div>
          <div className="py-10 text-center">
            <h3 className="py-1 text-gray-800 font-clash ">Services I offer</h3>
          </div>
          <div className="justify-center mt-8 mb-8 space-y-8 md:columns-2 md:flex md:gap-12 md:space-y-0">
            <div className="space-y-8">
              <h3 className="text-4xl font-thin text-center text-gray-800 underline md:text-5xl font-clash">
                Web & Mobile Development
              </h3>
              <h3 className="text-4xl font-thin text-center text-gray-800 md:text-5xl font-clash">
                Chrome Extensions
              </h3>
            </div>
            <div className="space-y-8">
              <h3 className="text-4xl font-thin text-center text-gray-800 md:text-5xl font-clash">
                SEO & Digital Marketing
              </h3>
              <h3 className="text-4xl font-thin text-center text-gray-800 md:text-5xl font-clash">
                Consulting & Training
              </h3>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-10 ">
        <div className="py-4 mx-auto border-t border-b border-dark-grey">
          <div className="justify-center text-center md:flex md:justify-between ">
            <div className="flex items-center">
              <div className="relative w-20 h-20 p-10 mr-8 overflow-hidden rounded-full bg-orange md:h-20 md:w-20">
                <Image
                  src={avatar}
                  layout="fill"
                  objectFit="cover"
                  alt="profile image"
                />
              </div>
              <p className="py-2 text-sm text-left text-gray-800 md:text-lg">
                I&apos;m currently looking for new opportunities, my inbox is
                always open.
              </p>
            </div>
            <a
              className="flex items-center justify-center px-4 py-2 text-4xl text-gray-800 uppercase hover:duration-500 font-clash"
              href="mailto:francois@beyers.tech"
            >
              Send an
              <span
                className="pl-2"
                style={{
                  backgroundImage:
                    "linear-gradient(-100deg, rgba(255, 255, 255, 0), #dc562e 85%, rgba(255, 255, 255, 0))",
                }}
              >
                email
              </span>
            </a>
          </div>
        </div>
        {/* ul with 3 li and a tags */}
        <div className="flex items-center justify-between text-center md:flex-row">
          <ul className="flex py-2 text-sm md:flex-row">
            <li className="px-2 text-gray-800 uppercase">
              <a href="https://www.linkedin.com/in/francois-beyers/">
                LinkedIn
              </a>
            </li>
            <li className="px-2 text-gray-800 uppercase">
              <a href="https://www.instagram.com/francoisbeyers/">Instagram</a>
            </li>
            <li className="px-2 text-gray-800 uppercase">
              <a href="https://twitter.com/BeyersFrancois">Twitter</a>
            </li>
          </ul>
          <p className="py-2 text-sm text-gray-800 md:py-0">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
