import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCity } from "@/store/advancedFilter";
import { RootState } from "@/store/store";
import Image from "next/image";

export default function ClearCity() {
  const dispatch = useDispatch();
  const selectedCities = useSelector(
    (state: RootState) => state.advancedFilter.cities
  );

  return (
    <>
      {selectedCities.length > 0 && (
        <div
          className="flex rounded-lg border border-bg-borderColor w-full px-1 gap-1"
          onClick={() => dispatch(clearCity())}
        >
          <Image
            className="cursor-pointer"
            src="/assets/icons/close.svg"
            alt="filter"
            width={14}
            height={14}
            priority
          />
          <div className="flex items-center gap-1 text-[#202020] text-[14px] w-auto cursor-pointer ">
            <p>Clear</p>
          </div>
        </div>
      )}
    </>
  );
}
