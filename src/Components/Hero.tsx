// export default Hero;
import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <section className="text-center py-10 px-4 bg-gray-300" id="Home">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Text Section */}
          <div className="text-center md:text-left md:max-w-lg md:mr-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900">
              Hi, This is me
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 text-red-800">
              Shafique Baloch
            </h2>
            <p className="text-xl sm:text-2xl mt-2 text-gray-700">
              And I am a Frontend Developer
            </p>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-xl mx-auto text-gray-700">
              I specialize in crafting clean, responsive, and visually engaging websites.
              With a keen eye for detail and a commitment to quality, I transform ideas into seamless digital experiences that captivate and connect.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <FaFacebook className="text-3xl cursor-pointer hover:text-orange-400" />
              <FaLinkedin className="text-3xl cursor-pointer hover:text-orange-400" />
              <FaTwitter className="text-3xl cursor-pointer hover:text-orange-400" />
              <FaGithub className="text-3xl cursor-pointer hover:text-orange-400" />
            </div>

            {/* Download CV Button */}
            <button className="bg-orange-500 text-white px-6 py-2 mt-6 rounded-full hover:bg-orange-600 transition duration-300">
              Download CV
            </button>
          </div>

          {/* Image Section */}
          <div className="mt-8 md:mt-0">
            <Image
              src="/img2.png" // Ensure the path starts with slash
              alt="Your Image Description"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;