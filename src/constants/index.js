import project1 from "../assets/projects/ecomlogo.png";
import project2 from "../assets/projects/att.png";
import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Full Stack Developer skilled in building scalable web applications using MongoDB, Express, React, and Node.js. I have experience developing RESTful APIs, managing databases, and optimizing user interfaces. As an AWS Certified Cloud Practitioner, I understand cloud computing and system architecture. Additionally, my leadership as an HR Head has strengthened my management skills. I aim to create innovative solutions that enhance user experience and business growth.`;

export const ABOUT_TEXT = `I am a passionate MERN Stack Developer with a strong foundation in full-stack web development. I completed my BTech in Computer Science and Engineering from VIT Vellore and schooling at Sheiling House School, Kanpur. Through internships and projects, I gained hands-on experience in MongoDB, Express, React, and Node.js, focusing on RESTful APIs, database management, and scalable applications. My knowledge of data structures, algorithms, and system design helps me build efficient solutions.

Beyond technical skills, I have leadership experience as an HR Head, managing teams and organizing events. As an AWS Certified Cloud Practitioner, I continue to enhance my cloud computing expertise. I strive to create impactful solutions, staying updated with emerging technologies to develop robust and scalable applications.`
export const EXPERIENCES = [
  {
    year: "Aug 2023 - Nov 2023",
    role: "Full Stack Intern",
    company: "Ethnus",
    description: `I worked as a MERN Stack Intern at Ethnus, where I developed a full-stack employee attendance system, built RESTful APIs, managed MongoDB databases, and enhanced React.js UI components for a seamless user experience..`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Jan 2024 - Jan 2025",
    role: "HR-Head",
    company: "IEEE Robotics and Automation",
    description: `As HR Head at IEEE Robotics and Automation, I managed recruitment, onboarding, and engagement, organized workshops and events, and fostered a collaborative environment, ensuring smooth coordination between club members and speakers.`,
    technologies: [],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://gilded-paprenjak-615805.netlify.app/"
  },
  {
    title: "Employee Attendance Tracking System",
    image: project2,
    description:
      "The Employee Attendance Tracking System is a MERN stack web application designed for real-time attendance management, featuring secure authentication, a user-friendly interface, and scalable MongoDB storage for efficient data handling.",
    technologies: ["React", "Express", "Nodejs", "MongoDB"],
    link: "https://emp-tracker.vercel.app/"
  },
  {
    title: "Chat Application",
    image: project3,
    description:
      "Built a real-time chat app using MERN, Socket.io, TailwindCSS, and Daisy UI. Implemented JWT-based authentication and authorization, enabling secure messaging. Integrated Socket.io for seamless real-time communication.",
    technologies: ["Tailwind CSS", "React", "Node.js", "Express", "MongoDB", "Socket.io"],
    link: "https://fullstack-chat-app-ussd.onrender.com"
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "141 Shiv Katra Road, Lalbungla, Kanpur ",
  phoneNo: "+91 6392353823",
  email: "gkeshav717@gmail.com",
};
