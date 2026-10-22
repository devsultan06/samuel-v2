export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  avatar: string;
  rating: number;
  badge: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "reshma-thomas",
    name: "Reshma Thomas",
    role: "CEO of Ns MOM",
    feedback: "Samuel !!! You have done a great job my guy. Lovely it is.",
    avatar: "/assets/testimonials/Ellipse 1.png",
    rating: 5,
    badge: "Great Service",
  },
  {
    id: "idowu-jones",
    name: "Idowu Jones",
    role: "CEO of Rill Estate",
    feedback:
      "Interesting colour palette on this website, you did a great job !!!",
    avatar: "/assets/testimonials/Ellipse 2.png",
    rating: 5,
    badge: "Great Service",
  },
  {
    id: "toyin-akinfenwa",
    name: "Toyin Akinfenwa",
    role: "CEO of Wa Jeun",
    feedback: "The food app you designed for me is so user friendly thank you sam !",
    avatar: "/assets/testimonials/Ellipse 3.png",
    rating: 5,
    badge: "Great Service",
  },
  {
    id: "mustapha-afeez",
    name: "Mustapha Afeez",
    role: "CEO of A2Z Cargos",
    feedback: "I love this design, thank you sam.",
    avatar: "/assets/testimonials/Ellipse 4.png",
    rating: 5,
    badge: "Great Service",
  },
];
