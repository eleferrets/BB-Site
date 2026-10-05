const img = (name) => `${process.env.PUBLIC_URL}/img/${name}`;

export const projects = [
  {
    title: "Freedom",
    stack: "GameMaker",
    description:
      "Freedom is a 2D minimalist platformer that tells a story of a struggle, and you can pet things!",
    image: img("freedom.jpg"),
    alt: "Freedom game screenshot",
    link: "https://freedom.bjbme.com",
  },
  {
    title: "Arthub",
    stack: "PERN Stack",
    description:
      "Designed as a way to help beginning artists find a space to share their art and build a sense of community with others!",
    image: img("arthub.jpg"),
    alt: "Arthub home page",
    link: "https://arthub-site.surge.sh/",
  },
  {
    title: "Mxer",
    stack: "Android Studio, Kotlin, Java",
    description:
      "Mxer is an app that has users talk among different communities/interests!",
    image: img("mxer.jpg"),
    alt: "Mxer communities screen",
    link: "https://github.com/Corporate-Jargon/Mxer",
  },
  {
    title: "My Redbubble Store",
    stack: "3-Peeps",
    description:
      "Features collections of my art that I have for sale on Redbubble!",
    image: img("redbubble.jpg"),
    alt: "3-Peeps Redbubble store",
    link: "http://3-peeps.redbubble.com",
  },
  {
    title: "Newer Portfolio",
    stack: "HTML, CSS, JS",
    description: "This is the newer portfolio I made to showcase my skills!",
    image: img("new-portfolio.jpg"),
    alt: "Newer portfolio",
    link: "https://my-bb-portfolio.netlify.app/index.html",
  },
  {
    title: "Older Portfolio",
    stack: "React",
    description: "My older portfolio site, converted to a React app!",
    image: img("old-portfolio.jpg"),
    alt: "Older portfolio",
    link: "https://eleferrets.github.io/IS117_Portfolio_React/",
  },
];

export const skills = [
  {
    heading: "Languages",
    items: ["HTML", "CSS", "JavaScript", "C", "C++", "Java"],
  },
  {
    heading: "Frameworks & tools",
    items: ["React.js", "Express", "PostgreSQL", "GIT"],
  },
];

export const profile = {
  name: "Brian Balthazar",
  role: "Full-stack Web Developer",
  email: "info@bjbme.com",
  github: "https://github.com/eleferrets",
  photo: img("brian.jpg"),
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
};
