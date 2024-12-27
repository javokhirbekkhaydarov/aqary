
import React from "react";
import Image from "next/image";
import { CategoryCardProps } from "@/types/types";
export const CategoryCard: React.FC<CategoryCardProps> = ({
  value,
  isSelected,
  onClick,
    image
}) => {
  return (
    <div
      className={`w-[140px] flex flex-col h-[120px] items-center justify-center border cursor-pointer transition-all duration-300 rounded-lg ${
        isSelected
          ? "border-secondaryBlue bg-secondaryBlue"
          : "border-primaryGray hover:bg-secondaryBlue hover:border-secondaryBlue"
      }`}
      onClick={onClick}
    >
      <Image
        src={
          isSelected
            ? `/assets/icons/${image.toLowerCase()}_active.svg`
            : `/assets/icons/${image.toLowerCase()}.svg`
        }
        alt={value}
        width={50}
        height={50}
        priority
        draggable={false}
      />

      <div className={`text-[20px] text-center leading-normal ${isSelected ? "text-buttonText" : ""}`}>
        {value}
      </div>
    </div>
  );
};
