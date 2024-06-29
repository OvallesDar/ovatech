"use client"
import { motion } from "framer-motion";
import Link from "next/link";

interface CardServicesProps {
    service: {
        transition: {
            delay: number,
            duration: number
        },
        variants: {
            hidden: {
                opacity: number,
                y: number
            },
            visible: {
                opacity: number,
                y: number
            }
        }
        logo: React.JSX.Element,
        title: string,
        description: string,
        button: string,
        href: string
    }
}

export default function CardServices({ service }: CardServicesProps) {
    
  return (
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={service.transition}
            variants={service.variants}
            className="w-full bg-gradient-to-br from-primary to-secondary text-background flex flex-col items-start gap-3 p-7 rounded-sm"
          >
            {service.logo}
            <h2
              className="text-xl font-medium]"
              style={{
                textShadow:
                  "1px 1px 0 rgba(0,0,0,0.5), -1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5), -1px 1px 0 rgba(0,0,0,0.5)",
              }}
            >
              {service.title}
            </h2>
            <p>
              {service.description}
            </p>
            <Link
              href={service.href}
              className="pt-1 pb-1 pr-1 text-start border-b-[1px] border-secondary text-lg transition ease-in-out duration-300 hover:scale-110"
            >
              {service.button}
            </Link>
          </motion.div>
  )
}
