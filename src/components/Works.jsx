import React from 'react'
import Tilt from 'react-tilt'
import { styles } from '../style'
import { motion } from 'framer-motion'
import { github } from '../assets'
import { StarWrapper } from '../hoc'
import { customProjects} from '../constants'
import { fadeIn,textVariant } from '../utils/motion'

import { staggerContainer } from "../utils/motion";
const ProjectCard = ({ project, category }) => {
  const { name, description, technologies, source_code_link, image } = project;
  return (
    
    <motion.div variants={fadeIn("up", "spring", 0.75)}>
 
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='mt-10  bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='flex justify-between items-center'>
        <h2 className='text-secondary
    text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] xs:text-[16px] text-[12px] lg:leading-[30px]'>{name}</h2>
        <a
          href={source_code_link}
          target='_blank'
          rel='noreferrer'
          className='text-secondary'
        >
          <img src={github} alt='github' className='w-6 h-6' /> 
        </a>
      </div>
      <div className='mt-5'>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='flex flex-wrap gap-2'>
        <img
            src={image}
            alt='project_image'
            className='mt-5 w-full h-full object-cover rounded-2xl'
          />

        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className='bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm'
          >
            {tech}
          </span>
        ))}
      </div>
    </Tilt>
  </motion.div>

  );
};
const Works = () => {
  return (
    <>
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
      <motion.div  variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work so far...</p>
        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[17px] text-secondary max-w-3xl leading-[30px]'>
          Here are some of the projects I have worked on. All of them are personal projects done for learning purposes. Each project is described briefly and you can find the source code on my GitHub.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {customProjects.map((category) => (
          <div className='mx-auto' key={category.category}>
            <h2 className='text-secondary text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[22px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
              {category.category}
            </h2>
            <div className='flex flex-wrap gap-7'>
              {category.projects.map((project) => (
                <ProjectCard key={project.name} project={project} category={category.category} />
              ))}
            </div>
          </div>
        ))}
      </div>
      </motion.section>
    </>
  );
};



export default Works