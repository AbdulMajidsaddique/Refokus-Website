import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className="min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex justify-between items-center overflow-hidden group relative">
      {/* Animated Text */}
      <span className="text-sm font-medium relative group-hover:translate-y-[-100%] group-hover:opacity-0 transition-transform duration-300 ease-in-out">
        Get Started
      </span>
      <span className="text-sm font-medium absolute top-full group-hover:top-1/2 group-hover:translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        Let's Go
      </span>

      {/* Icon */}
      <span className="text-2xl">
        <IoIosReturnRight />
      </span>
    </div>
  );
}

export default Button;
