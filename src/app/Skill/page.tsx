import React from "react";

export default function Skills() {
  return (
    <section className="bg-[#8b70d6] py-20 px-4">
      <h2 className="text-3xl font-bold text-center">
      <span className="text-white"> My Skills</span>
      </h2>
      <div className="max-w-4xl mx-auto mt-8">
        <div className="flex justify-between">
          <span>HTML-5</span>
          <span>80%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-orange-300 h-2 rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-4">
          <span>CSS-3</span>
          <span>75%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-orange-300 h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-4">
          <span>TypeScript</span>
          <span>60%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-orange-300 h-2 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-4">
          <span>JavaScript</span>
          <span>50%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-orange-300 h-2 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-4">
          <span>Adobe Photoshop</span>
          <span>75%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-orange-300 h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-4">
          <span>Adobe Illustrator</span>
          <span>60%</span>
        </div>
        <div className="bg-gray-900 h-2 rounded-full mt-2">
          <div
            className="bg-orange-300 h-2 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
