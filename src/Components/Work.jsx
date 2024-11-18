import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
function Work() {
  const [images, setImages] = useState([
    {
      url: "https://www.cssdesignawards.com/cdasites/2022/202204/20220427133337.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694ef8e411d3139b947e7f6_Botify%20-%2016%209%20(A).webp",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A).webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d407eef769166de4e917_Kablamo%20-%2016%209%20(A).webp",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d6a0ea9cf11c61fb84f1_Yahoo%20-%2016%209%20(A).webp",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[30vw] leading-none select-none font-medium tracking-tight">
          work
        </h1>
        <div className="absolute w-full h-full top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  style={{ top: elem.top, left: elem.left }}
                  className="absolute w-64 h-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
