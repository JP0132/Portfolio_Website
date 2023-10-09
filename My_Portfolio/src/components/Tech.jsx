import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn2, slideIn, textVariant } from "../variants";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <motion.div variants={textVariant()} className="text-white">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Tech Stack
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Technology
          </h2>
        </motion.div>
      </div>

      <motion.div 
      variants={slideIn("right", "tween", 0.2, 1)}
      className="flex flex-row flex-wrap justify-center gap-10 mt-4"
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img
              src={technology.icon}
              className="w-[80px] h-[80px] sm:w-[112px] sm:h-[112px]"
            />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
