import React from "react";

const education = [
  {
    year: "2021 — 2025",
    title: "BSc. Computer Science & Engineering",
    institute: "East West University, Dhaka, Bangladesh",
    status: "3.20",
    color: "purple-500",
  },
  {
    year: "2017 — 2019",
    title: "Higher Secondary Certificate",
    institute: "Manikganj Government Technical School And College",
    status: "GPA 4.17",
    color: "orange-400",
  },
  {
    year: "2015 — 2017",
    title: "Secondary School Certificate",
    institute: "Manikganj Government Technical School And College",
    status: "GPA 4.43",
    color: "green-400",
  },
];

const skills = [
  { name: "JavaScript / TypeScript", level: 88, color: "bg-yellow-400" },
  { name: "Golang", level: 75, color: "bg-pink-400" },
  { name: "Node.js / Express.js", level: 85, color: "bg-teal-500" },
  { name: "MongoDB / PostgreSQL", level: 80, color: "bg-purple-500" },
  { name: "React.js / Redux", level: 82, color: "bg-cyan-400" },
  { name: "HTML / CSS / SASS", level: 92, color: "bg-pink-400" },
];

const SkillsSection = () => {
  return (
    <section id="education-skills" className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-200 uppercase tracking-widest mb-2">
            Education & Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My Background &{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Technical Arsenal
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full bg-${edu.color} mt-1`}
                  ></div>
                  {index !== education.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-300"></div>
                  )}
                </div>
                <div>
                  <p className="text-gray-500">{edu.year}</p>
                  <h3 className="font-semibold text-lg">{edu.title}</h3>
                  <p className="text-gray-400">{edu.institute}</p>
                  {/* <span
                    className={`text-sm inline-block mt-1 px-2 py-1 rounded-full text-white bg-${edu.color}`}
                  >
                    {edu.status}
                  </span> */}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 h-3 rounded-full">
                  <div
                    className={`${skill.color} h-3 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}

            <button className="btn btn-outline btn-sm mt-4">
              View All Skills →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
