import React from "react";

const SubscribeForm = ({
  placeholder = "Your email",
  submitText = "Subscribe",
}) => {
  return (
    <div className="mt-12 mb-8 md:mb-0">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0">
        <input
          type="email"
          name="email"
          id="email"
          placeholder={placeholder}
          className="w-full md:w-6/12 bg-[#36116D] py-2.5 px-4 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-secondary 
          text-sm md:text-base placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="w-full md:w-auto py-2.5 px-6 md:px-8 bg-secondary 
          text-white rounded-xl cursor-pointer hover:bg-white hover:text-primary 
          transition-all duration-300 md:-ml-4 text-sm md:text-base font-medium"
        >
          {submitText}
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
