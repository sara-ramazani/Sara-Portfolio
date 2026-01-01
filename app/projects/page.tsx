import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Gitlytics",
      period: "June 2020 – Present",
      description: "A full-stack web application for visualizing GitHub collaboration data",
      tech: ["Python", "Flask", "React", "PostgreSQL", "Docker", "Celery", "Redis"],
      details: [
        "Developed a full-stack web application with Flask serving a REST API with React as the frontend",
        "Implemented GitHub OAuth to get data from user's repositories",
        "Visualized GitHub data to show collaboration",
        "Used Celery and Redis for asynchronous tasks"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Simple Paintball",
      period: "May 2018 – May 2020",
      description: "A Minecraft server plugin for entertainment and gameplay enhancement",
      tech: ["Java", "Spigot API", "Maven", "TravisCI", "Git"],
      details: [
        "Developed a Minecraft server plugin to entertain kids during free time for a previous job",
        "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review",
        "Implemented continuous delivery using TravisCI to build the plugin upon new a release",
        "Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development and problem-solving skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <p className="text-purple-600 font-medium">{project.period}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Details */}
                <ul className="space-y-3">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-purple-600 mr-3 mt-1">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
