"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import bmtMain from "../../../public/bmt_iphone_mockup.png";
import bmtIphone1 from "../../../public/bmt_iphone_mockup1.png";
import bmtIphone2 from "../../../public/bmt_iphone_mockup2.png";
import bmtIphone3 from "../../../public/bmt_iphone_mockup3.png";

export default function Page(params) {
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
    <main className="flex flex-col py-10 text-left">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="md:text-left"
      >
        <motion.h1
          variants={titleAnim}
          className="py-2 text-5xl text-dark-grey font-clash md:text-9xl"
        >
          BMT connect
        </motion.h1>
        <motion.div
          variants={titleAnim}
          className="py-4 text-3xl text-gray-600 md:text-5xl"
        >
          <span>Development</span>
        </motion.div>
      </motion.div>
      <div className="w-full mt-10 mb-3">
        <Image
          src={bmtMain}
          alt="Câr Y Môr"
          sizes="(min-width: 768px) 90vw, 90vw"
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-wrap mb-3 border-t border-b border-dark-grey py-7">
        <h2 className="text-3xl font-bold text-dark-grey md:flex-1">
          Challenge
        </h2>
        <p className="text-lg text-left text-gray-600 md:flex-1">
          Our team was approached by NHS Wales to build a web app to assist
          blood marrow transplant patients in achieving full fitness after their
          surgeries. The app had to provide a platform for patients to log their
          bloods, connect with other patients, and track their progress. There
          were a few challenges that needed to be addressed before we could
          start building the app. First, we had to create a user-friendly
          interface that was easy for patients to navigate. Second, we had to
          ensure that the app complied with strict data protection and privacy
          regulations.
        </p>
      </div>
      <div className="flex flex-wrap mb-3 border-b border-dark-grey py-7">
        <h2 className="text-3xl font-bold text-dark-grey md:flex-1">
          Solution
        </h2>
        <p className="text-lg text-left text-gray-600 md:flex-1">
          To address the challenges, we first conducted thorough research to
          understand the requirements and expectations of the end-users. Based
          on our findings, we built a web app using React Native, a popular
          framework for mobile app development. The app included several
          features such as logging bloods, a dashboard to track progress, and a
          social feature where users could connect with others undergoing
          similar treatment. To make the app user-friendly, we used a clean and
          simple design with a dashboard that presented the user&apos;s progress
          through easy-to-read graphs. Additionally, we built a functionality
          that enabled patients to track and schedule their exercises, making it
          easy to keep up with their fitness goals. To ensure the app was secure
          and complied with privacy regulations, we implemented various security
          features such as two-factor authentication, encrypted data storage,
          and HIPAA compliance. We worked closely with NHS Wales to ensure that
          the app met all of their requirements and was safe to use by their
          patients.
        </p>
      </div>
      <div className="mb-3">
        <div className="grid grid-cols-10 gap-3">
          <div className="col-span-12 lg:col-span-5">
            <Image
              src={bmtIphone1}
              alt="Câr Y Môr"
              sizes="(min-width: 768px) 90vw, 90vw"
              className="object-cover w-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Image
              src={bmtIphone2}
              alt="Câr Y Môr"
              sizes="(min-width: 768px) 90vw, 90vw"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <Image
          src={bmtIphone3}
          alt="Câr Y Môr"
          sizes="(min-width: 768px) 90vw, 90vw"
          className="object-cover w-full"
        />
      </div>
      <div className="flex">
        <Link
          className="font-bold leading-[1.1] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3vw] md:leading-[1.1] mr-auto block relative overflow-hidden group"
          href="/projects/baker-charles"
        >
          <span className="block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">
            Previous
          </span>
          <span className="block absolute inset-0 translate-y-full transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0">
            Previous
          </span>
        </Link>
      </div>
    </main>
  );
}
