"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium hover:opacity-60 transition-opacity">
          Francois_Beyers
        </Link>

        <div className="flex items-center gap-8">
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
            className="text-sm px-4 py-2 border border-black hover:bg-black hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
