"use client";

import { useState } from "react";
import { Button, Menu, MenuItem, Chip, Box } from "@mui/material";

// Constants moved outside component
const CATEGORIES = ["Sale", "Rent", "Swap", "Investment"] as const;
const INITIAL_CATEGORY = "Sale";

// Reusable styles
const buttonStyles = {
  textTransform: "none",
  fontWeight: 500,
  fontFamily: "Geologica, sans-serif",
  color: "#000",
  width: "110px",
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

// Reusable DropdownButton component
const DropdownButton = ({ index }: { index: number }) => (
  <Button
    variant="outlined"
    endIcon={
      <img src="/assets/icons/down.svg" alt="down" className="rotate-180" />
    }
    sx={{
      textTransform: "none",
      fontWeight: 500,
      width: "200px",
      justifyContent: "space-between",
    }}
  >
    Dropdown {index + 1}
  </Button>
);

export default function FilterUI() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState(INITIAL_CATEGORY);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category?: string) => {
    setAnchorEl(null);
    if (category) {
      setSelectedCategory(category);
    }
  };

  const getChipStyles = (category: string) => ({
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
    ...(category === selectedCategory && {
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
          onClick={handleClick}
          endIcon={
            <img
              src="/assets/icons/down.svg"
              alt="down"
              className={!open ? "" : "rotate-180"}
            />
          }
          sx={buttonStyles}
        >
          {selectedCategory}
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose()}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={menuStyles}
        >
          <div className="text-[22px] text-500 px-[28px] py-[8px]">
            Select Category
          </div>
          <div className="grid grid-cols-3 gap-[2px] p-[4px_20px]">
            {CATEGORIES.map((category) => (
              <MenuItem
                key={category}
                onClick={() => handleClose(category)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
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
                  sx={getChipStyles(category)}
                />
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Box>

      <Box display="flex" gap={2}>
        {[1, 2].map((index) => (
          <DropdownButton key={index} index={index} />
        ))}
      </Box>
    </div>
  );
}
