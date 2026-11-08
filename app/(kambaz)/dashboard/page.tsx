"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { Course, useKambazStore } from "../store";
const blank = { name: "", description: "", number: "", startDate: "" };
export default function Dashboard() {
  const courses = useKambazStore((state) => state.courses); const addCourse = useKambazStore((state) => state.addCourse); const updateCourse = useKambazStore((state) => state.updateCourse); const deleteCourse = useKambazStore((state) => state.deleteCourse);
  const [form, setForm] = useState(blank); const [editingId, setEditingId] = useState<string | null>(null);
  const add = () => { if (!form.name.trim()) return; addCourse(form); setForm(blank); };
  const update = () => { if (!editingId) return; const old = courses.find((course) => course._id === editingId); if (old) updateCourse({ ...old, ...form }); setForm(blank); setEditingId(null); };
  const edit = (course: Course) => { setEditingId(course._id); setForm({ name: course.name, description: course.description, number: course.number, startDate: course.startDate }); };
  return <div id="wd-dashboard"><h1 id="wd-dashboard-title">Dashboard</h1><hr />
    <h2>Course Editor</h2><input aria-label="Course name" placeholder="Course name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /><input aria-label="Course description" placeholder="Course description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} /><input aria-label="Course number" placeholder="Course number" value={form.number} onChange={(event) => setForm({ ...form, number: event.target.value })} /><input aria-label="Start date" type="date" value={form.startDate} onChange={(event) => setForm({ ...form, startDate: event.target.value })} /><button onClick={add}>Add Course</button><button onClick={update}>Update Course</button>{editingId && <button onClick={() => { setEditingId(null); setForm(blank); }}>Cancel</button>}
    <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr /><div id="wd-dashboard-courses">{courses.map((course) => <CourseCard key={course._id} course={course} onEdit={edit} onDelete={deleteCourse} />)}</div>
  </div>;
}
