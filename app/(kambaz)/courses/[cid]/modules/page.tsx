"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { KambazModule } from "../../../store";
import * as client from "../../client";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleEditor from "./ModuleEditor";
export default function Modules() {
  const params = useParams<{ cid: string }>();
  const courseId = params.cid;
  const [modules, setModules] = useState<KambazModule[]>([]);
  const [editing, setEditing] = useState<KambazModule | null>(null);
  const loadModules = async () => setModules(await client.findModulesForCourse(courseId));
  useEffect(() => { client.findModulesForCourse(courseId).then(setModules).catch(console.error); }, [courseId]);
  const addModule = async (name: string) => { await client.createModule(courseId, name); await loadModules(); };
  const saveModule = async (module: KambazModule) => { await client.updateModule(module); setEditing(null); await loadModules(); };
  const removeModule = async (moduleId: string) => { await client.deleteModule(moduleId); await loadModules(); };
  return <div><button type="button">Collapse All</button> <button type="button">View Progress</button> <select defaultValue="publish-all"><option value="publish-all">Publish All</option><option value="unpublish-all">Unpublish All</option></select> <ModuleEditor addModule={addModule} />
    <ul id="wd-modules">{modules.map((module) => <li className="wd-module" key={module._id}>{editing?._id === module._id ? <><input aria-label="Edit module" value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} /><button onClick={() => saveModule(editing)}>Save</button></> : <div className="wd-title">{module.name}</div>} <ModuleControlButtons moduleId={module._id} deleteModule={removeModule} editModule={() => setEditing(module)} />
      <ul className="wd-module-lessons"><li>Learning objectives</li></ul>
    </li>)}</ul>
  </div>;
}
