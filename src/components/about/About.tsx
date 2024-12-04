 
import { BiDownload } from "react-icons/bi";
import "./About.css";
import Image from "next/image";
import Skills from "../skills/skills"; 
import "../skills/skills.css";
export default function About(){
    return(
        <>
       <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <div className="about-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image-container">
          <Image 
            src="/man-working-on-laptop.png"
            alt="Developer workspace"
            className="about-image"
          />
        </div>

        <div className="about-info">
          <h2 className="developer-name">I am Alyan</h2>
          
          <h3 className="developer-title">
            A Creative <span className="highlight">Front-End Developer</span> With 
            <span className="highlight-purple"> Problem solving skills.</span>
          </h3>

          <p className="developer-description">
            A web developer is a skilled professional who designs, builds, and maintains 
            websites and web applications, ensuring they are functional, user-friendly, 
            and visually appealing. They utilize various programming languages and 
            frameworks, such as HTML, CSS, JavaScript, and others, to create dynamic 
            and responsive web solutions.
          </p>
          
          <a 
          href={"/alyancv.pdf"}
          download={"CV Downloaded"}>
          <button className="download-cv">
            <BiDownload size={20} />
            <span>Download CV</span>
          </button>
          </a>
        </div>
      </div>
    </div>
    <Skills/>
</>
    );
}