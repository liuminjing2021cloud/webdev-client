"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb({ courseName, courseId }: { courseName: string; courseId: string }) {
  const pathname = usePathname();
  const section = pathname.split("/").at(-1) ?? "home";
  const sectionName = section === "table" ? "People" : `${section[0].toUpperCase()}${section.slice(1)}`;

  return <h2>{courseName} ({courseId}) &gt; {sectionName}</h2>;
}
