# SEO Content Hierarchy & Information Architecture

## Current Site Structure

```
francoisbeyers.com/
├── / (Homepage)
├── /services (Services Hub)
├── /services/seo-digital-marketing
├── /services/wordpress-development
├── /services/content-generation
├── /services/ai-automation
├── /services/web-mobile-development
├── /services/consulting-training
├── /projects (Projects Hub)
├── /contact (Contact)
└── /404 (Not Found)
```

**Current Coverage:** 13 unique pages
**Indexable Pages:** 11 pages (excluding 404, admin, API)

---

## Recommended Expanded Structure (Phase 1-3)

```
francoisbeyers.com/
│
├── / (Homepage)
│   └── Primary keywords: "full-stack developer", "SEO expert", "AI automation"
│
├── /services (Services Hub)
│   ├── /services/seo-digital-marketing
│   ├── /services/wordpress-development
│   ├── /services/content-generation
│   ├── /services/ai-automation
│   ├── /services/web-mobile-development
│   ├── /services/consulting-training
│   └── /services/comparison (NEW)
│       └── Service comparison table for featured snippets
│
├── /projects (Projects Hub)
│   ├── /projects/car-y-mor (NEW)
│   ├── /projects/bmt-connect (NEW)
│   ├── /projects/rasa-festival (NEW)
│   └── /projects/baker-charles (NEW)
│
├── /blog (NEW - High SEO Value)
│   ├── /blog/seo-mistakes-small-business
│   ├── /blog/wordpress-performance-guide
│   ├── /blog/ai-automation-getting-started
│   ├── /blog/full-stack-developer-roadmap
│   ├── /blog/next-js-vs-gatsby-comparison
│   └── /blog/[more articles]
│
├── /contact
│
└── /about (OPTIONAL)
    └── Establish personal brand for E-E-A-T

```

**Phase 1 Coverage:** 11 pages (current)
**Phase 2 Coverage:** 15 pages (+4 project pages, +1 comparison)
**Phase 3 Coverage:** 20+ pages (with blog content)

---

## Content Silos: Topical Authority Clusters

### Silo 1: SEO & Digital Marketing

```
Hub: /services/seo-digital-marketing
│
├─ Linking to Projects
│  ├── /projects/car-y-mor (tagged "SEO")
│  └── /projects/rasa-festival (tagged "SEO")
│
├─ Linking to Related Services
│  └── /services/content-generation (complementary)
│
└─ Linking to Blog Articles
   ├── /blog/seo-mistakes-small-business
   ├── /blog/keyword-research-guide
   └── /blog/local-seo-strategy
```

**Target Keywords:**
- Primary: SEO services, digital marketing, search engine optimization
- Secondary: local SEO, technical SEO, SEO audit
- Long-tail: SEO for small business, affordable SEO services, SEO consultant UK

**Schema:** Service, FAQ, HowTo

---

### Silo 2: Web Development

```
Hub: /services/web-mobile-development
│
├─ Sub-hubs (Content Clusters)
│  ├── WordPress Development (/services/wordpress-development)
│  └── Consulting (/services/consulting-training)
│
├─ Linking to Projects
│  ├── /projects/car-y-mor (tagged "Development")
│  ├── /projects/bmt-connect (tagged "Development")
│  ├── /projects/baker-charles (tagged "Design")
│  └── /projects/rasa-festival (tagged "Development")
│
├─ Linking to Related Services
│  └── /services/seo-digital-marketing (combined offering)
│
└─ Linking to Blog Articles
   ├── /blog/full-stack-developer-roadmap
   ├── /blog/next-js-vs-gatsby-comparison
   ├── /blog/wordpress-performance-guide
   ├── /blog/react-best-practices
   └── /blog/web-app-security-guide
```

**Target Keywords:**
- Primary: Next.js developer, React developer, full-stack developer
- Secondary: web development, custom web applications, e-commerce development
- Long-tail: hire a React developer, Next.js agency, web development UK

**Schema:** Service, CreativeWork (projects), FAQ, HowTo

---

### Silo 3: AI & Automation

