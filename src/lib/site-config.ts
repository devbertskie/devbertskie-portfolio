import passManagerImage from "../../public/project/project_01.jpg";

export const siteConfig = {
  name: "devBertskie",
  url: "https://example.com",
  description: "Personal Portfolio",
  author: " devbertskie",
  social: {
    github: "https://github.com/devbertskie",
    personalSite: "https://example.com",
  },
  projects: [
    {
      title: "Password Manager",
      description:
        "Open-source web app that simplifies password and note management, offering a secure and user-friendly experience.",
      previewUrl: "https://dev-manager.vercel.app",
      githubRepo: "https://github.com/devbertskie/password-manager",
      image: passManagerImage,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
