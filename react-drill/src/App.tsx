   

import type { Student } from "./types";
import ProfileCard from "./components/ProfileCard";

const students: Student[] = [
  {
    id: "s1",
    name: "Khilji Noor",
    role: "Frontend Student",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    id: "s2",
    name: "Vamisha Vohra",
    role: "Frontend Student",
    skills: ["HTML", "Tailwind"],
  },
  {
    id: "s3",
    name: "Ayan mir",
    role: "JS Learner",
    skills: ["JavaScript", "DOM"],
  },
  {
    id: "s4",
    name: "Aadil mir",
    role: "Frontend Student",
    skills: ["CSS", "React basics"],
  },
  {
    id: "s5",
    name: "Shaziya khan",
    role: "Designer + Coder",
    skills: ["Figma", "HTML"],
  },
  {
  id: "s6",
  name: "Sara khan",
  role: "React Learner",
  skills: ["React", "JavaScript"],
},
];

function App() {
  return (
    <div className="min-h-screen bg-slate-900 p-6 text-white">
      <h1 className="text-center text-2xl font-bold">
        Student Profiles
      </h1>

      <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
        {students.map((student) => (
          <ProfileCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;
