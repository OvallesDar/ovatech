"use client";
import { motion } from "framer-motion";
import CardAboutTeam from "@/components/CardAboutTeam";

const sections = [
  {
    image: "/aboutteam1.jpg",
    alt: "Team Group",
    title:
      "En Ovatech contamos con un equipo de profesionales expertos en diseño web, desarrollo y marketing digital.",
    description:
      "Nuestro equipo se dedica a crear sitios web atractivos y funcionales, así como a implementar estrategias de marketing digital personalizadas. Nos enfocamos en optimizar tu presencia en línea, mejorando tu visibilidad en los motores de búsqueda y atrayendo a clientes potenciales para maximizar tu crecimiento y éxito en el mercado digital.",
    button: "Contáctanos",
    href: "/contact"
  },
  {
    image: "/aboutteam2.jpg",
    alt: "Team Group",
    title:
      "Te hablamos de nosotros, pero lo que realmente queremos es conocerte a ti.",
    description:
      "En Ovatech, nos reunimos contigo para entender a fondo tu proyecto, tus ideas y necesidades. A partir de ahí, diseñamos la mejor estrategia personalizada para tu negocio.",
    description2:
      "Diseñamos y desarrollamos tu proyecto web optimizado, trabajando con total transparencia y permitiéndote seguir los avances en tiempo real mediante fases.",
    button: "Te escuchamos",
    href: "/contact"
  },
  {
    image: "/aboutteam3.jpg",
    alt: "Proyecto final",
    title: "Entrega Final.",
    description:
      "Tras tu aprobación final, entregamos el proyecto completamente operativo y te explicamos cómo gestionarlo, asegurando una transición sin problemas.",
    description2:
      "Además, implementamos estrategias de marketing digital efectivas para impulsar tu presencia online, optimizando SEO y ejecutando campañas publicitarias para atraer tráfico de calidad y convertir visitantes en clientes.",
    button: "Saber más",
    href: "/contact"
  },
];

export default function AboutTeam() {
  return (
    <section className="container mt-10 flex flex-col gap-7  overflow-hidden">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-center text-3xl font-extralight bg-black/70 text-background py-7"
      >
        Un poco de nosotros
      </motion.h2>
      {sections.map((section, index) => (
        <CardAboutTeam
          key={index}
          section={section}
          direction={index % 2 === 0}
        />
      ))}
    </section>
  );
}