```
Hub: /services/ai-automation
│
├─ Content Cluster
│  └── /services/content-generation (related service)
│
├─ Linking to Blog Articles
│  ├── /blog/ai-automation-getting-started
│  ├── /blog/chatbot-development-guide
│  ├── /blog/workflow-automation-tools
│  ├── /blog/ai-content-generation-best-practices
│  └── /blog/business-automation-strategy
│
└─ Linking to Contact
   └── /contact?service=automation
```

**Target Keywords:**
- Primary: AI automation, workflow automation, business automation
- Secondary: AI chatbots, document automation, email automation
- Long-tail: AI automation for small business, no-code automation, workflow tools

**Schema:** Service, FAQ, HowTo

---

## Homepage Content Hierarchy

### Current Structure
```
H1: "I craft websites with great attention to details"

├── H2: Services
│   └── 6 service cards (no H3 links)
│
├── H2: Projects
│   └── 4 project cards (no H3 links)
│
└── H2: Let's Work Together
```

### Recommended Structure (SEO Optimized)

```html
<h1>Digital Solutions for Modern Businesses</h1>
<p>Full-Stack Developer, SEO Expert, and AI Automation Specialist</p>

<!-- Hero Keywords: "full-stack developer", "SEO expert", "AI automation" -->

<section>
  <h2>My Expertise</h2>
  <p>I specialize in three core areas that drive measurable results for your business...</p>

  <ul>
    <li>
      <h3><a href="/services/web-mobile-development">Web & Mobile Development</a></h3>
      <p>Modern, fast applications built with React and Next.js</p>
    </li>
    <li>
      <h3><a href="/services/seo-digital-marketing">SEO & Digital Marketing</a></h3>
      <p>Data-driven strategies that rank your site and drive organic traffic</p>
    </li>
    <li>
      <h3><a href="/services/ai-automation">AI & Automation</a></h3>
      <p>Intelligent workflows that save time and increase efficiency</p>
    </li>
  </ul>
</section>

<section>
  <h2>Services & Solutions</h2>
  <p>Comprehensive digital services for businesses at every stage...</p>

  <ul>
    <li>
      <h3><a href="/services/seo-digital-marketing">SEO & Digital Marketing</a></h3>
      <p>Boost visibility with data-driven SEO strategies. Starting at £500/month.</p>
    </li>
    <li>
      <h3><a href="/services/web-mobile-development">Web & Mobile Development</a></h3>
      <p>Custom applications built with latest technologies. Starting at £3,000.</p>
    </li>
    <li>
      <h3><a href="/services/wordpress-development">WordPress Development</a></h3>
      <p>Performance-optimized WordPress sites with custom design. Starting at £2,000.</p>
    </li>
    <li>
      <h3><a href="/services/content-generation">AI Content Generation</a></h3>
      <p>Scale content creation while maintaining brand voice. Starting at £300.</p>
    </li>
    <li>
      <h3><a href="/services/ai-automation">AI Automation</a></h3>
      <p>Automate workflows and save hundreds of hours yearly. Starting at £1,500.</p>
    </li>
    <li>
      <h3><a href="/services/consulting-training">Consulting & Training</a></h3>
      <p>Expert guidance on development, SEO, and AI strategy. £100/hour.</p>
    </li>
  </ul>

  <p><a href="/services">View All Services →</a></p>
</section>

<section>
  <h2>Recent Projects</h2>
  <p>Real-world solutions combining design, development, and strategy...</p>

  <ul>
    <li>
      <h3><a href="/projects/car-y-mor">Câr Y Môr</a></h3>
      <p>Award-winning design and development with SEO optimization.</p>
      <p>Services: Web Design, SEO, Web Development</p>
    </li>
    <li>
      <h3><a href="/projects/rasa-festival">Rasa Festival (Non-profit)</a></h3>
      <p>Community-focused platform with performance optimization.</p>
      <p>Services: Design, Development, SEO</p>
    </li>
    <li>
      <h3><a href="/projects/baker-charles">Baker Charles</a></h3>
      <p>Elegant design-focused project.</p>
      <p>Services: Web Design</p>
    </li>
    <li>
      <h3><a href="/projects/bmt-connect">BMT Connect</a></h3>
      <p>Full-stack web application.</p>
      <p>Services: Full-Stack Development</p>
    </li>
  </ul>

  <p><a href="/projects">View All Projects →</a></p>
</section>

<section>
  <h2>Why Choose Me</h2>

  <ul>
    <li>
      <h3>Proven Track Record</h3>
      <p>10+ years experience with successful projects across multiple industries.</p>
    </li>
    <li>
      <h3>Full-Stack Expertise</h3>
      <p>End-to-end capabilities from design to deployment to ongoing optimization.</p>
    </li>
    <li>
      <h3>Results-Driven Approach</h3>
      <p>Focus on measurable outcomes: rankings, traffic, conversions, efficiency gains.</p>
    </li>
  </ul>
</section>

<section>
  <h2>Let's Work Together</h2>
  <p>Ready to bring your project to life? Let's chat about how I can help.</p>
  <a href="/contact">Start a Project</a>
</section>
```

