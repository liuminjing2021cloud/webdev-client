import AssignmentItem from "./AssignmentItem";
import assignments from "../../../database/assignments.json";
export default async function Assignments({params}:{params:Promise<{cid:string}>}) {
 const {cid}=await params;
 const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
 return <div id="wd-assignments">
 <input id="wd-search-assignment" placeholder="Search for Assignments" aria-label="Search for Assignments" />
 <button type="button" id="wd-add-assignment-group">+ Group</button>
 <button type="button" id="wd-add-assignment">+ Assignment</button>
 <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button type="button" aria-label="Add assignment to group">+</button></h3>
 <ul id="wd-assignment-list">
 {courseAssignments.map((assignment) => <AssignmentItem cid={cid} aid={assignment._id} title={assignment.title} details={`${assignment.description} | Due ${assignment.due} | ${assignment.points} pts`} key={assignment._id} />)}
 </ul></div>;
}
