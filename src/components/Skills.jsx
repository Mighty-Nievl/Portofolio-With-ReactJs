function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Figma"];

  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4 px-6">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-blue-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;
