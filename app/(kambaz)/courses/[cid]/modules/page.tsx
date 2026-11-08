"use client";
import { useState } from "react";
import { KambazModule, useKambazStore } from "../../../store";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleEditor from "./ModuleEditor";
export default function Modules() {
  const modules = useKambazStore((state) => state.modules); const updateModule = useKambazStore((state) => state.updateModule); const deleteModule = useKambazStore((state) => state.deleteModule);
  const [editing, setEditing] = useState<KambazModule | null>(null);
  return <div><button type="button">Collapse All</button> <button type="button">View Progress</button> <select defaultValue="publish-all"><option value="publish-all">Publish All</option><option value="unpublish-all">Unpublish All</option></select> <ModuleEditor />
    <ul id="wd-modules">{modules.map((module) => <li className="wd-module" key={module._id}>{editing?._id === module._id ? <><input aria-label="Edit module" value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} /><button onClick={() => { updateModule(editing); setEditing(null); }}>Save</button></> : <div className="wd-title">{module.name}</div>} <ModuleControlButtons moduleId={module._id} deleteModule={deleteModule} editModule={() => setEditing(module)} />
      <ul className="wd-module-lessons"><li>Learning objectives</li></ul>
    </li>)}</ul>
  </div>;
}
