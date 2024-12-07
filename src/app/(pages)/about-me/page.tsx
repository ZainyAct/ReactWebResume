"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutMePage() {
  return (
    <div className="gradient flex justify-center items-center h-screen bg-gray-50">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold">About Me</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Image Section */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/Zain.jpg`}
                alt="Zain Mahmoud"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>

            {/* Bio Section */}
            <div className="flex-1">
              <p className="text-lg text-gray-700">
                Hi, I’m Zain Mahmoud, a 2B Mechatronics Engineering student at the University of Waterloo. I’m deeply passionate about combining software and hardware to create impactful and innovative solutions. My journey has led me to explore the fields of AI, robotics, and full-stack development.
              </p>
              <p className="mt-4 text-gray-600">
                With hands-on experience in designing smart systems like AI-powered healthcare planners, robotic prosthetics, and HUD glasses, I enjoy tackling complex problems and bringing ideas to life. I value teamwork, continuous learning, and making a difference through technology.
              </p>
            </div>
          </div>

          {/* Interactive Tabs Section */}
          <div className="mt-8">
            <Tabs defaultValue="skills">
              <TabsList>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
              </TabsList>
              <TabsContent value="skills">
                <ul className="list-disc ml-6 mt-4 text-gray-700">
                  <li>Programming Languages: Python, C++, JavaScript/TypeScript, HTML, CSS/SASS.</li>
                  <li>Frameworks & Tools: ReactJS, Django, Flask, ROS2, TensorFlow, PyTorch, OpenCV.</li>
                  <li>Cloud & Databases: PostgreSQL, SQLite, GCP, AWS, with Azure Fundamentals certification.</li>
                  <li>Full-Stack Development: Skilled in building robust systems using FastAPI, Node.js, and MySQL.</li>
                  <li>Proficient in CI/CD processes using GitHub Actions for scalable deployments.</li>
                </ul>
              </TabsContent>
              <TabsContent value="hobbies">
                <p className="mt-4 text-gray-700">
                  Outside of work and studies, I enjoy:
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                  <li>Sports: Playing volleyball and practicing Muay Thai to stay active and competitive.</li>
                  <li>Electronics Repair: Building PCs and repairing devices like phones and laptops.</li>
                  <li>Personal Projects: Experimenting with AI, robotics, and interactive web applications.</li>
                  <li>Gaming and coding fun projects to merge creativity and technology.</li>
                </ul>
              </TabsContent>
              <TabsContent value="goals">
                <p className="mt-4 text-gray-700">
                  My current goals include:
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                  <li>Completing my Bachelor’s degree in Mechatronics Engineering with a focus on AI and robotics.</li>
                  <li>Developing innovative systems like smart HUD glasses to enhance daily life and security.</li>
                  <li>Gaining more experience in software development and machine learning projects.</li>
                  <li>Contributing to impactful engineering solutions that blend hardware and software seamlessly.</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
