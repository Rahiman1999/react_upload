import "./Home.css";
import { Link } from "react-scroll";

const home = document.getElementById("Home");
const about = document.getElementById("About");

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="logo">
        <h3 className="logo_text">R</h3>
      </div>

      <nav className="navigation">
        <ul className="list">
          <li className="nav_item">
            <Link to="Home" className="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav_item">
            <Link to="About" className="about" smooth={true} duration={500}>
              about
            </Link>
          </li>
          <li className="nav_item">
            <a href="#" className="education">
              portfolio
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="certification">
              Certification
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="contact">
              contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="intro ">
        <h3 className="margin_bottom">Hello</h3>
        <h1 className="margin_bottom">I'm Rahiman</h1>
        <h3 className="margin_bottom">Full Stack Developer</h3>
        <Link
          to="About"
          className="about_me"
          smooth={true}
          duration={500}
          spy={true}
        >
          More About Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
