"use client"
import CardImageTitleDescription from "@/components/CardImageTitleDescription";
import { motion } from "framer-motion"
const cards = [
  {
    image: "/HowWeWork1.jpg",
    title: "Análisis y Planificación",
    description:
      "Nos reunimos contigo para entender tu proyecto, ideas y necesidades. Diseñamos una estrategia integral de diseño web y marketing digital para tu negocio.",
  },
  {
    image: "/HowWeWork2.jpg",
    title: "Desarrollo y Ejecución",
    description:
      "Creamos tu proyecto web optimizado, con total transparencia y seguimiento en tiempo real mediante fases.",
  },
  {
    image: "/HowWeWork3.jpg",
    title: "Finalización y Entrega",
    description:
      "Tras tu aprobación, entregamos un sitio web completamente funcional y te guiamos en su uso y en la gestión de las herramientas de marketing digital.",
  },
];

export default function HowWeWork() {
  return (
    <section className="mb-10">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }} className="text-center text-3xl font-extralight bg-black/70 text-background py-7 mb-7">
        ¿Cómo trabajamos?
      </motion.h2>
      <div className="flex flex-wrap justify-evenly gap-5">
        {cards.map((card, index) => (
          <CardImageTitleDescription key={index} card={card} />
        ))}
      </div>
    </section>
  );
}
