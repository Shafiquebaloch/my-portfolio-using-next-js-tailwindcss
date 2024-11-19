import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  return (
    <section className="bg-pink-400 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-white text-4xl font-semibold mb-4">Projects</h1>
        <div className="border-t-2 border-white w-16 mx-auto mb-8"></div>
        <div className="grid grid-cols-4 gap-4">
          <div className="relative group">

          <Image
        src="/img2.png"  // Path ko slash se start karna hoga
        alt="Your Image Description"
        width={300}
        height={200} className="rounded-lg"
      />


            {/* <img
              alt="A computer setup with multiple monitors displaying code"
              className="rounded-lg"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/T2zPTDG6glY4NtjLPQWVtXDIWVd0cv6oFxSe82edB4tpCPvTA.jpg"
              width="300"
            /> */}
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
              <FaExternalLinkAlt className="text-white text-2xl mb-2"/>
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>
          <div className="relative group">
           
          <Image
        src="/img2.png"  // Path ko slash se start karna hoga
        alt="Your Image Description"
        width={300}
        height={200} className="rounded-lg"
      />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
              <FaExternalLinkAlt className="text-white text-2xl mb-2"/>
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>
          <div className="relative group">
           
          <Image
        src="/img2.png"  // Path ko slash se start karna hoga
        alt="Your Image Description"
        width={300}
        height={200} className="rounded-lg"
      />




            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2"/>
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>




          </div>
          <div className="relative group">
           
          <Image
        src="/img2.png"  // Path ko slash se start karna hoga
        alt="Your Image Description"
        width={300}
        height={200} className="rounded-lg"
      />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
              <FaExternalLinkAlt className="text-white text-2xl mb-2"/>                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            
          <Image
        src="/img2.png"  // Path ko slash se start karna hoga
        alt="Your Image Description"
        width={300}
        height={200} className="rounded-lg"
      />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
              <FaExternalLinkAlt className="text-white text-2xl mb-2"/>
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>
          <div className="relative group">
           
          <Image
        src="/img2.png"  // Path ko slash se start karna hoga
        alt="Your Image Description"
        width={300}
        height={200} className="rounded-lg"
      />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
              <FaExternalLinkAlt className="text-white text-2xl mb-2"/>
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>
          <div className="relative group">
           
          <Image
        src="/img2.png"  // Path ko slash se start karna hoga
        alt="Your Image Description"
        width={300}
        height={200} className="rounded-lg"
      />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
              <FaExternalLinkAlt className="text-white text-2xl mb-2"/>
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>
          <div className="relative group">
           
          <Image
        src="/img2.png"  // Path ko slash se start karna hoga
        alt="Your Image Description"
        width={300}
        height={200} className="rounded-lg"
      />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
              <FaExternalLinkAlt className="text-white text-2xl mb-2"/>
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
