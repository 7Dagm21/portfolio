import React from "react";

type Skill = {
  name: string;
  level?: string;
};

const skills: Skill[] = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Next.js", level: "Beginner" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
