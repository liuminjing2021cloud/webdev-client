"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUniversity, FaUserCircle, FaTachometerAlt, FaBook, FaCalendarAlt, FaInbox, FaFlask, FaQuestionCircle } from "react-icons/fa";

export default function KambazNavigation() {
  const pathname = usePathname();
  const navigation = [
    { label: "Account", href: "/account", icon: FaUserCircle },
    { label: "Dashboard", href: "/dashboard", icon: FaTachometerAlt },
    { label: "Courses", href: "/dashboard", icon: FaBook },
    { label: "Calendar", href: "/calendar", icon: FaCalendarAlt },
    { label: "Inbox", href: "/inbox", icon: FaInbox },
    { label: "Labs", href: "/labs", icon: FaFlask },
    { label: "History", href: "/history", icon: FaCalendarAlt },
    { label: "AI Help", href: "/labs", icon: FaQuestionCircle },
  ];

  return (
    <div id="wd-kambaz-navigation">
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaUniversity /> Northeastern
      </a>
      {navigation.map(({ label, href, icon: Icon }) => {
        const active = label === "Courses"
          ? pathname.startsWith("/courses/")
          : pathname === href;
        return (
          <Link
            href={href}
            id={`wd-${label.toLowerCase().replace(" ", "-")}-link`}
            className={active ? "wd-active" : undefined}
            aria-current={active ? "page" : undefined}
            key={label}
          >
            <Icon /> {label}
          </Link>
        );
      })}
    </div>
  );
}
