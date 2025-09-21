import React from 'react'

const Experience = () => {
  return (
   <section className="px-4 py-12">
  <div className="max-w-7xl mx-auto">
 
    <div className=" bg-opacity-50 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
     <h1 className="text-4xl md:text-4xl font-bold text-white mb-8 text-center ">
      Experience
    </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-pink-400">
        Eazyvenue | Full Stack Development Intern, <span className="text-gray-200">Aug 2025</span>
      </h2>
      <p className="text-gray-300 mb-4">
        Technologies:{" "}
        <span className="text-yellow-400 font-semibold">
          Angular, AWS, MongoDB, Node.js
        </span>
      </p>
      <ul className="list-disc list-inside space-y-3 text-gray-200">
        <li>
          <span className="font-semibold text-white">Responsive UI:</span> Built user interfaces with <span className="text-yellow-400">Angular</span> and <span className="text-yellow-400">TypeScript</span>, enhancing functionality and user experience.
        </li>
        <li>
          <span className="font-semibold text-white">Automation & Optimization:</span> Developed automated data scraping solutions and optimized <span className="text-yellow-400">RESTful API</span> integrations, reducing manual processing time by <span className="text-green-400 font-bold">60%</span>.
        </li>
        <li>
          <span className="font-semibold text-white">Data Migration:</span> Executed automated <span className="text-yellow-400">MongoDB</span> migration system, transferring <span className="text-green-400 font-bold">376K+ documents</span> across 15+ collections to AWS EC2 with <span className="text-green-400 font-bold">100% data integrity</span>.
        </li>
        <li>
          <span className="font-semibold text-white">Python Automation:</span> Implemented <span className="text-yellow-400">Python</span>-based automation with <span className="font-bold">cron scheduling</span> for real-time production-to-cloud synchronization, ensuring <span className="text-green-400 font-bold">24/7 reliability</span>.
        </li>
      </ul>
    </div>
  </div>
</section>

  );

}

export default Experience