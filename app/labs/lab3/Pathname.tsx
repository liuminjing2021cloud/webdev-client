"use client";

import { usePathname } from "next/navigation";

export default function Pathname() {
  const pathname = usePathname();
  return (
    <>
      <p id="wd-pathname">Current pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
      <p>Last segment: {pathname.split("/").at(-1)}</p>
    </>
  );
}
