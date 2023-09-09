"use client";
import { usePathname } from "next/navigation";

export default function Btnprev () {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={
        pathname === "/"
          ? "btn-prev flex flex-col justify-center bg-slate-900 hidden"
          : "btn-prev flex flex-col justify-center bg-slate-900"
      }
    >
      <b className='m-auto'>prev</b>
    </div>
  );
}
