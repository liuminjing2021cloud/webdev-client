import Module from "./Module";
import Lesson from "./Lesson";
import modules from "../../../database/modules.json";

export default async function Modules({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const courseModules = modules.filter((module) => module.course === cid);
  return (
    <div>
      <button type="button">Collapse All</button> <button type="button">View Progress</button>{" "}
      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}
      <button type="button">+ Module</button>
      <ul id="wd-modules">
        {courseModules.map((module) => (
          <Module title={module.name} key={module._id}>
            <Lesson title="LESSONS">
              {module.lessons.map((lesson) => <li className="wd-content-item" key={lesson._id}>{lesson.name}</li>)}
            </Lesson>
          </Module>
        ))}
      </ul>
    </div>
  );
}
