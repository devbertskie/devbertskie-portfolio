import profileImage from "../../public/profile.jpg";
import logoImage from "../../public/logo.svg";

import github from "../../public/tech/github.svg";
import css3 from "../../public/tech/css3.svg";
import git from "../../public/tech/git.svg";
import adobephotoshop from "../../public/tech/adobephotoshop.svg";
import html5 from "../../public/tech/html5.svg";
import javascript from "../../public/tech/javascript.svg";
import linux from "../../public/tech/linux.svg";
import microsoftexcel from "../../public/tech/microsoftexcel.svg";
import microsoftpowerpoint from "../../public/tech/microsoftpowerpoint.svg";
import microsoftword from "../../public/tech/microsoftword.svg";
import mysql from "../../public/tech/mysql.svg";
import nextdotjs from "../../public/tech/nextdotjs.svg";
import nodedotjs from "../../public/tech/nodedotjs.svg";
import npm from "../../public/tech/npm.svg";
import postgresql from "../../public/tech/postgresql.svg";
import powerautomate from "../../public/tech/powerautomate.svg";
import prisma from "../../public/tech/prisma.svg";
import reacthookform from "../../public/tech/reacthookform.svg";
import react from "../../public/tech/react.svg";
import reactquery from "../../public/tech/reactquery.svg";
import redux from "../../public/tech/redux.svg";
import spring from "../../public/tech/spring.svg";
import springboot from "../../public/tech/springboot.svg";
import springsecurity from "../../public/tech/springsecurity.svg";
import tailwindcss from "../../public/tech/tailwindcss.svg";
import typescript from "../../public/tech/typescript.svg";
import visualbasic from "../../public/tech/visualbasic.svg";

export const siteConfig = {
  name: "HubertLemuel",
  url: "https://example.com",
  description: "Personal Portfolio",
  author: "Hubert Lemuel Berja",
  logo: logoImage,
  authorProfileImage: profileImage,
  careerOnjective:
    "Highly motivated and results-driven IT professional with a passion for leveraging technology to drive innovation and streamline processes.",
  social: {
    github: "https://github.com/devbertskie",
    email: "hubertberja3231@gmail.com",
    linkedIn: "https://www.linkedin.com/in/hubertlemuel",
    personalSite: "https://www.hubertlemuel.eu.org",
  },
  experience: [
    {
      role: "Application Systems Engineer",
      company: "Weserv Systems International",
      isActive: true,
      duration: "January 2021 - Present",
      jobDescription:
        "Responsible for Programming related tasks such as coding, testing, and implementation. Modernization / Migration of Tasks. Software and technical documentation.",
    },
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      isActive: false,
      duration: "February 2020 - October 2020",
      jobDescription:
        "Programming and Testing (JAVA and other related language depends on the requirements). Understanding the basic principle of Software Development Life Cycle (SDLC). Able to accomplish trainings specifically core JAVA and Spring Boot for specific project. Understanding the program management, requirements gathering and system integration.",
    },
    {
      role: "Data Analyst",
      company: "Intrinsic Consultancy and Technology Solutions, Inc.",
      isActive: false,
      duration: "June 2019 - February 2020",
      jobDescription:
        "Create an accurate analysis from the data gathered. Communicate with Carrier Account Management /Auditor to verify if the analysis made was accurate. Manage Online Ticketing System and generate and retrieve queries through SQL Databases.",
    },
  ],
  education: [
    {
      school: "Cebu Technological University - Argao Campus",
      address: "Argao Cebu",
      isHighestAttainment: true,
      duration: "S.Y. 2015 - 2019",
      course: "Bachelor of Science in Information and Communication Technology",
    },
    {
      school: "Simala National Highschool",
      address: "Simala, Sibonga, Cebu",
      isHighestAttainment: false,
      duration: "S.Y. 2011 - 2015",
      course: null,
    },
  ],
  skills: [
    {
      name: "React",
      image: react,
    },
    {
      name: "NextJs",
      image: nextdotjs,
    },
    {
      name: "Tailwind CSS",
      image: tailwindcss,
    },
    {
      name: "JavaScript",
      image: javascript,
    },
    {
      name: "HTML5",
      image: html5,
    },
    {
      name: "CSS3",
      image: css3,
    },
    {
      name: "Github",
      image: github,
    },
    {
      name: "Git",
      image: git,
    },
    {
      name: "Prisma",
      image: prisma,
    },
    {
      name: "Typescript",
      image: typescript,
    },
    {
      name: "Visual Basic",
      image: visualbasic,
    },
    {
      name: "React Query",
      image: reactquery,
    },
    {
      name: "Redux",
      image: redux,
    },
    {
      name: "Spring",
      image: spring,
    },
    {
      name: "Spring Boot",
      image: springboot,
    },
    {
      name: "Spring Security",
      image: springsecurity,
    },
    {
      name: "React Hook Form",
      image: reacthookform,
    },
    {
      name: "Node Js",
      image: nodedotjs,
    },
    {
      name: "NPM",
      image: npm,
    },
    {
      name: "PostgreSQL",
      image: postgresql,
    },
    {
      name: "Power Automate",
      image: powerautomate,
    },
    {
      name: "Linux",
      image: linux,
    },
    {
      name: "Excel",
      image: microsoftexcel,
    },
    {
      name: "Word",
      image: microsoftword,
    },
    {
      name: "Powerpoint",
      image: microsoftpowerpoint,
    },
    {
      name: "Photoshop",
      image: adobephotoshop,
    },
    {
      name: "MySQL",
      image: mysql,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
