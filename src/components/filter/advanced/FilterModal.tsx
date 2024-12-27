"use client";

import Cities from "./Cities";

export default function FilterModal() {
  return (
    <div className="advanced_filter  bg-white p-3 pt-0 flex flex-col gap-5 items-start justify-start rounded-b-3xl ">
      <div className="text-[28px]">Advanced Filter</div>
      <Cities />
    </div>
  );
}
