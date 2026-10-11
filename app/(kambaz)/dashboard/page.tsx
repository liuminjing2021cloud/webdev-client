import CourseCard from "./CourseCard";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses">
        <CourseCard
          id="1234"
          title="CS5010 Programming Design Paradigm"
          subtitle="My course: object-oriented design and testing"
          image="/images/reactjs.svg"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.svg"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.svg"
        />
        <CourseCard
          id="4567"
          title="CS4550 Web Development"
          subtitle="AI sample course: responsive full-stack applications"
          image="/images/teslabot.jpg"
        />
      </div>
    </div>
  );
}
