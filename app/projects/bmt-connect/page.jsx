"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          <span>Design</span>
          {", "}
          <span>Development</span>
          {", "}
          <span>SEO</span>
        </motion.div>
      </motion.div>
      <div className="w-full mt-10 mb-3">
        <Image src={bmtMain} alt="Câr Y Môr" width={"100vw"} height={"100%"} />
      </div>
      <div className="flex flex-wrap mb-3 border-t border-b border-dark-grey py-7">
        <h2 className="text-3xl font-bold text-dark-grey md:flex-1">
          Challenge
        </h2>
        <p className="text-lg text-left text-gray-600 md:flex-1">
          The main challenge in designing, building, and adding SEO to the
          Community Benefit Society&apos;s website was to effectively
          communicate their unique mission of establishing Wales&apos; first
          Seaweed and Shellfish farm. The website needed to reflect their
          commitment to improving the coastal environment while creating
          year-round full-time jobs in the community. Careful consideration was
          given to the website&apos;s design to ensure that it aligned with the
          organisation&apos;s values and effectively conveyed their message.
          Additionally, the website&apos;s SEO strategy was targeted towards
          promoting the organisation&apos;s unique features and benefits, such
          as their focus on environmental conservation and job creation. The
          goal was to generate high levels of organic traffic to the website and
          encourage community involvement and support for the
          organisation&apos;s mission. Through the website, the organisation was
          able to successfully convey their message and generate support for
          their efforts in improving the coastal environment and creating
          year-round full-time jobs.
        </p>
      </div>
      <div className="flex flex-wrap mb-3 border-b border-dark-grey py-7">
        <h2 className="text-3xl font-bold text-dark-grey md:flex-1">
          Solution
        </h2>
        <p className="text-lg text-left text-gray-600 md:flex-1">
          To effectively design, build, and add SEO to the Community Benefit
          Society&apos;s website, a thorough analysis of their mission, values,
          and goals was conducted. This analysis guided the development of a
          website that accurately and compellingly reflected their unique
          message and value proposition. The website&apos;s design was carefully
          crafted to align with the organisation&apos;s values, using visuals
          and messaging that highlighted their commitment to environmental
          conservation and job creation. In terms of SEO strategy, a thorough
          keyword research was conducted to identify the most relevant and
          high-traffic keywords related to the organisation&apos;s mission.
          These keywords were then incorporated into the website&apos;s content,
          titles, and meta descriptions to boost search engine visibility and
          drive traffic to the site. To encourage community involvement and
          support, the website included interactive elements such as a blog,
          social media links, and an events calendar. These features allowed the
          organisation to keep the community informed about their progress and
          engage with them in ongoing conversations. The result was a website
          that effectively communicated the organisation&apos;s unique mission
          and generated support for their efforts to improve the coastal
          environment and create year-round full-time jobs.
        </p>
      </div>
      <div className="mb-3">
        <div className="grid grid-cols-10 gap-3">
          <div className="col-span-12 lg:col-span-5">
            <Image
              src={bmtIphone1}
              alt="Câr Y Môr"
              width={"100vw"}
              height={"100%"}
            />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Image
              src={bmtIphone2}
              alt="Câr Y Môr"
              width={"100vw"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <Image
          src={bmtIphone3}
          alt="Câr Y Môr"
          width={"100vw"}
          height={"100%"}
        />
      </div>
    </main>
  );
}
