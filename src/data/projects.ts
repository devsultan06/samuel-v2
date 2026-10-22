export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  image: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "a2z-cargos",
    slug: "a2z-cargos",
    title: "A2Z Cargos Logistics",
    year: "2024",
    category: "Logistics website interface",
    summary:
      "A logistics company that handles import and export of goods, real-time tracking, scalability, on-time guarantee Etc.",
    problem:
      "The client needed a strong online presence for their cargo logistics business to build credibility, expand brand awareness, and attract new customers looking for reliable freight services.",
    solution:
      "I designed a modern, user-friendly website featuring clear service breakdowns, an intuitive quote request flow, and streamlined navigation, positioning the brand as a trustworthy industry partner and driving client inquiries.",
    image: "/assets/projects/a2z-cargos.png",
  },
  {
    id: "wa-jeun",
    slug: "wa-jeun",
    title: "Wá jẹun !",
    year: "2024",
    category: "Food app mobile interface",
    summary:
      "Wá jẹun restaurant food delivery app for authentic Nigerian cuisine. Order your local dishes in just a few taps and track your order real-time dispatch updates.",
    problem:
      "The client needed an app to digitalize their restaurant orders and solve customer anxiety around delivery arrival times.",
    solution:
      "I designed Wá jẹun, an intuitive food ordering app featuring a streamlined checkout process and real-time dispatch tracking to give users full visibility from kitchen to doorstep.",
    image: "/assets/projects/wa-jeun.png",
  },
  {
    id: "rill-estate",
    slug: "rill-estate",
    title: "Rill Estate",
    year: "2024",
    category: "Real estate website interface",
    summary:
      "A full-service real estate firm specializing in sales, redevelopment, and premium rentals, guiding you through every step of property ownership.",
    problem:
      "The business needed an intuitive, modern platform to unify their property listings across sales, rentals, and acquisitions.",
    solution:
      "I designed a user-centered platform with responsive listing cards, direct agent booking flows, and clear categorization across buying, selling, and rental channels.",
    image: "/assets/projects/rill-estate.png",
  },
  {
    id: "fintech-dashboard",
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    year: "2024",
    category: "Dashboard website interface",
    summary:
      "Total financial control at a glance. Fintech dashboard unites real-time account tracking, intelligent insights, and secure payments into one effortless interface.",
    problem:
      "The company needed a clear, centralized platform to help users track cash flow, view balances, and manage transactions without overwhelming visual clutter.",
    solution:
      "I designed a secure, user-centered dashboard layout featuring structured navigation, real-time alerts, and a clear visual hierarchy that simplifies complex financial workflows.",
    image: "/assets/projects/fintech-dashboard.png",
  },
  {
    id: "old-portfolio",
    slug: "old-portfolio",
    title: "My previous portfolio",
    year: "2024",
    category: "Portfolio website interface",
    summary:
      "My previous portfolio blended my roots as a pencil artist with my UI/UX work, showcasing my web design growth alongside fine art and client feedback.",
    problem:
      "Navigating a mixed portfolio often caused cognitive overload for recruiters and art buyers looking for specific deliverables.",
    solution:
      "Designed a dual-focused portfolio platform using strategic content hierarchy, distinct showcase sections (like a dedicated gallery spotlight), and interactive case studies to seamlessly balance visual artwork with technical web skills.",
    image: "/assets/projects/old-portfolio.png",
  },
];
