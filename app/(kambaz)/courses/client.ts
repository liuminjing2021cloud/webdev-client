import type { Course, KambazModule } from "../store";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER ?? "http://localhost:4000";
const COURSES_API = `${HTTP_SERVER}/api/courses`;

async function json<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { ...init, headers: { "Content-Type": "application/json", ...init?.headers } });
  if (!response.ok) throw new Error(`Request failed: HTTP ${response.status}`);
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const fetchAllCourses = () => json<Course[]>(COURSES_API);
export const createCourse = (course: Omit<Course, "_id" | "image">) => json<Course>(COURSES_API, { method: "POST", body: JSON.stringify(course) });
export const updateCourse = (course: Course) => json<Course>(`${COURSES_API}/${course._id}`, { method: "PUT", body: JSON.stringify(course) });
export const deleteCourse = (courseId: string) => json<void>(`${COURSES_API}/${courseId}`, { method: "DELETE" });
export const findModulesForCourse = (courseId: string) => json<KambazModule[]>(`${COURSES_API}/${courseId}/modules`);
export const createModule = (courseId: string, name: string) => json<KambazModule>(`${COURSES_API}/${courseId}/modules`, { method: "POST", body: JSON.stringify({ name }) });
export const updateModule = (module: KambazModule) => json<KambazModule>(`${HTTP_SERVER}/api/modules/${module._id}`, { method: "PUT", body: JSON.stringify(module) });
export const deleteModule = (moduleId: string) => json<void>(`${HTTP_SERVER}/api/modules/${moduleId}`, { method: "DELETE" });
