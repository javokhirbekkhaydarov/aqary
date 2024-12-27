"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "@/store/advancedFilter";
import { CategoryCard } from "@/components/mini/CategoryCard";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const dispatch = useDispatch();
  const chooseCategory = (category: string) => {
    setSelectedCategory(category);
    dispatch(selectCategory(category));
  };

  const categories = ["Sale", "Rent"];

  return (
    <div className="flex px-3 flex-col items-start gap-2">
      <p className="text-[22px] font-medium text-500">Select Category</p>
      <div className="flex flex-col items-start justify-start">
        <div className="flex gap-2 items-center">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              value={category}
              image={category}
              isSelected={selectedCategory === category}
              onClick={() => chooseCategory(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
