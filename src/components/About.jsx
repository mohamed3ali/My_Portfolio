import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I’m a computer science engineer who is passionate about making open-source more accessible. Some technologies I enjoy working with include React js , Node.js.
        </p>

        <br />

        <p className="text-xl">
        Building state-of-the-art, easy to use, user-friendly websites and applications are truly a passion of mine. I actively seek out new technologies and stay up-to-date on industry trends and advancements. My great background as a Front End Developer, along with my nonstop self-study and development, has allowed me to attain a strong foundation of technical skills. I actively seek out new technologies and stay up to date on industry trends and advancements.
        </p>
      </div>
    </div>
  );
};

export default About;
