const people = [
  ["Alice Wonderland", "alice", "Student", "Section 01"],
  ["Bob Hope", "bob", "Student", "Section 01"],
  ["Charlie Brown", "charlie", "Teacher", "Section 01"],
  ["Minjing Liu", "minjing", "Student", "Section 01"],
  ["Diana Prince", "diana", "Student", "Section 02"],
  ["Edward Smith", "edward", "Teaching Assistant", "Section 02"],
  ["Fiona Green", "fiona", "Student", "Section 02"],
];

export default function Page() {
  return (
    <div id="wd-people-table">
      <h2>People</h2>
      <div className="wd-table-responsive">
        <table>
          <thead><tr><th>Name</th><th>Login ID</th><th>Role</th><th>Section</th></tr></thead>
          <tbody>
            {people.map(([name, login, role, section]) => (
              <tr key={login}><td>{name}</td><td>{login}</td><td>{role}</td><td>{section}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
