"use client"
import ButtonContact from "@/components/ButtonContact"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
const buttons = [
    {
        href: "tel:+34622083617",
        logo: <Phone size={30} strokeWidth={1} />
    },
    {
        href: "mailto:info@ovatech.es",
        logo: <Mail size={30} strokeWidth={1} />
    },
    {
        href: "https://www.instagram.com/ovatech.es?igsh=amQ5MDg4OXduaTdh&utm_source=qr",
        logo: <Instagram size={30} strokeWidth={1} />
    },
    {
        href: "https://www.facebook.com/profile.php?id=61561101801776&mibextid=LQQJ4d",
        logo: <Facebook size={30} strokeWidth={1} />
    }

]
export default function ButtonsContact() {
  return (
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
      },
      visible: {
        opacity: 1,
      },
    }} className="w-full lg:w-1/2 gap-5 flex flex-wrap text-background font-medium justify-center">
        {
            buttons.map((button, index)=> (
                <ButtonContact key={index} button={button} bgIndex={index % 2 === 0} /> 
            ))
        }
    </motion.div>
  )
}
