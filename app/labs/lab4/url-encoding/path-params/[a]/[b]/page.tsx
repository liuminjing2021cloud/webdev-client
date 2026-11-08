"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function PathParameters() {
  const { a = "0", b = "0" } = useParams<{ a: string; b: string }>();
  return <main><h2>Path Parameters</h2><h3 id="wd-path-result">{a} + {b} = {Number(a) + Number(b)}</h3><Link href="/labs/lab4">Back to Lab 4</Link></main>;
}
