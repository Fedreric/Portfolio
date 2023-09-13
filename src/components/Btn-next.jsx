"use client";
import { usePathname, useRouter } from "next/navigation";
import { Links } from "@/helpers/navlinks";
import { useEffect, useState } from "react";
import { Icons } from "@/helpers/icons";

export default function Btnnext () {
  const pathname = usePathname();
  const router = useRouter();
  const [actualPageId, setActualPageId] = useState(0);
  const [nextLink, setNextLink] = useState(0);
  useEffect(() => {
    const linkActual = Links.filter((link) => link.route === pathname);
    setActualPageId(linkActual[0].id);
    if (actualPageId >= Links.length) {
      setNextLink(0);
      return;
    }
    setNextLink(actualPageId + 1);
  }, [pathname, actualPageId]);

  const handelNextPage = () => {
    router.push(Links[nextLink].route);
  };

  return (
    <div
      className={
        pathname === "/contact"
          ? "btn-next flex flex-col justify-center bg-slate-900 translate-x-[100%]"
          : "btn-next flex flex-col justify-center bg-slate-900"
      }
    >
      <button
        className={
          pathname === "/contact" ? "m-auto ease-in-out translate-x-[100%]" : "m-auto ease-in-out duration-300 hover:scale-[1.5]"
        }
        onClick={handelNextPage}
      >
        {Icons.rightArrow}
      </button>
    </div>
  );
}
