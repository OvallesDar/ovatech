"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardAboutTeamProps {
  direction: boolean;
  section: {
    image: string;
    alt: string;
    title: string;
    description: string;
    description2?: string;
    button: string;
    href: string;
  };
}
export default function CardAboutTeam({
  section,
  direction,
}: CardAboutTeamProps) {
  return (
    <div
      className={`flex flex-col gap-7 ${
        direction ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <motion.div
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
            x: direction ? -100 : 100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        className="w-full h-auto md:w-1/2 flex items-center justify-center"
      >
        <Image
          className=" h-auto rounded-xl"
          src={section.image}
          alt={section.alt}
          height={500}
          width={500}
        />
      </motion.div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-3">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: direction ? 100 : -100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="font-light text-2xl"
        >
          {section.title}
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: direction ? 100 : -100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          className="font-light text-lg"
        >
          {" "}
          {section.description}
        </motion.p>
        {section.description2 && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: direction ? 100 : -100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            className="font-light text-lg"
          >
            {section.description2}
          </motion.p>
        )}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          className="py-2"
        >
          <Link
            className="bg-gradient-to-t from-primary to-secondary text-background font-semibold rounded-lg px-3 py-2 hover:from-secondary hover:to-primary"
            href={section.href}
          >
            {section.button}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
