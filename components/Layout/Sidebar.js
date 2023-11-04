import Link from "next/link";
import React from "react";
import { getCategories } from "../../utils/Helpers";

const Sidebar = () => {
  const categories = getCategories();
  return (
    <div className="max-[768px]:flex-row max-[768px]:flex-wrap flex flex-col py-1.5 px-3 custom-scrollbar-height">
      {categories.map((category, index) => (
        <a
          href=""
          className="flex items-center p-1.5 max-[768px]:flex-col max-[768px]:justify-center max-[768px]:w-2/6"
          key={index}
        >
          <img
            className="w-11 h-11 object-contain mr-3 block max-[768px]:mr-0"
            src={category.icon}
            alt=""
          />
          <span className="max-[768px]:text-center text-sm uppercase font-medium font-['Outfit'] text-black">
            {category.name}
          </span>
        </a>
      ))}
    </div>
  );
};
export default Sidebar;
