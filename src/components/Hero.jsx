import React from 'react'
import {motion} from 'framer-motion'
import { ComputersCanvas } from './canvas'

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-7xl sm:text-6xl xs:text-5xl text-4xl lg:leading-8xl mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};


const Hero = () => {
  const heroHeadText = styles.heroHeadText;
  const heroSubText = styles.heroSubText;
  const paddingX = styles.paddingX;
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Miras</span></h1>
          <p className={`${heroSubText} mt-2 text-white-800`}>Beginner frontend developer <br className='sm:block hidden'/> & Computer Science student at NU</p>
        </div>
      </div>
        <ComputersCanvas/>
        <div className='absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div animate={{y:[0, 13, 25]}} transition={{duration:1.5, repeat: Infinity, repeatType: 'loop'}} className='w-3 h-3 rounded-full bg-white mb-1' />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero