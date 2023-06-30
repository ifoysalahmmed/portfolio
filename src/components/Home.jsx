import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full pt-20 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto h-full flex flex-col md:flex-row justify-center items-center px-4">
        <div className="flex flex-col justify-center h-full md:w-[85%]">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a{" "}
            <span className="text-cyan-300">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Front-end Developer",
                  "Web Developer",
                ]}
                loop={3}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have been learning React for the last past Six months. Currently,
            I love to work on web application using technologies like{" "}
            <span className="font-bold text-cyan-300">React,</span>{" "}
            <span className="font-bold text-cyan-300">JavaScript,</span>{" "}
            <span className="font-bold text-cyan-300">Tailwind,</span>{" "}
            <span className="font-bold text-cyan-300">Bootstrap,</span>{" "}
            <span className="font-bold text-cyan-300">Node,</span>{" "}
            <span className="font-bold text-cyan-300">Express,</span> and{" "}
            <span className="font-bold text-cyan-300">MongoDB.</span>
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight
                  size={25}
                  className="ml-1"
                ></MdOutlineKeyboardArrowRight>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
