"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = ["Home", "Modules", "Assignments", "People", "Announcements"];
  return (
    <div id="wd-courses-navigation">
      {links.map((label) => {
        const segment = label === "People" ? "people/table" : label.toLowerCase();
        const href = `/courses/${cid}/${segment}`;
        const active = pathname === href;
        return <Link href={href} className={active ? "wd-active" : undefined} aria-current={active ? "page" : undefined} key={label}>{label}</Link>;
      })}
    </div>
  );
}
