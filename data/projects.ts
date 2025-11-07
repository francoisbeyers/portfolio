import { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: "Câr Y Môr",
    type: "Design, Development, SEO",
    year: 2022,
    link: "/projects/car-y-mor",
    url: "https://www.carymor.wales/",
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
