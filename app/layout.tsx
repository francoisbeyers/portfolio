import "../styles/globals.css";
import localFont from "next/font/local";
import { createMetadata } from '@/app/lib/metadata';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { generateOrganizationSchema, generatePersonSchema } from '@/app/lib/schema';
import Header from "@/components/Header";
import Link from "next/link";

const clash = localFont({
  src: "../public/ClashDisplay-Bold.woff2",
  display: "swap",
  variable: "--font-clash",
});

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clash.variable}`}>
      <head>
        <SchemaMarkup schema={generateOrganizationSchema()} />
        <SchemaMarkup schema={generatePersonSchema()} />
      </head>
      <body className="bg-white text-black">
        <Header />

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
      </body>
    </html>
  );
}
