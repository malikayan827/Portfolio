import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
      
      <div>
        
        <h1 className={`${styles.heroHeadText} text-white max-w-[400px]
        animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl `}>Hi, I'm &nbsp;
        <span className='text-white'>
         Ayan
        </span>
        </h1>
        <p className={`${styles.heroSubText}
        mt-2 text-white-100
         `}>
          I'm a Software Engineer, experienced
          in building web applications and
          mobile applications.

        </p>
      </div>
     
      </div>
      <ComputersCanvas/>
      <div className='absolute
      xs:bottom-10
      bottom-32
      w-full
      flex
      justify-center
      item-center
      '>
     

      </div>
    </section>
  );
};

export default Hero;
