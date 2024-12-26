interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div className="h-[54px] min-w-[348px] p-[16px] gap-[12px] rounded-[10px] border-t border-[#202020] text-[#919B9B] bg-white border flex items-start">
            <img src="/assets/icons/search.svg" alt="search" />
            <input
                value={value}
                onChange={onChange}
                style={{ width: "100%" }}
                type="text"
                placeholder="City, community or building"
                className="bg-transparent border-0 outline-none"
            />
        </div>
    );
}