"use client";

import Line from "@/components/mini/Line";
import Categories from "./Categories";
import Cities from "./Cities";
import { UnitTypeFilter } from "./UnitTypeFilter";
import { Bedrooms } from "./Bedrooms";
import { Bathrooms } from "./Baths";

export default function FilterModal() {
  return (
    <div className="advanced_filter  bg-white  pt-0 flex flex-col gap-5 items-start justify-start rounded-b-3xl ">
      <div className="text-[28px] px-3">Advanced Filter</div>
      <Cities />
      <Line />
      <Categories />
      <Line />
      <UnitTypeFilter />
      <Line />
      <Bedrooms />
      <Line />
      <Bathrooms />
    </div>
  );
}
