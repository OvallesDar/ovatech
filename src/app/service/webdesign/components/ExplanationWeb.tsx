import ImageRoundedFull from "@/components/ImageRoundedFull";
import Link from "next/link";

const items = [
  {
    image: "/web1.jpg",
    title: "Transforma tu Presencia Online con Ovatech",
    description:
      "En Ovatech, entendemos que tu sitio web es la cara de tu negocio en el mundo digital. Nuestro objetivo es proporcionarte un sitio web atractivo, funcional y optimizado que no solo refleje tu marca, sino que también impulse tu crecimiento. Con un equipo de expertos en diseño y desarrollo web, estamos aquí para convertir tu visión en realidad.",
  },
  {
    image: "/web2.jpg",
    title: "Análisis y Planificación",
    description:
      "Nos reunimos contigo para escuchar y comprender en profundidad tu proyecto, ideas y necesidades. Analizamos cada detalle para diseñar una estrategia personalizada que se ajuste perfectamente a tus objetivos comerciales. Este enfoque inicial garantiza que el desarrollo de tu sitio web se alinee con tus expectativas y las necesidades de tu público objetivo.",
  },
  {
    image: "/web3.jpg",
    title: "Diseño Creativo y Personalizado",
    description:
      "El diseño es una parte fundamental de cualquier proyecto web. Nuestro equipo de diseñadores se dedica a crear una interfaz visualmente atractiva y fácil de navegar. Trabajamos estrechamente contigo para asegurarnos de que el diseño refleje la identidad de tu marca y ofrezca una excelente experiencia de usuario.",
  },
  {
    image: "/web4.jpg",
    title: "Desarrollo y Ejecución",
    description:
      "Una vez aprobado el diseño, nuestros desarrolladores comienzan a construir tu sitio web utilizando las últimas tecnologías y mejores prácticas. Mantenemos una comunicación constante contigo, permitiéndote seguir los avances en tiempo real. Este enfoque por fases asegura que el proyecto se mantenga en el camino correcto y permite ajustes según sea necesario.",
  },
  {
    image: "/web5.jpg",
    title: "Optimización y Pruebas",
    description:
      "La optimización es clave para el rendimiento de tu sitio web. Nos aseguramos de que cada página esté optimizada para la velocidad y la accesibilidad, además de cumplir con las mejores prácticas de SEO. Realizamos pruebas exhaustivas para identificar y corregir cualquier problema, garantizando una experiencia de usuario fluida y sin interrupciones.",
  },
  {
    image: "/web6.jpg",
    title: "Entrega Final y Capacitación",
    description:
      "Una vez que apruebes el proyecto, te entregamos un sitio web completamente funcional. Nos aseguramos de que entiendas cómo utilizar y mantener tu nuevo sitio, proporcionándote una guía detallada y soporte continuo. Queremos que te sientas cómodo gestionando tu presencia online y sacando el máximo provecho de tu inversión.",
  },
  {
    image: "/web7.jpg",
    title: "Soporte y Mantenimiento Continuo",
    description:
      "En Ovatech, nuestra relación no termina con la entrega del proyecto. Ofrecemos soporte y mantenimiento continuo para asegurarnos de que tu sitio web siga funcionando perfectamente. Desde actualizaciones regulares hasta asistencia técnica, estamos aquí para ayudarte a enfrentar cualquier desafío que surja.",
  },
];

export default function ExplanationWeb() {
  return (
    <>
      <div className="container">
        <h2 className="text-3xl font-extralight bg-slate-200/40 py-8 mb-5 text-center">
          Desarrollo Web
        </h2>
      </div>
      <div className="py-5">
        {items.map((item, index) => (
          <ImageRoundedFull
            key={index}
            item={item}
            direction={index % 2 === 0}
          />
        ))}
      </div>
      <Link className="fixed z-50 right-8 lg:right-24 top-24 lg:bottom-24 lg:top-auto bg-primary text-white py-3 px-5 rounded-sm" href={"/services"}>Atrás</Link>
    </>
  );
}
