'use client'
import React, {useState} from "react";
import {Box} from "@mui/system";
import {Button, Menu, MenuItem, Chip} from "@mui/material";
import {buttonStyles, menuStyles  , getChipStyles} from "@/styles/filterStyles";
import {FilterDropdownProps} from "@/types/types";
export function FilterDropdown({ value, options, onSelect, label }: FilterDropdownProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = (newValue?: string) => {
        setAnchorEl(null);
        if (newValue) onSelect(newValue);
    };

    return (
        <Box className="filter_top" display="flex" alignItems="center" gap={2}>
            <Button
                variant="outlined"
                onClick={handleClick}
                endIcon={<img src="/assets/icons/down.svg" alt="down" className={!Boolean(anchorEl) ? "" : "rotate-180"} />}
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
                <div className="text-[22px] text-500 px-[28px] py-[8px]">{label}</div>
                <div className="grid grid-cols-3 gap-[2px] p-[4px_20px]">
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            onClick={() => handleClose(option)}
                            sx={{ "&:hover": { backgroundColor: "transparent" }, padding: "4px" }}
                        >
                            <Chip
                                label={option}
                                variant={option === value ? "filled" : "outlined"}
                                color="primary"
                                style={{ color: "#202020" }}
                                sx={getChipStyles(option === value)}
                            />
                        </MenuItem>
                    ))}
                </div>
            </Menu>
        </Box>
    );
}