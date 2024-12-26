import React from "react";

export interface FilterState {
    section: string;
    category: string;
    unitType: string;
    searchQuery: string;
}

export interface FilterDropdownProps {
    value: string;
    options: readonly string[];
    onSelect: (value: string) => void;
    label: string;
}

export interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

 export interface UnitTypeDropdownProps {
    value: string;
    onSelect: (value: string) => void;
}
