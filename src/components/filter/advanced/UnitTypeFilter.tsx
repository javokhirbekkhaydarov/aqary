import React, { useState } from "react";
import { tabCategoryStyles, tabStyles } from "@/styles/filterStyles";
import { useDispatch } from "react-redux";
import { selectCategory } from "@/store/advancedFilter";
import { CategoryCard } from "@/components/mini/CategoryCard";
import { Tab, Tabs } from "@mui/material";
import { RESIDENTIAL, COMMERCIAL } from "@/constants/filterOptions";

export function UnitTypeFilter() {
  const [tabValue, setTabValue] = useState(0);
  const [selectedUnitType, setSelectedUnitType] = useState<string | null>(null);
  const dispatch = useDispatch();
  const chooseUnitType = (unit: string) => {
    setSelectedUnitType(unit);
    dispatch(selectCategory(unit));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-2">
      <Tabs
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)}
        sx={tabCategoryStyles}
      >
        <Tab label="Residential" />
        <Tab label="Commercial" />
      </Tabs>
      <div className="flex gap-3">
        {(tabValue === 0 ? RESIDENTIAL : COMMERCIAL).map((unit) => (
          <CategoryCard
            key={unit.id}
            value={unit.name}
            image={unit.image}
            isSelected={selectedUnitType === unit.name}
            onClick={() => chooseUnitType(unit.name)}
          />
        ))}
      </div>
    </div>
  );
}