---

## Services Page Content Hierarchy

### Current Structure
```
H1: Services
P: Introductory description

[ServicesGrid Component]
```

### Recommended Structure

```html
<h1>Services & Digital Solutions</h1>

<p>From SEO and web development to AI automation and content generation,
   I offer comprehensive digital solutions to help your business thrive online.</p>

<section>
  <h2>All Services</h2>

  <ul>
    <li>
      <h2><a href="/services/seo-digital-marketing">
        SEO & Digital Marketing
      </a></h2>
      <p>Data-driven strategies to boost your rankings and drive organic traffic.</p>
      <ul>
        <li>Technical SEO audits</li>
        <li>Keyword research & strategy</li>
        <li>Link building campaigns</li>
        <li>Monthly reporting</li>
      </ul>
      <p>Starting at £500/month</p>
    </li>

    <!-- Similar structure for other services -->
  </ul>
</section>

<section>
  <h2>Service Comparison</h2>
  <p><a href="/services/comparison">Compare all services →</a></p>

  <table>
    <thead>
      <tr>
        <th>Service</th>
        <th>Starting Price</th>
        <th>Project Type</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      <!-- Table rows -->
    </tbody>
  </table>
</section>

<section>
  <h2>How I Choose The Right Service</h2>

  <ul>
    <li>
      <h3>Discovery Call</h3>
      <p>We discuss your goals, challenges, and requirements to identify the right solution.</p>
    </li>
    <li>
      <h3>Recommendation</h3>
      <p>Based on your needs, I recommend one or more services that will deliver results.</p>
    </li>
    <li>
      <h3>Custom Proposal</h3>
      <p>Tailored plan with clear deliverables, timeline, and investment.</p>
    </li>
  </ul>
</section>

<section>
  <h2>Can't Decide? Let's Talk</h2>
  <p>Schedule a free consultation to find the perfect solution for your project.</p>
  <a href="/contact">Schedule a Call</a>
</section>
```

---

## Projects Page Content Hierarchy

### Current Structure
```
H1: Projects
P: Project descriptions

[Projects Grid]

H3: "Want to See Your Project Here?"
```

### Recommended Structure

