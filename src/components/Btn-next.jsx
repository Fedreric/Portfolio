"use client";
import { usePathname } from "next/navigation";
import { Links } from "@/helpers/navlinks";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Btnnext () {
  const pathname = usePathname();
  const linkActual = Links.filter((link) => link.route === pathname);
  const [nextLink, setNextLink] = useState(linkActual[0].id + 1);
  useEffect(() => {
    if (nextLink > Links.length) {
      setNextLink(0);
    }
  }, [nextLink]);

  return (
    <div
      className={
        pathname === "/contact"
          ? "btn-next flex flex-col justify-center bg-slate-900 hidden"
          : "btn-next flex flex-col justify-center bg-slate-900"
      }
    >
      <Link className='m-auto' href={Links[nextLink]?.route}>
        next
      </Link>
    </div>
  );
}
