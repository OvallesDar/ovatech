import ImageRoundedFull from "@/components/ImageRoundedFull";
import Link from "next/link";

const items = [
    {
      image: "/seo1.jpg",
      title: "Aumenta tu Visibilidad Online con Estrategias SEO Efectivas",
      description:
        "En Ovatech, sabemos que un buen posicionamiento en los motores de búsqueda es crucial para el éxito de tu negocio en línea. Nuestro objetivo es mejorar tu visibilidad y atraer tráfico orgánico de calidad a tu sitio web a través de técnicas avanzadas de SEO. Contamos con un equipo de expertos que desarrollará una estrategia personalizada para alcanzar y mantener las primeras posiciones en los resultados de búsqueda.",
    },
    {
      image: "/seo2.jpg",
      title: "Análisis y Auditoría SEO",
      description:
        "Iniciamos el proceso con un análisis exhaustivo de tu sitio web y una auditoría SEO completa. Identificamos áreas de mejora y oportunidades para optimizar tu sitio. Este diagnóstico inicial nos permite diseñar una estrategia efectiva que aborde tus necesidades específicas y maximice tu potencial de crecimiento en los motores de búsqueda.",
    },
    {
      image: "/seo3.jpg",
      title: "Optimización On-Page",
      description:
      "Nos enfocamos en la optimización on-page, ajustando cada elemento de tu sitio web para mejorar su rendimiento en los motores de búsqueda. Esto incluye la optimización de contenido, meta etiquetas, encabezados, imágenes y estructura del sitio. Nuestro objetivo es asegurarnos de que tu sitio sea relevante, rápido y fácil de navegar tanto para los usuarios como para los motores de búsqueda."
        },
    {
      image: "/seo4.jpg",
      title: "Estrategias de Contenido",
      description:
        "El contenido es fundamental para un buen SEO. Creamos y optimizamos contenido de alta calidad que responda a las preguntas y necesidades de tu audiencia. Desde blogs y artículos hasta descripciones de productos y servicios, nos aseguramos de que tu contenido sea valioso, relevante y esté bien estructurado para los motores de búsqueda."
    },
    {
      image: "/seo5.jpg",
      title: "Optimización Técnica",
      description:
        "La optimización técnica es esencial para asegurar que los motores de búsqueda puedan rastrear e indexar tu sitio web de manera eficiente. Realizamos mejoras técnicas como la optimización de la velocidad del sitio, la corrección de errores de rastreo, la implementación de datos estructurados y la mejora de la experiencia móvil. Esto garantiza que tu sitio web funcione sin problemas y esté alineado con las mejores prácticas de SEO."
    },
    {
      image: "/seo6.jpg",
      title: "Construcción de Enlaces (Link Building)",
      description:
        "La construcción de enlaces es una parte clave de nuestra estrategia de SEO. Creamos una red de enlaces de alta calidad que apunten a tu sitio web, aumentando su autoridad y relevancia en los motores de búsqueda. Utilizamos técnicas éticas y efectivas para asegurarnos de que los enlaces sean naturales y beneficiosos para tu posicionamiento."
    },
    {
      image: "/seo7.jpg",
      title: "Monitoreo y Reportes",
      description:
        "Seguimos de cerca el rendimiento de nuestras estrategias de SEO a través de herramientas avanzadas de análisis. Te proporcionamos reportes detallados y fáciles de entender, que muestran el progreso y los resultados obtenidos. Estos informes nos permiten ajustar y mejorar continuamente nuestras tácticas para garantizar el éxito a largo plazo."
    },
  ];

export default function ExplanationSEO() {
  return (
    <>
      <div className="container">
        <h2 className="text-3xl font-extralight bg-slate-200/40 py-8 mb-5 text-center">
          Posicionamiento SEO
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