```html
<h1>Portfolio: Real-World Projects</h1>

<p>Real-world solutions that combine design, development, and strategy.
   Each project showcases specific expertise and measurable results.</p>

<section>
  <h2>Featured Projects</h2>

  <ul>
    <li>
      <h3><a href="/projects/car-y-mor">Câr Y Môr</a></h3>
      <p>Award-winning tourism website redesign with integrated SEO strategy.</p>
      <p>Technologies: React, Next.js, WordPress</p>
      <p>Services: <a href="/services/web-mobile-development">Web Development</a>,
                   <a href="/services/seo-digital-marketing">SEO</a></p>
      <p>Results: +150% organic traffic, top rankings for target keywords</p>
    </li>

    <li>
      <h3><a href="/projects/rasa-festival">Rasa Festival (Non-profit)</a></h3>
      <p>Community platform connecting cultural events and participants.</p>
      <p>Technologies: React, Node.js, PostgreSQL</p>
      <p>Services: <a href="/services/web-mobile-development">Web Development</a>, SEO</p>
      <p>Results: 50K+ monthly visitors, improved event discovery</p>
    </li>

    <li>
      <h3><a href="/projects/baker-charles">Baker Charles</a></h3>
      <p>Luxury brand website with emphasis on design and user experience.</p>
      <p>Technologies: Next.js, Tailwind CSS</p>
      <p>Services: <a href="/services/web-mobile-development">Web Design</a></p>
      <p>Results: 40% conversion rate improvement</p>
    </li>

    <li>
      <h3><a href="/projects/bmt-connect">BMT Connect</a></h3>
      <p>Full-stack business management platform.</p>
      <p>Technologies: React, Node.js, MongoDB</p>
      <p>Services: <a href="/services/web-mobile-development">Full-Stack Development</a></p>
      <p>Results: Reduced manual processes by 80%</p>
    </li>
  </ul>
</section>

<section>
  <h2>Projects by Service</h2>

  <ul>
    <li>
      <h3><a href="/services/seo-digital-marketing">SEO & Digital Marketing Projects</a></h3>
      <ul>
        <li><a href="/projects/car-y-mor">Câr Y Môr</a></li>
        <li><a href="/projects/rasa-festival">Rasa Festival</a></li>
      </ul>
    </li>

    <li>
      <h3><a href="/services/web-mobile-development">Web Development Projects</a></h3>
      <ul>
        <li><a href="/projects/car-y-mor">Câr Y Môr</a></li>
        <li><a href="/projects/bmt-connect">BMT Connect</a></li>
        <li><a href="/projects/baker-charles">Baker Charles</a></li>
      </ul>
    </li>
  </ul>
</section>

<section>
  <h2>Want to See Your Project Here?</h2>
  <p>Let's build something awesome together! I'm currently taking on new projects.</p>
  <a href="/contact">Get In Touch</a>
  <a href="/services">View My Services</a>
</section>
```

---

## Internal Linking Strategy Matrix

### Homepage Links Out
| Link | Target Page | Anchor Text | Purpose |
|------|------------|-------------|---------|
| Main Nav | /services | Services | Primary navigation |
| Main Nav | /projects | Projects | Primary navigation |
| Main Nav | /contact | Contact | Primary navigation |
| Hero CTA | /contact | Get in Touch | Conversion |
| Hero CTA | /projects | View Projects → | Engagement |
| Services Section | /services | View All Services → | Hub link |
| Services Cards (6x) | /services/[slug] | [Service title] | Service links |
| Projects Section | /projects | View All Projects → | Hub link |
| Project Cards (4x) | /projects/[slug] | [Project title] | Project links |
| CTA Section | /contact | Start a Project | Conversion |

**Total: 18 internal links**

---

### Service Detail Page Links Out
| Link | Target | Purpose |
|------|--------|---------|
| Breadcrumb | / | Navigation |
| Breadcrumb | /services | Hub navigation |
| Back Button | /services | Navigation |
| Related Projects (2-3x) | /projects/[slug] | Content cluster |
| Related Services (2-3x) | /services/[slug] | Content cluster |
| Contact CTA (2x) | /contact?service=X | Conversion |

**Total: 8-12 internal links per service page**

---

### Projects Page Links Out
| Link | Target | Purpose |
|------|--------|---------|
| Main Nav | /services | Navigation |
| Main Nav | /contact | Navigation |
| Project Cards (4x) | /projects/[slug] | Project detail pages |
| Service Links | /services/[slug] | Content clustering |
| CTA | /contact | Conversion |

**Total: 10+ internal links**

---

### Blog Article Links Out (Future)
```
Article: "Top 10 SEO Mistakes"
├── Links to /services/seo-digital-marketing (3-5x)
├── Links to /services/content-generation (2x)
├── Links to other blog articles (3-5x)
├── Links to /contact (1x CTA)
└── Links to /projects (2x for examples)

Per article: 10-15 internal links
```

---

