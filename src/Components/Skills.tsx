import React from "react";

export default function Skills() {
  return (
    <section className="bg-gray-300 py-20 px-4" id="Skill">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        My <span className="text-orange-500">Skills</span>
      </h2>
      <div className="max-w-4xl mx-auto mt-8">
        {/* Skill 1: HTML */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg sm:text-xl">HTML-5</span>
          <span className="text-lg sm:text-xl">80%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-blue-800 h-2 rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>

        {/* Skill 2: CSS */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg sm:text-xl">CSS-3</span>
          <span className="text-lg sm:text-xl">75%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-blue-800 h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>

        {/* Skill 3: TypeScript */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg sm:text-xl">TypeScript</span>
          <span className="text-lg sm:text-xl">60%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-blue-800 h-2 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>

        {/* Skill 4: JavaScript */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg sm:text-xl">JavaScript</span>
          <span className="text-lg sm:text-xl">50%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-blue-800 h-2 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>

        {/* Skill 5: Adobe Photoshop */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg sm:text-xl">Adobe Photoshop</span>
          <span className="text-lg sm:text-xl">75%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-blue-800 h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>

        {/* Skill 6: Adobe Illustrator */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg sm:text-xl">Adobe Illustrator</span>
          <span className="text-lg sm:text-xl">60%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-blue-800 h-2 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>
    </section>
  );
}