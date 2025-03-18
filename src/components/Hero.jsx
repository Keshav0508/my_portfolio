import { HERO_CONTENT } from '../constants';
// import profilePic from "../assets/kevinRushProfile.png"
import pic from "../assets/mp1.jpg"
import {motion} from "framer-motion";
import React from 'react'

const container = (delay) =>({
    hidden: {x: -100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay:delay},
    },
});

const Hero = () => {
    // const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Keshav Gupta
                     </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer

                    </motion.span>
                    <motion.p 
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>

            </div>

            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className=' fles justify-center'>
                    <motion.img
                        className='rounded-2xl'
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay: 1.2}} 
                        src={pic} alt='profile pic'/>
                </div>
            </div>
 
        </div>

    </div>
  )
}

export default Hero