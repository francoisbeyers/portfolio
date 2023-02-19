import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function SocialMediaLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center gap-16 pt-10 text-5xl md:w-1/2 md:mx-auto"
    >
      <div className="flex gap-8">
        <Link
          href="https://www.linkedin.com/in/francois-beyers/"
          className="transition duration-300 transform hover:scale-125 hover:drop-shadow-lg text-orange hover:duration-500"
          aria-label="Link that will take you LinkedIn profile"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href="https://twitter.com/BeyersFrancois"
          className="transition duration-300 transform hover:scale-125 hover:drop-shadow-lg text-orange hover:duration-500"
          aria-label="Link that will take you Twitter profile"
        >
          <AiFillTwitterCircle />
        </Link>
        <Link
          href="https://www.instagram.com/francoisbeyers/"
          className="transition duration-300 transform hover:scale-125 hover:drop-shadow-lg text-orange hover:duration-500"
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
          <Button btnText="Let's work together" />
        </Link>
      </div>
    </motion.div>
  );
}
