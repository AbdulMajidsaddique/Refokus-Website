import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-20 flex gap-2">
        <Card width={"w-1/3"} start={false} para={true} />
        <Card width={"w-2/3"} start={true} para={false} hover="true" />
      </div>
    </div>
  );
};

export default Cards;
