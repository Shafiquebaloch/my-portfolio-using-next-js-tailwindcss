import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="bg-gray-300 py-20 px-4" id="Projects">
      <div className="text-center">
        <h1 className="text-white text-4xl font-semibold mb-4">Projects</h1>
        <div className="border-t-2 border-white w-16 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Project 1 */}
          <div className="relative group">
            <Image
              src="/images/img2.png"
              alt="Your Image Description"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2" />
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative group">
            <Image
              src="/images/img2.png"
              alt="Your Image Description"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2" />
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative group">
            <Image
              src="/images/img2.png"
              alt="Your Image Description"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2" />
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative group">
            <Image
              src="/images/img2.png"
              alt="Your Image Description"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2" />
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="relative group">
            <Image
              src="/images/img2.png"
              alt="Your Image Description"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2" />
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="relative group">
            <Image
              src="/images/img2.png"
              alt="Your Image Description"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2" />
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>

          {/* Project 7 */}
          <div className="relative group">
            <Image
              src="/images/img2.png"
              alt="Your Image Description"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2" />
                <p className="text-white text-lg">Web Design</p>
              </div>
            </div>
          </div>

          {/* Project 8 */}
          <div className="relative group">
            <Image
              src="/images/img2.png"
              alt="Your Image Description"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-700 bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <FaExternalLinkAlt className="text-white text-2xl mb-2" />
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