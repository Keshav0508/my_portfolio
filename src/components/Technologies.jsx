// // import { RiReactjsLine } from 'react-icons/ri';
// // import { TbBrandNextjs } from 'react-icons/tb';
// // import { SiMongodb } from 'react-icons/si';
// // import { DiRedis } from 'react-icons/di';
// // import { FaNodeJs } from 'react-icons/fa';
// // import { BiLogoPostgresql } from 'react-icons/bi';
// // import {animate, motion} from "framer-motion";
// // import React from 'react'

// // const iconVariants = (duration) => ({
// //   initial: {y: -10},
// //   animate: {
// //     y: [10, -10],
// //     transition: {
// //       duration: duration,
// //       ease: "linear",
// //       repeat: Infinity,
// //       repeatType: "reverse",
// //     },
// //   },
// // });

// // const Technologies = () => {
// //   return (
// //     <div className="border-b border-neutral-800 pb-24" >
// //         <motion.h1 
// //         whileInView={{opacity:1, y:0}}
// //         initial={{opacity: 0, y: -100}}
// //         transition={{duration:1.5}}
// //         className='my-20 text-center text-4xl'>Technologies</motion.h1>
        
// //         <motion.div 
// //           whileInView={{opacity:1, x:0}}
// //           initial={{opacity: 0, x: -100}}
// //           transition={{duration:1.5}}
// //           className='flex flex-wrap items-center justify-center gap-4'>

// //             <motion.div 
// //             variants={iconVariants(2.5)}
// //             initial="initial"
// //             animate="animate"
// //             className='rounded-2xl border-4 border-neutral-800 p-4'>
// //             <RiReactjsLine className='text-7xl text-cyan-400'/>
// //             </motion.div>

// //             <motion.div
// //              variants={iconVariants(3)}
// //              initial="initial"
// //              animate="animate"
// //             className='rounded-2xl border-4 border-neutral-800 p-4'>
// //             <TbBrandNextjs className='text-7xl'/>
// //             </motion.div>

// //             <motion.div
// //              variants={iconVariants(6)}
// //              initial="initial"
// //              animate="animate"
// //              className='rounded-2xl border-4 border-neutral-800 p-4'>
// //             <SiMongodb className='text-7xl text-green-500'/>
// //             </motion.div>

// //             <motion.div  
// //             variants={iconVariants(2)}
// //             initial="initial"
// //             animate="animate"
// //              className='rounded-2xl border-4 border-neutral-800 p-4'>
// //             <DiRedis className='text-7xl text-red-700'/>
// //             </motion.div>

// //             <motion.div 
// //              variants={iconVariants(6)}
// //              initial="initial"
// //              animate="animate"
// //             className='rounded-2xl border-4 border-neutral-800 p-4'>
// //             <FaNodeJs className='text-7xl text-green-500'/>
// //             </motion.div>

// //             <motion.div 
// //              variants={iconVariants(4)}
// //              initial="initial"
// //              animate="animate"
// //             className='rounded-2xl border-4 border-neutral-800 p-4'>
// //             <BiLogoPostgresql className='text-7xl text-sky-700'/>
// //             </motion.div>
            
// //         </motion.div>
// //     </div>
    
// //   )
// // }

// // export default Technologies;
// import { RiReactjsLine } from 'react-icons/ri';
// import { SiMongodb, SiJavascript, SiExpress, SiMysql } from 'react-icons/si';
// import { FaNodeJs } from 'react-icons/fa';
// import {animate, motion} from "framer-motion";
// import React from 'react'

// const iconVariants = (duration, direction) => ({
//   initial: { y: direction ? -10 : 10 },
//   animate: {
//     y: direction ? [10, -10] : [-10, 10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//         <motion.h1 
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className='my-20 text-center text-4xl'>Technologies</motion.h1>
        
//         <motion.div 
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1.5 }}
//           className='flex flex-wrap items-center justify-center gap-4'>

//             <motion.div 
//             variants={iconVariants(2.5, true)}
//             initial="initial"
//             animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <RiReactjsLine className='text-7xl text-cyan-400'/>
//             </motion.div>

//             <motion.div
//              variants={iconVariants(3, false)}
//              initial="initial"
//              animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <SiExpress className='text-7xl text-gray-400'/>
//             </motion.div>

//             <motion.div
//              variants={iconVariants(2, true)}
//              initial="initial"
//              animate="animate"
//              className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <SiMongodb className='text-7xl text-green-500'/>
//             </motion.div>

//             <motion.div  
//             variants={iconVariants(3, false)}
//             initial="initial"
//             animate="animate"
//              className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <SiJavascript className='text-7xl text-yellow-400'/>
//             </motion.div>

//             <motion.div 
//              variants={iconVariants(2.5, true)}
//              initial="initial"
//              animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <FaNodeJs className='text-7xl text-green-500'/>
//             </motion.div>

//             <motion.div 
//              variants={iconVariants(3, false)}
//              initial="initial"
//              animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//             <SiMysql className='text-7xl text-blue-600'/>
//             </motion.div>
            
//         </motion.div>
//     </div>
//   )
// }

// export default Technologies;
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiJavascript, SiExpress, SiMysql } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { motion } from "framer-motion";
import React from 'react';

// Variants for icon animation
const iconVariants = (duration, direction) => ({
  initial: { y: direction ? -10 : 10 }, // Initial position based on direction
  animate: {
    y: direction ? [10, -10] : [-10, 10], // Alternate direction for animation
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Title */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h1>
        
      {/* Icons Container */}
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        {/* React Icon */}
        <motion.div 
          variants={iconVariants(2.5, true)} // Moves up and down
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        {/* Express Icon */}
        <motion.div
          variants={iconVariants(3, false)} // Moves down and up
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiExpress className='text-7xl text-gray-400'/>
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
          variants={iconVariants(2, true)} // Moves up and down
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMongodb className='text-7xl text-green-500'/>
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div  
          variants={iconVariants(3, false)} // Moves down and up
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiJavascript className='text-7xl text-yellow-400'/>
        </motion.div>

        {/* Node.js Icon */}
        <motion.div 
          variants={iconVariants(2.5, true)} // Moves up and down
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>

        {/* MySQL Icon */}
        <motion.div 
          variants={iconVariants(3, false)} // Moves down and up
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMysql className='text-7xl text-blue-600'/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;