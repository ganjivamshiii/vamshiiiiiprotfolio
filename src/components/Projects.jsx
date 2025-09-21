import React from 'react'

const Projects = () => {
  return (
    
    <div className=" flex flex-col items-center p-8 ">
       
   <div className="backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-4 w-full max-w-full">
    <h1 className="text-4xl font-bold mb-10 text-center">
        Projects
       
      </h1>
     

      <div className="grid gap-4 max-w-5xl w-full">
        {/* Project 1 */}
        <div className="  p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-[#ffff00]">
            GradientLearning – AI-Powered Math Animation Platform
          </h2>
          <a 
            href="https://github.com/ganjivamshiii/manim_project" 
            className="underline text-sm inline-block"
          >
            <strong> Link</strong>
          </a>
          <p className="mb-2">
            <span className="font-semibold">Technologies:</span> Python, Flask, JavaScript, HuggingFace, Manim, REST API
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Developed real-time mathematical animation system using concurrent Manim rendering pipeline with 99% reliability via Mixtral 8x7B API integration.
            </li>
            <li>
              Built REST API with UUID-based task tracking, error handling, and NLP for dynamic mathematical visualizations.
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="p-6  hover:shadow-xl transition ">
          <h2 className="text-2xl font-bold text-[#ffff00]">
            Full Stack Travel Application
          </h2>
          <a 
            href="https://github.com/ganjivamshiii/fullstackapplication" 
            className="underline text-sm  inline-block"
          >
            <strong> Link</strong>
          </a>
          <p className="mb-2">
            <span className="font-semibold">Technologies:</span> Java, Spring Boot, MySQL, Spring Data JPA, HTML, CSS, JavaScript
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Implemented travel booking application using MVC architecture with Spring Boot and Spring Data JPA for efficient database operations.
            </li>
            <li>
              Built secure authentication system and responsive frontend for seamless user experience.
            </li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="p-6  hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-[#ffff00]">
            AI Email Response Generator Chrome Extension
          </h2>
          <a 
            href="https://github.com/ganjivamshiii/email_response_generator" 
            className="underline text-sm inline-block"
          >
           <strong> Link</strong>
          </a>
          <p className="mb-2">
            <span className="font-semibold">Technologies:</span> Java, Spring Boot, Gemini API, JavaScript
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Built AI-based Chrome Extension integrating Gemini API for context-aware email response generation, improving productivity by 70%.
            </li>
            <li>
              Implemented Gmail integration using JavaScript DOM manipulation, Chrome Extension APIs, and real-time context detection.
            </li>
          </ul>
        </div>
</div>
      </div>
    </div>
  )
}

export default Projects
