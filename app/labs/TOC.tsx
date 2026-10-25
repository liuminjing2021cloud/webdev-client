"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function TOC() {
  const pathname = usePathname();
  const labLinks = [1, 2, 3, 4, 5];
  return (
    <nav aria-label="Labs navigation">
      <p>Minjing Liu (Genesee)</p>
      <a href="https://github.com/liuminjing2021cloud/webdev-client" id="wd-github">GitHub repository</a>
      <Link href="/labs" id="wd-home-link">Home</Link><br />
      {labLinks.map((number) => {
        const href = `/labs/lab${number}`;
        const active = pathname === href;
        return <span key={number}><Link href={href} aria-current={active ? "page" : undefined} className={active ? "wd-lab-active" : undefined}>Lab {number}</Link><br /></span>;
      })}
      <Link href="/dashboard" id="wd-kambaz-link">Kambaz</Link><br />
      <Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link>
      <br />
      <a href="https://kambaz.dev/book/ch3">Book Ch3</a>
    </nav>
  );
}

