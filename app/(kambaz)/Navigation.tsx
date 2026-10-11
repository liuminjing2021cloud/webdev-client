import Link from "next/link";
import { FaUniversity, FaUserCircle, FaTachometerAlt, FaBook, FaCalendarAlt, FaInbox, FaFlask, FaQuestionCircle } from "react-icons/fa";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaUniversity /> Northeastern
      </a>
      <br />
      <Link href="/account" id="wd-account-link">
        <FaUserCircle /> Account
      </Link>
      <br />
      <Link href="/dashboard" id="wd-dashboard-link">
        <FaTachometerAlt /> Dashboard
      </Link>
      <br />
      <Link href="/dashboard" id="wd-course-link">
        <FaBook /> Courses
      </Link>
      <br />
      <Link href="/calendar" id="wd-calendar-link">
        <FaCalendarAlt /> Calendar
      </Link>
      <br />
      <Link href="/inbox" id="wd-inbox-link">
        <FaInbox /> Inbox
      </Link>
      <br />
      <Link href="/labs" id="wd-labs-link">
        <FaFlask /> Labs
      </Link>
      <br />
      <Link href="/labs" id="wd-ai-nav-help">
        <FaQuestionCircle /> AI Help
      </Link>
    </div>
  );
}
