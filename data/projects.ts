import { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: "Câr Y Môr",
    type: "Design, Development, SEO",
    year: 2022,
    link: "/projects/car-y-mor",
    url: "https://www.carymor.wales/",
    description: "A website for a community-owned seaweed farm in Pembrokeshire, Wales.",
    image: "/cym_mac_mockup.png",
    tags: ['Design', 'Development', 'SEO'],
    services: ['seo', 'web-development']
  },
  {
    id: 4,
    title: "BMT connect",
    type: "Full-stack",
    year: 2021,
    link: "/projects/bmt-connect",
    url: "",
    description: "A full-stack web application for connecting people.",
    image: "/bmt_iphone_mockup.png",
    tags: ['Full-stack', 'Development'],
    services: ['web-development']
  },
  {
    id: 2,
    title: "Rasa Festival - non-profit",
    type: "Design, Development, SEO",
    year: 2020,
    link: "/projects/rasa-festival",
    url: "https://rasafestival.org/",
    description: "A website for a non-profit arts festival celebrating South Asian arts and culture.",
    image: "/rasa_mac_mockup.png",
    tags: ['Design', 'Development', 'SEO', 'Non-profit'],
    services: ['seo', 'web-development']
  },
  {
    id: 3,
    title: "Baker Charles",
    type: "Design",
    year: 2020,
    link: "/projects/baker-charles",
    url: "https://www.bakercharles.com/",
    description: "A sleek and professional website for a recruitment agency.",
    image: "/bc_mac_mockup.png",
    tags: ['Design'],
    services: ['web-development']
  },
];

export default projects;

// Filter projects by service
export const getProjectsByService = (serviceId: string): Project[] => {
  return projects.filter(project =>
    project.services?.includes(serviceId)
  );
};

// Filter projects by tag
export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter(project =>
    project.tags?.includes(tag)
  );
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.link === `/projects/${slug}`);
};
