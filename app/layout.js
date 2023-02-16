"use client";
import "../styles/globals.css";
import localFont from "@next/font/local";
import { useEffect, useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import Link from "next/link";

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
      <body className="flex flex-col justify-between px-10 md:px-20 lg:px-40 bg-stone-200 scroll-smooth">
        <header className="">
          <nav className="flex flex-wrap items-center justify-between py-10 mb-12 text-dark-grey">
            <Link href={"/"} className="text-xl font-extralight">
              francois.beyers
            </Link>
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
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
