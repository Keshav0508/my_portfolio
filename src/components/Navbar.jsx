// import logo from "../assets/kevinRushLogo.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className=' mb-20 flex item-center justify-between py-6'>
//         <div className='flex flex-shrink-0 items-center'>
//             <img className="mx-2 w-10" src={logo} alt="logo"/>
//         </div>
//         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//             <FaLinkedin/>
//             <FaGithub/>
//             <FaInstagram/>
//         </div>

//     </nav>
//   )
// }

// export default Navbar
// import logo from "../assets/mk.png";
// import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className='mb-20 flex items-center justify-between py-6'>
//       {/* Logo */}
//       <div className='flex flex-shrink-0 items-center'>
//   <img className=" rounded-2xl mx-2 w-40 h-17" src={logo} alt="logo"/>
// </div>

//       {/* <div className='flex flex-shrink-0 items-center'>
//         <img className="mx-2 w-10" src={logo} alt="logo"/>
//       </div> */}

//       {/* Social Media Icons */}
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a href="https://www.linkedin.com/in/keshav-gupta-43987321b" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin className="hover:text-blue-500 transition-colors duration-300"/>
//         </a>
//         <a href="https://github.com/Keshav0508" target="_blank" rel="noopener noreferrer">
//           <FaGithub className="hover:text-gray-400 transition-colors duration-300"/>
//         </a>
//         <a href="https://www.instagram.com/keshav8132/" target="_blank" rel="noopener noreferrer">
//           <FaInstagram className="hover:text-pink-500 transition-colors duration-300"/>
//         </a>
//         <a href="https://www.facebook.com/keshav.gupta.7528610" target="_blank" rel="noopener noreferrer">
//           <FaFacebook className="hover:text-blue-600 transition-colors duration-300"/>
//         </a>
//             {/* Download Resume Button */}
//       <div>
//         <a 
//           href="/resume.pdf" // Path to the resume file
//           download="Keshav_Gupta_Resume.pdf"
//           className="px-2 py-2 text-s bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
//         >
//            Resume
//         </a>
//       </div>
//       </div>
//     </nav>
//   );
// };

// // export default Navbar;
// import logo from "../assets/mk.png";
// import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="mb-10 flex items-center justify-between px-6 py-4 bg-black text-white relative">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <img className="rounded-2xl w-32 md:w-40 h-auto" src={logo} alt="logo" />
//       </div>

//       {/* Mobile Menu Button - Pushes to the right */}
//       <div className="lg:hidden absolute right-6 top-5">
//         <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Navbar Links - Responsive */}
//       <div className={`lg:flex lg:items-center lg:gap-6 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300 ${menuOpen ? "flex flex-col items-center py-4" : "hidden"}`}>
//         {/* Social Media Icons */}
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-2xl mt-4 lg:mt-0">
//           <a href="https://www.linkedin.com/in/keshav-gupta-43987321b" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
//           </a>
//           <a href="https://github.com/Keshav0508" target="_blank" rel="noopener noreferrer">
//             <FaGithub className="hover:text-gray-400 transition-colors duration-300" />
//           </a>
//           <a href="https://www.instagram.com/keshav8132/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
//           </a>
//           <a href="https://www.facebook.com/keshav.gupta.7528610" target="_blank" rel="noopener noreferrer">
//             <FaFacebook className="hover:text-blue-600 transition-colors duration-300" />
//           </a>
//         </div>

//         {/* Download Resume Button */}
//         <div className="mt-4 lg:mt-0">
//           <a 
//             href="/resume.pdf" 
//             download="Keshav_Gupta_Resume.pdf"
//             className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import logo from "../assets/mk.png";
// import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="mb-10 flex items-center justify-between px-6 py-4 text-white relative">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <img className="rounded-2xl w-32 md:w-40 h-auto" src={logo} alt="logo" />
//       </div>

//       {/* Mobile Menu Button - Pushes to the right */}
//       <div className="lg:hidden absolute right-6 top-5">
//         <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-white">
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Navbar Links - Responsive */}
//       <div className={`lg:flex lg:items-center lg:gap-6 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-transparent lg:bg-transparent transition-all duration-300 ${menuOpen ? "flex flex-col items-center py-4" : "hidden"}`}>
//         {/* Social Media Icons */}
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-2xl mt-4 lg:mt-0 text-white">
//           <a href="https://www.linkedin.com/in/keshav-gupta-43987321b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
//             <FaLinkedin />
//           </a>
//           <a href="https://github.com/Keshav0508" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
//             <FaGithub />
//           </a>
//           <a href="https://www.instagram.com/keshav8132/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
//             <FaInstagram />
//           </a>
//           <a href="https://www.facebook.com/keshav.gupta.7528610" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
//             <FaFacebook />
//           </a>
//         </div>

//         {/* Download Resume Button */}
//         <div className="mt-4 lg:mt-0">
//           <a 
//             href="/Keshav Gupta.pdf" 
//             download="Keshav_Gupta_Resume.pdf"
//             className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import logo from "../assets/mk.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mb-10 flex items-center justify-between px-6 py-4 text-white relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="rounded-2xl w-32 md:w-40 h-auto" src={logo} alt="logo" />
      </div>

      {/* Mobile Menu Button - Pushes to the right */}
      <div className="lg:hidden absolute right-6 top-5">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="text-3xl text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navbar Links - Responsive */}
      <div 
        className={`lg:flex lg:items-center lg:gap-6 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? "flex flex-col items-center py-4 z-50" : "hidden"}`}
      >
        {/* Social Media Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-2xl mt-4 lg:mt-0 text-white">
          <a href="https://www.linkedin.com/in/keshav-gupta-43987321b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Keshav0508" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/keshav8132/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/keshav.gupta.7528610" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
            <FaFacebook />
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="mt-4 lg:mt-0">
          <a 
            href="/Keshav Gupta.pdf" 
            download="Keshav_Gupta_Resume.pdf"
            className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;