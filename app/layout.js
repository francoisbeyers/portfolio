"use client";
import "../styles/globals.css";
import localFont from "@next/font/local";
import { useEffect, useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import avatar from "../public/avatar_profile.png";

const clash = localFont({
  src: "../public/ClashDisplay-Bold.woff2",
  display: "swap",
  variable: "--font-clash",
});

export default function RootLayout({ children }) {
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
    <html lang="en" className={`${clash.variable}`}>
      <head />
      <body className="flex flex-col justify-between min-h-screen mx-auto bg-stone-200 scroll-smooth selection:bg-dark-grey selection:text-gray-100 max-w-[2560px]">
        <header className="left-0 mb-4 pt-[10px] right-0 top-0 z-[100] mt-2 sticky backdrop-blur-sm">
          <div className="flex flex-wrap mb-2 font-bold text-[28px] lg:text-[32px] leading-none md:leading-[0.95] lg:leading-[0.95] items-center px-10">
            <div className="w-[35%] md:w-[45%] lg:w-[60%]">
              <Link href={"/"} className="py-2">
                beyers
              </Link>
            </div>
            <nav className="ml-auto flex w-[65%] md:w-[55%] lg:w-[40%] items-center">
              <div className="flex justify-end w-full space-x-1 lg:space-x-2 md:w-auto md:justify-start">
                {/* <Link
                  className="group relative block overflow-hidden opacity-[1] transition-opacity duration-300 ease-in-out hover:opacity-[1]"
                  href="#projects"
                >
                  <span className="block transition-transform duration-[350ms] ease-in-out md:group-hover:translate-y-[-110%] py-2">
                    Projects,
                  </span>
                  <span className="transition-translate absolute inset-0 block translate-y-full duration-[350ms] ease-in-out md:group-hover:translate-y-0 py-2">
                    Projects,
                  </span>
                </Link>
                <Link
                  className="group relative block overflow-hidden opacity-[1] transition-opacity duration-300 ease-in-out hover:opacity-[1]"
                  href="#projects"
                >
                  <span className="block transition-transform duration-[350ms] ease-in-out md:group-hover:translate-y-[-110%] py-2">
                    Bio
                  </span>
                  <span className="transition-translate absolute inset-0 block translate-y-full duration-[350ms] ease-in-out md:group-hover:translate-y-0 py-2">
                    Bio
                  </span>
                </Link> */}
              </div>
              <span
                suppressHydrationWarning={true}
                className="hidden ml-auto font-normal md:block"
              >
                {time}
              </span>
            </nav>
          </div>
        </header>
        <div className="px-10 ">{children}</div>
        <footer className="px-10 pt-10 pb-10">
          <div className="py-4 mx-auto border-t border-b border-dark-grey">
            <div className="justify-center text-center md:flex md:justify-between ">
              <div className="flex items-center">
                <div className="relative block w-20 h-20 p-10 mr-8 overflow-hidden rounded-full bg-orange md:h-20 md:w-20">
                  <Image
                    src={avatar}
                    fill
                    sizes="100%"
                    className="object-cover"
                    alt="profile image"
                  />
                </div>
                <p className="py-2 text-sm text-left text-gray-800 md:text-lg">
                  I&apos;m currently looking for new opportunities, my inbox is
                  always open.
                </p>
              </div>
              <Link
                className="flex items-center justify-center px-4 py-2 text-gray-800 uppercase md:text-4xl hover:duration-500 font-clash"
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
              </Link>
            </div>
          </div>

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
              ?? {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
