"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardClientsLogoProps {
  client: {
    image: string;
    alt: string;
    title: string;
    works: string;
    href: string
  };
}

export default function CardClientsLogo({ client }: CardClientsLogoProps) {
  return (
    <motion.section
    initial="hidden"
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
    }} className="w-72 h-72 relative bg-gradient-to-br to-primary from-secondary flex justify-center items-center rounded-md">
      <Image
        className="w-5/6 h-auto"
        src={client.image}
        alt={client.alt}
        width={780}
        height={780}
      />
      <Link href={client.href} target="_blank" className="absolute inset-0 rounded-md flex flex-col items-center justify-center bg-black/70 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl">{client.title}</h3>
        <p>{client.works}</p>
        <p className="mt-5 text-primary">Visitar</p>
      </Link>
    </motion.section>
  );
}
