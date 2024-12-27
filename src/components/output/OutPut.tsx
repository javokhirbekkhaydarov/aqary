"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { formatPrice } from "@/utils/utils";

export default function Output() {
  const filterState = useSelector((state: RootState) => state.filter);

  return (
    <div className="pt-4 flex max-w-[1440px] items-start justify-start rounded border-2 border-stone-700 p-40 py-80 w-full">
      <div>
        <p>Selected Section: {filterState.section}</p>
        <p>Selected Category: {filterState.category}</p>
        <p>Selected Unit Type: {filterState.unitType}</p>
        <p>Search Query: {filterState.searchQuery}</p>
        <p>
          Price: {formatPrice(filterState.priceRange[0])} -{" "}
          {formatPrice(filterState.priceRange[1])} AED
        </p>
      </div>
    </div>
  );
}
