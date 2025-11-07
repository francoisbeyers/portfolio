export interface Project {
  id: number;
  title: string;
  type: string;
  year: number;
  link: string;
  url: string;
  description?: string;
  image?: string;
  tags?: string[];
  services?: string[]; // Service categories this project belongs to
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    starting: string;
    type: string;
  };
  cta: {
    text: string;
    link: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  coverImage?: string;
  readTime?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
}
