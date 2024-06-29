"use client";
import { motion } from "framer-motion";
import FullContactPage from "./components/FullContactPage";

export default function page() {
  return (
    <section className="mt-20 overflow-hidden">
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
        className="relative right-1/4 w-full h-14 bg-gradient-to-t from-secondary to-primary rounded-br-full mb-3"
      />
      <FullContactPage />
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
        className="relative left-1/4 w-full h-14 bg-gradient-to-t from-primary to-secondary rounded-tl-full mt-3"
      />
    </section>
  );
}
