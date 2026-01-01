export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "C++", "HTML/CSS", "JavaScript", "Java"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Flask", "FastAPI", "JUnit", "WordPress", "Material-UI", "pandas", "NumPy", "Matplotlib"]
    },
    {
      category: "Developer Tools",
      skills: ["Git", "Docker", "TravisCI", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Technical Skills</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full mr-4"></span>
                {category.category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 font-medium hover:border-purple-400 hover:text-purple-700 hover:shadow-md transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-purple-100 text-lg leading-relaxed">
            I&apos;m continuously expanding my skill set and staying up-to-date with the latest technologies and 
            best practices in software development. Currently focusing on advanced full-stack development, cloud 
            computing, and software engineering principles.
          </p>
        </div>
      </div>
    </div>
  );
}
