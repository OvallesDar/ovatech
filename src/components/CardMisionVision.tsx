"use client"
import {motion} from "framer-motion"
interface CardMisionVisionProps {
  purpose: {
    title: string;
    description: string;
  };
}

export default function CardMisionVision({ purpose }: CardMisionVisionProps) {
  const { title, description } = purpose;
  return (
    <motion.div  initial="hidden"
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
    }} className="bg-slate-50 container py-10 rounded-lg">
      <div className="flex gap-3 justify-center items-center flex-col">
        <h3 className="text-3xl font-extralight text-center">{title}</h3>
        <div className="w-11/12 h-1 bg-primary rounded-full"></div>
      </div>
      <p className="text-lg font-light my-5">{description}</p>
    </motion.div>
  );
}
