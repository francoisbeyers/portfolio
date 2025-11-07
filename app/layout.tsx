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
  const isHome = pathname === '/';

  return (
    <html lang="en" className={`${clash.variable}`}>
      <head>
        <title>Francois Beyers - Retro Portfolio | Web Dev · SEO · AI</title>
        <meta name="description" content="Full-stack developer, SEO expert, and AI automation specialist. Building modern solutions with retro vibes." />
      </head>
      <body className="bg-retro-black text-white font-mono">
        {/* Retro Navigation - Only show on non-home pages */}
        {!isHome && (
          <header className="bg-gradient-to-r from-retro-purple to-win95-blue border-b-4 border-retro-cyan sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-retro-yellow hover:text-retro-cyan transition-colors">
                  🏠 FRANCOIS.DEV
                </Link>

                <div className="flex gap-2 md:gap-4 flex-wrap">
                  <Link
                    href="/"
                    className="bg-retro-cyan text-retro-black px-3 py-2 border-2 border-retro-blue font-bold hover:bg-retro-yellow transition-colors text-sm md:text-base"
                  >
                    HOME
                  </Link>
                  <Link
                    href="/services"
                    className="bg-retro-magenta text-white px-3 py-2 border-2 border-retro-purple font-bold hover:bg-retro-purple transition-colors text-sm md:text-base"
                  >
                    SERVICES
                  </Link>
                  <Link
                    href="/projects"
                    className="bg-retro-lime text-retro-black px-3 py-2 border-2 border-retro-cyan font-bold hover:bg-retro-yellow transition-colors text-sm md:text-base"
                  >
                    PROJECTS
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-retro-red text-white px-3 py-2 border-2 border-retro-yellow font-bold hover:bg-retro-yellow hover:text-retro-black transition-colors text-sm md:text-base animate-pulse"
                  >
                    ✉️ CONTACT
                  </Link>
                </div>
              </div>
            </nav>
          </header>
        )}

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Retro Footer - Only show on non-home pages */}
        {!isHome && (
          <footer className="bg-retro-darkgray border-t-4 border-retro-gray mt-16">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h3 className="text-retro-cyan font-bold text-xl mb-3">⚡ QUICK LINKS</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-retro-yellow hover:text-retro-cyan">→ Home</Link></li>
                    <li><Link href="/services" className="text-retro-yellow hover:text-retro-cyan">→ Services</Link></li>
                    <li><Link href="/projects" className="text-retro-yellow hover:text-retro-cyan">→ Projects</Link></li>
                    <li><Link href="/contact" className="text-retro-yellow hover:text-retro-cyan">→ Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-retro-cyan font-bold text-xl mb-3">🌐 CONNECT</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.linkedin.com/in/francois-beyers/" target="_blank" rel="noopener noreferrer" className="text-retro-yellow hover:text-retro-cyan">→ LinkedIn</a></li>
                    <li><a href="https://github.com/francoisbeyers" target="_blank" rel="noopener noreferrer" className="text-retro-yellow hover:text-retro-cyan">→ GitHub</a></li>
                    <li><a href="https://twitter.com/BeyersFrancois" target="_blank" rel="noopener noreferrer" className="text-retro-yellow hover:text-retro-cyan">→ Twitter</a></li>
                    <li><a href="mailto:francois@beyers.tech" className="text-retro-yellow hover:text-retro-cyan">→ Email</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-retro-cyan font-bold text-xl mb-3">📞 CONTACT</h3>
                  <p className="text-retro-gray mb-2">francois@beyers.tech</p>
                  <p className="text-retro-gray">Available for freelance work!</p>
                </div>
              </div>

              <div className="border-t-2 border-retro-gray pt-6 text-center">
                <p className="text-retro-gray">
                  © {new Date().getFullYear()} Francois Beyers · Made with <span className="text-retro-red">❤️</span> and <span className="text-retro-yellow">⚡</span>
                </p>
                <p className="text-retro-darkgray text-sm mt-2">
                  💻 Best viewed in any browser · Powered by Next.js & Nostalgia
                </p>
              </div>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
