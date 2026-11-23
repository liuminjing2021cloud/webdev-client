"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

const exercises = [
  "Welcome", "Environment Variables", "Path Parameters", "Query Parameters", "Remote Object", "Remote Array", "Todos", "HTTP Client", "Requesting on Load", "Next.js Route Handler", "Hello Route", "Calculator API", "Calculator UI", "Kambaz Courses API", "Kambaz Modules API",
];

export default function Lab5() {
  const [welcome, setWelcome] = useState("");
  const [a, setA] = useState("10");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  useEffect(() => { client.fetchWelcomeMessage().then(setWelcome).catch((reason) => setError(reason.message)); }, []);
  const calculate = async () => {
    setError("");
    try {
      const response = await fetch(`/api/lab5/calculator?a=${a}&b=${b}&operation=${operation}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Calculation failed");
      setResult(String(data.result));
    }
    catch (reason) { setError(reason instanceof Error ? reason.message : "Calculation failed"); }
  };
  return <div id="wd-lab5"><h2>Lab 5</h2>
    {exercises.map((title) => <section key={title}><h3>{title}</h3></section>)}
    <p><code>NEXT_PUBLIC_HTTP_SERVER</code>: {client.HTTP_SERVER}</p>
    <a id="wd-welcome-link" href={`${client.HTTP_SERVER}/lab5/welcome`} target="_blank" rel="noreferrer">Welcome on Express server</a>
    <p>Response from server: <b>{welcome}</b></p>
    <div><label>A <input value={a} onChange={(event) => setA(event.target.value)} /></label><label>B <input value={b} onChange={(event) => setB(event.target.value)} /></label><select value={operation} onChange={(event) => setOperation(event.target.value)}><option value="add">Add</option><option value="subtract">Subtract</option><option value="multiply">Multiply</option><option value="divide">Divide</option></select><button type="button" onClick={calculate}>Calculate</button><output>{result}</output>{error && <p role="alert">{error}</p>}</div>
  </div>;
}
