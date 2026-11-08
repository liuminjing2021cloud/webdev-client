import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useKambazStore } from "../../../store";

export default function ModuleEditor() {
  const [show, setShow] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const addModule = useKambazStore((state) => state.addModule);
  const close = () => setShow(false);
  const submit = () => {
    if (moduleName.trim()) {
      addModule(moduleName.trim());
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
