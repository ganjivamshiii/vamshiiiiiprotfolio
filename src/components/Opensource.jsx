import React from 'react'
import hacktoberfest from '../assets/download.png'
import gssoc from '../assets/images (2).png'
const Opensource = () => {
  return (

    <div className="m-5">
      
      <div className="backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-4 w-full max-w-full">
         <h1 className="text-4xl text-center mb-6 font-bold text-white-800">
          Open Source Contributions
        </h1>
        
        <h2 className="text-3xl text-green-500 font-bold mb-2">
            
        {"<"}Hacktoberfest Season 11 {" "}
        <img src={hacktoberfest} alt="Hacktoberfest Banner" className="w-10 h-auto rounded-lg inline-block" />
        {"/>"}
        </h2>
        <p className="text-base text-white-600 mb-2">
          Duration: Nov 2024
        </p>
        
        <p className="text-gray-500 leading-relaxed">
          Completed <span className="font-semibold text-green-600">4 pull requests</span> during Hacktoberfest, 
          driving feature enhancements, issue resolution, and collaboration with 
          project maintainers across various open-source projects.
        </p>
        <h2 className="text-3xl text-green-500 font-bold mb-2">
        {"<"}GSSoC '24 {" "}
        <img src={gssoc} alt="Hacktoberfest Banner" className="w-16 h-auto rounded-lg inline-block" />
        {"/>"}
        </h2>
        <p className="text-base text-white-600 mb-2">
          Duration: Oct 2024
        </p>
        
        <p className="text-gray-500 leading-relaxed">
          Completed <span className="font-semibold text-green-600">multiple pull requests </span>
         Open-source contributor to GSSoC '24, enhanced projects with new features, bug fixes, and improved documentation. Successfully collaborated with project maintainers and contributed to multiple repositories.
        </p>

      </div>
    </div>
  )
}

export default Opensource