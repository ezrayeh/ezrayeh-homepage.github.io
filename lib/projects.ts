export type Project = {
  id: string
  title: string
  category: string
  description: string
  year: string
  image: string
}

export const initialProjects: Project[] = [
  {
    id: "p1",
    title: "Maison Lumière",
    category: "Interior",
    description:
      "A warm minimalist residence where natural light shapes every room throughout the day.",
    year: "2025",
    image: "/projects/project-1.png",
  },
  {
    id: "p2",
    title: "Concrete Pavilion",
    category: "Architecture",
    description:
      "A civic structure exploring the dialogue between raw concrete, glass, and open space.",
    year: "2024",
    image: "/projects/project-2.png",
  },
  {
    id: "p3",
    title: "Terra Objects",
    category: "Product",
    description:
      "A sculptural furniture collection rooted in earthen tones and tactile craftsmanship.",
    year: "2024",
    image: "/projects/project-3.png",
  },
]
