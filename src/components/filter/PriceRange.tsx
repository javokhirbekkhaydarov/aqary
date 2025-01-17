"use client";
import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Button, Menu, Input } from "@mui/material";
import { buttonStyles, inputStyles, menuStyles } from "@/styles/filterStyles";
import { PriceProps } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "@/store/filterSlice";
import { RootState } from "@/store/store";
import { formatPrice } from "@/utils/utils";
export function PriceRange({ label }: PriceProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const priceRange = useSelector((state: RootState) => state.filter.priceRange);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    const newMin = rawValue ? parseInt(rawValue, 10) : null;
    dispatch(setPriceRange([newMin, priceRange[1]]));
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    const newMax = rawValue ? parseInt(rawValue, 10) : null;
    dispatch(setPriceRange([priceRange[0], newMax]));
  };
  return (
    <Box>
      <Button onClick={handleClick} sx={buttonStyles}>
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={menuStyles}
      >
        <div className="text-[22px] text-500 px-[28px] py-[8px] flex items-center gap-[10px]">
          <Image
            src="/assets/icons/priceTag.svg"
            alt="tag"
            width={30}
            height={14}
            priority
            draggable={false}
          />

          {label}
        </div>
        <div className="grid grid-cols-1 gap-[2px] p-[4px_20px]">
          <Box gap={1} display={"flex"} alignItems={"center"}>
            <Input
              type="text"
              inputMode={"numeric"}
              value={priceRange[0] !== null ? formatPrice(priceRange[0]) : ""}
              onChange={handleMinChange}
              placeholder="Min"
              sx={inputStyles}
            />
            <div className="ml-2 mr-2 text-bg-primaryGray">|</div>
            <Input
              type="text"
              inputMode={"numeric"}
              value={priceRange[1] !== null ? formatPrice(priceRange[1]) : ""}
              onChange={handleMaxChange}
              placeholder="Max"
              sx={inputStyles}
            />
          </Box>
        </div>
      </Menu>
    </Box>
  );
}
