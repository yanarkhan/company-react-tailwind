import React from "react";
import green from "../assets/greenRec.png";
import red from "../assets/redRec.png";

const PricingCard = ({ pkg, isYearly }) => {
  const price = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;

  return (
    <div className="border border-gray-300 py-12 px-6 rounded-lg shadow-lg transition-transform hover:scale-110">
      <h3 className="text-2xl text-primary font-bold text-center mb-4">
        {pkg.name}
      </h3>
      <p className="text-gray-500 text-center mb-6">{pkg.description}</p>
      <p className="text-center text-5xl text-secondary font-bold mb-8">
        ${price}
        <span className="text-base text-gray-400 font-medium">
          /{isYearly ? "year" : "month"}
        </span>
      </p>
      <ul className="mt-4 px-4 space-y-4">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <img
              src={feature.included ? green : red}
              alt={feature.included ? "Green Icon" : "Red Icon"}
              className="w-5 h-5"
            />
            <span className="text-gray-600">{feature.text}</span>
          </li>
        ))}
      </ul>
      <div className="w-full mx-auto mt-10 flex items-center justify-center">
        <button
          className={pkg.highlighted ? "btnPrimary" : "btnPrimaryOutline"}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
