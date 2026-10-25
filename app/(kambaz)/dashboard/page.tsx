import CourseCard from "./CourseCard";
import courses from "../database/courses.json";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        {courses.map((course) => <CourseCard key={course._id} {...course} />)}
      </div>
    </div>
  );
}
