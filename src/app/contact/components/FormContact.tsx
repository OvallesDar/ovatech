"use client";
import Dialog from "@/components/Dialog";
import Loading from "@/components/Loading";
import useForm from "@/hooks/useForm";
import { motion } from "framer-motion";

const NEXT_PUBLIC_SERVICE = "service_9nzx7rd";
const NEXT_PUBLIC_TEMPLATE = "template_6czfggk";
const NEXT_PUBLIC_KEY = "vmCgyrY2vOPCbKN3X";

export default function FormContact() {
  const { loading, successMessage, refForm, sendEmail, handleSuccesMessage } =
    useForm({ NEXT_PUBLIC_SERVICE, NEXT_PUBLIC_TEMPLATE, NEXT_PUBLIC_KEY });

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
      }}
      className="w-full lg:w-1/2 flex flex-col gap-5 relative"
    >
      {loading ? <Loading /> : null}
      {successMessage ? <Dialog handleSuccesMessage={handleSuccesMessage}/> : null}
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-extralight text-secondary">Contáctanos</h3>
        <h4 className="text-3xl font-extralight">Déjanos un mensaje</h4>
        <p className="text-xl font-extralight">
          Si deseas consultar mayor información sobre nuestros servicios o
          cotizaciones.
        </p>
      </div>
      <form ref={refForm} onSubmit={sendEmail} className="flex flex-col gap-2">
        <input
          required
          className="border-slate-500 border-solid border-[1px] p-2 rounded-sm"
          name="user_name"
          type="text"
          placeholder="Nombre"
        />
        <input
          required
          className="border-slate-500 border-solid border-[1px] p-2 rounded-sm"
          name="user_email"
          type="email"
          placeholder="Email"
        />
        <input
          required
          className="border-slate-500 border-solid border-[1px] p-2 rounded-sm"
          name="user_phone"
          type="tel"
          placeholder="Teléfono"
        />
        <textarea
          required
          className="border-slate-500 border-solid border-[1px] p-2 rounded-sm"
          name="message"
          placeholder="Mensaje"
          rows={5}
        />
        <button className="bg-gradient-to-t from-primary to-secondary text-background font-semibold rounded-sm p-3 hover:from-secondary hover:to-primary">
          Enviar
        </button>
      </form>
    </motion.div>
  );
}
