import Modules from "../modules/page";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home">
      <div className="wd-home-modules"><Modules /></div>
      <CourseStatus />
    </div>
  );
}
