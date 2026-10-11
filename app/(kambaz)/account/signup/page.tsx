import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <label htmlFor="wd-signup-username">Username</label>
      <input
        id="wd-signup-username"
        placeholder="username"
        className="wd-username"
        defaultValue="ada"
      />
      <br />
      <label htmlFor="wd-signup-password">Password</label>
      <input
        id="wd-signup-password"
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue="123"
      />
      <br />
      <label htmlFor="wd-signup-password-verify">Verify Password</label>
      <input
        id="wd-signup-password-verify"
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
      />
      <br />
      <Link href="/account/profile">Sign up</Link>
      <br />
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}
