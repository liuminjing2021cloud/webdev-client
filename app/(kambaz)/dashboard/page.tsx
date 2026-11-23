"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import type { Course } from "../store";
import * as client from "../courses/client";
const blank = { name: "", description: "", number: "", startDate: "" };
export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [form, setForm] = useState(blank); const [editingId, setEditingId] = useState<string | null>(null);
  const loadCourses = async () => setCourses(await client.fetchAllCourses());
  useEffect(() => { client.fetchAllCourses().then(setCourses).catch(console.error); }, []);
  const add = async () => { if (!form.name.trim()) return; await client.createCourse(form); setForm(blank); await loadCourses(); };
  const update = async () => { if (!editingId) return; const old = courses.find((course) => course._id === editingId); if (old) await client.updateCourse({ ...old, ...form }); setForm(blank); setEditingId(null); await loadCourses(); };
  const edit = (course: Course) => { setEditingId(course._id); setForm({ name: course.name, description: course.description, number: course.number, startDate: course.startDate }); };
  return <div id="wd-dashboard"><h1 id="wd-dashboard-title">Dashboard</h1><hr />
    <h2>Course Editor</h2><input aria-label="Course name" placeholder="Course name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /><input aria-label="Course description" placeholder="Course description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} /><input aria-label="Course number" placeholder="Course number" value={form.number} onChange={(event) => setForm({ ...form, number: event.target.value })} /><input aria-label="Start date" type="date" value={form.startDate} onChange={(event) => setForm({ ...form, startDate: event.target.value })} /><button onClick={add}>Add Course</button><button onClick={update}>Update Course</button>{editingId && <button onClick={() => { setEditingId(null); setForm(blank); }}>Cancel</button>}
    <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr /><div id="wd-dashboard-courses">{courses.map((course) => <CourseCard key={course._id} course={course} onEdit={edit} onDelete={async (id) => { await client.deleteCourse(id); await loadCourses(); }} />)}</div>
  </div>;
}
