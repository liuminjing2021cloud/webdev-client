"use client";
import { useState } from "react";
import { FaCheckCircle, FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { KambazModule, useKambazStore } from "../../../store";
export default function Modules() {
  const modules = useKambazStore((state) => state.modules); const addModule = useKambazStore((state) => state.addModule); const updateModule = useKambazStore((state) => state.updateModule); const deleteModule = useKambazStore((state) => state.deleteModule);
  const [newName, setNewName] = useState(""); const [editing, setEditing] = useState<KambazModule | null>(null);
  return <div><button type="button">Collapse All</button> <button type="button">View Progress</button> <button id="wd-add-module-btn" aria-label="+ Module" type="button" onClick={() => { if (newName.trim()) { addModule(newName.trim()); setNewName(""); } }}><FaPlus /> Module</button><input aria-label="New module" placeholder="New module name" value={newName} onChange={(event) => setNewName(event.target.value)} />
    <ul id="wd-modules">{modules.map((module) => <li className="wd-module" key={module._id}>{editing?._id === module._id ? <><input aria-label="Edit module" value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} /><button onClick={() => { updateModule(editing); setEditing(null); }}>Save</button></> : <div className="wd-title">{module.name}</div>} <div className="module-controls"><FaPencilAlt className="cursor-pointer text-blue-600" onClick={() => setEditing(module)} title="Edit module" /><FaTrash className="cursor-pointer text-red-600" onClick={() => deleteModule(module._id)} title="Delete module" /><FaCheckCircle className="text-green-600" title="Published module" /><BsPlus className="text-3xl" title="Add item" /><IoEllipsisVertical className="text-xl" title="More module options" /></div></li>)}</ul>
  </div>;
}
