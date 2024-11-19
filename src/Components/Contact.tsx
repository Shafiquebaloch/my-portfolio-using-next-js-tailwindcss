// export default Contact
import React from 'react';
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id='Contact' className="bg-gray-300 text-white font-sans">
      <div className="container mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3A2A5B]">Contact</h1>
          <div className="border-b-2 border-white w-24 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Contact Information */}
          <div className="space-y-6 mb-8 lg:mb-0 lg:w-1/3">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-[#3A2A5B] "/>
              <div className='text-[#3A2A5B]'>
                <p>+92 3173198864</p>
                <p>+92 3332421790</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaRegEnvelope className="text-2xl text-[#3A2A5B]"/>
              <p className='text-[#3A2A5B]'>muhammadraheem4739733@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaLocationDot className="text-2xl text-[#3A2A5B]"/>
              <p className='text-[#3A2A5B]' >Pakistan Sindh, Sanghar</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 space-y-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white focus:outline-none" 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white focus:outline-none" 
            />
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <input 
                type="text" 
                placeholder="Phone Number" 
                className="w-full lg:w-1/2 p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white focus:outline-none" 
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full lg:w-1/2 p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white focus:outline-none" 
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              className="w-full p-4 bg-[#3A2A5B] rounded-2xl text-white placeholder-white h-32 focus:outline-none"
            ></textarea>
            <button 
              className="w-full p-4 bg-[#3A2A5B] rounded-full text-white hover:bg-[#2a1a3d] transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;