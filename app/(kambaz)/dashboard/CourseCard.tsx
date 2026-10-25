import Link from "next/link";
import Image from "next/image";
export default function CourseCard({
  _id,
  name,
  description,
  image,
}: {
  _id: string;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="wd-dashboard-course">
      <Link href={`/courses/${_id}/home`} className="wd-dashboard-course-link">
        <Image src={image} width={200} height={150} alt={name} />
        <div>
          <h5>{name}</h5>
          <p className="wd-dashboard-course-title">{description}</p>
          <button type="button">Go</button>
        </div>
      </Link>
    </div>
  );
}
