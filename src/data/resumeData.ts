export const resumeData = {
  name: "Samuel Grenier",
  title: "Junior Software Engineer",
  summary:
    "Software craftsman who turns coffee into clean code. Fluent in Java, TypeScript, and data science wizardry. When not architecting elegant solutions, you'll find me diving into new tech and tackling thorny problems with a smile or throwing something together to automate my life.",
  contact: {
    email: "samuelgrenier@me.com",
    location: "Québec, Canada",
    github: "https://github.com/Sam17-beep",
    linkedin: "https://www.linkedin.com/in/samuel-grenier-558a1321b/",
  },
  skills: [
    "Java",
    "SpringBoot",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Docker",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "DDD",
  ],
  experience: [
    {
      company: "Bell Canda",
      position: "Intern Software Engineer",
      duration: "May 2024 - Sept. 2024",
      description:
        "Complete integration within a fullstack development team. Substantially the same tasks as the 2023 internship, but with an emphasis on designing a new project. I was able to be in charge of a complete epic and coordination with another team. I also temporarily served as the person in charge of support for the team's components.",
    },
    {
      company: "Bell Canada",
      position: "Intern Stack Developer",
      duration: "May 2023 - Sept. 2023",
      description:
        "Java development for Fibe TV products and Fibe TV Application. Development and maintenance of services covering a wide range of television-related functions, including live rights management, video-on-demand (VoD), video streaming, service provisioning, authentication, authorizations, and much more. Specificly worked on migrating an existing component to a new tech stack and general developpement.",
    },
    {
      company: "Régie de l'assurance maladie du Québec",
      position: "Intern Data Scientist",
      duration: "Jan. 2022 - Apr. 2023",
      description:
        "Creation and implementation of artificial intelligence algorithms for business analysis purposes. Analysis and processing of large amounts of data. Simplification/Communication of analysis results. Behavior prediction, anomaly detection, and sentiment analysis were part of my assignments. Worked with common python ML and data science technologies and libraries : Jupiter Notebook, Pandas, TensorFlow, MatplotLib and more.",
    },
  ],
  projects: [
    {
      name: "Repo cleaner",
      description:
        "A simple desktop app to remove unused git repos from my files. Checks if I still have uncommitted changes, if not and if I have not committed anything since a selectable amout of time, delete the local files and append the repo's link inside a file.",
      technologies: ["Python", "Tinker"],
    },
    {
      name: "Food planer",
      description:
        "An early version of a frontend only web app made to easily find best prices and make grocery lists. Uses a free flyer api to search for wanted items. Presents the items and where to find them and give the posibility to add them to the current cart.",
      technologies: ["React", "TypeScript", "Nextjs", "Tailwind", "Vercel"],
      repoUrl: "https://github.com/Sam17-beep/food-planner",
    },
    {
      name: "Trading bot",
      description:
        "Jupiter Notebooks for exploration and testing of algorithms for a trading bot. I explored different strategies and tested them with paper trading and back testing. FYI: Obviously did not prove to be efficient. I had implemented a way to send me emails each day with a recap.",
      technologies: [
        "Python",
        "Jupiter Notebook",
        "Pandas",
        "MatplotLib",
        "Sklearn",
      ],
      repoUrl: "https://github.com/Sam17-beep/TradingBot",
    },
    {
      name: "This page",
      description:
        "Currently is a simple resume page. I wanted this page because I found my CV to be too short, I also wanted to make use of my domain. Made quickly with v0 from vercel.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "Vercel",
        "v0",
        "ViteJs",
      ],
    },
  ],
  education: {
    degree: "Bachelor's degree in Software Engineering (Génie logiciel)",
    school: "Université Laval",
    year: "2021 - May 2025",
  },
  competitions: [
    {
      name: "Compétition Québécoise d'ingénierie 2023",
      position: "1st Place",
      description:
        "A competition where 14 delegations compete in a given category. My team (4 people) represented l'Université Laval and competed in the programming category. The assignment was a fullstack web app to manage employee of a festival",
    },
    {
      name: "Canadian Engineering Competition 2023",
      position: "2nd Place",
      description:
        "A competition where 200 engineering undergraduate student from 45 institutions compete in a given category. My team (4 people) competed in the programming category, we were challenged to make an industry-quality software to solve a given problem. The software was be presented to the judges for evaluation.",
    },
    {
      name: "Coveo Blitz 2023, 2024 and 2025",
      position: "",
      description:
        "The Coveo Blitz is a single day programming competion where teams of 4 need to develop a playing agent to a custom and always different multiplayer game.",
    },
    {
      name: "Compétition Québécoise d'ingénierie 2024",
      position: "4th Place",
      description:
        "A competition where 14 delegations compete in a given category. My team (4 people) represented l'Université Laval and competed in the programming category. The assignment was to make an inteligent agent to play a custom game.",
    },
    {
      name: "Compétition Québécoise d'ingénierie 2025",
      position: "has not occured yet",
      description:
        "A competition where 14 delegations compete in a given category. My team (4 people) represented l'Université Laval and competed in the programming category. We do not know the assignment in advance.",
    },
    {
      name: "CS games 2025",
      position: "has not occured yet",
      description:
        "The CS Games are an interuniversity competition involving students in Computer Science, Computer Engineering, and Software Engineering from across North America. Throughout an entire weekend, participants are challenged both individually and collaboratively through a series of interdisciplinary competitions designed for students from all undergraduate years.",
    },
  ],
  accentColor: "#8A2BE2",
  backgroundColor: "#0A0A0A",
};
