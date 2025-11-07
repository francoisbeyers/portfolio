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
        {/* Modern Navigation */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-charcoal/10">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-charcoal hover:text-pink transition-colors">
                FB
              </Link>

              <div className="flex gap-2 md:gap-6 items-center">
                <Link
                  href="/services"
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    pathname === '/services'
                      ? 'bg-pink text-charcoal'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-pink/10'
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    pathname === '/projects'
                      ? 'bg-cyan text-charcoal'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-cyan/10'
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2 bg-charcoal text-white rounded-full font-bold hover:scale-105 transition-transform"
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

        {/* Clean Footer */}
        <footer className="bg-white border-t border-charcoal/10 py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Francois Beyers</h3>
                <p className="text-charcoal/70">
                  Full-Stack Developer<br/>
                  SEO Expert · AI Automation
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-3">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-charcoal/70 hover:text-charcoal transition-colors">SEO & Marketing</Link></li>
                  <li><Link href="/services" className="text-charcoal/70 hover:text-charcoal transition-colors">WordPress Dev</Link></li>
                  <li><Link href="/services" className="text-charcoal/70 hover:text-charcoal transition-colors">AI Automation</Link></li>
                  <li><Link href="/services" className="text-charcoal/70 hover:text-charcoal transition-colors">Consulting</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Projects</h4>
                <ul className="space-y-2">
                  <li><Link href="/projects" className="text-charcoal/70 hover:text-charcoal transition-colors">All Projects</Link></li>
                  <li><Link href="/projects/car-y-mor" className="text-charcoal/70 hover:text-charcoal transition-colors">Câr Y Môr</Link></li>
                  <li><Link href="/projects/bmt-connect" className="text-charcoal/70 hover:text-charcoal transition-colors">BMT Connect</Link></li>
                  <li><Link href="/projects/rasa-festival" className="text-charcoal/70 hover:text-charcoal transition-colors">Rasa Festival</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="https://www.linkedin.com/in/francois-beyers/" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-charcoal transition-colors">LinkedIn</a></li>
                  <li><a href="https://github.com/francoisbeyers" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-charcoal transition-colors">GitHub</a></li>
                  <li><a href="https://twitter.com/BeyersFrancois" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-charcoal transition-colors">Twitter</a></li>
                  <li><a href="mailto:francois@beyers.tech" className="text-charcoal/70 hover:text-charcoal transition-colors">Email</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-charcoal/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-charcoal/60">
              <p>© {new Date().getFullYear()} Francois Beyers. All rights reserved.</p>
              <p className="mt-4 md:mt-0">Built with Next.js · Designed with care</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
