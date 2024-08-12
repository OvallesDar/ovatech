"use client";
import CardClientsLogo from "@/components/CardClientsLogo";
import { motion } from "framer-motion";

const clients = [
  {
    image: "/clientLimaService.png",
    alt: "Lima Service Logo",
    title: "Agencia Lima Service",
    works: "Desarrollo Web",
    href: "https://www.agencialimaservice.com/",
  },
  {
    image: "/clientDrVictoria.png",
    alt: "D&R Victoria Logo",
    title: "D&R Victoria",
    works: "Desarrollo Web - Marketing Digital",
    href: "https://www.drvictoriaperu.com/",
  },
  {
    image: "/clientBelanova.png",
    alt: "Belanova Inc Logo",
    title: "Belanova Inc",
    works: "Desarrollo Web",
    href: "https://www.belanovainc.com/",
  },
  {
    image: "/clientSantaAna.png",
    alt: "Santa Ana Garachico Logo",
    title: "Santa Ana Garachico",
    works: "Desarrollo Web",
    href: "https://santaanagarachico.vercel.app/",
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
