import Link from "next/link";
import assignments from "../../../../database/assignments.json";
export default async function AssignmentEditor({params}:{params:Promise<{cid:string;aid:string}>}) {
 const {cid,aid}=await params;
 const assignment = assignments.find((item) => item._id === aid && item.course === cid);
 const name = assignment?.title ?? "Assignment not found";
 const description = assignment?.description ?? "No assignment description is available.";
 const points = assignment?.points ?? 0;
 const dueDate = assignment?.due ?? "2026-01-01";
 const availableDate = assignment?.available ?? "2026-01-01";
 return <div id="wd-assignments-editor">
 <label htmlFor="wd-name">Assignment Name</label><br /><input id="wd-name" defaultValue={name} /><br /><br />
 <p>Assignment id: {aid}</p>
 <label htmlFor="wd-description">Description</label><br />
 <textarea id="wd-description" rows={5} cols={50} defaultValue={description} /><br />
 <label htmlFor="wd-ai-review-note">AI Review Note</label><br />
 <input id="wd-ai-review-note" defaultValue="Check the responsive layout before submitting." /><br />
 <table><tbody>
 <tr><td align="right" valign="top"><label htmlFor="wd-points">Points</label></td><td><input type="number" id="wd-points" defaultValue={points} /></td></tr>
 <tr><td align="right"><label htmlFor="wd-group">Assignment Group</label></td><td><select id="wd-group" defaultValue="ASSIGNMENTS"><option>ASSIGNMENTS</option><option>QUIZZES</option><option>EXAMS</option><option>PROJECT</option></select></td></tr>
 <tr><td align="right"><label htmlFor="wd-display-grade-as">Display Grade as</label></td><td><select id="wd-display-grade-as" defaultValue="Points"><option>Points</option><option>Percentage</option><option>Complete/Incomplete</option><option>Letter Grade</option></select></td></tr>
 <tr><td align="right" valign="top"><label htmlFor="wd-submission-type">Submission Type</label></td><td><select id="wd-submission-type" defaultValue="Online"><option>Online</option><option>No Submission</option><option>On Paper</option><option>External Tool</option></select>
 <fieldset><legend>Online Entry Options</legend>
 <input type="checkbox" id="wd-text-entry"  /><label htmlFor="wd-text-entry">Text Entry</label><br />
<input type="checkbox" id="wd-website-url" defaultChecked /><label htmlFor="wd-website-url">Website URL</label><br />
<input type="checkbox" id="wd-media-recordings"  /><label htmlFor="wd-media-recordings">Media Recordings</label><br />
<input type="checkbox" id="wd-student-annotation"  /><label htmlFor="wd-student-annotation">Student Annotation</label><br />
<input type="checkbox" id="wd-file-upload"  /><label htmlFor="wd-file-upload">File Upload</label><br />
 </fieldset></td></tr>
 <tr><td align="right" valign="top">Assign</td><td>
 <label htmlFor="wd-assign-to">Assign to</label><br /><input id="wd-assign-to" defaultValue="Everyone" /><br />
 <label htmlFor="wd-due-date">Due</label><br /><input id="wd-due-date" type="date" defaultValue={dueDate} /><br />
 <label htmlFor="wd-available-from">Available from</label><br /><input id="wd-available-from" type="date" defaultValue={availableDate} /><br />
 <label htmlFor="wd-available-until">Until</label><br /><input id="wd-available-until" type="date" defaultValue={dueDate} />
 </td></tr></tbody></table><hr />
 <Link href={`/courses/${cid}/assignments`} id="wd-cancel">Cancel</Link>{" "}
 <Link href={`/courses/${cid}/assignments`} id="wd-save">Save</Link>
 </div>;
}
