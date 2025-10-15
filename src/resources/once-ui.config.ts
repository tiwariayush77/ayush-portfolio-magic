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

// Stock base URL placeholder
const baseURL: string = "https://magic-portfolio.com";

// Stock routes (gallery on)
const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const display: DisplayConfig = { location: true, time: true, themeSwitcher: true };

const protectedRoutes: ProtectedRoutesConfig = {};

import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const body = Geist({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const label = Geist({ variable: "--font-label", subsets: ["latin"], display: "swap" });
const code = Geist_Mono({ variable: "--font-code", subsets: ["latin"], display: "swap" });

const fonts: FontsConfig = { heading, body, label, code };

// Stock style tokens
const style: StyleConfig = {
  theme: "light",
  neutral: "gray",
  brand: "indigo",
  accent: "violet",
  solid: "contrast",
  solidStyle: "flat",
  border: "rounded",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: { fill: "var(--neutral-on-background-weak)", fontSize: 11, line: false },
};

// Stock hero background effects
const effects: EffectsConfig = {
  mask: { cursor: false, x: 50, y: 0, radius: 120 },
  gradient: { display: true, opacity: 90, x: 50, y: 0, width: 100, height: 60, tilt: 0, colorStart: "accent-background-strong", colorEnd: "page-background" },
  dots: { display: true, opacity: 24, size: "2", color: "brand-background-strong" },
  grid: { display: false, opacity: 100, color: "neutral-alpha-medium", width: "0.25rem", height: "0.25rem" },
  lines: { display: false, opacity: 100, color: "neutral-alpha-weak", size: "16", thickness: 1, angle: 45 },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: { cursor: true, x: 50, y: 0, radius: 100 },
    gradient: { display: true, opacity: 90, x: 50, y: 0, width: 50, height: 50, tilt: 0, colorStart: "accent-background-strong", colorEnd: "static-transparent" },
    dots: { display: true, opacity: 20, size: "2", color: "brand-on-background-weak" },
    grid: { display: false, opacity: 100, color: "neutral-alpha-medium", width: "0.25rem", height: "0.25rem" },
    lines: { display: false, opacity: 100, color: "neutral-alpha-medium", size: "16", thickness: 1, angle: 90 },
  },
};

const schema: SchemaConfig = { logo: "", type: "Person", name: "Ayush Tiwari", description: home.description, email: "tiwariayush77@gmail.com" };

const sameAs: SameAsConfig = { threads: "", linkedin: "https://www.linkedin.com/in/ayushtiwari77/", discord: "" };

const socialSharing: SocialSharingConfig = { display: true, platforms: { x: true, linkedin: true, facebook: false, pinterest: false, whatsapp: false, reddit: false, telegram: false, email: true, copyLink: true } };

export { display, mailchimp, routes, protectedRoutes, baseURL, fonts, style, schema, sameAs, socialSharing, effects, dataStyle };
