import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

// IMPORTANT: Replace with your domain when you deploy
const baseURL: string = "https://ayush-portfolio-magic.vercel.app";

// Enable/disable routes - Gallery disabled for cleaner navigation
const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": false, // Disabled for professional focus
};

// Display settings - show location and time for remote work accessibility
const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// Enable password protection on selected routes (for confidential case studies)
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": false, // Disabled for now
};

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// Professional theme customization for PM portfolio
const style: StyleConfig = {
  theme: "light", // Light theme for professional appearance
  neutral: "gray", // Gray for clean, readable text
  brand: "indigo", // Indigo for professional, trustworthy feel
  accent: "violet", // Violet complements indigo well
  solid: "contrast", // High contrast for accessibility
  solidStyle: "flat", // Clean, flat design
  border: "playful", // Slightly rounded for modern feel
  surface: "translucent", // Subtle depth
  transition: "all", // Smooth animations
  scaling: "100", // Default size for readability
};

const dataStyle: DataStyleConfig = {
  variant: "gradient", // gradient looks professional for data viz
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

// Professional visual effects - subtle and clean
const effects: EffectsConfig = {
  mask: {
    cursor: false, // Disable cursor effects for cleaner experience
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false, // Disable gradient for cleaner look
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true, // Subtle dots for texture
    opacity: 20, // Very subtle
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false, // No grid for cleaner look
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false, // No lines for cleaner look
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

// Mailchimp configuration (for newsletter/lead capture)
const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters", // Update with your Mailchimp URL later
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// Schema data - updated with your info
const schema: SchemaConfig = {
  logo: "",
  type: "Person", // Changed from Organization to Person
  name: "Ayush Tiwari", // Your name
  description:
    "Product Manager & Frontend Developer specializing in AI-powered solutions and user experience optimization",
  email: "ayush@example.com", // Update with your email
};

// Your social links
const sameAs: SameAsConfig = {
  threads: "",
  linkedin: "https://www.linkedin.com/in/ayushtiwari77/",
  discord: "",
};

// Social sharing for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true, // Important for PM content
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};
