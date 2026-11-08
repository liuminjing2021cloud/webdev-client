import { FaCheckCircle, FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="module-controls flex items-center gap-2">
      <button
        id={`wd-edit-module-${moduleId}`}
        type="button"
        aria-label="Edit module"
        title="Edit module"
        onClick={() => editModule(moduleId)}
      >
        <FaPencilAlt className="cursor-pointer text-blue-600" title="Edit module" />
        <span className="sr-only">Edit</span>
      </button>
      <button
        id={`wd-delete-module-${moduleId}`}
        type="button"
        aria-label="Delete module"
        title="Delete module"
        onClick={() => deleteModule(moduleId)}
      >
        <FaTrash className="cursor-pointer text-red-600" title="Delete module" />
        <span className="sr-only">Delete</span>
      </button>
      <FaCheckCircle className="text-green-600" title="Published module" />
      <BsPlus className="text-3xl" title="Add item" />
      <IoEllipsisVertical className="text-xl" title="More module options" />
    </div>
  );
}
