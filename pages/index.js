import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineRedEnvelope,
  AiFillClockCircle,
} from "react-icons/ai";

import avatar from "../public/avatar_profile.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

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
      <main className="flex flex-col justify-between min-h-screen px-10 md:px-20 lg:px-40 bg-stone-300">
        <section className="">
          <nav className="flex flex-wrap items-center justify-between py-10 mb-12 text-dark-grey">
            <h1 className="text-xl uppercase font-extralight">
              francoisbeyers
            </h1>
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="/public/Resume-François-Beyers.pdf"
                  download={"Resume-François-Beyers.pdf"}
                  className="px-4 py-2 text-sm font-medium border-2 rounded-full shadow-lg border-dark-grey text-dark-grey"
                >
                  Resume
                </a>
              </li>
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
          <div className="p-10 py-10 text-center">
            <h1 className="py-2 text-6xl font-thin uppercase text-dark-grey font-amiri md:text-9xl">
              Francois Beyers
            </h1>
            <h2 className="py-4 text-3xl text-dar-grey md:text-5xl">
              Experienced Web Developer and SEO Expert for Hire
            </h2>
            <p className="max-w-xl py-5 mx-auto leading-8 text-gray-600 text-extralight md:text-extralight">
              Transform Your Online Presence with My Personalised Web
              Development and SEO Services. As a friendly and dedicated
              freelancer, I take pride in crafting custom websites that not only
              look great, but also perform well in search engines. Let&apos;s
              work together to bring your web vision to life!
            </p>
            <div className="flex justify-center gap-16 pt-10 text-5xl text-opacity-25 text-orange">
              <a
                href="https://www.linkedin.com/in/francois-beyers/"
                aria-label="Link that will take you LinkedIn profile"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://twitter.com/BeyersFrancois"
                aria-label="Link that will take you Twitter profile"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.instagram.com/francoisbeyers/"
                aria-label="Link that will take you Instagram profile"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
          {/* button cta "lets work together with a mailto" */}
          <a
            href="mailto:francois@beyers.tech?subject=Hi Francois, I'd like to work with you"
            className="flex justify-center my-10"
            aria-label="Link that will take you to contact page"
          >
            <button className="px-10 py-4 text-xl font-medium text-white rounded-full shadow-lg bg-orange">
              Let&apos;s work together
            </button>
          </a>
        </section>
        <section>
          <div>
            <div className="py-10 text-center">
              <h3 className="py-1 text-gray-800 ">Services I offer</h3>
            </div>
            <div className="justify-center mt-8 mb-8 space-y-8 md:columns-2 md:flex md:gap-12 md:space-y-0">
              <div className="space-y-8">
                <h3 className="text-4xl font-thin text-center underline md:text-5xl font-amiri text-dark-grey">
                  Web & Mobile Development
                </h3>
                <h3 className="text-4xl font-thin text-center md:text-5xl font-amiri text-dark-grey">
                  Chrome{" "}
                  <span style={{ filter: "drop-shadow(8px 8px 5px gray)" }}>
                    Extensions
                  </span>
                </h3>
              </div>
              <div className="space-y-8">
                <h3 className="text-4xl font-thin text-center md:text-5xl font-amiri text-dark-grey">
                  SEO &{" "}
                  <span style={{ filter: "blur(2px)" }}>Digital Marketing</span>
                </h3>
                <h3
                  className="text-4xl font-thin text-center md:text-5xl font-amiri text-dark-grey"
                  style={{
                    animation: "glow 2s ease-in-out infinite alternate",
                  }}
                >
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
          <div className="py-4 mx-auto border-t-2 border-b-2 border-dark-grey">
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
                <p className="py-2 text-sm text-left text-gray-800 uppercase md:text-lg">
                  I&apos;m currently looking for new opportunities, my inbox is
                  always open.
                </p>
              </div>
              <a
                className="flex items-center justify-center px-4 py-2 text-4xl text-gray-800 uppercase font-amiri"
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
