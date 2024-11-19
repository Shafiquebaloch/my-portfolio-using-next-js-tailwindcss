
// export default About;
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="bg-gray-300 py-10 px-4" id="About">
        <div className="mx-auto py-10 max-w-6xl">
          {/* Heading Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">About</h1>
            <div className="w-20 md:w-40 h-1 bg-white mx-auto mt-2"></div>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Image Section */}
            <div className="bg-[#835e7a] p-4 rounded-lg shadow-lg flex-shrink-0">
              <Image
                src="/img3.jpg"
                alt="A person standing in a park with trees and a colorful structure in the background"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            {/* Text Section */}
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Frontend Developer &amp; UI / UX Designer
              </h2>
              <p className="mb-4 text-sm md:text-base leading-relaxed">
                I am Muhammad Shafique, a frontend developer with a passion for creating intuitive and visually appealing web experiences. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I focus on building responsive, user-friendly interfaces that bring ideas to life.
              </p>
              <p className="mb-6 text-sm md:text-base leading-relaxed">
                I believe in the power of design to communicate, inspire, and create connections. Beyond coding, I’m driven by creativity, curiosity, and a commitment to continuous learning.
              </p>
              <button className="bg-[#ffffff] text-black py-2 px-6 rounded-full font-bold hover:bg-[#ff4b4b] transition duration-300">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;