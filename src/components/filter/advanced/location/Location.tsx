import React, { useState } from "react";
import MySwitch from "@/components/mini/IOSSwitch";

export function Location() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex flex-col px-3 items-start w-full gap-4">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-[12px]">
          <img src="/assets/icons/location.svg" alt="location" />
          <p className="text-[22px] font-medium text-500">
            Location by Commute Time
          </p>
        </div>
        <div className="flex">
          <MySwitch checked={isChecked} onChange={handleSwitchChange} />
        </div>
      </div>
      {isChecked && (
        <div className="bottom_section grid grid-cols-2 gap-2 pr-8">
          <div className="input_section flex flex-col gap-4">
            <div className="h-[54px] min-w-[348px] p-[16px] gap-[12px] rounded-[10px] border-t border-[#202020] text-[#919B9B] bg-white border flex items-start">
              <div className="bg-secondaryBlue text-primary rounded-full w-[24px] h-[24px] flex items-center justify-center">
                1
              </div>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Enter first point"
                className="bg-transparent border-0 outline-none"
              />
            </div>
            <div className="h-[54px] min-w-[348px] p-[16px] gap-[12px] rounded-[10px] border-t border-[#202020] text-[#919B9B] bg-white border flex items-start">
              <div className="bg-secondaryBlue text-primary rounded-full w-[24px] h-[24px] flex items-center justify-center">
                2
              </div>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Enter secont point"
                className="bg-transparent border-0 outline-none"
              />
            </div>
          </div>
          <div className="map_section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.614546991193!2d54.40061052591377!3d24.498808809632543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x493e4b6496cc7be5%3A0xdb5ef4e19303694a!2sAqary%20Investment%20and%20Development!5e0!3m2!1sen!2sae!4v1735373377050!5m2!1sen!2sae"
              width="600"
              height="450"
              style={{ borderRadius: "10px" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
