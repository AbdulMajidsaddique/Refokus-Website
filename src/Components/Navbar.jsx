import React from "react";
import { GoArrowUpLeft } from "react-icons/go";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <h2 className="text-2xl">
          <GoArrowUpLeft />
        </h2>
        <h1 className="text-1xl text-white font-bold"> Refokus</h1>
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                href="#"
                className="font-regular text-sm flex items-center gap-1"
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-2 h-2 rounded-full bg-green-500"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
