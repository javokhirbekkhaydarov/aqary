"use client";
import Image from "next/image";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FilterModal from "./FilterModal";

export default function AdvancedFilter() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="advanced_filter bg-white p-3 grid grid-cols-3 gap-4 items-center justify-start rounded-b-3xl ">
      <div
        onClick={handleClickOpen}
        className="advanced_btn col-span-2 flex justify-center items-center relative z-10  cursor-pointer hover:bg-primary duration-300 hover:text-white transition-all h-[52px] x] p-[16px_12px] gap-[24px] rounded-[8px] border border-primary   text-primary font-geologica text-[14px] font-medium leading-[17.5px] text-center"
      >
        <Image
          src="/assets/icons/filter.svg"
          alt="filter"
          width={20}
          height={20}
          priority
        />
        Advanced Filter
      </div>
      <div className="save-search  h-full hover:bg-white border hover:border-gray-400 transition-all duration-300 bg-secondaryGray text-00 text-[14px] font-geologica font-bold leading-[17.5px] text-center p-[16px_12px] gap-[24px] rounded-[8px] cursor-pointer">
        Save Search
      </div>
      <span className="custom_border"></span>
      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <DialogActions>
          <Image
            className="cursor-pointer absolute  mt-4 z-10"
            src="/assets/icons/close.svg"
            alt="filter"
            width={20}
            height={20}
            priority
            onClick={handleClose}
          />
        </DialogActions>
        <DialogContent style={{ padding: 0, paddingBottom: 20 }}>
          <FilterModal onClick={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
