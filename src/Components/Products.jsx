import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "arqitel",
      description: `Learning is a lifelong journey that shapes our understanding, broadens horizons, and empowers us to grow continually.`,
      live: true,
      case: false,
      image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A).webp", // Add the image path here
    },
    {
      title: "ttr",
      description: `Technology bridges distances, accelerates innovation, simplifies lives, and creates endless opportunities for connection, learning, and progress.`,
      live: true,
      case: true,
      image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A).webp",
    },
    {
      title: "YIR 2022",
      description: `Nature’s beauty inspires peace, its resilience teaches strength, and its cycles remind us of life’s delicate balance.`,
      live: true,
      case: false,
      image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A).webp",
    },
    {
      title: "Yahoo!",
      description: `Technology bridges distances, accelerates innovation, simplifies lives, and creates endless opportunities for connection, learning, and progress.`,
      live: true,
      case: true,
      image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A).webp",
    },
    {
      title: "Rainfall",
      description: `Learning is a lifelong journey that shapes our understanding, broadens horizons, and empowers us to grow continually.`,
      live: true,
      case: true,
      image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp",
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23); 
  };

  return (
    <div className="mt-12 relative ">
      {/* Render all products */}
      {products.map((elem, index) => (
        <Product key={index} mover={mover} val={elem} count={index} />
      ))}

      {/* Motion container */}
      <div className="absolute w-full h-full top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[28rem] h-[23rem] bg-white left-[44%] overflow-hidden -translate-x-[50%] shadow-lg rounded-md"
        >
          {/* Render images dynamically */}
          {products.map((product, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full overflow-hidden "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
