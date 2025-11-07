"use client";
import "../styles/globals.css";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <body className="bg-off-white text-charcoal">
        {/* Klarna-style Navigation */}
        <header className="sticky top-0 z-50 bg-off-white border-b-2 border-charcoal">
          <nav className="container mx-auto px-container py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-display-sm font-display font-bold text-charcoal transition-klarna duration-klarna hover:opacity-70">
                FB
              </Link>

              <div className="flex gap-3 md:gap-4 items-center">
                <Link
                  href="/services"
                  className={`px-5 py-2 rounded-klarna font-bold transition-klarna duration-klarna text-body-md ${
                    pathname === '/services'
                      ? 'bg-pink text-charcoal border-2 border-charcoal'
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className={`px-5 py-2 rounded-klarna font-bold transition-klarna duration-klarna text-body-md ${
                    pathname === '/projects'
                      ? 'bg-cyan text-charcoal border-2 border-charcoal'
                      : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="btn-klarna-primary"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Klarna-style Footer */}
        <footer className="bg-off-white border-t-2 border-charcoal py-section px-container">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gap mb-12">
              <div>
                <h3 className="text-display-sm font-display font-bold mb-6">Francois Beyers</h3>
                <p className="text-body-md text-charcoal/70">
                  Full-Stack Developer<br/>
                  SEO Expert · AI Automation
                </p>
              </div>

              <div>
                <h4 className="text-body-md font-bold mb-4">Services</h4>
                <ul className="space-y-3">
                  <li><Link href="/services" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">SEO & Marketing</Link></li>
                  <li><Link href="/services" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">WordPress Dev</Link></li>
                  <li><Link href="/services" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">AI Automation</Link></li>
                  <li><Link href="/services" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">Consulting</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-body-md font-bold mb-4">Projects</h4>
                <ul className="space-y-3">
                  <li><Link href="/projects" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">All Projects</Link></li>
                  <li><Link href="/projects/car-y-mor" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">Câr Y Môr</Link></li>
                  <li><Link href="/projects/bmt-connect" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">BMT Connect</Link></li>
                  <li><Link href="/projects/rasa-festival" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">Rasa Festival</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-body-md font-bold mb-4">Connect</h4>
                <ul className="space-y-3">
                  <li><a href="https://www.linkedin.com/in/francois-beyers/" target="_blank" rel="noopener noreferrer" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">LinkedIn</a></li>
                  <li><a href="https://github.com/francoisbeyers" target="_blank" rel="noopener noreferrer" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">GitHub</a></li>
                  <li><a href="https://twitter.com/BeyersFrancois" target="_blank" rel="noopener noreferrer" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">Twitter</a></li>
                  <li><a href="mailto:francois@beyers.tech" className="text-body-md text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna">Email</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-charcoal pt-8 flex flex-col md:flex-row justify-between items-center text-body-sm text-charcoal/60">
              <p>© {new Date().getFullYear()} Francois Beyers. All rights reserved.</p>
              <p className="mt-4 md:mt-0">Built with Next.js · Designed with care</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
