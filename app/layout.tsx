"use client";
import "../styles/globals.css";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeroUIProvider } from "@heroui/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";

const clash = localFont({
  src: "../public/ClashDisplay-Bold.woff2",
  display: "swap",
  variable: "--font-clash",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`${clash.variable}`}>
      <head>
        <title>Francois Beyers - Full-Stack Developer · SEO · AI</title>
        <meta name="description" content="Full-stack developer, SEO expert, and AI automation specialist. Building modern solutions with clean design." />
      </head>
      <body className="bg-white text-black">
        <HeroUIProvider>
        {/* Minimal Navigation */}
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

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Minimal Footer */}
        <footer className="bg-white border-t border-black/10 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-sm font-medium mb-4">Connect</h3>
                <ul className="space-y-2 text-sm text-black/60">
                  <li><a href="https://www.linkedin.com/in/francois-beyers/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a></li>
                  <li><a href="https://github.com/francoisbeyers" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a></li>
                  <li><a href="https://twitter.com/BeyersFrancois" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Twitter</a></li>
                  <li><a href="mailto:francois@beyers.tech" className="hover:text-black transition-colors">Email</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Navigation</h3>
                <ul className="space-y-2 text-sm text-black/60">
                  <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
                  <li><Link href="/projects" className="hover:text-black transition-colors">Projects</Link></li>
                  <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Info</h3>
                <p className="text-sm text-black/60">
                  Full-Stack Developer<br/>
                  SEO Expert · AI Automation<br/>
                  Remote · Available Worldwide
                </p>
              </div>
            </div>

            <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-black/40">
              <p>© {new Date().getFullYear()} Francois Beyers</p>
              <p className="mt-4 md:mt-0">Built with Next.js</p>
            </div>
          </div>
        </footer>
        </HeroUIProvider>
      </body>
    </html>
  );
}
