"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const chooseCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex px-3 flex-col items-start gap-2">
      <p className="text-[22px] font-medium text-500">Select Category</p>
      <div className="flex flex-col items-start justify-start">
        <div className="flex gap-2 items-center">
          <div
            className={`w-[140px] flex flex-col h-[120px] items-center justify-center border cursor-pointer transition-all duration-300 rounded-lg ${
              selectedCategory === "Sales"
                ? "border-secondaryBlue bg-secondaryBlue"
                : "border-primaryGray hover:bg-secondaryBlue hover:border-secondaryBlue"
            }`}
            onClick={() => chooseCategory("Sales")}
          >
            <Image
              src={
                selectedCategory === "Sales"
                  ? "/assets/icons/sale_active.svg"
                  : "/assets/icons/sale.svg"
              }
              alt="sales"
              width={63}
              height={63}
              priority
              draggable={false}
            />
            <div
              className={`text-[20px] ${
                selectedCategory === "Sales" ? "text-buttonText" : ""
              }`}
            >
              Sales
            </div>
          </div>
          <div
            className={`w-[140px] flex flex-col h-[120px] items-center justify-center border cursor-pointer transition-all duration-300 rounded-lg ${
              selectedCategory === "Rent"
                ? "border-secondaryBlue bg-secondaryBlue"
                : "border-primaryGray hover:bg-secondaryBlue hover:border-secondaryBlue"
            }`}
            onClick={() => chooseCategory("Rent")}
          >
            <Image
              src={
                selectedCategory === "Rent"
                  ? "/assets/icons/rent_active.svg"
                  : "/assets/icons/rent.svg"
              }
              alt="rent"
              width={63}
              height={63}
              priority
              draggable={false}
            />
            <div
              className={`text-[20px] ${
                selectedCategory === "Rent" ? "text-buttonText" : ""
              }`}
            >
              Rent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
