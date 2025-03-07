import Aboutpic from "../../assets/sadam.jpeg";
import CV from "../../assets/SadamMuneer.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container" data-aos="fade-in">
        <div className="about__left">
          <div className="about__portrait">
            <img src={Aboutpic} alt="About" loading="lazy" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Crafting seamless and responsive web applications is my passion.
            With a strong foundation in modern web technologies, I strive to
            build solutions that are both functional and visually appealing.
          </p>
          <p>
            Hi, my name is Sadam Muneer, the full-stack web developer
            with a Bachelor's degree in Computer Science. My focus is on
            creating scalable, user-friendly applications tailored to meet your
            needs. Whether it's developing from scratch or enhancing existing
            projects, I am ready to turn your ideas into reality. Let's
            collaborate and make something amazing together!
          </p>

          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
