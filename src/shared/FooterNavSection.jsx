import React from "react";

const FooterNavSection = ({ title, items, isContact }) => (
  <nav className="space-y-5 mt-4">
    <h4 className="text-2xl font-semibold">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, index) =>
        isContact ? (
          <p key={index} className="hover:text-gray-300">
            {item}
          </p>
        ) : (
          <a href="/" key={index} className="block hover:text-gray-300">
            {item}
          </a>
        )
      )}
    </ul>
  </nav>
);

export default FooterNavSection;
