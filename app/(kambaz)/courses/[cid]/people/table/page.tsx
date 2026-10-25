import users from "../../../../database/users.json";
import enrollments from "../../../../database/enrollments.json";

export default async function Page({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const people = users.filter((user) => enrollments.some(
    (enrollment) => enrollment.user === user._id && enrollment.course === cid,
  ));
  return (
    <div id="wd-people-table">
      <h2>People</h2>
      <div className="wd-table-responsive">
        <table>
          <thead><tr><th>Name</th><th>Login ID</th><th>Role</th><th>Section</th></tr></thead>
          <tbody>
            {people.map((user) => (
              <tr key={user._id}><td>{user.firstName} {user.lastName}</td><td>{user.loginId}</td><td>{user.role}</td><td>{user.section}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
