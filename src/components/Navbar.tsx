"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if(navbar){
        if (window.scrollY > 0) {
          navbar.classList.remove('bg-background/85');
        navbar.classList.add('bg-background');
      } else {
        navbar.classList.remove('bg-background');
      navbar.classList.add('bg-background/85');
    }
  };
}
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const links = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Nosotros",
      href: "/about",
    },
    {
      name: "Servicios",
      href: "/services",
    },
    {
      name: "Contáctanos",
      href: "/contact",
    },
  ];



  return (
    <nav id="navbar" className="flex items-center justify-between w-screen h-20 bg-background/85 border-b-[1px] fixed top-0 z-50">
      <Link href={"/"}>
      <Image
        className="w-52 h-[82] ml-2 object-cover"
        priority
        src="/logotipo.png"
        alt="logotipo"
        width={200}
        height={100}
        />
        </Link>

      <div className="mr-7 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={30} className="text-primary cursor-pointer"/>
          </SheetTrigger>
          <SheetContent
            side={"right"}
            className="bg-gradient-to-t from-slate-50 to-slate-100"
          >
            <div className="flex flex-col h-5/6 justify-center">
              {links.map(({ href, name }) => (
                <div key={name}>
                  <SheetClose asChild>
                    <Link
                      href={href}
                      className={`flex items-center justify-center rounded-sm w-full h-14 ${pathname === href && "text-background bg-cyan-700"}`}
                    >
                      {name}
                    </Link>
                  </SheetClose>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex flex-1 justify-evenly">
      {links.map(({ href, name }) => (
                <div key={name}>
                  
                    <Link
                      href={href}
                      className={`flex items-center rounded-sm px-5 py-3 text-lg ${pathname === href && "text-background bg-cyan-700"}`}
                    >
                      {name}
                    </Link>
                </div>
              ))}
      </div>
    </nav>
  );
}

export default Navbar;
