import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-10 flex gap-16">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 ">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-300 uppercase">Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((elem, index) => {
              return (
                <a key={index} className="block mt-2 uppercase text-zinc-600">
                  {elem}
                </a>
              );
            })}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-300 uppercase">Sitemap</h4>
            {["HOME", "work", "careers", "contact"].map((elem, index) => (
              <a key={index} className="block mt-2 uppercase text-zinc-600">{elem}</a>
            ))}
          </div>
          <div className="basis-2/3 flex flex-col items-end">
            <p className="text-right">
              Refokus is a pioneering digital agency driven by design and
              empowered by Technology
            </p>
            <img
              className="w-32 h-8 mt-10"
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
