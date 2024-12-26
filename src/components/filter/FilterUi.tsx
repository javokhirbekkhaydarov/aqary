"use client";

import { useState } from "react";
import { Button, Menu, MenuItem, Chip, Box } from "@mui/material";

const INITIAL_CATEGORY = "Sale";
const CATEGORIES = ["Sale", "Rent", "Swap", "Investment"] as const;

const INITIAL_SECTION = "Unit";
const SECTIONS = [
  "Projects",
  "Unit",
  "Luxury Unit",
  "Property",
  "Luxury Property",
  "Industry",
] as const;

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
  "&:hover": {
    opacity: 1,
  },
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
  // State for first dropdown (Categories)
  const [categoryAnchorEl, setCategoryAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState(INITIAL_CATEGORY);
  const categoryOpen = Boolean(categoryAnchorEl);

  // State for second dropdown (Sections)
  const [sectionAnchorEl, setSectionAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedSection, setSelectedSection] = useState(INITIAL_SECTION);
  const sectionOpen = Boolean(sectionAnchorEl);

  // Handlers for Categories dropdown
  const handleCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = (category?: string) => {
    setCategoryAnchorEl(null);
    if (category) {
      setSelectedCategory(category);
    }
  };

  // Handlers for Sections dropdown
  const handleSectionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSectionAnchorEl(event.currentTarget);
  };

  const handleSectionClose = (section?: string) => {
    setSectionAnchorEl(null);
    if (section) {
      setSelectedSection(section);
    }
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
      {/* Sections Dropdown */}
      <Box className="filter_top" display="flex" alignItems="center" gap={2}>
        <Button
          variant="outlined"
          onClick={handleSectionClick}
          endIcon={
            <img
              src="/assets/icons/down.svg"
              alt="down"
              className={!sectionOpen ? "" : "rotate-180"}
            />
          }
          sx={buttonStyles}
        >
          {selectedSection}
        </Button>

        <Menu
          anchorEl={sectionAnchorEl}
          open={sectionOpen}
          onClose={() => handleSectionClose()}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={menuStyles}
        >
          <div className="text-[22px] text-500 px-[28px] py-[8px]">
            Select Section
          </div>
          <div className="grid grid-cols-3 gap-[2px] p-[4px_20px]">
            {SECTIONS.map((section) => (
              <MenuItem
                key={section}
                onClick={() => handleSectionClose(section)}
                sx={{
                  "&:hover": { backgroundColor: "transparent" },
                  padding: "4px",
                }}
              >
                <Chip
                  label={section}
                  variant={section === selectedSection ? "filled" : "outlined"}
                  color="primary"
                  style={{ color: "#202020" }}
                  sx={getChipStyles(section === selectedSection)}
                />
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Box>

      {/* Categories Dropdown */}
      <Box className="filter_top" display="flex" alignItems="center" gap={2}>
        <Button
          variant="outlined"
          onClick={handleCategoryClick}
          endIcon={
            <img
              src="/assets/icons/down.svg"
              alt="down"
              className={!categoryOpen ? "" : "rotate-180"}
            />
          }
          sx={buttonStyles}
        >
          {selectedCategory}
        </Button>

        <Menu
          anchorEl={categoryAnchorEl}
          open={categoryOpen}
          onClose={() => handleCategoryClose()}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={menuStyles}
        >
          <div className="text-[22px] text-500 px-[28px] py-[8px]">
            Select Category
          </div>
          <div className="grid grid-cols-3 gap-[2px] p-[4px_20px]">
            {CATEGORIES.map((category) => (
              <MenuItem
                key={category}
                onClick={() => handleCategoryClose(category)}
                sx={{
                  "&:hover": { backgroundColor: "transparent" },
                  padding: "4px",
                }}
              >
                <Chip
                  label={category}
                  variant={
                    category === selectedCategory ? "filled" : "outlined"
                  }
                  color="primary"
                  style={{ color: "#202020" }}
                  sx={getChipStyles(category === selectedCategory)}
                />
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Box>
    </div>
  );
}
