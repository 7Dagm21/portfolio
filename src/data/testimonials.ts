// src/data/testimonials.ts
import image1 from "../assets/images/Mesfin-Tasew.jpg";
import image2 from "../assets/images/M_T_Tadesse.jpg";
import image3 from "../assets/images/wro_Yeshimebet.jpg";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: typeof image1 | typeof image2 | typeof image3;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mesfin-Tasew",
    role: "CEO",
    company: "TechCorp",
    image: image1,
    quote: "This service is amazing! It has transformed our business.",
    rating: 5,
  },
  {
    id: 2,
    name: "M_T_Tadesse",
    role: "CTO",
    company: "Innovate Inc.",
    image: image2,
    quote: "Highly recommend this team for their professionalism.",
    rating: 4,
  },
   
  {
    id: 3,
    name: "wro_Yeshimebet",
    role: "Lead Designer",
    company: "CreativeLab",
    image: image3,
    quote: "Design-first approach that truly delivers.",
    rating: 4,
  },
  {
    id: 4,
    name: "Alex Johnson",
    role: "Product Manager",
    company: "BuildCo",
    image: image1,
    quote: "Great collaboration and fast delivery.",
    rating: 5,
  },
  {
    id: 5,
    name: "Morgan Lee",
    role: "Lead Designer",
    company: "CreativeLab",
    image: image2,
    quote: "Design-first approach that truly delivers.",
    rating: 4,
  },
  {
    id: 6,
    name: "Sam Patel",
    role: "Engineer",
    company: "TechWorks",
    image: image3,
    quote: "Solid implementation and great communication.",
    rating: 5,
  },
  {
    id: 7,
    name: "Taylor Kim",
    role: "Founder",
    company: "StartupX",
    image: image1,
    quote: "Reliable team with excellent delivery.",
    rating: 5,
  },
];
