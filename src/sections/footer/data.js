import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "mailto:sadammuneer390@gmail.com", icon: <AiOutlineMail /> },
    {
      id: 2,
      link: "https://www.linkedin.com/in/muhammad-sadam-muneer",
      icon: <AiOutlineLinkedin />,
    },
    { id: 3, link: "https://github.com/sadam-codes", icon: <AiFillGithub /> },
    {
      id: 4,
      link: "https://www.instagram.com/sadam_muneer",
      icon: <AiOutlineInstagram />,
    },
];
