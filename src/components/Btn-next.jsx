"use client";
import { usePathname, useRouter } from "next/navigation";
import { Links } from "@/helpers/navlinks";
import { useEffect, useState } from "react";

export default function Btnnext () {
  const pathname = usePathname();
  const router = useRouter();
  const [actualPageId, setActualPageId] = useState(0)
  const [nextLink, setNextLink] = useState(0);
  useEffect(() => {
    const linkActual = Links.filter((link) => link.route === pathname);
    setActualPageId(linkActual[0].id)
    if (actualPageId >= Links.length) {
      setNextLink(0);
      return
    }
    setNextLink(actualPageId + 1)
  }, [pathname, actualPageId])

  const handelNextPage = () => {
    router.push(Links[nextLink].route)
  }

  return (
    <div
      className={
        pathname === "/contact"
          ? "btn-next flex flex-col justify-center bg-slate-900 hidden"
          : "btn-next flex flex-col justify-center bg-slate-900"
      }
    >
      <button className='m-auto' onClick={handelNextPage}>
        next
      </button>
    </div>
  );
}
