import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-64 w-60'>
      <motion.div variants={fadeIn("top", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-1 rounded-2xl shadow-card'>
        <div options={{max:45, scale:1, speed:450}} className='bg-gray-800 rounded-2xl py-5 px-12 min-h-72 flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-sm font-bold text-center'>{title}</h3>
        </div> 
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  let animationObject = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 100,
      transition: {
        duration: 1,
      }
    },
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={animationObject} viewport={{once:true, amount: 0.25}} whileInView="visible" initial="hidden" /*variants={fadeIn("", "", 0.1, 1)}*/ className='mt-4 text-secondary text-lg max-w-3xl leading-7'>
        I am beginner front-end developer and I want to become full-stack developer
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-20 justify-center'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
