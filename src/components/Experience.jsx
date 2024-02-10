import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { StarWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full
      ">
        <img
          src={exp.icon}
          alt={exp.company}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
      <p className="text-secondary text-[16px] font-semibold">{exp.company}</p>

      
    </div>
    <ul className="mt-4 list-disc ml-5 space-y-2">
      {exp.points.map((detail, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {detail}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <>
      {" "}
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>What I have done so far...</p>
        <h2 className={styles.heroHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(Experience, "work");
