import React, { useState } from "react";
import { tabCategoryStyles, tabStyles } from "@/styles/filterStyles";
import { useDispatch } from "react-redux";
import { selectCategory } from "@/store/advancedFilter";
import { CategoryCard } from "@/components/mini/CategoryCard";
import { Tab, Tabs } from "@mui/material";
import { RESIDENTIAL, COMMERCIAL } from "@/constants/filterOptions";

export function UnitTypeFilter() {
  const [tabValue, setTabValue] = useState(0);
  const categories = ["Sale", "Rent"];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const dispatch = useDispatch();
  const chooseCategory = (category: string) => {
    setSelectedCategory(category);
    dispatch(selectCategory(category));
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
        {(tabValue === 0 ? RESIDENTIAL : COMMERCIAL).map((category) => (
          <CategoryCard
            key={category.id}
            value={category.name}
            isSelected={selectedCategory === category.name}
            onClick={() => chooseCategory(category.name)}
          />
        ))}
      </div>
    </div>
  );
}
