import {
  AudioWaveform,
  PersonStanding,
  Calendar,
  Megaphone,
  ClipboardList,
  BookOpen,
  BookOpenText,
  Medal,
  Command,
  ListChecks,
  GalleryVerticalEnd,
  House,
  UserPen,
  GraduationCap,
  Handshake,
  MessageCircleMore,
  User,
  Users,
  Notebook,
  BookCheck,
  Dock,
  School,
} from "lucide-react";
import { role } from "./data";
// This is sample data.
const data = {
  user: {
    name: "User",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
    role: role,
  },
  schools: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "General",
      url: "#",
      icon: Dock,
      isActive: true,
      items: [
        {
          icon: House,
          label: "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: ListChecks,
          label: "Attendance",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: Medal,
          label: "Results",
          href: "/list/results",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "Human Resources",
      url: "#",
      icon: PersonStanding,
      isActive: true,
      items: [
        {
          icon: UserPen,
          label: "Teachers",
          href: "/list/teachers",
          visible: ["admin", "teacher"],
        },
        {
          icon: User,
          label: "Students",
          href: "/list/students",
          visible: ["admin", "teacher"],
        },
        {
          icon: Users,
          label: "Parents",
          href: "/list/parents",
          visible: ["admin", "teacher"],
        },
      ],
    },
    {
      title: "Academic Management",
      url: "#",
      icon: GraduationCap,
      isActive: true,
      items: [
        {
          icon: Notebook,
          label: "Subjects",
          href: "/list/subjects",
          visible: ["admin"],
        },
        {
          icon: School,
          label: "Classes",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: BookOpenText,
          label: "Lessons",
          href: "/list/lessons",
          visible: ["admin", "teacher"],
        },
      ],
    },
    {
      title: "Assessments & Learning",
      url: "#",
      icon: BookOpen,
      items: [
        {
          icon: BookCheck,
          label: "Exams",
          href: "/list/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: ClipboardList,
          label: "Assignments",
          href: "/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "Communication & Events",
      url: "#",
      icon: Handshake,
      items: [
        {
          icon: MessageCircleMore,
          label: "Messages",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: Megaphone,
          label: "Announcements",
          href: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: Calendar,
          label: "Events",
          href: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ],
};
export default data;
