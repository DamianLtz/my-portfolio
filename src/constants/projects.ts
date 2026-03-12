import type { Project } from "@/types/types";

export const proyectos: Project[] = [
  {
    id: "cambacua-backoffice",
    index: "01",
    date: "2024 - 2025",
    title: "Cambacuá Backoffice",
    description:
      "Sistema integral para la gestión de reservas, gastos, ingresos y ganancias de departamentos y hostels de la marca. Incluye funcionalidades para calcular las comisiones y pagos correspondientes a los propietarios de los departamentos disponibles, ofreciendo una administración centralizada y eficiente.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "shadcn/ui",
      "Recharts",
      "Tailwind",
      "NextAuth.js",
    ],
    href: "#",
    /* 
    Legacy data:
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8d156.appspot.com/o/cambacua-preview-portfolio.png?alt=media&token=2361feff-04a2-49a2-8749-2a0fd664a4f2",
    designer: "Sebastian Antonucci",
    designerLink: "https://www.linkedin.com/in/sebastian-antonucci/",
    */
  },
  {
    id: "orientacion-vocacional",
    index: "02",
    date: "2024",
    title: "Orientación Vocacional",
    description:
      "Proyecto desarrollado para el Ministerio de Educación de la Ciudad de Buenos Aires, diseñado para ayudar a las personas a descubrir sus áreas de interés, qué estudiar y dónde hacerlo. Implementación de maqueta, animaciones y comportamiento de componentes UI.",
    technologies: ["React", "CSS", "Motion", "UI/UX"],
    href: "https://orientacionvocacional.bue.edu.ar/",
    /* 
    Legacy data:
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8d156.appspot.com/o/orientacion-voc.png?alt=media&token=173a770e-645c-404e-ad84-51b543074a77",
    dev: "Ariel Pessotano",
    designer: "Sebastian Antonucci",
    */
  },
  {
    id: "prana-estudio",
    index: "03",
    date: "2022",
    title: "Prana estudio",
    description: "Maquetado y Desarrollo de la Web: Prana estudio de diseño.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    href: "https://pranaestudio.com.ar/",
    /* 
    Legacy data:
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8d156.appspot.com/o/proyectoPrana.png?alt=media&token=2331c00f-b5fd-4f6a-ae31-aec350c7e6fd",
    designer: "Agustin Ietta",
    */
  },
  {
    id: "ecommerce",
    index: "04",
    date: "2022",
    title: "Ecommerce",
    description:
      "Tienda de puntos utilizando herramientas modernas para la gestión de productos y carrito de compras.",
    technologies: ["React", "Firebase", "HTML", "CSS", "JS"],
    href: "https://ecommerce-react-two.vercel.app/",
    /* 
    Legacy data:
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8d156.appspot.com/o/proyectoEcommerce.png?alt=media&token=464eb7aa-fc17-430b-b63f-5b0f54f6f141",
    */
  },
  {
    id: "personal-argentina",
    index: "05",
    date: "2022",
    title: "Personal Argentina",
    description:
      "Practica de maquetado y desarrollo de la Web de Personal Argentina. Implementación de lógica de negocio y manejo de datos en tiempo real.",
    technologies: ["React", "Bootstrap 5", "SASS", "Firebase"],
    href: "https://personal-argentina.vercel.app/",
    /* 
    Legacy data:
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8d156.appspot.com/o/personalProyect.png?alt=media&token=405bd123-4981-411b-9914-72e37a081a76",
    */
  },
  {
    id: "unidiversidad",
    index: "06",
    date: "2021",
    title: "Unidiversidad",
    description:
      "Maquetado de la Web de Unidiversidad. Primer proyecto implementando librerías modernas de frontend.",
    technologies: ["React", "Bootstrap 5", "HTML", "CSS"],
    href: "https://uni-diversidad-react.vercel.app/",
    /* 
    Legacy data:
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-8d156.appspot.com/o/proyectoUniWeb.png?alt=media&token=7001b685-40cf-4f7a-b9c7-bd41e907541c",
    designer: "GorillaSite Headless CMS",
    */
  },
];
