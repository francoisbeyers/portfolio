import { Metadata } from "next";
import { createMetadata } from "@/app/lib/metadata";
import projects from "@/data/projects";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = createMetadata({
  title: 'Francois Beyers - Full-Stack Developer, SEO Expert, AI Automation',
  description: 'Full-stack developer, SEO expert, and AI automation specialist. Building digital solutions that drive results.',
  openGraph: {
    title: 'Francois Beyers - Full-Stack Developer, SEO Expert',
    description: 'Full-stack developer, SEO expert, and AI automation specialist.',
    url: 'https://francoisbeyers.com',
  },
});

export default function Home() {
  return <HomePageClient projects={projects} />;
}
