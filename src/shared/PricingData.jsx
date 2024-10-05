// shared/pricingData.js
export const packages = [
  {
    name: "Start",
    monthlyPrice: 50,
    yearlyPrice: 500,
    description:
      "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet.",
    features: [
      { text: "Videos of Lessons", included: true },
      { text: "Homework check", included: true },
      { text: "Additional practical task", included: false },
      { text: "Monthly conferences", included: false },
      { text: "Personal advice from teachers", included: false },
    ],
    highlighted: false,
  },

  {
    name: "Advance",
    monthlyPrice: 85,
    yearlyPrice: 850,
    description:
      "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet.",
    features: [
      { text: "Videos of Lessons", included: true },
      { text: "Homework check", included: true },
      { text: "Additional practical task", included: true },
      { text: "Monthly conferences", included: true },
      { text: "Personal advice from teachers", included: false },
    ],
    highlighted: true,
  },

  {
    name: "Premium",
    monthlyPrice: 100,
    yearlyPrice: 1000,
    description:
      "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet.",
    features: [
      { text: "Videos of Lessons", included: true },
      { text: "Homework check", included: true },
      { text: "Additional practical task", included: true },
      { text: "Monthly conferences", included: true },
      { text: "Personal advice from teachers", included: true },
    ],
    highlighted: false,
  },
];
