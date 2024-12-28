"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { formatPrice } from "@/utils/utils";

export default function Output() {
  const filterState = useSelector((state: RootState) => state.filter);
  const selectedCities = useSelector(
    (state: RootState) => state.advancedFilter.cities
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.advancedFilter.category
  );
  const selectedUnitType = useSelector(
    (state: RootState) => state.advancedFilter.unitType
  );
  const selectedBedrooms = useSelector(
    (state: RootState) => state.advancedFilter.bedrooms
  );
  const selectedBathrooms = useSelector(
    (state: RootState) => state.advancedFilter.baths
  );
  const selectedParks = useSelector(
    (state: RootState) => state.advancedFilter.parks
  );
  const completionStatus = useSelector(
    (state: RootState) => state.advancedFilter.completion_status
  );
  const selectedListedBy = useSelector(
    (state: RootState) => state.advancedFilter.listedBy
  );
  const selectedOwnership = useSelector(
    (state: RootState) => state.advancedFilter.ownership
  );
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
        <p>
          Selected Cities {selectedCities.map((city) => city.name).join(", ")}
        </p>
        <p>Selected category: {selectedCategory}</p>
        <p>Selected Unit type: {selectedUnitType}</p>
        <p>
          Selected Bedrooms{" "}
          {selectedBedrooms.map((bedroom) => bedroom).join(", ")}
        </p>
        <p>
          Selected Bathrooms {selectedBathrooms.map((bath) => bath).join(", ")}
        </p>
        <p>Selected PARK {selectedParks.map((bath) => bath).join(", ")}</p>
        <p>
          Completion status{" "}
          {completionStatus.map((completion) => completion).join(", ")}
        </p>
        <p>Selected Listed By: {selectedListedBy}</p>
        <p>Ownership: {selectedOwnership.map((owner) => owner).join(", ")}</p>
      </div>
    </div>
  );
}
