const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER ?? "http://localhost:4000";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${HTTP_SERVER}${path}`, init);
  if (!response.ok) throw new Error(`Request failed: HTTP ${response.status}`);
  const contentType = response.headers.get("content-type") ?? "";
  return (contentType.includes("application/json") ? response.json() : response.text()) as Promise<T>;
}

export const fetchWelcomeMessage = () => request<string>("/lab5/welcome");
export const calculateOnServer = (a: string, b: string, operation: string) => request<{ result: number }>(`/lab5/calculator?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&operation=${encodeURIComponent(operation)}`);
export { HTTP_SERVER };
