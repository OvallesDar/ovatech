import CardAboutTeam from "@/components/CardAboutTeam"

const ovatechInfo = {
    image: "/image1.jpg",
    alt: "Team Group",
    title:
      "En Ovatech contamos con un equipo de profesionales expertos en diseño web, desarrollo y marketing digital.",
    description:
      "Nuestro equipo se dedica a crear sitios web atractivos y funcionales, así como a implementar estrategias de marketing digital personalizadas. Nos enfocamos en optimizar tu presencia en línea, mejorando tu visibilidad en los motores de búsqueda y atrayendo a clientes potenciales para maximizar tu crecimiento y éxito en el mercado digital.",
    button: "Contáctanos",
    href: "/contact"
  }

function Ovatech() {
  return (
    <section className="flex flex-col overflow-hidden py-10">
        <CardAboutTeam
          section={ovatechInfo}
          direction={true}
        />
    </section>
  )
}

export default Ovatech