import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function ModuleEditor({ addModule }: { addModule: (name: string) => Promise<void> }) {
  const [show, setShow] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const close = () => setShow(false);
  const submit = async () => {
    if (moduleName.trim()) {
      await addModule(moduleName.trim());
      setModuleName("");
    }
    close();
  };
  return (
    <>
      <button id="wd-add-module-btn" type="button" aria-label="+ Module" onClick={() => setShow(true)}>
        <FaPlus aria-hidden="true" /> <span>+ Module</span>
      </button>
      {show && (
        <div id="wd-add-module-dialog" role="dialog" aria-modal="true" aria-label="Add Module">
          <h3>Add Module</h3>
          <button type="button" aria-label="Close" onClick={close}>×</button>
          <input id="wd-add-module-name" aria-label="Module name" placeholder="Module name" value={moduleName} onChange={(event) => setModuleName(event.target.value)} />
          <button id="wd-add-module-cancel" type="button" onClick={close}>Cancel</button>
          <button id="wd-add-module-submit" type="button" onClick={submit}>Add Module</button>
        </div>
      )}
    </>
  );
}
