"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageRoundedFullProps {
    item: {
        image: string
        title: string
        description: string
      }
    direction: boolean
}

export default function ImageRoundedFull({item, direction}: ImageRoundedFullProps) {
    const {description,image,title} = item
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
      }} id="card-container" className={`flex flex-col gap-3 ${direction ? "lg:flex-row" : "lg:flex-row-reverse"} container justify-center items-center mb-5`}>
            <div id="card-image" className="w-full lg:w-4/12 flex justify-center">
            <Image className="w-60 h-60 rounded-full object-cover" src={image} alt="landing image" height={300} width={300}></Image>
            </div>
            <div id="card-info" className="w-full lg:w-8/12 flex flex-col gap-2">
                <h2 className="text-2xl font-light">{title}</h2>
                <p className="text-lg font-extralight">{description}</p>
            </div>
        </motion.section>
  )
}
