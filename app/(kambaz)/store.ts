import { create } from "zustand";

export type Course = { _id: string; name: string; description: string; number: string; startDate: string; image: string };
export type KambazModule = { _id: string; name: string };

const initialCourses: Course[] = [
  { _id: "1234", name: "CS1234 React JS", description: "Full Stack software developer", number: "CS1234", startDate: "2026-01-01", image: "/images/reactjs.svg" },
  { _id: "2345", name: "CS2345 Node JS", description: "Server side JavaScript", number: "CS2345", startDate: "2026-01-01", image: "/images/nodejs.svg" },
  { _id: "3456", name: "CS3456 MongoDB", description: "NoSQL Databases", number: "CS3456", startDate: "2026-01-01", image: "/images/mongodb.svg" },
];
const initialModules: KambazModule[] = [
  { _id: "m1", name: "Week 1, Course Introduction" }, { _id: "m2", name: "Week 2, HTML and CSS" }, { _id: "m3", name: "Week 3, JavaScript" },
];

type KambazState = {
  courses: Course[]; modules: KambazModule[];
  addCourse: (course: Omit<Course, "_id" | "image">) => void; updateCourse: (course: Course) => void; deleteCourse: (id: string) => void;
  addModule: (name: string) => void; updateModule: (module: KambazModule) => void; deleteModule: (id: string) => void;
};
export const useKambazStore = create<KambazState>((set) => ({
  courses: initialCourses, modules: initialModules,
  addCourse: (course) => set((state) => ({ courses: [...state.courses, { ...course, _id: `course-${Date.now()}`, image: "/images/reactjs.svg" }] })),
  updateCourse: (course) => set((state) => ({ courses: state.courses.map((current) => current._id === course._id ? course : current) })),
  deleteCourse: (id) => set((state) => ({ courses: state.courses.filter((course) => course._id !== id) })),
  addModule: (name) => set((state) => ({ modules: [...state.modules, { _id: `module-${Date.now()}`, name }] })),
  updateModule: (module) => set((state) => ({ modules: state.modules.map((current) => current._id === module._id ? module : current) })),
  deleteModule: (id) => set((state) => ({ modules: state.modules.filter((module) => module._id !== id) })),
}));
