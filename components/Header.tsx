"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium hover:opacity-60 transition-opacity" onClick={closeMenu}>
            Francois_Beyers
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className={`text-sm hover:opacity-60 transition-opacity ${
                pathname === '/services' ? 'underline underline-offset-4' : ''
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`text-sm hover:opacity-60 transition-opacity ${
                pathname === '/projects' ? 'underline underline-offset-4' : ''
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm px-4 py-2 border border-black hover:bg-rusty-red hover:text-white hover:border-rusty-red transition-all duration-500"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center group relative z-[9999]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 7 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-black group-hover:bg-rusty-red transition-colors origin-center"
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="w-full h-0.5 bg-black group-hover:bg-rusty-red transition-colors"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -7 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-black group-hover:bg-rusty-red transition-colors origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav for proper fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-white/95 backdrop-blur-lg md:hidden"
            style={{ zIndex: 9998 }}
          >
            <div className="flex flex-col justify-evenly items-center h-screen w-screen">
              <Link
                href="/"
                onClick={closeMenu}
                className={`text-3xl font-medium hover:text-rusty-red transition-colors ${
                  pathname === '/' ? 'text-rusty-red' : 'text-black'
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className={`text-3xl font-medium hover:text-rusty-red transition-colors ${
                  pathname === '/services' ? 'text-rusty-red' : 'text-black'
                }`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                onClick={closeMenu}
                className={`text-3xl font-medium hover:text-rusty-red transition-colors ${
                  pathname === '/projects' ? 'text-rusty-red' : 'text-black'
                }`}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-xl px-8 py-4 border border-black hover:bg-rusty-red hover:text-white hover:border-rusty-red transition-all duration-500"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
