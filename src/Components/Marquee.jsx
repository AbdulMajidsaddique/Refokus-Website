import { motion } from "motion/react";
import React from "react";

const Marquee = ({ val,direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction==='left'?'0':'-100%' }}
        animate={{x: direction==='left'?'-100%':'0' }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {val.map((url, index) => (
          <img key={index} src={url} className="flex-shrink-0 w-[9vw]" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction==='left'?'0':'-100%' }}
        animate={{x: direction==='left'?'-100%':'0' }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {val.map((url, index) => (
          <img key={index} src={url} className="flex-shrink-0 w-[9vw]" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
