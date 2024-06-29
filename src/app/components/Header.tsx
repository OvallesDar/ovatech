"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-[url('/bground.jpg')] bg-no-repeat bg-cover overflow-hidden">
      <div className="w-full h-[80vh] lg:h-[86vh] absolute bg-black/70" />
      <section className="w-full h-[80vh] lg:h-[86vh] flex justify-center items-center container text-center">
        <div className="flex flex-col gap-5 sm:w-2/3 lg:w-1/2 z-20 landscape:mt-20 landscape:gap-3">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl lg:text-5xl font-bold text-background"
            style={{
              textShadow:
                "1px 1px 0 rgba(0,0,0,0.5), -1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5), -1px 1px 0 rgba(0,0,0,0.5)",
            }}
          >
            Expertos en Desarrollo Web y Marketing Digital.
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-xl lg:text-xl font-bold bg-cyan-700/80 text-background rounded-sm py-1 px-3"
            style={{
              textShadow:
                "1px 1px 0 rgba(0,0,0,0.5), -1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5), -1px 1px 0 rgba(0,0,0,0.5)",
            }}
          >
            Impulsa tu negocio online con estrategias avanzadas de desarrollo y
            marketing digital.
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href={"/contact"}
              className="bg-gradient-to-t from-primary to-secondary text-background font-semibold rounded-lg px-3 py-2 hover:from-secondary hover:to-primary"
              style={{
                textShadow:
                  "1px 1px 0 rgba(0,0,0,0.5), -1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5), -1px 1px 0 rgba(0,0,0,0.5)",
              }}
            >
              Contáctanos
            </Link>
          </motion.div>
        </div>
      </section>
    </header>
  );
}
