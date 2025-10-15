import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ayush",
  lastName: "Tiwari",
  name: `Ayush Tiwari`,
  role: "Product Manager & Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "ayush.tiwari@example.com",
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
  { name: "Portfolio", icon: "globe", link: "https://tiwariayush77.vercel.app" },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Product Manager & Frontend Developer specializing in AI-powered solutions and user experience optimization`,
  headline: <>Building AI-powered products that solve real problems</>,
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
      I'm Ayush, a Product Manager at <strong>Vance Inc</strong> and <strong>BrightBunny</strong>, where I build
      <br /> AI-powered products and optimize user experiences through data-driven insights.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} specializing in AI integration and user experience`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com/ayushtiwari" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ayush is a Product Manager and Frontend Developer with expertise in AI integration, user experience optimization,
        and full-stack development. Currently building AI-powered solutions at Vance Inc and BrightBunny, with a focus on
        fintech and consumer products that solve real-world problems through innovative technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Vance Inc",
        timeframe: "2024 - Present",
        role: "Product Manager",
        achievements: [
          <>Leading 0-to-1 product development for AI-powered fintech solutions, focusing on user acquisition and engagement optimization.</>,
          <>Developed comprehensive PRDs and BRDs, implementing RICE framework for feature prioritization and A/B testing strategies.</>,
        ],
        images: [],
      },
      {
        company: "BrightBunny",
        timeframe: "2024 - Present",
        role: "Product Manager",
        achievements: [
          <>Built B2C product experiences with focus on user journey optimization and conversion rate improvement through data-driven insights.</>,
          <>Implemented product analytics and user research methodologies to drive product decisions and feature development.</>,
        ],
        images: [],
      },
      {
        company: "ProductSpace & Newton School",
        timeframe: "2023 - 2024",
        role: "Product Management Fellow",
        achievements: [
          <>Completed intensive Product Management certification program focusing on product strategy, user research, and technical implementation.</>,
          <>Led cross-functional product sprints and developed expertise in product design, analytics, and go-to-market strategies.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      { name: "ProductSpace", description: <>Product Management Fellowship - Strategy, Analytics, and User Research.</> },
      { name: "Newton School", description: <>Product Management Certification - Technical Product Development.</> },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (<>Building modern web applications with Next.js, React, and TypeScript.</>),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
      {
        title: "AI Integration & APIs",
        description: (<>Implementing AI-powered features using Gemini API, Firebase, and automation tools.</>),
        tags: [
          { name: "Firebase", icon: "firebase" },
          { name: "API", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Product Management",
        description: (<>RICE prioritization, A/B testing, user research, PRD/BRD development, and analytics.</>),
        tags: [ { name: "Analytics", icon: "chart" } ],
        images: [],
      },
      {
        title: "Automation & Workflows",
        description: (<>Building complex workflows with n8n, Telegram APIs, and process automation.</>),
        tags: [ { name: "Automation", icon: "bot" } ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Product insights and technical deep-dives...",
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
