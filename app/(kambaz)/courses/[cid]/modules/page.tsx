"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { KambazModule, useKambazStore } from "../../../store";
import ModuleControlButtons from "./ModuleControlButtons";
export default function Modules() {
  const modules = useKambazStore((state) => state.modules); const addModule = useKambazStore((state) => state.addModule); const updateModule = useKambazStore((state) => state.updateModule); const deleteModule = useKambazStore((state) => state.deleteModule);
  const [newName, setNewName] = useState(""); const [editing, setEditing] = useState<KambazModule | null>(null);
  return <div><button type="button">Collapse All</button> <button type="button">View Progress</button> <button id="wd-add-module-btn" aria-label="+ Module" type="button" onClick={() => { if (newName.trim()) { addModule(newName.trim()); setNewName(""); } }}><FaPlus /> Module</button><input aria-label="New module" placeholder="New module name" value={newName} onChange={(event) => setNewName(event.target.value)} />
    <ul id="wd-modules">{modules.map((module) => <li className="wd-module" key={module._id}>{editing?._id === module._id ? <><input aria-label="Edit module" value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} /><button onClick={() => { updateModule(editing); setEditing(null); }}>Save</button></> : <div className="wd-title">{module.name}</div>} <ModuleControlButtons moduleId={module._id} deleteModule={deleteModule} editModule={() => setEditing(module)} /></li>)}</ul>
  </div>;
}
