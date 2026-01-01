export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Education</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey in Computer Science
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Chemeketa Community College</h2>
                <p className="text-xl text-gray-600 mb-4">Salem, OR</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
                  Expected: Dec 2026
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Associate of Science (Transfer) in Computer Science</h3>
                <p className="text-gray-600 mb-4">January 2025 – December 2026 (Expected)</p>
                <p className="text-gray-700 leading-relaxed">
                  Currently pursuing a comprehensive Computer Science program with a focus on software development, 
                  data structures, algorithms, and computer systems. The transfer program prepares students for 
                  advanced studies in Computer Science at four-year institutions.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Programming Fundamentals",
                    "Data Structures & Algorithms",
                    "Software Engineering",
                    "Web Development",
                    "Database Systems",
                    "Computer Science Theory"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <span className="text-purple-600 mr-2">✓</span>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement/Note Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Looking Forward</h3>
          <p className="text-gray-700 leading-relaxed">
            I&apos;m excited to continue my education and eventually transfer to a four-year institution to pursue 
            a Bachelor&apos;s degree in Computer Science. My goal is to deepen my understanding of computer systems, 
            algorithms, and software engineering while continuing to build practical projects.
          </p>
        </div>
      </div>
    </div>
  );
}
