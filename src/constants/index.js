const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
    imgPath: "/images/coin.png",
    title: "Zero-Defect Code",
    desc: "Writing clean, reliable code with rigorous testing to ensure flawless performance and minimal bugs",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Angular",
    modelPath: "/models/angular_logo_icon.glb",
    scale: 1.5,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "Java Spring Boot",
    modelPath: "/models/spring-boot-logo.glb",
    scale: 2.5,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node JS",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three JS",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "GIT",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "At TCS, I contribute to end-to-end product development, focusing on enhancing product quality and user experience. Collaborating with cross-functional teams, I work on integrating next-gen technologies and optimizing product performance.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Product Engineer",
    date: "August 2023 - Present",
    responsibilitiesHeader: "Responsibilities",
    responsibilities: [
      "Developed and maintained production-grade web applications, leveraging full-stack technologies including JavaScript, Angular, Spring-Boot & Node.js.",
      "Created and deployed microservices to improve application modularity and scalability.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions, enhancing system performance and user satisfaction.",
      "Engaged in Agile/Scrum processes, contributing to sprint planning and daily stand-ups.",
    ],
  },

  {
    review:
      "During my internship at Zero Dollar Security, I applied my academic knowledge to real-world projects, enhancing both front-end and back-end development skills. Collaborating with a dynamic team, I contributed to building secure and efficient web applications.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/zds.png",
    title: "Full Stack Intern",
    date: "June 2020 - May 2021",
    responsibilitiesHeader: "Responsibilities",
    responsibilities: [
      "Developed and maintained user interfaces using React.js and integrated them with backend services.",
      "Implemented RESTful APIs to facilitate seamless communication between front-end and back-end systems.",
      "Ensured application security by adhering to best practices and conducting code reviews.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Participated in agile development processes, contributing to sprint planning and retrospectives.",
    ],
  },
  {
    review:
      "At IEM, I developed a strong foundation in computer science, focusing on software development, algorithms, and system design through hands-on projects and collaborative learning.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/iem-wh.png",
    title: "B-tech (CSE)",
    date: "August 2019 - May 2023",
    responsibilitiesHeader: "Highlights",
    responsibilities: [
      "Built strong foundations in programming, data structures, and system design",
      "Completed hands-on projects in web and app development",
      "Explored AI, databases, and cloud computing",
      "Collaborated in team projects and tech fests",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta semper nulla a condimentum. Donec condimentum diam a consectetur fringilla. Nullam suscipit. Donec consequat nulla non. Praesent non porta risus.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      " Pellentesque scelerisque odio at dictum imperdiet. Phasellus ullamcorper lacus non neque dignissim volutpat. Suspendisse bibendum phasellus ullamcorper lacus aliquet massa, phasellus ullamcorper phasellus ullamcorper lacus pretium quis.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "In tristique turpis nec leo ornare, id rutrum risus condimentum. Nullam vulputate, quam eget vehicula tincidunt, tellus odio egestas massa, ut tincidunt augue nunc id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi mauris, cursus quis neque non, lobortis dapibus ex. In quis dictum leo.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Integer lectus urna, mattis quis nibh ac, elementum commodo massa. Etiam dictum, nisi eu euismod tempus, nulla ipsum accumsan mi. Sed vitae varius dolor.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Duis finibus finibus odio, ac imperdiet dui aliquam ut. Etiam porttitor nibh congue libero varius cursus. Nam in iaculis metus, scelerisque vulputate ex. Praesent eget augue vitae nisl vel orci.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Duis a eros ullamcorper, suscipit ligula ut, dictum tellus. Cras euismod magna id nunc rhoncus, vitae rhoncus neque fringilla. Duis aliquet porta felis a condimentum. Donec nec bibendum dui. Aliquam pellentesque ex sed justo aliquam, eu faucibus risus euismod.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/im_anik07",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/aniksur",
  },
  {
    name: "github",
    imgPath: "/images/github-white-icon.png",
    url: "https://github.com/Anik-Sur",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
