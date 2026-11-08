"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "../AccountContext";
export default function Profile() {
  const { user, signOut } = useAccount(); const router = useRouter();
  useEffect(() => { if (!user) router.replace("/account/signin"); }, [user, router]);
  if (!user) return null;
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        defaultValue={user.username}
        placeholder="username"
        className="wd-username"
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <input defaultValue={user.firstName} placeholder="First Name" id="wd-firstname" />
      <br />
      <input
        defaultValue={user.lastName}
        placeholder="Last Name"
        id="wd-lastname"
      />
      <br />
      <input defaultValue="2000-01-01" type="date" id="wd-dob" />
      <br />
      <input defaultValue="alice@wonderland" type="email" id="wd-email" />
      <br />
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <button onClick={() => { signOut(); router.push("/account/signin"); }}>Sign out</button>
    </div>
  );
}
