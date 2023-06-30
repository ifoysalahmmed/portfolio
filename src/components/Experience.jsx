import React from "react";
import bootstrapImg from "../assets/experience/bootstrap.png";
import cssImg from "../assets/experience/css.png";
import expressImg from "../assets/experience/express.png";
import firebaseImg from "../assets/experience/firebase.png";
import githubImg from "../assets/experience/github.png";
import hooksImg from "../assets/experience/hooks.png";
import htmlImg from "../assets/experience/html.png";
import javascriptImg from "../assets/experience/javascript.png";
import jwtImg from "../assets/experience/jwt.png";
import mongodbImg from "../assets/experience/mongodb.png";
import nodeImg from "../assets/experience/node.png";
import reactImg from "../assets/experience/react.png";
import tailwindImg from "../assets/experience/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: htmlImg,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssImg,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwindImg,
      title: "Tailwind",
      style: "shadow-cyan-500",
    },
    {
      id: 4,
      src: bootstrapImg,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    {
      id: 5,
      src: javascriptImg,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImg,
      title: "React",
      style: "shadow-teal-500",
    },
    {
      id: 7,
      src: hooksImg,
      title: "React Hooks",
      style: "shadow-blue-800",
    },
    {
      id: 8,
      src: firebaseImg,
      title: "Firebase",
      style: "shadow-amber-700",
    },
    {
      id: 9,
      src: nodeImg,
      title: "Node",
      style: "shadow-lime-500",
    },
    {
      id: 10,
      src: expressImg,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mongodbImg,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: jwtImg,
      title: "JWT",
      style: "shadow-red-500",
    },
    {
      id: 13,
      src: githubImg,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full sm:h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <h2 className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            Experience
          </h2>
          <p className="pt-6">These are the technologies I've worked with</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "py-2 shadow-md duration-500 hover:scale-105 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
