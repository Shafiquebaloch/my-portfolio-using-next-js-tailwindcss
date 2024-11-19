"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



// Your existing Contact component code
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const encodedMessage = encodeURIComponent(`
      Name: ${fullName}
      Email: ${email}
      Phone: ${phoneNumber}
      Subject: ${subject}
      Message: ${message}
    `);

    const whatsappLink = `https://wa.me/923173198864?text=${encodedMessage}`;

    window.location.href = whatsappLink;
  };

  return (
    <div className="bg-gray-400 text-white font-sans">
      <div className="container mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-950">Contact</h1>
          <div className="border-b-2 border-white w-24 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-6 mb-8 lg:mb-0">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl text-blue-950" />
              <div className="text-blue-950">
                <p>+92 3173198864</p>
                <p>+92 3332421790</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-blue-950">
              <FaRegEnvelope className="text-2xl" />
              <p>muhammadraheem4739733@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4 text-blue-950">
              <FaLocationDot className="text-2xl" />
              <p>Pakistan Sindh,Sanghar</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full lg:w-1/2 p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full lg:w-1/2 p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full p-4 bg-[#3A2A5B] rounded-2xl text-white placeholder-white h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="w-full p-4 bg-[#3A2A5B] rounded-full text-white"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



