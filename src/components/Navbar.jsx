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
                key={link.id}
                className={isActive ? 'text-xl border-b-2 border-violet-600 my-4 px-1' : 'text-xl px-1 my-4 ease-out duration-200 hover:scale-[1.07]'}
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
