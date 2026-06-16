import React from 'react';

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">

      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-violet-400">Heiligard</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Full-Stack Developer · React & Node.js · AI Integration
        </p>
        <a href="mailto:your@email.com" className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-full text-lg transition">
          Hire Me
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {['React', 'Node.js', 'JavaScript', 'REST API', 'Tailwind CSS', 'ChatGPT API', 'UI/UX', 'Git'].map(skill => (
            <span key={skill} className="bg-violet-900 text-violet-200 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-6">
          <div className="bg-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
            <p className="text-gray-400 mb-4">
              A customer support chatbot powered by GPT-4o-mini. Built with React and Node.js.
            </p>
            <span className="text-violet-400 text-sm">Coming soon...</span>
          </div>
        </div>
      </section>

      <section className="text-center py-20 px-4">
        <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
        <p className="text-gray-400 mb-8">Available for freelance projects worldwide</p>
        <a href="mailto:your@email.com" className="text-violet-400 text-lg underline">
          your@email.com
        </a>
      </section>

    </div>
  );
}

export default App;