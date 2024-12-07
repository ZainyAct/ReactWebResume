import React from "react";
import Image from "next/image";

export const ProjectCards = (props: { projects: any }) => {
  const { projects } = props;

  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {projects.map((project: any, index: any) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white bg-opacity-50 shadow-lg p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105"
            style={{ flex: "1 0 40%", maxWidth: "25%", minWidth: "300px" }}
          >
            <a href={project.data.link} className="flex flex-col items-center">
              <Image
                className="object-cover rounded-lg mb-6"
                src={project.data.imageUrl}
                alt={project.data.title}
                width={300}
                height={300}
              />
              <div className="mt-2">
                <h5 className="text-xl font-bold text-gray-900">
                  {project.data.title}
                </h5>
                <p className="text-base text-gray-700 mt-2">
                  {project.data.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
