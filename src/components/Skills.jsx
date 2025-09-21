import React from "react";

// Category icons (for card headers)
import progIcon from "../assets/icons8-programming-48.svg";
import toolsIcon from "../assets/icons8-tools-50.svg";
import cloudIcon from "../assets/icons8-cloud-48.svg";
import FrameworkIcon from "../assets/icons8-framework-48.svg";

// Logos
import Angular from "../assets/icons8-angular.svg";
import Mysql from "../assets/icons8-mysql (1).svg";
import Postman from "../assets/postman-icon.svg";
import Springboot from "../assets/icons8-spring-boot.svg";
import ReactJS from "../assets/icons8-react-js.svg";
import Aws from "../assets/aws-svgrepo-com.svg";
import FastApi from "../assets/fastapi.svg";
import CICD from "../assets/file.svg";
import Nodejs from "../assets/icons8-nodejs.svg";

import Github from "../assets/github-142-svgrepo-com.svg";
import Javascript from "../assets/icons8-javascript.svg";
import Python from "../assets/icons8-python.svg";
import Java from "../assets/jaava.svg";
import Git from "../assets/git-svgrepo-com.svg";
import Linux from "../assets/linux-svgrepo-com.svg";
import MongoDb from "../assets/mongodb-logo-svgrepo-com.svg";
import Redis from "../assets/Redis.svg";

// Category-wise logos
const skillsData = [
  {
    title: "Languages",
    icon: progIcon,
    items: [Java, Python, Javascript],
  },
  {
    title: "Frameworks",
    icon: FrameworkIcon,
    items: [Springboot, FastApi, Angular, ReactJS, Nodejs],
  },
  {
    title: "Tools ",
    icon: toolsIcon,
    items: [Postman, Git, Linux],
  },
  {
    title: "Cloud",
    icon: cloudIcon,
    items: [Aws, CICD, Github],
  },
  {
    title: "Databases",
    icon: progIcon,
    items: [Mysql, MongoDb, Redis],
  },
];

const Skills = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {/* Card Header */}
            <div className="flex justify-center mb-6">
              <h1>{skill.title}</h1>
            </div>

            {/* Logos */}
            <div className="flex flex-wrap justify-center gap-6">
              {skill.items.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`${skill.title} logo ${i + 1}`}
                  className="w-14 h-14 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
