'use client'
import { useDispatch, useSelector } from "react-redux";
import {FilterDropdown} from "@/components/filter/FilterDropdown";
import {SECTIONS , CATEGORIES  } from "@/constants/filterOptions";
import {setSection, setCategory, setUnitType, setSearchQuery} from "@/store/filterSlice";
import {SearchInput} from "@/components/filter/SearchInput";
import {UnitTypeDropdown} from "@/components/filter/UnitTypeDropdown";
import {RootState} from "@/store/store";
export default function FilterUI() {
  const dispatch = useDispatch();
  const { section, category, unitType, searchQuery } = useSelector((state: RootState) => state.filter);

  return (
      <div className="p-[25px] bg-white flex items-center justify-center gap-4 rounded-3xl">
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
      </div>
  );
}