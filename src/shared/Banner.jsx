import React from "react";

const Banner = ({ banner, heading, subHeading, btnOne, btnTwo }) => {
  return (
    <section className="gradientBg rounded-xl rounded-br-[80px] px-4 py-9 md:p-9">
      <div className="flex flex-col justify-between items-center gap-10 md:flex-row-reverse">
        {/* Banner Img */}
        <div>
          <img src={banner} alt="Banner Logo" />
        </div>
        {/* Banner Content */}
        <div className="md:w-3/5">
          <h2 className="text-white font-bold text-4xl mb-6 leading-relaxed md:text-7xl md:leading-normal">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] text-2xl mb-8">{subHeading}</p>
          <div className="space-x-5 space-y-4">
            <button className="btnPrimary">{btnOne}</button>
            <button className="btnPrimary">{btnTwo}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
