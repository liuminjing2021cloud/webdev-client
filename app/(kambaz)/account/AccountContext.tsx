"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type User = { username: string; firstName: string; lastName: string };
type AccountContextValue = { user: User | null; signIn: (username: string) => void; signOut: () => void };
const AccountContext = createContext<AccountContextValue | undefined>(undefined);
export function AccountProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const signIn = (username: string) => setUser({ username, firstName: "Minjing", lastName: "Liu" });
  return <AccountContext.Provider value={{ user, signIn, signOut: () => setUser(null) }}>{children}</AccountContext.Provider>;
}
export function useAccount() { const value = useContext(AccountContext); if (!value) throw new Error("AccountProvider is missing"); return value; }
