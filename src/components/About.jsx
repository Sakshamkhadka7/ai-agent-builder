import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16 md:py-24">
    
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
   
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-500">
            About AI Agent Builder
          </h1>
          <p className="text-gray-300 text-lg">
            AI Agent Builder is a modern platform that empowers users to create,
            customize, and deploy AI agents effortlessly. Whether you want to
            build smart chatbots, automate tasks, or explore AI-driven solutions,
            our platform makes it simple and professional.
          </p>
          <p className="text-gray-400">
            Our goal is to bridge the gap between advanced AI and real-world applications,
            providing a user-friendly interface with powerful customization options.
          </p>
        </div>

        
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/aiagent.jpg"
            alt="AI Illustration"
            className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">Custom AI Agents</h3>
          <p className="text-gray-300">
            Build agents tailored to your needs with flexible drag-and-drop
            configuration.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">Easy Integration</h3>
          <p className="text-gray-300">
            Integrate your AI agents seamlessly with your applications and workflow.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform">
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">AI Provider Options</h3>
          <p className="text-gray-300">
            Choose from multiple AI providers like ChatGPT, Gemini, Claude, and more.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;