import courseThumbnail from '../assets/images/projects-thumbnails/courses.jpg';
import portfolioThumbnail from '../assets/images/projects-thumbnails/developer-portfolio.jpg';
import ecommerceThumbnail from '../assets/images/projects-thumbnails/ecommerce.png';
import gameThumbnail from '../assets/images/projects-thumbnails/games.jpg';
import dashboardThumbnail from '../assets/images/projects-thumbnails/task-management dash board.jpg';
import brokerThumbnail from '../assets/images/projects-thumbnails/house-broker.jpg';
import designThumbnail from '../assets/images/projects-thumbnails/figmaDesign.jpg';

export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Developer Portfolio Platform",
    summary:
      "A high-performance portfolio with custom components, responsive layouts, and smooth UX interactions.",
    stack: "React, TypeScript, Tailwind",
    category: "Web Apps",
    image: portfolioThumbnail,
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    summary:
      "A collaborative dashboard focused on quick navigation, clear state feedback, and accessible data entry.",
    stack: "React, Node.js, MongoDB",
    category: "Full Stack",
    image: dashboardThumbnail,
  },
  {
    id: 3,
    title: "Course Companion App",
    summary:
      "A learning interface with progress tracking and reduced cognitive load through progressive disclosure.",
    stack: "Next.js, TypeScript, PostgreSQL",
    category: "Web Apps",
    image: courseThumbnail,
  },
  {
    id: 4,
    title: "House Broker App",
    summary:
      "A platform through which house seekers access homes for renting and buying purpose. Digitalize broker transaction system.",
    stack: "Flutter, Firebase",
    category: "Mobile App",
    image: brokerThumbnail,
  },
  {
    id: 5,
    title: "Old Games Site",
    summary:
      "A game site which has snake, rock paper scissor as well as space invaders game which flipping cards with good usablity and simplicity",
    stack: "Vanilla.Js, Bootstrap ",
    category: "Web App",
    image: gameThumbnail,
  },
  {
    id: 6,
    title: "P2P Ecommerce Site",
    summary:
      "An ecommerce site where sellers and potential buyers will have a peer to peer communication without intermediators or brokers. also a cart and delivery features are included",
    stack: "React.js, Node.js, Tailwind",
    category: "Full Stack",
    image: ecommerceThumbnail,
  },
  {
      id: 7,
    title: "Cafeteria Ledger App Design",
    summary:
      "A design for a Caferia Ledger app through which users consume daily but pay monthly , theough that the system will track what they have consumed",
    stack: "Figma",
    category: "UI Components",
    image: designThumbnail,
  }

] as const;
