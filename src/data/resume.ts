// Erwin Lejeune - 2026-02-15

import type { ResumeData } from "../types/resume";

/**
 * ─── YOUR RESUME DATA ───────────────────────────────────────────────
 *
 * This is the **only** file you need to edit to populate your resume.
 * Every field maps directly to a section rendered on the page.
 *
 * Optional sections (`publications`, `projects`, `languages`) can be
 * omitted entirely or set to an empty array — the component simply
 * won't render if there is no data.
 * ─────────────────────────────────────────────────────────────────────
 */
export const resumeData: ResumeData = {
  name: "Jane Smith",
  title: "Senior Full-Stack Engineer",
  summary:
    "Product-minded engineer with 8+ years shipping web applications at scale. Passionate about developer experience, performance optimisation, and building accessible interfaces. Experienced across the full stack with React, Node.js, and cloud-native infrastructure.",

  contact: {
    email: "jane.smith@example.com",
    phone: "+1 (555) 123-4567",
    portfolio: "https://janesmith.dev",
    location: "San Francisco, CA",
    github: "janesmith",
    linkedin: "janesmith",
  },

  experience: [
    {
      company: "Acme Corp",
      companyUrl: "https://acme.example.com",
      location: "San Francisco, CA",
      role: "Senior Full-Stack Engineer",
      period: "2022 – Present",
      promotions: "Promoted from Engineer II (2023)",
      bullets: [
        {
          text: "Architected a micro-frontend platform serving 12 product teams, reducing deployment lead-time from 2 weeks to under 30 minutes.",
        },
        {
          text: "Led migration from REST to GraphQL, cutting average page-load data transfer by 40% and eliminating over-fetching across 60+ endpoints.",
        },
        {
          text: "Mentored 4 junior engineers through structured pairing, code review, and weekly 1-on-1s, resulting in 2 promotions within a year.",
        },
      ],
    },
    {
      company: "Startup Inc.",
      companyUrl: "https://startup.example.com",
      location: "New York, NY",
      role: "Full-Stack Engineer",
      period: "2019 – 2022",
      bullets: [
        {
          text: "Built the real-time collaboration engine (WebSockets + CRDTs) that powered the core product, handling 10K concurrent users.",
        },
        {
          text: "Designed and implemented the CI/CD pipeline on GitHub Actions, achieving 95% test-pass rate and 15-minute deploy cycles.",
        },
      ],
    },
    {
      company: "Agency Co.",
      companyUrl: "https://agency.example.com",
      role: "Frontend Developer",
      period: "2017 – 2019",
      bullets: [
        {
          text: "Delivered pixel-perfect, accessible UI for 20+ client projects using React, TypeScript, and Tailwind CSS.",
        },
        {
          text: "Introduced component-driven development with Storybook, cutting design-to-code handoff time by 50%.",
        },
      ],
    },
  ],

  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "University of California, Berkeley",
      institutionUrl: "https://www.berkeley.edu",
      period: "2013 – 2017",
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Storybook"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "Redis", "REST", "gRPC"],
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    {
      category: "Practices",
      items: ["Agile / Scrum", "TDD", "Code Review", "Pair Programming"],
    },
  ],

  projects: [
    {
      name: "OpenDash",
      url: "https://github.com/janesmith/opendash",
      description:
        "Open-source analytics dashboard with real-time data streaming and customisable widgets.",
      tech: ["React", "D3.js", "WebSockets", "Node.js"],
    },
    {
      name: "CLI Toolkit",
      url: "https://github.com/janesmith/cli-toolkit",
      description:
        "Developer productivity CLI written in Rust for scaffolding, linting, and release automation.",
      tech: ["Rust", "Clap", "Tokio"],
    },
  ],

  publications: [
    {
      title: "Scaling Micro-Frontends: Lessons from 100 Teams",
      venue: "Frontend Conf 2025",
      date: "September 2025",
      url: "https://example.com/talk",
    },
  ],

  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Professional" },
    { name: "French", proficiency: "Conversational" },
  ],

  // Place your PDF in public/resume.pdf and uncomment the line below.
  // The URL is directly shareable: https://yoursite.com/resume.pdf
  pdfUrl: "/resume.pdf",
};
