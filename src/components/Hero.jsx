import React from "react";
import styles from './Hero.module.css'
import SpringIcon from "../assets/icons8-spring-boot.svg"; // adjust the path
import JavaIcon from "../assets/icons8-java.svg";          // optional
import PythonIcon from "../assets/icons8-python (1).svg";      // optional
import Nodejs from "../assets/icons8-nodejs.svg"
import Reactjs from "../assets/icons8-react-js.svg"
const Hero = () => {
  return (
    <section className="pt-24 px-4  text-center text-white flex flex-col justify-center items-center max-w-4xl mx-auto ">

       <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${styles.typing}`}>
        Hello! I'm Vamshi
      </h1>
      <p className="text-xl md:text-2xl mb-2">
        Full Stack Developer
      </p>
      <p className="mb-4 text-gray-300">
      <p className="mb-4">
            CSE (AI & ML) '25 grad | Open Source Contributor |{" "}
                <span style={{ color: "yellow"}}>
                Ex-full stack intern @Eazyvenue.com
                </span>
              </p>
      </p>
      <p className="mb-2">📍 Hyderabad, Telangana</p>
       <p className="max-w-2xl">
      I love building robust web applications using{" "}
      <span className="inline-flex items-center space-x-1">
        <img src={SpringIcon} alt="Spring Boot" className="w-4 h-4" />
        <span>Spring Boot,</span>
      </span>{" "}
      <span className="inline-flex items-center space-x-1">
        <img src={JavaIcon} alt="Java" className="w-5 h-5" />
        <span>Java,</span>
      </span>{" "}
      <span className="inline-flex items-center space-x-1">
        <img src={PythonIcon} alt="Python" className="w-5 h-5" />
        <span>Python, </span>
      </span>{" "}
      <span className="inline-flex items-center space-x-1">
        <img src={Nodejs} alt="Nodejs" className="w-5 h-5" />
        <span>Node.js, </span>
      </span>{" "}
      <span className="inline-flex items-center space-x-1">
        <img src={Reactjs} alt="React" className="w-5 h-5" />
        <span>React, </span>
      </span>{" "}
      and modern web technologies. I have gained experience in full-stack 
      development by working on real-world projects that involve building 
      dynamic and responsive web applications with efficient backends and 
      seamless user experiences.
    </p>
    </section>
    
  );
};

export default Hero;
