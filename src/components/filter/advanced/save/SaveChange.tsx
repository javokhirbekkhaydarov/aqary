import { FunctionType } from "@/types/types";
export default function SaveChange({ onClick }: FunctionType) {
  return (
    <div className="flex items-center justify-end gap-4 w-full px-3">
      <div className="save-search  h-full hover:bg-white border hover:border-gray-400 transition-all duration-300 bg-secondaryGray text-00 text-[14px] font-geologica font-bold leading-[17.5px] text-center p-[16px_12px] gap-[24px] rounded-[8px] cursor-pointer">
        Reset Filter
      </div>
      <div
        onClick={onClick}
        className="advanced_btn col-span-2 min-w-60 flex justify-center items-center relative z-10  cursor-pointer hover:bg-primary duration-300 hover:text-white transition-all h-[52px] x] p-[16px_12px] gap-[24px] rounded-[8px] border border-primary   text-primary font-geologica text-[14px] font-medium leading-[17.5px] text-center"
      >
        Search
      </div>
    </div>
  );
}
