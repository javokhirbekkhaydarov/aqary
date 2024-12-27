"use client";
import { POPULAR_SEARCHES } from "@/constants/filterOptions";
import { Chip } from "@mui/material";
import { getChipSearchStyles } from "@/styles/filterStyles";
export default function PopularSearches() {
  return (
    <div className=" popular_card relative z-10 bg-transparent rounded-3xl flex gap-4 items-center justify-start p-3">
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
    </div>
  );
}
