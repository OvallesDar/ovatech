import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  const LinksStyles = "hover:text-secondary"

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full bg-black/90 ">
      <div className="container text-background flex gap-5 py-3 md:gap-0 flex-col flex-wrap md:flex-row z-50">
        <section className="flex flex-col justify-center items-center  md:w-2/4 lg:w-1/4 p-5">
          <Link href={"/"}>
            <Image
              src={"/isotipo.png"}
              alt="Isotipo OvaTech"
              width={100}
              height={100}
              priority
            />
          </Link>
          <h3 className="text-center font-semibold">
            Ovatech - Donde transformamos tu presencia online con soluciones
            innovadoras en desarrollo web y marketing digital.
          </h3>
        </section>
        <section className="flex flex-col gap-1 justify-center items-center md:w-2/4 lg:w-1/4 p-5">
          <h3 className="font-semibold text-lg text-secondary">Contacto</h3>
          <Link  href="mailto:info@ovatech.es" className="flex gap-5 hover:text-secondary">
            <Mail />
            info@ovatech.es
          </Link>

          <Link href="tel:+34622083617" className="flex gap-5 mb-5 hover:text-secondary">
            <Phone />
            +34 622 083 617
          </Link>
          <h3 className="font-semibold text-lg text-secondary">RRSS</h3>
          <div className="flex gap-5 mt-1">
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61561101801776&mibextid=LQQJ4d"
              className={LinksStyles}
            >
              <Facebook />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/ovatech.es?igsh=amQ5MDg4OXduaTdh&utm_source=qr"
              className={LinksStyles}
            >
              <Instagram />
            </Link>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center  md:w-2/4 lg:w-1/4 p-5 gap-1">
          <h3 className="font-semibold text-lg text-secondary">Servicios</h3>
          <Link className={LinksStyles} href={"/service/marketingdigital"}>Marketing Digital</Link>
          <Link className={LinksStyles} href={"/service/webdesign"}>Diseño y Desarrollo Web</Link>
          <Link className={LinksStyles} href={"/service/seo"}>Posicionamiento SEO</Link>
        </section>
        <section className="flex flex-col justify-center items-center md:w-2/4 lg:w-1/4 p-5">
          <h3 className="text-center">
            {year}{" "}
            <span className="text-secondary font-semibold">OvaTech.</span> Todos
            los derechos reservados.
          </h3>
        </section>
      </div>
    </footer>
  );
}
