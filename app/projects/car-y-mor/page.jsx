"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import cym from "../../../public/Resume-cym.jpg";
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
    <main className="flex flex-col p-10 py-10 text-left">
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
          Câr Y Môr
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
      <div className="w-full mt-10">
        <Image src={cym} alt="Câr Y Môr" width={500} height={500} />
      </div>
    </main>
  );
}
