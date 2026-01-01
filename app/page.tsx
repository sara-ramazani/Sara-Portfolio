import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Sara Ramazani</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Computer Science Student | Full-Stack Developer | Problem Solver
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Passionate about building innovative solutions and creating meaningful digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats/Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Students Mentored</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">2K+</div>
              <div className="text-gray-600">Plugin Downloads</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">Full-Stack</div>
              <div className="text-gray-600">Web Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'C++', 'JavaScript', 'React', 'Node.js', 'Flask', 'PostgreSQL', 'Docker', 'Git'].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:border-purple-300 hover:text-purple-600 transition-colors shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/skills" className="text-purple-600 hover:text-purple-700 font-medium">
              View All Skills →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
