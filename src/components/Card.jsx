import { motion } from "motion/react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";

function Card({ data, ref }) {
  return (
    <motion.div
      drag
      dragConstraints={ref}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      className="shrink-0 relative w-60 h-72 rounded-4xl bg-zinc-800/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm mt-5 tracking-wide">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-4">
          <h5 className="text-zinc-100">{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <AiOutlineClose size=".8em" color="#fff" />
            ) : (
              <AiOutlineDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 flex justify-center items-center ${data.tag.color}`}
          >
            <h3 className="text-sm">{data.tag.title}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
