import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineCloud } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Crafting dynamic and interactive user interfaces with React.js, ensuring a seamless user experience across all platforms.",
  },
  {
    id: 2,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Building secure, and scalable server-side applications with Node.js and Express.js tailored to your project's needs.",
  },
  {
    id: 3,
    icon: <SiMongodb />,
    title: "Database Management",
    desc: "Expertise in designing and managing databases with MongoDB, ensuring data integrity and optimized performance with indexing.",
  },
  {
    id: 4,
    icon: <AiOutlineCloud />,
    title: "Cloud Deployment",
    desc: "Proficient in deploying applications on Vercel, Netlify, and Cloudflare Pages. Currently exploring and learning AWS for advanced cloud solutions.",
  },
];
export default data;
