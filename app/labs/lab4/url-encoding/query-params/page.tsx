"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function QueryParameters() {
  const searchParams = useSearchParams();
  const a = Number(searchParams.get("a") ?? 0); const b = Number(searchParams.get("b") ?? 0);
  return <main><h2>Query Parameters</h2><h3 id="wd-query-result">{a} + {b} = {a + b}</h3><Link href="/labs/lab4">Back to Lab 4</Link></main>;
}
