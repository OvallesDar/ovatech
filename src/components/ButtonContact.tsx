
import Link from "next/link";

interface ButtonContactProps {
    button : {
        href: string
        logo: React.JSX.Element
    }
    bgIndex: boolean
}

export default function ButtonContact({button, bgIndex} : ButtonContactProps) {
    const { href, logo } = button
  return (
    <Link
      href={href}
      target="_blank"
      className={`flex flex-col justify-center items-center shadow-md shadow-black/50 w-16 h-16  rounded-full ${bgIndex ? "bg-primary" : "bg-secondary"}`}
    >
      {logo}
    </Link>
  );
}
