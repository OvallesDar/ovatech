import CardAboutTeam from "@/components/CardAboutTeam";

export default function Services() {
    const sections = [
        {
          image: "/webdesing.jpg",
          alt: "Team Group",
          title:
            "Diseño y Desarrollo Web",
          description:
            "Transforma tu presencia online con nuestro desarrollo web personalizado. Creamos sitios atractivos, funcionales y optimizados para mejorar la experiencia del usuario y aumentar tu visibilidad, impulsando el crecimiento de tu negocio.",
          button: "Ver más",
          href: "/service/webdesign"
        },
        {
          image: "/marketingdigital.jpg",
          alt: "Team Group",
          title:
            "Marketing Digital",
          description:
            "Impulsa tu negocio con nuestro marketing digital. Creamos campañas efectivas en redes sociales, gestionando tu presencia en plataformas clave para atraer y fidelizar clientes, aumentar tu alcance y maximizar tu retorno de inversión.",
          button: "Ver más",
          href: "/service/marketingdigital"
        },
        {
          image: "/seo.jpg",
          alt: "Posicionamiento SEO",
          title: "Posicionamiento SEO",
          description:
            "Aumenta tu visibilidad online con nuestro servicio de posicionamiento SEO. Optimizamos tu sitio web para atraer tráfico orgánico de calidad, mejorando tu ranking en motores de búsqueda y aumentando tus conversiones.",
          button: "Ver más",
          href: "/service/seo"
        },
      ];
  return (
    <section className="container mt-10 flex flex-col gap-7  overflow-hidden">
      {sections.map((section, index) => (
        <CardAboutTeam
          key={index}
          section={section}
          direction={(index + 1) % 2 === 0}
        />
      ))}
    </section>
  )
}