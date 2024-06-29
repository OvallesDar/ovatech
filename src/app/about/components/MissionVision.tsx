
import CardMisionVision from "@/components/CardMisionVision";
const purposes = [
  {
    title: "Misión",
    description: "En Ovatech, nuestra misión es proporcionar soluciones innovadoras y personalizadas en diseño web, desarrollo y marketing digital, ayudando a nuestros clientes a alcanzar sus objetivos comerciales y maximizar su presencia online. Nos comprometemos a ofrecer servicios de alta calidad con transparencia y eficiencia, asegurando el éxito y la satisfacción de nuestros clientes.",
  },
  {
    title: "Visión",
    description: "Nuestra visión es ser líderes en la industria digital, reconocidos por nuestra excelencia en diseño y desarrollo web, así como en estrategias de marketing digital. Aspiramos a transformar negocios mediante la implementación de tecnologías avanzadas y estrategias efectivas, contribuyendo al crecimiento y éxito sostenido de nuestros clientes en el entorno digital global.",
  },
];

export default function MissionVision() {
  return (
    <section
    className="flex flex-col md:flex-row justify-center gap-2 mb-8">
      {purposes.map((purpose) => (
        <CardMisionVision key={purpose.title} purpose={purpose} />
      ))}
    </section>
  );
}
