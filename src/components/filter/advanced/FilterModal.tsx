"use client";

import Categories from "./Categories";
import Cities from "./Cities";

export default function FilterModal() {
  return (
    <div className="advanced_filter  bg-white  pt-0 flex flex-col gap-5 items-start justify-start rounded-b-3xl ">
      <div className="text-[28px] px-3">Advanced Filter</div>
      <Cities />
      <div className="w-full h-[1px] bg-line"></div>
      <Categories />
    </div>
  );
}
