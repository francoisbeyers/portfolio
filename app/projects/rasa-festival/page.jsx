"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import rasaMain from "../../../public/rasafestival.org_.png";
import rasaIphone1 from "../../../public/rasa_iphone_mockup.png";
import rasaIphone2 from "../../../public/rasa_iphone_mockup2.png";
import rasaMac from "../../../public/rasa_mac_mockup.png";

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
          Rasa Festival
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
        <motion.div variants={titleAnim} className="text-2xl text-gray-600">
          <Link href="https://rasafestival.org/">
            <BiLinkExternal />
          </Link>
        </motion.div>
      </motion.div>
      <div className="w-full mt-10 mb-3">
        <Image
          src={rasaMain}
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
          The organization had an existing CMS website that needed a significant
          update, including the addition of a new page, customization of a
          theme, and adjustments to the layout. Additionally, there was a need
          for a smaller update to the organisation&apos;s non-CMS website. The
          website was a critical aspect of the annual event/festival and would
          serve as a platform for presenting and archiving all the programming,
          including concerts, performances, art exhibitions, and more. The
          organization wanted to implement a new WordPress theme for the
          website, which required strong CSS skills. Our team was tasked with
          the challenge of updating the website while maintaining its
          functionality and improving its overall design.
        </p>
      </div>
      <div className="flex flex-wrap mb-3 border-b border-dark-grey py-7">
        <h2 className="text-3xl font-bold text-dark-grey md:flex-1">
          Solution
        </h2>
        <p className="text-lg text-left text-gray-600 md:flex-1">
          To address the challenges faced by the organization&apos;s website, I
          began by analyzing their existing website and identifying areas of
          improvement. I proposed a solution that involved implementing a new
          WordPress theme that would improve the site&apos;s appearance,
          usability, and functionality. First, I researched and selected a new
          WordPress theme that would better align with the organization&apos;s
          branding and vision. I then worked on customizing the theme to meet
          the specific needs of the organization&apos;s website. This involved
          using my CSS skills to adjust the layout, font sizes, colors, and
          other design elements of the new theme to create a cohesive and
          visually appealing website. Next, I focused on improving the
          website&apos;s functionality by implementing new features and plugins
          that would enhance the user experience. This included integrating a
          user-friendly CMS to make it easier for the organization to manage
          their content, and optimizing the website for speed and performance.
          To ensure that the new website was user-friendly, I conducted user
          testing and made necessary adjustments based on user feedback. I also
          provided training to the organization&apos;s team on how to use the
          new CMS and manage their website effectively. Overall, my solution
          significantly improved the website&apos;s functionality, appearance,
          and usability. The website&apos;s new features and streamlined design
          helped to drive traffic to the organization&apos;s annual
          event/festival, which was entirely online that year. By enhancing the
          website&apos;s user experience, the organization was able to more
          effectively promote their programs and increase their reach,
          ultimately allowing them to save $4,586 in costs and use the money for
          arts production.
        </p>
      </div>
      <div className="mb-3">
        <div className="grid grid-cols-10 gap-3">
          <div className="col-span-12 lg:col-span-5">
            <Image
              src={rasaIphone1}
              alt="Câr Y Môr"
              sizes="(min-width: 768px) 90vw, 90vw"
              className="object-cover w-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Image
              src={rasaIphone2}
              alt="Câr Y Môr"
              sizes="(min-width: 768px) 90vw, 90vw"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <Image
          src={rasaMac}
          alt="Câr Y Môr"
          sizes="(min-width: 768px) 90vw, 90vw"
          className="object-cover w-full"
        />
      </div>
      <div className="flex">
        <Link
          className="font-bold leading-[1.1] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3vw] md:leading-[1.1] mr-auto block relative overflow-hidden group"
          href="/projects/bmt-connect"
        >
          <span className="block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">
            Previous
          </span>
          <span className="block absolute inset-0 translate-y-full transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0">
            Previous
          </span>
        </Link>
        <Link
          className="font-bold leading-[1.1] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3vw] md:leading-[1.1] ml-auto block relative overflow-hidden group"
          href="/projects/baker-charles"
        >
          <span className="block transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-[-100%]">
            Next
          </span>
          <span className="block absolute inset-0 translate-y-full transition-translate ease-in-out duration-[350ms] md:group-hover:translate-y-0">
            Next
          </span>
        </Link>
      </div>
    </main>
  );
}
