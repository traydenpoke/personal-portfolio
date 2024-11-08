import CivProject from "../assets/napoleon_img.png";
import StatWebsiteProject from "../assets/stat_calculator.png";
import StatWebsiteProjectReact from "../assets/stat_calculator_react.png";
import OsuTrackerProject from "../assets/osu-tracker.jpg";

export const ProjectList = [
  {
    name: "osu! User Metrics Tool",
    image: OsuTrackerProject,
    skills: "MongoDB, Express.js, React, Node.js, TypeScript, HTML, CSS",
    githubLink: "https://github.com/traydenpoke/osu-tracker",
    info: "Developed a user-friendly web application for tracking player metrics from the game osu!. Includes realtime updates of top osu! players, allowing users to easily track the performance of top players over time."
  },
  {
    name: "Statistical Analysis Tool",
    image: StatWebsiteProject,
    skills: "HTML, CSS, Javascript",
    githubLink: "https://github.com/traydenpoke/lol-stat-calc",
    info: "Developed a statistical analysis website, facilitating simple presentation of complex data to users. Designed with a responsive and intuitive interface, utilizing CSS media queries."
  },
  {
    name: "Statistical Analysis Tool: React",
    image: StatWebsiteProjectReact,
    skills: "HTML, CSS, Javascript, React",
    githubLink: "https://github.com/traydenpoke/lol-item-analysis",
    info: "Developed a statistical analysis website, facilitating simple presentation of complex data to users. Designed with a responsive and intuitive interface, utilizing CSS media queries. New and improved from old version, created with React."
  },
  {
    name: "Video Game Mod Creation",
    image: CivProject,
    skills: "XML, SQL, SQLite",
    githubLink: "https://github.com/traydenpoke/Napoleon-Mod",
    info: "Created custom gameplay mods for Civilization VI, gathering 11,000+ views and subscriptions. Developed through modifying existing SQLite databases and XML files, creating unique and balanced mechanics."
  }
];