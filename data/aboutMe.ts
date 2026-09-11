export type aboutMe = {
  id: number;
  title: string;
  content: string;
};

type aboutMelist = aboutMe[];

const ABOUT__ME__LIST: aboutMelist = [
  {
    id: 1,
    title: "What I Do",
    content:
      "I build full-stack web applications with a strong focus on backend engineering. I enjoy turning complex requirements into reliable, scalable, and maintainable software.",
  },
  {
    id: 2,
    title: "Frontend",
    content:
      "I create responsive and intuitive interfaces with React and Next.js, focusing on clean component architecture, performance, accessibility, and a smooth user experience.",
  },
  {
    id: 3,
    title: "Backend",
    content:
      "I specialize in building APIs and server-side systems with Node.js and Express.js. I work with MongoDB to design data models and build systems that are secure, efficient, and scalable.",
  },
  {
    id: 4,
    title: "How I Work",
    content:
      "I’m a problem solver who values clean architecture, maintainable code, and practical solutions. I enjoy working across the stack, collaborating with others, and continuously improving the way I build software.",
  },
];

export default ABOUT__ME__LIST;
