"use client"
import CardServices from "@/components/CardServices";
import { Sparkle, TrendingUp, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";
const reasons = [
  {
    transition: { delay: 0.4, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    logo: <Sparkle size={48} strokeWidth={1} />,
    title: "Experiencia y Profesionalismo",
    description:
      "Contamos con un equipo de expertos en diseño web, desarrollo y marketing digital, garantizando soluciones de alta calidad y personalizadas para cada cliente.",
    button: "Solicitalo",
    href: "/contact",
  },
  {
    transition: { delay: 0.4, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    logo: <WandSparkles size={48} strokeWidth={1} />,
    title: "Transparencia y Comunicación",
    description:
      "Trabajamos de manera transparente, manteniéndote informado en cada fase del proyecto y asegurando que todos los detalles sean claros y comprendidos.",
    button: "Contáctanos",
    href: "/contact",
  },
  {
    transition: { delay: 0.4, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    logo: <TrendingUp size={48} strokeWidth={1} />,
    title: "Resultados Comprobados",
    description:
      "Implementamos estrategias efectivas que optimizan tu presencia online, atraen tráfico de calidad y convierten visitantes en clientes, maximizando tu retorno de inversión.",
    button: "Compruébalo",
    href: "/contact",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="my-10">
      <motion.div initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.5, duration: 1 }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }} className="py-5 mb-5 bg-black/70 text-background text-center">
        <h2 className=" font-extralight text-2xl md:text-3xl mb-2">
          ¿Por qué Nosotros?
        </h2>
      </motion.div>

      <div className="flex flex-col gap-3 md:flex-row">
        {reasons.map((reason) => (
          <CardServices key={reason.title} service={reason} />
        ))}
      </div>
    </section>
  );
}
