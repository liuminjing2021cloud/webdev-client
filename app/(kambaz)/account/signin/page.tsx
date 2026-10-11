import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <label htmlFor="wd-username">Username</label>
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username"
        defaultValue="ada"
      />{" "}
      <br />
      <label htmlFor="wd-password">Password</label>
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue="123"
      />{" "}
      <br />
      <label htmlFor="wd-ai-signin-note">Sign-in Note</label>
      <input
        id="wd-ai-signin-note"
        placeholder="AI sample note"
        defaultValue="Remember to sign out on a shared computer."
      />
      <br />
      <Link href="/dashboard" id="wd-signin-btn">
        Sign in
      </Link>{" "}
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
