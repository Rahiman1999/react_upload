import "./About.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
function About() {
  return (
    <div className="About" id="About">
      <h3>Main Info</h3>
      <h1>About Me</h1>
      <p>
        Hi! My name is Rahiman. I am a Full Stack Developer. I am passionate
        Frontend Web Developer and Backend Web Developer using web technologies
        to build amazing product and focusing on solving Problems for different
        niches and different industry using the power of technology.
      </p>
      <p>
        I will love to hear from you.Whether it's a project,job opportunity,or
        just a chat feel free to contact me.
      </p>
      <div className="link">
        <a
          href="./Files/rahiman_resume2.pdf"
          className="btn"
          download="rahiman-resume"
        >
          Download Resume
        </a>
        <a href="#" className="btn">
          Skills &#38; Education
        </a>
      </div>

      <div className="icon">
        <a href="https://www.facebook.com/rahiman.rahiman.505">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/Rahiman58836181?s=08">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/rahiman-778771188">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rahiman1999/">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default About;
