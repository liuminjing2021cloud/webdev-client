import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineBulb } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

export default function ReactIconsSampler() {
  return (
    <section id="wd-react-icons">
      <h3>React Icons</h3>
      <FaCheckCircle className="wd-check-icon" />
      <FaTrash className="wd-trash-icon" />
      <h4>On Your Own</h4>
      <MdSchool className="wd-personal-school-icon" />
      <IoBookOutline className="wd-personal-book-icon" />
      <h4>With AI</h4>
      <AiOutlineBulb className="wd-ai-bulb-icon" />
      <BsPersonCircle className="wd-ai-person-icon" />
    </section>
  );
}
