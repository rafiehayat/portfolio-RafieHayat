/* Change this file to get your personal Porfolio */

/*
TODO:
1. Edit all the texts in Homepage, Education tab, contact me tab, projects tab, Experience tab.
2. Remove opensource tab
3. Remove git projects integration from projects tab
4. Add a component to display all my projects in card components, which will contain project name, description, live link & github link
5. Design the splash screen
6. Update resume link with updated resume
7. Update svg illustrations as I like
8. Play with theme color customizations
*/

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rafie's Portfolio",
  description:
    "A Passionate Software Engineer  With some personal project experience in development and deployment of various object oriented and web application using Node JS and Express Js(backend). And in ReactJS also .Ready to help team achieve company goals",
  og: {
    title: "Rafie Hayat Portfolio",
    type: "website",
    url: "https://RafieHayat.com/",
  },
};

//Home Page
const greeting = {
  title: "Syed Rafie Hayat",
  logo_name: "RafieHayat",
  nickname: "",
  subTitle:
    "A passionate Software developer with some personal project experience in development and deployment of various object oriented and web application using Node JS and Express Js(backend). Also done many Personal project in ReactJS . Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Web Developer position. Ready to help team achieve company goals.",
  secondSubtitle:
    "Love to learn new technologies everyday and apply them through building new projects.",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/rafiehayat",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/syed-rafie-hayat-867a46133",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:rafiehayat5@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend Development And FrontEnd Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly scalable and maintainable REST APIs",
        "⚡ Creating application backend using Node js along with integration of databases such as Oracle SQL & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#52A74B",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Purnea University Purnia",
      subtitle: "BCA (Bachelor of Computer Application)",
      logo_path: "Purnea.png",
      alt_name: "JGEC Logo",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Graduated with 76%.",
        "⚡ I have studied basic software engineering subjects like Java,Node js, DS, Algorithms, Computer Architecture, Operating System, DBMS, Computer Network etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development",
      ],
      website_link: "https://www.purneauniversity.ac.in/",
    },

    {
      title: "Purnea University Purnia",
      subtitle: "MCA (Master of Computer Application)",
      logo_path: "Purnea.png",
      alt_name: "mca Logo",
      duration: "2022- PRESENT",
      descriptions: [],
      website_link: "https://www.purneauniversity.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "NODE JS",
      subtitle: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      logo_path: "node.png",
      certificate_link: "https://www.udemy.com/",
      alt_name: "Udemy",
      color_code: "#02447B",
    },
    {
      title: "REACT JS",
      subtitle: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      logo_path: "react.png",
      certificate_link: "https://www.udemy.com/",
      alt_name: "Udemy",
      color_code: "#02447B",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "I'm a Fresher and I want a good platform to start my career and explore my skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Projects",
      experiences: [],
    },
  ],
};
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Applications and deploy them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projectsData = {
  myProjects: [
    {
      id: 2,
      name: "Node js e-Commerce",
      description: "e-Commerce is a node app made for online shopping",
      createdAt: "2022-03-06",
      gitUrl: "https://github.com/rafiehayat/rafienodejs",
    },
    {
      id: 3,
      name: "Food Ordering App",
      description:
        "This project is a Food web application made using React and Firebase.",
      createdAt: "2022-10-10",

      gitUrl: "https://github.com/rafiehayat/Food-Ordering-App",
    },
    {
      id: 4,
      name: "Shopping Cart in React",
      description: "This project is a Food web application made using React.",
      createdAt: "2022-10-10",

      gitUrl: "https://github.com/rafiehayat/ShoppingCart-in-React",
    },
    {
      id: 5,
      name: "Rafie Social in React and NodeJs",
      description:
        "This project is a Social application made using React and NodeJs.",
      createdAt: "2023-01-30",

      gitUrl: "https://github.com/rafiehayat/social",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Hayat.jpg",
    description:
      "I am available on almost every social media. You can message me anytime, I will reply within 24 hours. I can help you with Java, React,Node js Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write blogs to explain solutions of digital & technical problems in much simpler way.",
    link: "https://github.com/rafiehayat",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Purnia, Bihar",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7979973557",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projectsData,
  contactPageData,
};
