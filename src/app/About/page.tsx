import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="bg-[#9689c1] py-10 px-4">
        <div className="mx-auto py-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">
              <span>About me</span>
            </h1>
            <div className="w-[160px] h-1 bg-white mx-auto mt-2"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mb-10 md:mb-0 md:mr-10 bg-[#1f0a64]">

      
            <Image
        src="/images/img3.jpg"  // Path ko slash se start karna hoga
        alt="A person standing in a park with trees and a colorful structure in the background"
        width={300}
        height={300} className="rounded-lg shadow-lg"
      />
           


            
            </div>
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">
                Frontend Developer &amp; UI / UX Designer
              </h2>
              <p className="mb-4 text-2xl">
              I am Shafique Baloch, a frontend developer with a passion for creating intuitive and visually appealing web experiences. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I focus on building responsive, user-friendly interfaces that bring ideas to life. I believe in the power of design to communicate, inspire, and create connections, and I’m constantly exploring new techniques to elevate my work. Beyond coding, I’m driven by creativity, curiosity, and a commitment to continuous learning, always aiming to refine my skills and stay at the forefront of web development.
              </p>
              <p className="mb-6">
              {/* You can Write More About Here */}
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
