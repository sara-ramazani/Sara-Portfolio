export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            I&apos;m a Computer Science student passionate about full-stack development, problem-solving, and creating 
            meaningful digital experiences. With experience in mentoring, web development, and software engineering, 
            I enjoy building solutions that make a difference.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently pursuing my Associate of Science in Computer Science, I&apos;m always eager to learn new 
            technologies and apply them to real-world projects. I believe in writing clean, maintainable code and 
            following best practices in software development.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          
          <div className="space-y-8">
            <div className="relative pl-8 pb-8 border-l-2 border-purple-200">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Volunteer Web Development Tutor</h3>
                  <span className="text-sm text-purple-600 font-medium mt-1 md:mt-0">Jan 2020 – May 2020</span>
                </div>
                <p className="text-lg text-gray-700 font-medium mb-4">Rahila Foundation • Kabul, Afghanistan</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span>Mentored 50+ students in core front-end web development (HTML, CSS, JavaScript), providing step-by-step guidance, code reviews, and constructive feedback throughout the learning process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span>Designed and delivered customized lesson plans and hands-on exercises aligned with students&apos; skill levels, integrating accessibility (WCAG) principles to teach inclusive and user-friendly web design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span>Guided students through practical coding exercises and small web projects, demonstrating effective use of browser developer tools to debug, test, and optimize web pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">•</span>
                    <span>Introduced version control using Git and GitHub, enabling collaborative project development and teaching best practices for code organization and teamwork</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Let&apos;s Connect!</h3>
          <p className="mb-6 text-purple-100">I&apos;m always open to discussing new opportunities and interesting projects.</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
