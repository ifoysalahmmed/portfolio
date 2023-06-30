import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full md:h-screen sm:h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl pt-6">
          Hi ✋, I am Foysal Ahmmed Limon. I completed my graduation B.Sc. in
          Software Engineering from Daffodil International University under
          Software Engineering Department. I've honed my skills in a variety of
          technologies, including HTML, CSS, Javascript, ReactJs, and Firebase.
          And I've also worked with NodeJs, ExpressJs, Mongodb.
        </p>
        <br />
        <p className="text-xl">
          I am passionate about web development, so that, I am mastering these
          technologies. I am passionate about web development because it is a
          dynamic industry where I have to update my knowledge day to day.
          Recently, I'm starting to learning NextJs.
        </p>
      </div>
    </div>
  );
};

export default About;
