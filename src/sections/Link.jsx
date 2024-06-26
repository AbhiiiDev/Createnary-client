import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const YourComponent = () => {
  return (
    <div className="w-full h-full p-4 md:p-10 bg-[#4A508E] flex justify-center items-center mb-4">
      <MdOutlineArrowBackIos className="hidden md:block w-12 h-12 relative text-white" />
      <div className="flex-grow flex-shrink-0 flex flex-col justify-center items-center gap-4 md:gap-[50px]">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-[50px] w-full md:h-[540px]">
          <div className="flex flex-col justify-start items-center gap-2 md:gap-[15px] text-center">
            <div className="text-gray-50 text-[24px] md:text-[40px] font-bold font-['Urbanist']">
              Your audience wants links
            </div>
            <div className="text-gray-50 text-[16px] md:text-lg font-medium font-['Urbanist'] break-words">
              Make easy for them by linking products to every post and video
            </div>
          </div>
          <div className="md:hidden w-[121px] h-[43px] px-4 py-2 md:px-6 md:py-4 bg-gray-50 rounded-[18px] flex justify-center items-center">
            <div className="text-zinc-900 text-sm md:text-lg font-semibold font-['Urbanist']">Try for free</div>
          </div>
          <img
            className="w-[320px] md:w-[720px] h-auto md:h-[405px] rounded-[35px] shadow"
            src="/assets/Link.png"
            alt="Sample"
          />
        </div>
        <div className="hidden px-4 py-2 md:px-6 md:py-4 bg-gray-50 rounded-[18px] md:flex justify-center items-center">
          <div className="text-zinc-900 text-sm md:text-lg font-semibold font-['Urbanist']">Try for free</div>
        </div>
      </div>
      <MdOutlineArrowBackIos className="hidden md:block w-12 h-12 relative -rotate-180 text-white" />
    </div>
  );
};

export default YourComponent;
