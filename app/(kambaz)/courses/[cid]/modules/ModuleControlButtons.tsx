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
      <FaPencilAlt
        className="cursor-pointer text-blue-600"
        onClick={() => editModule(moduleId)}
        title="Edit module"
      />
      <FaTrash
        className="cursor-pointer text-red-600"
        onClick={() => deleteModule(moduleId)}
        title="Delete module"
      />
      <FaCheckCircle className="text-green-600" title="Published module" />
      <BsPlus className="text-3xl" title="Add item" />
      <IoEllipsisVertical className="text-xl" title="More module options" />
    </div>
  );
}
