"use client";
import { POPULAR_SEARCHES } from "@/constants/filterOptions";
import { Chip } from "@mui/material";
import { getChipSearchStyles } from "@/styles/filterStyles";
export default function AdvancedFilter() {
  return (
    <div className="advanced_filter bg-white p-3 flex gap-4 items-center justify-start rounded-b-3xl">
      <p
        className="text-white rounded-full bg-transparent"
        style={{
          backdropFilter: "blur(4px)",
          padding: " 0  5px ",
          whiteSpace: "nowrap",
        }}
      >
        Popular Searches:
      </p>
      {POPULAR_SEARCHES.map((search) => (
        <Chip
          key={search}
          label={search}
          variant={search === search ? "filled" : "outlined"}
          color="primary"
          style={{ color: "#202020" }}
          sx={getChipSearchStyles(search === search)}
        />
      ))}
      <span className="custom_border"></span>
    </div>
  );
}