## Keyword Clustering by Page

### Homepage
**Primary:** full-stack developer, SEO expert, AI automation
**Secondary:** web development, digital solutions, web design
**Long-tail:** freelance developer UK, SEO specialist, AI services

---

### /services (Hub)
**Primary:** digital services, web services, SEO services
**Secondary:** WordPress development, AI automation, consulting
**Long-tail:** affordable web development, digital solutions UK

---

### /services/seo-digital-marketing
**Primary:** SEO, digital marketing, SEO services
**Secondary:** technical SEO, SEO audit, search engine optimization
**Long-tail:** SEO services UK, affordable SEO, local SEO services, SEO for small business

**Search Intent:** Seeking professional SEO help
**Content Type:** Service details with case studies

---

### /services/web-mobile-development
**Primary:** Next.js developer, React developer, full-stack developer
**Secondary:** web development, web applications, custom development
**Long-tail:** hire Next.js developer, React developer for hire, web development agency UK

**Search Intent:** Hiring a developer
**Content Type:** Service capabilities with portfolio

---

### /services/wordpress-development
**Primary:** WordPress developer, WordPress development, custom WordPress
**Secondary:** WooCommerce development, WordPress themes, WordPress plugins
**Long-tail:** WordPress developer UK, hire WordPress developer, custom WordPress website

**Search Intent:** WordPress project needs
**Content Type:** Technical expertise showcase

---

### /services/ai-automation
**Primary:** AI automation, workflow automation, business automation
**Secondary:** AI chatbots, process automation, AI tools
**Long-tail:** AI automation for small business, workflow automation tools, no-code automation

**Search Intent:** Business process improvement
**Content Type:** Problem-solution narrative

---

### /services/content-generation
**Primary:** AI content generation, content creation, AI writing
**Secondary:** SEO content, blog writing, copywriting
**Long-tail:** AI content generator, bulk content creation, SEO blog posts

**Search Intent:** Content scaling solution
**Content Type:** Service benefits and capability showcase

---

### /services/consulting-training
**Primary:** web development consultant, SEO consulting, AI consulting
**Secondary:** technical consulting, development strategy, training
**Long-tail:** freelance consultant, expert guidance, team training

**Search Intent:** Expert advice and guidance
**Content Type:** Experience and expertise demonstration

---

### /projects (Hub)
**Primary:** portfolio, web design portfolio, development portfolio
**Secondary:** case studies, project examples, client work
**Long-tail:** agency portfolio, developer portfolio, design portfolio

**Search Intent:** Portfolio browsing, capability assessment
**Content Type:** Project showcase with details

---

### /projects/car-y-mor (New Detail Page)
**Primary:** Câr Y Môr project, case study
**Secondary:** tourism website, Welsh website, design case study
**Long-tail:** award-winning web design, successful SEO case study, portfolio example

**Search Intent:** Portfolio assessment
**Content Type:** Full case study with metrics

---

### /projects/bmt-connect (New Detail Page)
**Primary:** BMT Connect project, full-stack application
**Secondary:** business application, React project, case study
**Long-tail:** portfolio project example, React application example

---

### /projects/rasa-festival (New Detail Page)
**Primary:** Rasa Festival project, non-profit website
**Secondary:** community platform, cultural events, non-profit design
**Long-tail:** non-profit website design, community platform case study

---

### /projects/baker-charles (New Detail Page)
**Primary:** Baker Charles project, luxury brand website
**Secondary:** design project, brand website, portfolio
**Long-tail:** luxury website design, brand website example

---

### /contact
**Primary:** contact, get in touch, hire developer
**Secondary:** contact form, consultation, project inquiry
**Long-tail:** contact developer, project inquiry form, schedule consultation

**Search Intent:** Conversion-focused
**Content Type:** Contact form + information

---

## Featured Snippet Opportunities

### List Snippets (High Confidence)
1. "What's included in SEO services?" → Service features list
2. "WordPress development features" → Features list
3. "AI automation capabilities" → Features list
4. "How AI content generation works" → Step list
5. "Web development process steps" → Process steps

---

