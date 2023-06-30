import React from "react";
import crownArt from "../assets/portfolio/crownart.png";
import babyStreet from "../assets/portfolio/babystreet.png";
import tasteBite from "../assets/portfolio/tastebite.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: crownArt,
      demo: "https://crown-art-client.web.app/",
      srcCode: "https://github.com/ifoysalahmmed/crown-art-client",
    },
    {
      id: 2,
      src: babyStreet,
      demo: "https://baby-street-client.web.app/",
      srcCode: "https://github.com/ifoysalahmmed/baby-street-client",
    },
    {
      id: 1,
      src: tasteBite,
      demo: "https://tastebite-client-side.web.app/",
      srcCode: "https://github.com/ifoysalahmmed/tastebite-client",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen sm:h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            Portfolio
          </h2>
          <p className="pt-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, srcCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt=""
                className="rounded-md w-full object-cover duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="font-semibold px-6 py-3 m-4 bg-gradient-to-r from-slate-500 to-gray-300 duration-200 hover:scale-105 rounded-lg">
                    Demo
                  </button>
                </a>
                <a href={srcCode} target="_blank" rel="noreferrer">
                  <button className="font-semibold px-6 py-3 m-4 bg-gradient-to-r from-slate-500 to-gray-300 duration-200 hover:scale-105 rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
