import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <h2 className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            Contact
          </h2>
          <p className="pt-6">
            Please submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-evenly items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FcPhoneAndroid size={50}></FcPhoneAndroid>
              <div className="font-medium">
                <p>+880 1575 - 094413</p>
                <p>+880 1308 - 317413</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot
                size={50}
                className="text-gray-500"
              ></FaLocationDot>
              <div className="font-medium">
                <p>Panchagarh, Rangpur</p>
                <p>Bangladesh</p>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/4ccc9014-c91d-4c88-ac27-58731f838916"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
