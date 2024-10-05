// shared/footerData.js
import fbImg from "../assets/FB.png";
import igImg from "../assets/IG.png";
import twitterImg from "../assets/Twitter.png";
import linkedInImg from "../assets/LinkedIn.png";

export const FooterNavData = [
  {
    title: "Platform",
    links: ["Overview", "Features", "About", "Pricing"],
  },
  {
    title: "Help",
    links: [
      "How does it works?",
      "Where to ask question?",
      "How to play?",
      "What is needed for this?",
    ],
  },
  {
    title: "Contacts",
    contacts: [
      "Phone: (012) 1234-567-890",
      "Email: company@gmail.com",
      "Business Hours: Mon - Fri, 9:00 AM - 6:00 PM",
      "Terms of Service",
    ],
  },
];

export const socialMediaIcons = [
  { src: fbImg, alt: "Facebook" },
  { src: igImg, alt: "Instagram" },
  { src: twitterImg, alt: "Twitter" },
  { src: linkedInImg, alt: "LinkedIn" },
];
