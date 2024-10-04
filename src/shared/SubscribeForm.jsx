import React from "react";

const SubscribeForm = ({
  placeholder = "Your email",
  submitText = "Subscribe",
}) => {
  return (
    <div className="mt-12 mb-8 md:mb-0">
      <input
        type="email"
        name="email"
        id="email"
        placeholder={placeholder}
        className="bg-[#36116D] py-2 pl-4 pr-10 rounded-xl focus:outline-none "
      />
      <input
        type="submit"
        value={submitText}
        className="py-2 px-8 bg-secondary rounded-xl cursor-pointer hover:bg-white hover:text-primary transition-all duration-300 xl:-ml-4 md:mt-4"
      />
    </div>
  );
};

export default SubscribeForm;
