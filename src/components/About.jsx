import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justyify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

      </div>

    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        In an industry where innovation is the key, my journey is anything but conventional. I pivoted my career during the COVID-19 lockdown, teaching myself Python and diving deep into coding. Following this self-directed learning, I graduated from La Fosse Academy, one of the leading tech bootcamps, with a focus on contemporary software technologies. If you're in need of a developer who not only knows how to code but also understands the nuances of teamwork, problem-solving, and adaptability, don't hesistate to connect with me on <a href="https://linkedin.com/in/chey-brown-blankson-507980268" style={{color: "#915eff"}} target="_blank">LinkedIn.</a>

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
