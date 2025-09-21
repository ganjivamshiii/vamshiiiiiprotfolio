
import React from 'react'


const Contact = () => {
  return (
    <div className="m-2 flex flex-col items-center justify-center p-6">
      

      <div className="shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 md:gap-12  bg-opacity-50 backdrop-blur-lg border border-white/20 text-white w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Contact</h1>
        {/* Email */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="font-semibold">Email:</h2>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vamshiganji44@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white-400 hover:text-blue-600 break-words"
          >
            vamshiganji44@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="font-semibold">Phone:</h2>
          <a 
            href="tel:+917981386754" 
            className="text-white-400 hover:text-blue-600"
          >
            +91 7981386754
          </a>
        </div>

        {/* Resume */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="font-semibold">Resume:</h2>
          <a
            href="https://drive.google.com/file/d/1M1zmwxLglIgmyVFjPNuIFcB3jztthWo7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-400 hover:text-blue-600"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
