import React from "react";

const PricingToggle = ({ isYearly, setIsYearly }) => {
  return (
    <div className="mt-16">
      <label
        htmlFor="toggle"
        className="inline-flex items-center cursor-pointer"
      >
        <span className="text-2xl font-semibold mr-8">Monthly</span>
        <div className="w-14 h-6 bg-gray-300 rounded-full relative transition duration-200 ease-in-out">
          <div
            className={`w-6 h-6 rounded-full transform transition duration-200 ease-in-out ${
              isYearly ? "translate-x-8 bg-primary" : "bg-gray-500"
            }`}
          ></div>
        </div>
        <span className="text-2xl font-semibold ml-8">Yearly</span>
      </label>
      <input
        type="checkbox"
        id="toggle"
        checked={isYearly}
        onChange={() => setIsYearly(!isYearly)}
        className="hidden"
      />
    </div>
  );
};

export default PricingToggle;
