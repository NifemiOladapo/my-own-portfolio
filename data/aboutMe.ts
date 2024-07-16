export type aboutMe = {
  id: number;
  title: string;
  content: string;
};

type aboutMelist = aboutMe[];

const ABOUT__ME__LIST: aboutMelist = [
  {
    id: 1,
    title: "Web Developer",
    content:
      "  I am a positive enthusiastic and competent web developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee i will perform highly in this role. I am a MERN stack developer who has built functionall, robust, and scalable  web applications over the years. I am full stack developer but Backend heavy.",
  },
  {
    id: 2,
    title: "Database Administrator",
    content:
      " Establish the needs of users and monitor user access and security, monitor performance and manage parameters in order to provide fast responses to front-end users, map out the conceptual design for a planned database, carry out capacity planning and lots more. I makeuse of MongoDb for my database management.",
  },
  {
    id: 3,
    title: "Software Engineer",
    content:
      " Experienced software developer with over a year experience as a freelance software engineer, i've contributed to over a dozen projects and assisted with managing one project for one of thefirm's long time client.",
  },
  {
    id: 4,
    title: "Backend Developer",
    content:
      " experienced with sever side web application logic and integration of the work frontend, writes competent services and APIs used by frontend web developers and mobile applications. vast in backend technologies like NodeJs, ExpressJs, MongoDb.",
  },
];

export default ABOUT__ME__LIST;