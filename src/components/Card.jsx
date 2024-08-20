import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="flex-shrink-0 relative w-60 h-72 rounded-[40px] bg-zinc-900 text-white px-5 py-10 overflow-hidden"
    >
      <FaFileAlt />
      <p className="mt-5 text-sm leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0 ">
        <div className="flex  items-center justify-between py-3 px-8 mb-2 ">
          <h4>{data.filesize}</h4>
          <span className="w-7 h-7  rounded-full flex items-center justify-center  bg-zinc-600">
            {data.close ? <IoClose /> : <FaDownload size=".7em" />}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-2 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-5m font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
