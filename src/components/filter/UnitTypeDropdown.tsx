import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Menu, MenuItem, Chip, Tabs, Tab } from "@mui/material";
import {
  buttonStyles,
  menuStyles,
  getChipStyles,
  tabStyles,
} from "@/styles/filterStyles";
import { RESIDENTIAL, COMMERCIAL } from "@/constants/filterOptions";
import { UnitTypeDropdownProps } from "@/types/types";
export function UnitTypeDropdown({ value, onSelect }: UnitTypeDropdownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = (newValue?: string) => {
    setAnchorEl(null);
    if (newValue) onSelect(newValue);
  };

  return (
    <Box className="filter_top" display="flex" alignItems="center" gap={2}>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={
          <img
            src="/assets/icons/down.svg"
            alt="down"
            className={!Boolean(anchorEl) ? "" : "rotate-180"}
          />
        }
        sx={buttonStyles}
      >
        {value}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={menuStyles}
      >
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          centered
          sx={tabStyles}
        >
          <Tab label="Residential" />
          <Tab label="Commercial" />
        </Tabs>
        <div className="grid grid-cols-3 gap-[2px] p-[4px_20px]">
          {(tabValue === 0 ? RESIDENTIAL : COMMERCIAL).map((unit) => (
            <MenuItem
              key={unit}
              onClick={() => handleClose(unit)}
              sx={{
                "&:hover": { backgroundColor: "transparent" },
                padding: "4px",
              }}
            >
              <Chip
                label={unit}
                variant={unit === value ? "filled" : "outlined"}
                color="primary"
                style={{ color: "#202020" }}
                sx={getChipStyles(unit === value)}
              />
            </MenuItem>
          ))}
        </div>
      </Menu>
    </Box>
  );
}
