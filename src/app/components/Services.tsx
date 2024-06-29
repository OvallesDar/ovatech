"use client";
import CardServices from "@/components/CardServices";
import { motion } from "framer-motion";
import { Earth, LayoutDashboard, TrendingUp } from "lucide-react";

const services = [
  {
    transition: { delay: 0.4, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    logo: <LayoutDashboard size={48} strokeWidth={1} />,
    title: "Diseño y Desarrollo Web",
    description:
      "Ofrecemos diseños personalizados, creando sitios atractivos y funcionales que mejoran la experiencia del usuario y potencian tu marca online.",
    button: "Ver más",
    href: "/services"
  },
  {
    transition: { delay: 0.5, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    logo: <Earth size={48} strokeWidth={1} />,
    title: "Marketing Digital",
    description:
      "Implementamos estrategias de marketing digital efectivas, optimizando tu presencia online para aumentar la visibilidad, atraer clientes y maximizar tus ingresos.",
    button: "Ver más",
    href: "/services"
  },
  {
    transition: { delay: 0.6, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    logo: <TrendingUp size={48} strokeWidth={1} />,
    title: "Posicionamiento SEO",
    description:
      "Mejoramos tu visibilidad en motores de búsqueda con técnicas SEO avanzadas, atrayendo tráfico orgánico de calidad y aumentando tus conversiones.",
    button: "Ver más",
    href: "/services"
  },
];

export default function Services() {
  return (
    <section className="container my-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="py-5 mb-5 bg-black/70 text-background text-center"
      >
        <h2 className=" font-extralight text-2xl md:text-3xl mb-2">
          Algunos de nuestros servicios
        </h2>
        <strong className="p-1 text-sm md:text-lg">
          Responsive Desing <span className="text-secondary mx-2"> | </span>{" "}
          Posicionamiento Web<span className="text-secondary mx-2"> | </span>{" "}
          Camapañas Google Ads
        </strong>
      </motion.div>

      <div className="flex flex-col gap-3 md:flex-row">
        {services.map((service) => (
          <CardServices key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
