import Link from "next/link";
import Image from "next/image";
import { Course } from "../store";

export default function CourseCard({ course, onEdit, onDelete }: { course: Course; onEdit: (course: Course) => void; onDelete: (id: string) => void; }) {
  return <div className="wd-dashboard-course">
    <Link href={`/courses/${course._id}/home`} className="wd-dashboard-course-link"><Image src={course.image} width={200} height={150} alt={course.name} /><div><h5>{course.name}</h5><p className="wd-dashboard-course-title">{course.description}</p></div></Link>
    <button onClick={() => onEdit(course)}>Edit</button> <button onClick={() => onDelete(course._id)}>Delete</button>
  </div>;
}
