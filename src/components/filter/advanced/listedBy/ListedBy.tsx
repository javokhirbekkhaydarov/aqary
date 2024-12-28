"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectListedBy } from "@/store/advancedFilter";
import { CategoryCard } from "@/components/mini/CategoryCard";
import { LISTED_BY } from "@/constants/filterOptions";
import Image from "next/image";
export default function ListedBy() {
  const [selectedListedCompany, setSelectedListedCompany] = useState<
    string | null
  >(null);

  const dispatch = useDispatch();
  const chooseListedCompany = (company: string) => {
    setSelectedListedCompany(company);
    dispatch(selectListedBy(company));
  };

  return (
    <div className="flex px-3 flex-col items-start gap-2">
      <p className="text-[22px] font-medium text-500">Listed By</p>
      <div className="flex flex-col items-start justify-start">
        <div className="flex gap-2 items-center">
          <div
            className={`w-[105px] flex flex-col h-[120px] items-center justify-center border cursor-pointer transition-all duration-300 rounded-lg border-primaryGray hover:bg-secondaryBlue hover:border-secondaryBlue`}
          >
            <Image
              src={`/assets/icons/big_search.svg`}
              alt={"search"}
              width={50}
              height={50}
              priority
              draggable={false}
            />
          </div>
          {LISTED_BY.map((company) => (
            <CategoryCard
              key={company.id}
              value={company.name}
              image={company.image}
              isSelected={selectedListedCompany === company.name}
              onClick={() => chooseListedCompany(company.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
