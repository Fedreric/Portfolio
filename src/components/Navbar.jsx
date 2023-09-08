import Link from "next/link";

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
  return (
    <header className=''>
      <nav className=''>
        <ul className='flex gap-4 my-5 me-5 fixed right-0 border-solid border-b-2 border-indigo-600 '>
          {Links.map((link) => (
            <li key={link.route} className='text-xl my-4 ease-in-out duration-300 hover:scale-[1.1]'>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
