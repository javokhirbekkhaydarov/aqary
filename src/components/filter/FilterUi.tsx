"use client";

import { useState } from "react";
import { Button, Menu, MenuItem, Chip, Box, Tabs, Tab } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { setSection, setCategory, setUnitType, setSearchQuery } from '@/store/filterSlice';
import type { RootState } from '@/store/store';

const CATEGORIES = ["Sale", "Rent", "Swap", "Investment"] as const;
const SECTIONS = ["Projects", "Unit", "Luxury Unit", "Property", "Luxury Property", "Industry"] as const;
const RESIDENTIAL = ["Apartment", "Pent House", "Luxury Unit", "Town House", "Residential Floor", "Residential Land"] as const;
const COMMERCIAL = ["Commercial Villa", "Commercial Floor", "Offices", "Retail", "Office", "Shop"] as const;

const buttonStyles = {
  textTransform: "none",
  fontWeight: 500,
  fontFamily: "Geologica, sans-serif",
  color: "#000",
  minWidth: "110px",
  height: "52px",
  padding: "15px 12px",
  gap: "10px",
  borderRadius: "8px",
  border: "1px solid #202020",
  fontSize: "14px",
  justifyContent: "space-between",
  transition: "opacity 0.3s ease",
  "&:hover": { opacity: 1 },
};

const menuStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridAutoRows: "auto",
  gap: "10px",
  rounded: "24px",
  padding: "25px",
};

export default function FilterUI() {
  const dispatch = useDispatch();
  const { section, category, unitType, searchQuery } = useSelector((state: RootState) => state.filter);

  const [categoryAnchorEl, setCategoryAnchorEl] = useState<null | HTMLElement>(null);
  const [sectionAnchorEl, setSectionAnchorEl] = useState<null | HTMLElement>(null);
  const [unitTypeAnchorEl, setUnitTypeAnchorEl] = useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = useState(0);

  const handleSectionClick = (event: React.MouseEvent<HTMLButtonElement>) => setSectionAnchorEl(event.currentTarget);
  const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => setCategoryAnchorEl(event.currentTarget);
  const handleUnitTypeClick = (event: React.MouseEvent<HTMLButtonElement>) => setUnitTypeAnchorEl(event.currentTarget);

  const handleSectionClose = (newSection?: string) => {
    setSectionAnchorEl(null);
    if (newSection) dispatch(setSection(newSection));
  };

  const handleCategoryClose = (newCategory?: string) => {
    setCategoryAnchorEl(null);
    if (newCategory) dispatch(setCategory(newCategory));
  };

  const handleUnitTypeClose = (newUnitType?: string) => {
    setUnitTypeAnchorEl(null);
    if (newUnitType) dispatch(setUnitType(newUnitType));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const getChipStyles = (selected: boolean) => ({
    cursor: "pointer",
    width: "100%",
    transition: "all 0.1s linear",
    transitionDelay: "0",
    justifyContent: "center",
    border: "1px solid #E3E3E3",
    fontWeight: 400,
    fontSize: "14px",
    fontFamily: "Geologica, sans-serif",
    colorAdjust: "#202020",
    ...(selected && {
      backgroundColor: "#E3E3E3",
      borderColor: "#202020",
      color: "#202020",
    }),
    "&:hover": {
      backgroundColor: "#E3E3E3",
      paddingTop: "16px !important",
      paddingBottom: "16px !important",
    },
  });

  return (
    <div className="p-[25px] bg-white flex items-center justify-center gap-4 rounded-3xl">
      <Box className="filter_top" display="flex" alignItems="center" gap={2}>
        <Button
          variant="outlined"
          onClick={handleSectionClick}
          endIcon={<img src="/assets/icons/down.svg" alt="down" className={!Boolean(sectionAnchorEl) ? "" : "rotate-180"} />}
          sx={buttonStyles}
        >
          {section}
        </Button>
        <Menu
          anchorEl={sectionAnchorEl}
          open={Boolean(sectionAnchorEl)}
          onClose={() => handleSectionClose()}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={menuStyles}
        >
          <div className="text-[22px] text-500 px-[28px] py-[8px]">Select Section</div>
          <div className="grid grid-cols-3 gap-[2px] p-[4px_20px]">
            {SECTIONS.map((sectionOption) => (
              <MenuItem
                key={sectionOption}
                onClick={() => handleSectionClose(sectionOption)}
                sx={{ "&:hover": { backgroundColor: "transparent" }, padding: "4px" }}
              >
                <Chip
                  label={sectionOption}
                  variant={sectionOption === section ? "filled" : "outlined"}
                  color="primary"
                  style={{ color: "#202020" }}
                  sx={getChipStyles(sectionOption === section)}
                />
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Box>

      <Box className="filter_top" display="flex" alignItems="center" gap={2}>
        <Button
          variant="outlined"
          onClick={handleCategoryClick}
          endIcon={<img src="/assets/icons/down.svg" alt="down" className={!Boolean(categoryAnchorEl) ? "" : "rotate-180"} />}
          sx={buttonStyles}
        >
          {category}
        </Button>
        <Menu
          anchorEl={categoryAnchorEl}
          open={Boolean(categoryAnchorEl)}
          onClose={() => handleCategoryClose()}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={menuStyles}
        >
          <div className="text-[22px] text-500 px-[28px] py-[8px]">Select Category</div>
          <div className="grid grid-cols-3 gap-[2px] p-[4px_20px]">
            {CATEGORIES.map((categoryOption) => (
              <MenuItem
                key={categoryOption}
                onClick={() => handleCategoryClose(categoryOption)}
                sx={{ "&:hover": { backgroundColor: "transparent" }, padding: "4px" }}
              >
                <Chip
                  label={categoryOption}
                  variant={categoryOption === category ? "filled" : "outlined"}
                  color="primary"
                  style={{ color: "#202020" }}
                  sx={getChipStyles(categoryOption === category)}
                />
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Box>

      <div className="h-[54px] min-w-[348px] p-[16px] gap-[12px] rounded-[10px] border-t border-[#202020] text-[#919B9B] bg-white border flex items-start">
        <img src="/assets/icons/search.svg" alt="search" />
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: "100%" }}
          type="text"
          placeholder="City, community or building"
          className="bg-transparent border-0 outline-none"
        />
      </div>

      <Box className="filter_top" display="flex" alignItems="center" gap={2}>
        <Button
          variant="outlined"
          onClick={handleUnitTypeClick}
          endIcon={<img src="/assets/icons/down.svg" alt="down" className={!Boolean(unitTypeAnchorEl) ? "" : "rotate-180"} />}
          sx={buttonStyles}
        >
          {unitType}
        </Button>
        <Menu
          anchorEl={unitTypeAnchorEl}
          open={Boolean(unitTypeAnchorEl)}
          onClose={() => handleUnitTypeClose()}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={menuStyles}
        >
          <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} centered>
            <Tab label="Residential" />
            <Tab label="Commercial" />
          </Tabs>
          <div className="grid grid-cols-3 gap-[2px] p-[4px_20px]">
            {(tabValue === 0 ? RESIDENTIAL : COMMERCIAL).map((unit) => (
              <MenuItem
                key={unit}
                onClick={() => handleUnitTypeClose(unit)}
                sx={{ "&:hover": { backgroundColor: "transparent" }, padding: "4px" }}
              >
                <Chip
                  label={unit}
                  variant={unit === unitType ? "filled" : "outlined"}
                  color="primary"
                  style={{ color: "#202020" }}
                  sx={getChipStyles(unit === unitType)}
                />
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Box>
    </div>
  );
}