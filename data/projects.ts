const PROJECTS__LIST = [
  {
    name: "NaijaBoard - Job board application",
    description : "Architected an end-to-end job board platform featuring dual-role authentication (Employer vs. Candidate) and dynamic dashboards for job postings and application tracking. Integrated an AI candidate-scoring engine that evaluates pre-uploaded candidate resumes against job specifications in real time, featuring manual score overrides for employers. Engineered document processing workflows for candidate resumes and implemented role-based access control (RBAC) to ensure secure data handling.",
     webLink: "https://www.thisisnaijaboard.com.ng",
    githubLink: "https://github.com/NifemiOladapo/NaijaBoard",
    image : "/Screenshot from 2026-08-10 10-08-09.png",
      id: 0,
  },
  {
    name: "Nippr E-Commerce App",
    description:
      "A modern e-commerce web application built with Next.js 15, featuring seamless authentication with Clerk, content management via Sanity (with live editing), and secure Stripe integration for payments. Core features include user authentication, product search, category-based filtering, a full shopping basket experience, and smooth checkout flow.",
    webLink: "https://nippr.vercel.app",
    githubLink: "https://github.com/NifemiOladapo/Niprr",
    image: "/nippr.png",
      id: 1,
  },
 {
    name: "Video Conferencing App (Zoom Clone)",
    description:
      "A modern video conferencing app built with Next.js 14, Clerk authentication, Tailwind CSS, ShadCN UI, and Stream API. It allows users to create and join video meetings, manage participants, and chat in real time, providing a seamless remote communication experience.",
    webLink: "https://nifnix-noom.netlify.app",
    githubLink: "https://github.com/NifemiOladapo/Noom",
    image: "/noom.PNG",
      id: 2,
  },
  {
    name: "PropoWiz",
    description:
      "A proposal generation tool designed for freelancers to streamline the process of creating professional proposals using AI. Built with React+Vite, Tailwind CSS .",
    webLink: "https://propowiz.netlify.app",
    githubLink:
      "https://github.com/NifemiOladapo/AI-freelancer-proposal-generator",
    image: "/propowiz.PNG",
 id: 3,
  },
 
  {
    name: "Creative UI/UX Showcase",
    description:
      "A portfolio site highlighting my design skills. This project demonstrates my ability to create visually appealing and user-friendly interfaces using modern design principles and frontend technologies.",
    webLink: "https://nix-foodie-app.netlify.app",
    githubLink: "https://github.com/NifemiOladapo/foodie-app",
    image: "/foodie.PNG",
    id: 4
  },
] as const;

export default PROJECTS__LIST;
