import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account">
      <AccountNavigation />
      <div className="wd-account-content">{children}</div>
    </div>
  );
}
