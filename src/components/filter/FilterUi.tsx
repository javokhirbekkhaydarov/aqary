"use client";
import { useDispatch, useSelector } from "react-redux";
import { FilterDropdown } from "@/components/filter/FilterDropdown";
import { SECTIONS, CATEGORIES } from "@/constants/filterOptions";
import {
  setSection,
  setCategory,
  setUnitType,
  setSearchQuery,
} from "@/store/filterSlice";
import { SearchInput } from "@/components/filter/SearchInput";
import { UnitTypeDropdown } from "@/components/filter/UnitTypeDropdown";
import { RootState } from "@/store/store";
import { PriceRange } from "./PriceRange";
import Image from "next/image";
import PopularSearches from "./PopularSearches";
import AdvancedFilter from "./advanced/AdvancedFilter";
export default function FilterUI() {
  const dispatch = useDispatch();
  const { section, category, unitType, searchQuery } = useSelector(
    (state: RootState) => state.filter
  );

  return (
      <div className="filter_ui flex flex-col">
        <div className="p-[25px] bg-white flex flex-col sm:flex-col md:flex-row items-center justify-center gap-4 rounded-t-3xl rounded-l-3xl">
        <FilterDropdown
          value={section}
          options={SECTIONS}
          onSelect={(value) => dispatch(setSection(value))}
          label="Select Section"
        />
        <FilterDropdown
          value={category}
          options={CATEGORIES}
          onSelect={(value) => dispatch(setCategory(value))}
          label="Select Category"
        />
        <SearchInput
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <UnitTypeDropdown
          value={unitType}
          onSelect={(value) => dispatch(setUnitType(value))}
        />
        <PriceRange label="Price Range (AED)" />
        <div className="bg-secondaryGray h-[52px] w-[64px] rounded-lg cursor-pointer flex items-center justify-center">
          <Image
            src="/assets/icons/searchBtn.svg"
            alt="search btn"
            width={24}
            height={24}
            priority
            draggable={false}
          />
        </div>
      </div>
      <div className="filter_bottom  grid grid-cols-2">
        <PopularSearches />
        <AdvancedFilter />
      </div>
    </div>
  );
}
