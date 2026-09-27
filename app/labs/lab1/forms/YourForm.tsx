"use client";

export default function YourForm() {
  return (
    <form id="wd-your-form" onSubmit={(event) => event.preventDefault()}>
      <h4>Student Profile</h4>
      <label htmlFor="wd-profile-first-name">First name: </label>
      <input id="wd-profile-first-name" name="firstName" type="text" defaultValue="Minjing" /><br />
      <label htmlFor="wd-profile-last-name">Last name: </label>
      <input id="wd-profile-last-name" name="lastName" type="text" defaultValue="Liu" /><br />
      <label htmlFor="wd-profile-password">Password: </label>
      <input id="wd-profile-password" name="password" type="password" placeholder="Practice password" autoComplete="new-password" /><br />
      <label htmlFor="wd-profile-bio">Biography: </label><br />
      <textarea id="wd-profile-bio" name="bio" cols={40} rows={4} defaultValue="My name is Minjing Liu, and you can call me Genesee. I am from China and am a first-year Computer Science graduate student at Northeastern University." />
      <fieldset>
        <legend>Class standing</legend>
        <input id="wd-profile-undergraduate" type="radio" name="profile-standing" value="undergraduate" />
        <label htmlFor="wd-profile-undergraduate">Undergraduate</label>
        <input id="wd-profile-graduate" type="radio" name="profile-standing" value="graduate" defaultChecked />
        <label htmlFor="wd-profile-graduate">Graduate</label>
      </fieldset>
      <fieldset>
        <legend>Enrollment status</legend>
        <input id="wd-profile-full-time" type="radio" name="profile-enrollment" value="full-time" defaultChecked />
        <label htmlFor="wd-profile-full-time">Full-time</label>
        <input id="wd-profile-part-time" type="radio" name="profile-enrollment" value="part-time" />
        <label htmlFor="wd-profile-part-time">Part-time</label>
      </fieldset>
      <fieldset>
        <legend>Interests</legend>
        <input id="wd-profile-web" type="checkbox" name="interests" value="web-development" defaultChecked />
        <label htmlFor="wd-profile-web">Web development</label><br />
        <input id="wd-profile-python" type="checkbox" name="interests" value="python" defaultChecked />
        <label htmlFor="wd-profile-python">Python</label><br />
        <input id="wd-profile-java" type="checkbox" name="interests" value="java" defaultChecked />
        <label htmlFor="wd-profile-java">Java</label>
      </fieldset>
      <label htmlFor="wd-profile-major">Major: </label>
      <select id="wd-profile-major" name="major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="SE">Software Engineering</option>
      </select><br />
      <label htmlFor="wd-profile-topics">Topics to explore this term: </label><br />
      <select id="wd-profile-topics" name="topics" multiple defaultValue={["REACT", "FORMS"]}>
        <option value="HTML">HTML structure</option>
        <option value="CSS">CSS styling</option>
        <option value="REACT">React components</option>
        <option value="FORMS">Web forms and interaction</option>
      </select><br />
      <label htmlFor="wd-profile-email">School email: </label>
      <input id="wd-profile-email" name="email" type="email" defaultValue="liu.minj@northeastern.edu" /><br />
      <label htmlFor="wd-profile-graduation">Expected graduation year: </label>
      <input id="wd-profile-graduation" name="graduationYear" type="number" min={2026} max={2040} defaultValue={2028} /><br />
      <label htmlFor="wd-profile-start">Program start date: </label>
      <input id="wd-profile-start" name="programStart" type="date" defaultValue="2026-09-09" /><br />
      <label htmlFor="wd-profile-excitement">Course excitement (0–10): </label>
      <input id="wd-profile-excitement" name="excitement" type="range" min={0} max={10} defaultValue={9} /><br />
      <button id="wd-profile-save" type="submit">Save</button>
      <button id="wd-profile-cancel" type="button">Cancel</button>
    </form>
  );
}
