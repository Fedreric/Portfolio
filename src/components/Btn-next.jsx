"use client";
import { usePathname } from "next/navigation";

export default function Btnnext () {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={
        pathname === "/contact"
          ? "btn-next flex flex-col justify-center bg-slate-900 hidden"
          : "btn-next flex flex-col justify-center bg-slate-900"
      }
    >
      <b className='m-auto'>next</b>
    </div>
  );
}
