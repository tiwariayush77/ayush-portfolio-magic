import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ayush",
  lastName: "Tiwari",
  name: `Ayush Tiwari`,
  role: "Product Manager & Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "tiwariayush77@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on Product Management, AI integration, and frontend development</>,
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/tiwariayush77" },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/ayushtiwari77/" },
  { name: "Portfolio", icon: "globe", link: "https://ayush-portfolio-magic.vercel.app" },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `PM Fellow focused on 0→1 execution, AI-driven UX, and growth experiments across fintech, edtech, and commerce.`,
  headline: <>Designing AI-powered products that drive measurable outcomes</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">QwikPik</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">Featured project</Text>
      </Row>
    ),
    href: "/work/qwikpik-ai-social-shopping",
  },
  subline: (
    <>
      PM Fellow at <strong>Product Space</strong>. Previously: <strong>Vance</strong> (Fintech), founder at <strong>BrightBunny</strong> (Edtech).
      Led sprints for <strong>QwikPik</strong> (AI social shopping), <strong>Blinkit</strong> (retention), <strong>Nykaa</strong> (AR try‑on),
      and <strong>Amazon</strong> (choice overload optimization).
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `PM Fellow specializing in 0→1 execution, AI integration and growth.`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com/ayushtiwari" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ayush is a Product Management Fellow with a track record in discovery→delivery cycles, growth experiments, and
        cross‑functional leadership. Recent capstone: SonyLIV retention redesign with projected 35% feature adoption lift
        via mood‑based onboarding and activation optimization.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Product Space",
        timeframe: "Jul 2025 – Present",
        role: "Product Management Fellow",
        achievements: [
          <>Won capstone for SonyLIV retention redesign (35% adoption lift projected).</>,
          <>Led 4 PM sprints: QwikPik (AI social shopping), Blinkit (CLV retention), Nykaa (AR try‑on), Amazon (choice overload).</>,
          <>Appreciation from Truecaller for SDK monetization strategy and fintech use‑case analysis.</>,
        ],
        images: [],
      },
      {
        company: "Vance (Fintech)",
        timeframe: "Jan 2022 – Apr 2022",
        role: "Product Strategy & GTM Intern",
        achievements: [
          <>Built 0→1 B2B pipeline; identified high‑conversion segments to inform PMF.</>,
          <>+20% lead conversion and 15% faster onboarding via GTM experiments and funnel analysis.</>,
        ],
        images: [],
      },
      {
        company: "BrightBunny (Edtech)",
        timeframe: "Apr 2020 – Dec 2021",
        role: "Founder",
        achievements: [
          <>Launched career discovery platform for Class 7–12; 50+ students completed curated 3–5 day mentorships.</>,
          <>Closed B2B partnerships in Indore & Bhopal; solved perception vs. reality gap in career choices.</>,
        ],
        images: [],
      },
      {
        company: "Exampeer (Edtech)",
        timeframe: "Jun 2019 – Jun 2021",
        role: "Business Development Executive",
        achievements: [
          <>Competitor mapping across 10+ players and 3 cohorts; +25% demo→signup lift.</>,
          <>Instituted feedback loop; 3+ UX improvements led to +20% task completion.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      { name: "B.Tech (Hons.), ECE — UIT RGPV Bhopal", description: <>2018 – 2022</> },
      { name: "Aha! Product Management — Professional Certificate", description: <>Certification</> },
      { name: "Atlassian Agile Project Management — Professional Certificate", description: <>Certification</> },
      { name: "Microsoft Azure AI Essentials — Professional Certificate", description: <>Certification</> },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Tooling",
    skills: [
      {
        title: "Product Strategy & Execution",
        description: (<>Discovery→Delivery, RICE, PRDs/BRDs, GTM, A/B testing.</>),
        tags: [ { name: "Strategy", icon: "chart" }, { name: "GTM", icon: "globe" } ],
        images: [],
      },
      {
        title: "Research & UX",
        description: (<>User interviews, JTBD, journey mapping, wireframing, prototyping.</>),
        tags: [ { name: "Figma", icon: "figma" } ],
        images: [],
      },
      {
        title: "AI & Automation",
        description: (<>Gemini, automation with n8n, data flows, integrations.</>),
        tags: [ { name: "n8n", icon: "bot" }, { name: "AI", icon: "sparkles" } ],
        images: [],
      },
      {
        title: "Frontend Foundations",
        description: (<>Next.js, React, TypeScript fundamentals for prototyping.</>),
        tags: [ { name: "Next.js", icon: "nextjs" }, { name: "TypeScript", icon: "typescript" } ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Product insights and technical deep‑dives...",
  description: `Read what ${person.name} has been learning and building`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Product and development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Project screenshots and workflow diagrams by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
