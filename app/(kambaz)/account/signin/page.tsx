"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAccount } from "../AccountContext";
export default function Signin() {
  const [username, setUsername] = useState(""); const [password, setPassword] = useState(""); const { signIn } = useAccount(); const router = useRouter();
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        placeholder="username"
        className="wd-username"
        value={username} onChange={(event) => setUsername(event.target.value)}
      />{" "}
      <br />
      <input
        placeholder="password"
        type="password"
        className="wd-password"
        value={password} onChange={(event) => setPassword(event.target.value)}
      />{" "}
      <br />
      <button id="wd-signin-btn" onClick={() => { signIn(username || "student"); router.push("/dashboard"); }}>Sign in</button>{" "}
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
