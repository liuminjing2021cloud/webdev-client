import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import courses from "../../database/courses.json";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  const course = courses.find((item) => item._id === cid);
  return (
    <div id="wd-courses">
      <Breadcrumb courseName={course?.name ?? `Course ${cid}`} courseId={cid} />
      <hr />
      <div className="wd-course-layout">
        <CourseNavigation cid={cid} />
        <div className="wd-course-content">{children}</div>
      </div>
    </div>
  );
}
