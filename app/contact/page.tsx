export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I&apos;m always open to connecting, learning from others, and discussing computer science, projects, or academic opportunities.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Email Card */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                <a 
                  href="mailto:sara.ramazani.dev@gmail.com" 
                  className="text-purple-600 hover:text-purple-700 break-words text-lg font-medium transition-colors"
                >
                  sara.ramazani.dev@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/sara-ramazani-72bb2a353/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 break-words text-lg font-medium transition-colors"
                >
                  linkedin.com/in/sara-ramazani-72bb2a353
                </a>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">GitHub</h3>
                <a
                  href="https://github.com/sara-ramazani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 break-words text-lg font-medium transition-colors"
                >
                  github.com/sara-ramazani
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
