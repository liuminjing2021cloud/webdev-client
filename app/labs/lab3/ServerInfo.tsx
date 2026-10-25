import { readdirSync } from "node:fs";
import { join } from "node:path";

export default function ServerInfo() {
  const files = readdirSync(join(process.cwd(), "app", "labs", "lab3"));
  const serverInformation = { arch: process.arch, pid: process.pid };
  return (
    <>
      <pre>{JSON.stringify(serverInformation, null, 2)}</pre>
      <ul id="wd-server-files">
        {files.slice(0, 3).map((file) => <li key={file}>{file}</li>)}
      </ul>
    </>
  );
}
