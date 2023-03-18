import React from "react";
import mm from "../assets/portfolio/robit.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/her.jpg";
import reactParallax from "../assets/portfolio/food.jpg";
import reactSmooth from "../assets/portfolio/travia.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mm,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
     <div key={1} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={mm}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center"><a href=" https://mohamed3ali.github.io/Html5-Css3-JS-SASS/"  target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">     Demo
                </button></a>
             
            <a href="https://github.com/mohamed3ali/Html5-Css3-JS-SASS"> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>   
              </div>
            </div>
            <div key={2} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={reactParallax}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center"><a href="  https://mohamed3ali.github.io/Javascript-API/"  target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">     Demo
                </button></a>
             
            <a href="https://github.com/mohamed3ali/Javascript-API"> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>   
              </div>
            </div>

            <div key={3} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={navbar}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center"><a href="https://mohamed3ali.github.io/Fashion-E-commerce-/"  target="_blank" ><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">     Demo
                </button></a>
             
            <a href="https://github.com/mohamed3ali/Fashion-E-commerce-"> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>   
              </div>
            </div>
            <div key={4} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={reactSmooth}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center"><a href="https://mohamed3ali.github.io/travel.javascript-project/"  target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">     Demo
                </button></a>
             
            <a href="https://github.com/mohamed3ali/travel.javascript-project"> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>   
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
