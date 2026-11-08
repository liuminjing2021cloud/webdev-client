"use client";
import { useState } from "react";
import { KambazModule, useKambazStore } from "../../../store";
export default function Modules() {
  const modules = useKambazStore((state) => state.modules); const addModule = useKambazStore((state) => state.addModule); const updateModule = useKambazStore((state) => state.updateModule); const deleteModule = useKambazStore((state) => state.deleteModule);
  const [newName, setNewName] = useState(""); const [editing, setEditing] = useState<KambazModule | null>(null);
  return <div><button type="button">Collapse All</button> <button type="button">View Progress</button> <button onClick={() => { if (newName.trim()) { addModule(newName.trim()); setNewName(""); } }}>+ Module</button><input aria-label="New module" placeholder="New module name" value={newName} onChange={(event) => setNewName(event.target.value)} />
    <ul id="wd-modules">{modules.map((module) => <li className="wd-module" key={module._id}>{editing?._id === module._id ? <><input aria-label="Edit module" value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} /><button onClick={() => { updateModule(editing); setEditing(null); }}>Save</button></> : <div className="wd-title">{module.name}</div>} <button aria-label="Edit module" title="Edit module" onClick={() => setEditing(module)}>✎</button><button aria-label="Delete module" title="Delete module" onClick={() => deleteModule(module._id)}>🗑</button></li>)}</ul>
  </div>;
}
