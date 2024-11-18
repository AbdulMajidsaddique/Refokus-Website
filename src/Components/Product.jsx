import React from "react";

function Product({ val, mover,count }) {
  return (
    <div className="w-full py-20 h-[23rem] text-white hover:bg-zinc-800">
      <div
        onMouseEnter={() => {mover(count)}}
        className="max-w-screen-lg mx-auto flex items-center justify-between"
      >
        <h1 className="text-3xl uppercase font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p>{val.description}</p>

          {/* "Get Started" Button */}
          <div className="relative inline-block bg-zinc-100 px-6 py-2 text-sm rounded-full mt-5 overflow-hidden group">
            {/* Initial Text */}
            <span className="text-black font-medium transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
              Get Started
            </span>
            {/* Hover Text */}
            <span className="absolute inset-0 text-black font-medium opacity-0 translate-y-full transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
              Let's Go
            </span>
          </div>

          {/* Conditionally Render "Case Study" Button */}
          {val.case && (
            <div className="relative inline-block bg-zinc-100 px-6 py-2 text-sm rounded-full mt-5 overflow-hidden group ml-4">
              {/* Initial Text */}
              <span className="text-black font-medium transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                Case Study
              </span>
              {/* Hover Text */}
              <span className="absolute inset-0 text-black font-medium opacity-0 translate-y-full transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center">
                Learn More
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
