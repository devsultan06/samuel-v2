export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  iconImage: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "research",
    number: "01",
    title: "Empathy / User Research",
    description:
      "I tend to understand the pain of the client and know how to empathize with them, i run a survey for target users and i gather quality insights, i also run research on similar existing product and i study the problems.",
    iconImage: "/assets/process/research.png",
  },
  {
    id: "define",
    number: "02",
    title: "Define",
    description:
      "After research and surveys are done, I break down the key insights into clear problem and solution statements. I use AI to help organize the content and map out the navigation flows that make sense for the user.",
    iconImage: "/assets/process/define.png",
  },
  {
    id: "ideate",
    number: "03",
    title: "Ideate / Wireframe",
    description:
      "Once I've defined the core solution, I transition into sketching low-fidelity wireframes to map out the product's layout, establish visual hierarchy, and define how key features will function on screen.",
    iconImage: "/assets/process/ideate.png",
  },
  {
    id: "prototype",
    number: "04",
    title: "High fidelity design / Prototyping",
    description:
      "I turn structural wireframes into high-fidelity UI designs using clear, colour systems, and grid layouts. Getting guidelines from Material Design. I prototype the frames to check screens responsiveness.",
    iconImage: "/assets/process/prototype.png",
  },
  {
    id: "testing",
    number: "05",
    title: "Usability Testing",
    description:
      "I run usability testing to catch any layout or interaction issues early. I also audit the design against WCAG standards to guarantee proper colour contrast, readability, and overall accessibility for all users.",
    iconImage: "/assets/process/testing.png",
  },
];
