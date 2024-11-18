import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const data = [
    {
      url: "https://cdn.worldvectorlogo.com/logos/wellbeing-awards-2022.svg",
      number: 48,
    },
    {
      url: "https://cdn.worldvectorlogo.com/logos/openstack.svg",
      number: 2,
    },
    {
      url: "https://cdn.worldvectorlogo.com/logos/dr-ritter.svg",
      number: 11,
    },
    {
      url: "https://cdn.worldvectorlogo.com/logos/expert-tire-3.svg",
      number: 48,
    },
    {
      url: "https://cdn.worldvectorlogo.com/logos/twilio-2.svg",
      number: 2,
    },
    {
      url: "https://cdn.worldvectorlogo.com/logos/spotify-logo.svg",
      number: 11,
    },
  ];

  return (
    <div className="flex items-center mt-16">
      {data.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
};

export default Stripes;
