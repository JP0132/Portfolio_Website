import React from "react";
import { motion } from "framer-motion";
import { fadeIn2 } from "../variants";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn2("right", "spring", 0.5 * index, 0.75)}
        className="w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="blue-cyan-gradient rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col"
        >
          
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Icons from:
// Web developer: https://www.flaticon.com/free-icon/web-development_2210153
// React: https://www.flaticon.com/free-icon/atom_1048877?term=react&page=1&position=20&origin=search&related_id=1048877
// Backend: <a href="https://www.flaticon.com/free-icons/backend" title="backend icons">Backend icons created by Flat Icons - Flaticon</a>
// Full stack: <a href="https://www.flaticon.com/free-icons/full-stack" title="full stack icons">Full stack icons created by Flat Icons - Flaticon</a>
// Software: <a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Freepik - Flaticon</a>
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div variants={fadeIn2("down", 0.8)} className="text-white">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Overview
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          About
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn2("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        As an adept software developer, I bring a comprehensive understanding of
        programming languages and frameworks. My proficiency in JavaScript,
        bolstered by expertise in React and Node.js, allows me to create dynamic
        and interactive web applications. My knowledge extends to Java and the
        Spring framework, Python, and C++, which I leverage to construct robust
        applications and their backends. In the realm of mobile development, I
        have honed my skills in Java for Android applications, and Flutter/Dart
        for cross-platform solutions. I pride myself on being a quick learner,
        capable of rapidly adapting to new technologies and programming
        languages. My ability to collaborate effectively within a team or
        directly with clients enables me to deliver efficient, user-friendly
        solutions that meet their needs.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
