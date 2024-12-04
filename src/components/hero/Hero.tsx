import "./Hero.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub,FaLinkedin  } from "react-icons/fa";


export default function Hero(){
return(
<section className="home flex-center" id="home">  
        <div className
        ="home-container">
            <div className="media-icons">
                <Link href={"https://www.facebook.com/profile.php?id=100015625084708"} target="blank"><FaFacebookF/></Link>
                <Link href={"https://github.com/Alyan130"} target="blank"><FaGithub/></Link>
                <Link href={"https://www.linkedin.com/in/alyan-ali-560910268/"} target="blank"><FaLinkedin/></Link>
            </div>
            <div className="info">
                <h2>Hi, I am Alyan</h2>
                <h3 id="role">Frontend-Developer</h3>
                <p>  My goal is to craft seamless online experiences that not only look great but also function flawlessly. </p>
                <Link href={"/contact"} className="btn">Contact Me</Link>
            </div>
            <div className="home-img">
                <Image src="/businessman-with-laptop-grey-background-3d-illustration-cartoon-character (1).png" width={300} height={300}  alt=""/>
            </div>
        </div>
    </section>
)
}