"use client";
import { leftArrow } from "@/helpers/icons";
import { Links } from "@/helpers/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Btnprev () {
  const pathname = usePathname();
  const linkActual = Links.filter((link) => link.route === pathname);
  const [prevLink, setPrevLink] = useState(linkActual[0].id);

  useEffect(() => {
    if (linkActual[0].id > 0) {
      setPrevLink(linkActual[0].id - 1);
    }
  }, [linkActual]);
  return (
    <div
      className={
        pathname === "/"
          ? "btn-prev flex flex-col justify-center bg-slate-900 translate-x-[-100%]"
          : "btn-prev flex flex-col justify-center bg-slate-900"
      }
    >
      <Link
        className={pathname === "/" ? "m-auto ease-in-out translate-x-[-100%]" : "m-auto ease-in-out duration-300 hover:scale-[1.5]"}
        href={Links[prevLink]?.route}
      >
        {leftArrow}
      </Link>
    </div>
  );
}
