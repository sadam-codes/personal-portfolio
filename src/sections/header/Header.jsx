import { useEffect } from "react";
import HeaderImage from "../../assets/sadam2.jpeg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdDesignServices, MdCode, MdVideoLibrary } from "react-icons/md";
import { HiServer } from "react-icons/hi";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container" data-aos="fade-down">
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="info">
          <h1>Fullstack Web Developer</h1>
          <h3>Hi, I'm Sadam Muneer</h3>
          <p>
            Welcome to my portfolio! I specialize in building dynamic and
            responsive web applications. With expertise in both frontend and
            backend development, I create solutions that are efficient,
            scalable, and user-friendly. Let's bring your ideas to life!
          </p>
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
        </div>
        <div className="profile__area">
          <div className="outer__circle">
            <span>
              <MdDesignServices />
            </span>
            <span>
              <HiServer />
            </span>
            <span>
              <MdCode />
            </span>
            <span>
              <MdVideoLibrary />
            </span>
          </div>
          <div className="inner__circle">
            <img src={HeaderImage} alt="Header Portrait" loading="lazy" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
