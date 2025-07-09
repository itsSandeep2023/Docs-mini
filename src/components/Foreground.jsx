import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      fileSize: "3mb",
      close: false,
      tag: { isOpen: true, title: "Download Now", color: "bg-green-600" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      fileSize: "8mb",
      close: true,
      tag: { isOpen: true, title: "Downloaded", color: "bg-blue-600" },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      fileSize: ".7mb",
      close: true,
      tag: { isOpen: false, title: "Downloaded", color: "bg-blue-600" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full p-10 flex flex-wrap gap-5 "
    >
      {data.map((item, index) => (
        <Card data={item} ref={ref} />
      ))}
    </div>
  );
}

export default Foreground;
