"use client";
import Link from "next/link";
import { useAccount } from "./AccountContext";
export default function AccountNavigation() {
  const { user } = useAccount();
  return (
    <div id="wd-account-navigation">
      {!user && <><Link href="/account/signin">Signin</Link> <br /><Link href="/account/signup">Signup</Link> <br /></>}
      {user && <Link href="/account/profile">Profile</Link>}
    </div>
  );
}
