import { readdirSync } from "node:fs";
import { join } from "node:path";

export default function ServerInfo() {
  const files = readdirSync(join(process.cwd(), "app", "labs"));
  const serverInformation = { arch: process.arch, pid: process.pid };
  return (
    <>
      <pre>{JSON.stringify(serverInformation, null, 2)}</pre>
      <ul>
        {files.slice(0, 3).map((file) => <li key={file}>{file}</li>)}
      </ul>
    </>
  );
}
