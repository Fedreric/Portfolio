'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar () {
  const Links = [
    {
      label: "Inicio",
      route: "/"
    },
    {
      label: "Sobre mi",
      route: "/about"
    },
    {
      label: "Proyectos",
      route: "/proyects"
    },
    {
      label: "Tecnologias",
      route: "/stack"
    },
    {
      label: "Contacto",
      route: "/contact"
    }
  ];
  const pathname = usePathname();

  return (
    <header className='bg-slate-900'>
      <nav className=''>
        <ul className='flex gap-4 justify-end me-4'>
          {Links.map((link) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.route}
                className={isActive ? 'text-xl underline decoration-solid my-4 ease-in-out duration-300 hover:scale-[1.1]' : 'text-xl my-4 ease-in-out duration-300 hover:scale-[1.1]'}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
