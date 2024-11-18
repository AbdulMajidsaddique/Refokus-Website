import React from "react";
import Marquee from "./Marquee";

function Marquees() {
  var images = [
    [
      "https://cdn.worldvectorlogo.com/logos/wellbeing-awards-2022.svg",
      "https://cdn.worldvectorlogo.com/logos/openstack.svg",
      "https://cdn.worldvectorlogo.com/logos/dr-ritter.svg",
      "https://cdn.worldvectorlogo.com/logos/expert-tire-3.svg",
      "https://cdn.worldvectorlogo.com/logos/twilio-2.svg",
      "https://cdn.worldvectorlogo.com/logos/spotify-logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
      "https://cdn.worldvectorlogo.com/logos/wellbeing-awards-2022.svg",
      "https://cdn.worldvectorlogo.com/logos/twilio-2.svg",
      "https://cdn.worldvectorlogo.com/logos/openstack.svg",
    ],
    [
      "https://cdn.worldvectorlogo.com/logos/wellbeing-awards-2022.svg",
      "https://cdn.worldvectorlogo.com/logos/openstack.svg",
      "https://cdn.worldvectorlogo.com/logos/dr-ritter.svg",
      "https://cdn.worldvectorlogo.com/logos/expert-tire-3.svg",
      "https://cdn.worldvectorlogo.com/logos/twilio-2.svg",
      "https://cdn.worldvectorlogo.com/logos/spotify-logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
      "https://cdn.worldvectorlogo.com/logos/wellbeing-awards-2022.svg",
      "https://cdn.worldvectorlogo.com/logos/twilio-2.svg",
      "https://cdn.worldvectorlogo.com/logos/openstack.svg",
    ],
  ];
  return (
    <div className="py-20 mt-28 w-full relative overflow-hidden">
      {images.map((elem, index) => (
        <Marquee
          direction={index === 0 ? "left" : "right"}
          key={index}
          val={elem}
        />
      ))}
    </div>
  );
}

export default Marquees;