### Paragraph Snippets (Medium Confidence)
1. "What is SEO?" → 40-60 word definition with context
2. "What is AI automation?" → Clear explanation
3. "Why hire a full-stack developer?" → Value proposition

---

### Table Snippets (High Confidence - New Page)
1. **Service Comparison Table** (`/services/comparison`)
   - Service name vs Price vs Duration vs Type
   - Potential snippet: "Service Pricing Comparison"

---

### How-To Snippets (Very High Confidence)
1. **"How to get started with [service]"** → 4-step process on each service page
   - Already structured in content
   - Perfect for HowTo schema

---

## Content Gap Analysis

### High-Opportunity Missing Content

| Topic | Page | Priority | Estimated Traffic |
|-------|------|----------|-------------------|
| Blog posts (initial 5) | /blog | High | 500-1000/month |
| Project detail pages | /projects/[slug] | High | 300-500/month |
| Service comparison | /services/comparison | Medium | 100-200/month |
| ROI calculator | /services/seo | Medium | 100-200/month |
| About page | /about | Low | 50-100/month |
| FAQ expansion | Various pages | High | Snippet improvements |
| Testimonials | Service + Home pages | Medium | Trust signals |
| Video content | Service pages | Low | 0 direct traffic |

---

## XML Sitemap Structure (Recommended Priority)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage (Highest Priority) -->
  <url>
    <loc>https://francoisbeyers.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Service Hub (High Priority) -->
  <url>
    <loc>https://francoisbeyers.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Service Detail Pages (High Priority) -->
  <url>
    <loc>https://francoisbeyers.com/services/seo-digital-marketing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... other services ... -->

  <!-- Projects Hub (Medium Priority) -->
  <url>
    <loc>https://francoisbeyers.com/projects</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Project Detail Pages (Medium Priority) -->
  <url>
    <loc>https://francoisbeyers.com/projects/car-y-mor</loc>
    <changefreq>never</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- Contact (Medium Priority) -->
  <url>
    <loc>https://francoisbeyers.com/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

---

## Anchor Text Strategy

### Branded Anchor Text
- "Francois Beyers"
- "My services"
- "My projects"

### Keyword-Rich Anchor Text
- "SEO services" → /services/seo-digital-marketing
- "web development" → /services/web-mobile-development
- "WordPress developer" → /services/wordpress-development
- "AI automation" → /services/ai-automation
- "portfolio projects" → /projects
- "contact me" → /contact

### Descriptive Anchor Text
- "View All Services" → /services
- "View All Projects" → /projects
- "Schedule a Call" → /contact
- "Get In Touch" → /contact

### Smart Anchor Text Rules
1. Never over-optimize single keyword
2. Mix 60% branded, 30% descriptive, 10% keyword-rich
3. Never repeat exact same anchor to same page
4. Vary anchor text naturally
5. Use context to justify link

---

## Mobile SEO Considerations

### Mobile-First Content Hierarchy
- Ensure H1 visible above fold on mobile
- Service/project cards stack single column
- Keep CTAs visible without scrolling
- FAQs collapse-able (better UX)
- Breadcrumbs on one line or stack

### Mobile Technical
- Ensure schemas render correctly on mobile
- Fast loading on 3G/4G (test with PageSpeed)
- Touch-friendly links (min 48px)
- Viewport meta tag configured

---

## Implementation Timeline

**Week 1:** Homepage restructure + schema implementation
**Week 2:** Services page restructure + service detail pages enhanced
**Week 3:** Project detail pages created
**Week 4:** Blog foundation + first 3 articles
**Month 2:** Blog articles 4-8 + optimization
**Month 3:** Monitoring, refinement, expansion

---

## Success Metrics to Track

### Organic Traffic
- Homepage sessions
- Service page sessions
- Project page sessions
- Blog article sessions

### Engagement
- Avg session duration
- Bounce rate by page
- Internal links clicks

### Conversions
- Contact form submissions (by service)
- Email signups
- Call scheduling clicks

### Rankings
- Track 20 primary keywords
- Monitor competitor rankings
- Featured snippet tracking

---

