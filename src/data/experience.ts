export interface Experience {
  id: string;
  role: string;
  company: string;
  year: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "a2z-cargos",
    role: "UI/UX Designer",
    company: "A2Z Cargos Logistics",
    year: "2024",
    description:
      "Designed and launched the first-ever web platform for a cargo logistics company, solving two critical business challenges: a lack of online visibility and low client acquisition. By creating an intuitive, professional digital presence, the project effectively showcases their core cargo clearing services, builds trust with potential shippers, and establishes a streamlined funnel to convert web visitors into active clients.",
  },
  {
    id: "rill-estate",
    role: "UI/UX Designer",
    company: "Rill Estate",
    year: "2024",
    description:
      "Spearheaded the complete UI/UX web design for a growing real estate company, transitioning their traditionally offline operations into a dynamic online space. The design directly addresses their limited market reach by structuring property portfolios clearly, elevating brand credibility, and optimizing user paths to capture high-intent buyer inquiries and property leads.",
  },
  {
    id: "wa-jeun",
    role: "UI/UX Designer",
    company: "Wá jẹun",
    year: "2024",
    description:
      "Designed and prototyped a complete mobile ordering application for a local restaurant, solving a critical operational gap: the lack of a dedicated digital platform for direct online ordering. By creating a seamless, user-centric interface, the app streamlines menu navigation, simplifies custom meal configuration, and establishes a direct ordering channel that drives repeat customer sales without relying on third-party marketplace fees.",
  },
];
