"use client";
import CardClientsLogo from "@/components/CardClientsLogo";
import { motion } from "framer-motion";

const clients = [
  {
    image: "/clientEsenciaCanaria.png",
    alt: "Quesería Esencia Canaria Logo",
    title: "Quesería Esencia Canaria",
    works: "Desarrollo Web",
    href: "https://queseriaesenciacanaria.es/",
  },
  {
    image: "/clientBelanova.png",
    alt: "Belanova Inc Logo",
    title: "Belanova Inc",
    works: "Desarrollo Web",
    href: "https://www.belanovainc.com/",
  },
  {
    image: "/clientCafeterieLauka.png",
    alt: "Cafetería LauKa Logo",
    title: "Cafetería LauKa",
    works: "Desarrollo Web",
    href: "https://cafeterialauka.es/",
  },
];

export default function Clients() {
  return (
    <section className="container my-10">
      <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: 0.2,
        duration: 1.5,
      }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }} className="py-5 mb-5 bg-black/70 text-background text-center">
        <h3 className="text-center text-3xl font-extralight">
          Algunos de nuestros clientes
        </h3>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-3">
        {clients.map((client) => (
          <CardClientsLogo key={client.title} client={client} />
        ))}
      </div>
    </section>
  );
}
