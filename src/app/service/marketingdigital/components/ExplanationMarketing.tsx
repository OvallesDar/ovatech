import ImageRoundedFull from "@/components/ImageRoundedFull";
import Link from "next/link";

const items = [
    {
      image: "/marketing1.jpg",
      title: "Impulsa tu Negocio con Estrategias de Social Media",
      description:
        "En Ovatech, entendemos la importancia de una sólida presencia en redes sociales para el éxito de tu negocio en el entorno digital actual. Nuestro objetivo es ayudarte a conectar con tu audiencia, aumentar tu visibilidad y fidelizar a tus clientes a través de estrategias de marketing digital efectivas y personalizadas en las principales plataformas de social media.",
    },
    {
      image: "/marketing2.jpg",
      title: "Análisis y Estrategia Personalizada",
      description:
        "Comenzamos con una reunión contigo para comprender tus objetivos, audiencia y necesidades específicas. A partir de esta información, desarrollamos una estrategia de social media personalizada que se alinee con tu marca y objetivos comerciales. Nos aseguramos de seleccionar las plataformas más adecuadas para tu negocio, ya sea Facebook, Instagram, Twitter, LinkedIn u otras.",
    },
    {
      image: "/marketing3.jpg",
      title: "Creación de Contenido Atractivo",
      description:
        "El contenido es el corazón de cualquier estrategia de social media. Nuestro equipo de expertos en marketing digital y creativos se dedica a crear contenido atractivo y relevante que capte la atención de tu audiencia. Desde imágenes y videos hasta publicaciones y stories, diseñamos contenido que resuene con tu público y fomente la interacción.",
    },
    {
      image: "/marketing4.jpg",
      title: "Gestión de Redes Sociales",
      description:
        "Nos encargamos de la gestión completa de tus cuentas de redes sociales. Esto incluye la planificación, programación y publicación de contenido, así como la interacción con tus seguidores. Nuestro objetivo es mantener una presencia activa y coherente que fortalezca la relación con tu audiencia y fomente la lealtad a la marca.",
    },
    {
      image: "/marketing5.jpg",
      title: "Publicidad en Redes Sociales",
      description:
        "Las campañas publicitarias en redes sociales son una herramienta poderosa para alcanzar a tu público objetivo de manera efectiva. Creamos y gestionamos anuncios en plataformas como Facebook Ads, Instagram Ads y LinkedIn Ads, optimizando cada campaña para maximizar el retorno de inversión. Utilizamos técnicas avanzadas de segmentación para asegurarnos de que tus anuncios lleguen a las personas adecuadas.",
    },
    {
      image: "/marketing6.jpg",
      title: "Análisis y Reportes Detallados",
      description:
        "Medimos el rendimiento de nuestras estrategias a través de análisis detallados y reportes regulares. Te mantenemos informado sobre el crecimiento de tu presencia en redes sociales, la interacción con tu contenido y el impacto de las campañas publicitarias. Estos insights nos permiten ajustar y mejorar continuamente nuestras estrategias para asegurar el éxito de tu negocio.",
    },
    {
      image: "/marketing7.jpg",
      title: "Conecta y Fideliza con Email Marketing",
      description:
        "El email marketing es una herramienta poderosa para conectar directamente con tus clientes y mantenerlos informados sobre tus productos, servicios y promociones. En Ovatech, diseñamos y ejecutamos campañas de email marketing efectivas que generan resultados tangibles para tu negocio.",
    },
  ];
export default function ExplanationMarketing() {
  return (
    <>
    <div className="container">
        <h2 className="text-3xl font-extralight bg-slate-200/40 py-8 mb-5 text-center">
          Marketing Digital
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
  )
}