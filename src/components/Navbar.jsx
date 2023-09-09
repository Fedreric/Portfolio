'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Links } from "@/helpers/navlinks";
export default function Navbar () {
  const pathname = usePathname();

  return (
    <header className='bg-slate-900 py-4'>
      <nav>
        <ul className='flex gap-4 justify-end me-4'>
          {Links.map((link) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.route}
                className={isActive ? 'text-xl underline decoration-solid my-4 ease-in-out duration-300 hover:scale-[1.07]' : 'text-xl my-4 ease-in-out duration-300 hover:scale-[1.07]'}
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
