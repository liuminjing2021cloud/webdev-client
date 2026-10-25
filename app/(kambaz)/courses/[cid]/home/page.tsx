import Modules from "../modules/page";
import CourseStatus from "./Status";
export default function Home({ params }: { params: Promise<{ cid: string }> }) {
  return (
    <div id="wd-home">
      <div className="wd-home-modules"><Modules params={params} /></div>
      <CourseStatus />
    </div>
  );
}
