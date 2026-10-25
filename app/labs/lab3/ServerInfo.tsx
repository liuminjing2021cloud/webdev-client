import { readdirSync } from "node:fs";
import { join } from "node:path";

export default function ServerInfo() {
  const files = readdirSync(join(process.cwd(), "app", "labs"));
  return (
    <>
      <p>Server information: arch = {process.arch}</p>
      <p>pid = {process.pid}</p>
      <ul>
        {files.slice(0, 3).map((file) => <li key={file}>{file}</li>)}
      </ul>
    </>
  );
}
