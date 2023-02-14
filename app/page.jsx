"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineRedEnvelope,
  AiFillClockCircle,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

// projects
import projects from "../projects";

import avatar from "../public/avatar_profile.png";
import resumeCYM from "../public/Resume-cym.jpg";
import resumeBL from "../public/Resume-big_lemon.jpg";
import resumeCF from "../public/Resume-catchf_fire.jpg";
import resumeYS from "../public/Resume-yellowsub.jpg";
import ProjectList from "./ProjectList";

export default function Home() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Francois Beyers - Web Development and SEO Expert | beyers.tech
        </title>
        <meta
          name="description"
          content="Transform your online presence with personalised web development & SEO services. Experienced freelancer, Francois Beyers crafts custom websites for top search engine performance. Let's bring your vision to life."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between min-h-screen px-10 md:px-20 lg:px-40 bg-stone-300 scroll-smooth">
        {/* hero */}
        <section className="">
          <nav className="flex flex-wrap items-center justify-between py-10 mb-12 text-dark-grey">
            <h1 className="text-xl font-extralight">francois.beyers</h1>
            <ul className="flex items-center gap-4">
              {/* <li>
                <a
                  href="/Resume-François-Beyers.pdf"
                  download={"Resume-François-Beyers.pdf"}
                  alt="pdf resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden px-4 py-2 text-sm font-medium border-2 rounded-full shadow-lg md:block border-dark-grey text-dark-grey hover:bg-dark-grey hover:text-white hover:duration-500"
                >
                  Resume
                </a>
              </li> */}
              <li>
                <div className="flex items-center">
                  <AiFillClockCircle className="text-2xl" />
                  <p className="px-2 py-2 text-sm font-medium text-dark-grey">
                    {time}
                  </p>
                </div>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col p-10 py-10 text-center md:flex-row">
            <div className="md:text-left md:w-1/2 md:mx-auto">
              <h1 className="py-2 text-sm md:text-lg text-dark-grey">
                hi, i&apos;m{" "}
              </h1>
              <h2 className="py-2 text-5xl text-dark-grey font-clash md:text-9xl">
                Francois Beyers
              </h2>
              <h3 className="py-4 text-3xl text-gray-600 md:text-5xl">
                Experienced Web Developer and SEO for Hire
              </h3>
              <p className="max-w-xl py-5 leading-8 text-gray-600 text-extralight md:text-extralight">
                Transform Your Online Presence with My Personalised Web
                Development and SEO Services. As a friendly and dedicated
                freelancer, I take pride in crafting custom websites that not
                only look great, but also perform well in search engines.
                Let&apos;s work together to bring your web vision to life!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-16 pt-10 text-5xl md:w-1/2 md:mx-auto">
              <div className="flex gap-8">
                <Link
                  href="https://www.linkedin.com/in/francois-beyers/"
                  className="text-opacity-25 hover:text-opacity-100 hover:drop-shadow-lg text-orange hover:duration-500"
                  aria-label="Link that will take you LinkedIn profile"
                >
                  <AiFillLinkedin />
                </Link>
                <Link
                  href="https://twitter.com/BeyersFrancois"
                  className="text-opacity-25 hover:text-opacity-100 hover:drop-shadow-lg text-orange hover:duration-500"
                  aria-label="Link that will take you Twitter profile"
                >
                  <AiFillTwitterCircle />
                </Link>
                <Link
                  href="https://www.instagram.com/francoisbeyers/"
                  className="text-opacity-25 hover:text-opacity-100 hover:drop-shadow-lg text-orange hover:duration-500"
                  aria-label="Link that will take you Instagram profile"
                >
                  <AiFillInstagram />
                </Link>
              </div>
              <div>
                <Link
                  href="mailto:francois@beyers.tech?subject=Hi Francois, I'd like to work with you"
                  aria-label="Link that will take you to contact page"
                  className="flex justify-center my-10"
                >
                  <button className="px-6 py-2 text-xl font-medium border-2 rounded-full shadow-lg md:px-10 md:py-4 text-orange border-orange hover:bg-orange hover:duration-500 hover:text-dark-grey ">
                    Let&apos;s work together
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <ProjectList projects={projects} />
        {/* work */}
        <section className="my-10">
          <div className="p-6 mx-auto border md:w-1/2 rounded-2xl border-gray-800/40">
            <h2 className="flex text-sm font-semibold text-zinc-900">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="flex-none w-6 h-6"
              >
                <path
                  d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100 stroke-zinc-400"
                ></path>
                <path
                  d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                ></path>
              </svg>
              <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
              <li className="flex gap-4">
                <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
                  <Image
                    alt="carymor logo"
                    src={resumeCYM}
                    layout="fill"
                    objectFit="cover"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7 grayscale hover:filter-none hover-duration-500"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <dl className="flex flex-wrap flex-auto gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex-none w-full text-sm font-medium text-zinc-900">
                    Câr-y-Môr
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500">Co-founder</dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400"
                    aria-label="2019 until Present"
                  >
                    <time dateTime="2018">2018</time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime="2023">Present</time>
                  </dd>
                </dl>
              </li>
              <li className="flex gap-4">
                <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
                  <Image
                    alt="catchafire logo"
                    src={resumeCF}
                    layout="fill"
                    objectFit="cover"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7 grayscale hover:filter-none hover-duration-500"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <dl className="flex flex-wrap flex-auto gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex-none w-full text-sm font-medium text-zinc-900">
                    Catchafire
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500">
                    Volunteer developer/designer
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400"
                    aria-label="2014 until 2019"
                  >
                    <time dateTime="2020">2020</time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime="2023">present</time>
                  </dd>
                </dl>
              </li>
              <li className="flex gap-4">
                <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    alt="big lemon logo"
                    src={resumeBL}
                    layout="fill"
                    objectFit="cover"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7 grayscale hover:filter-none hover-duration-500"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <dl className="flex flex-wrap flex-auto gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Big Lemon
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    Web developer
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label="2011 until 2014"
                  >
                    <time dateTime="2022">2022</time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime="2023">2023</time>
                  </dd>
                </dl>
              </li>
              <li className="flex gap-4">
                <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    alt="yellow sub logo"
                    src={resumeYS}
                    layout="fill"
                    objectFit="cover"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7 grayscale hover:filter-none hover-duration-500"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <dl className="flex flex-wrap flex-auto gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Yellow Sub Creative
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    Software developer
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label="2008 until 2011"
                  >
                    <time dateTime="2021">2021</time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime="2022">2022</time>
                  </dd>
                </dl>
              </li>
            </ol>
            <a
              href="/Resume-François-Beyers.pdf"
              download={"Resume-François-Beyers.pdf"}
              alt="pdf resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 px-3 py-2 mt-6 text-sm font-medium text-gray-800 transition border rounded-md group border-dark-grey hover:text-gray-200 outline-offset-2 hover:bg-dark-grey active:bg-dark-grey active:text-gray-200 active:transition-none hover:duration-500"
            >
              Download CV
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
              >
                <path
                  d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </section>
        {/* services */}
        <section>
          <div>
            <div className="py-10 text-center">
              <h3 className="py-1 text-gray-800 font-clash ">
                Services I offer
              </h3>
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
        {/* <section className="py-10">
          <div>
            <h3 className="py-1 text-3xl text-white ">Portofolio</h3>
            <p className="py-2 leading-8 text-gray-800 text-md">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="py-2 leading-8 text-gray-800 text-md">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3 ">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section> */}

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
                <a href="https://www.instagram.com/francoisbeyers/">
                  Instagram
                </a>
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
      </main>
    </div>
  );
}
