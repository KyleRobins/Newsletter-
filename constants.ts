import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/_kylerobins",
    handle: "@_kylerobins",
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/robinskyle/",
    handle: "robinskyle",
  },
  {
    id: 3,
    name: "Telegram",
    url: "https://t.me/techzoner",
    handle: "@Techzone",
  },
  {
    id: 3,
    name: "Linktr.ee",
    url: "https://linktr.ee/kylerobins",
    handle: "kylerobins",
  },
];

const title = "TechZone";
const description =
  "For developers and cybersecurity, Daily dose of Whats New, Whats Trending in Tech. ";
const image =
  "https://res.cloudinary.com/dzw5pskk1/image/upload/v1707497772/techzone_q5phqy.jpg";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://newsletter.kylerobins.com",
    siteName: "TechZone Newsletter",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@kylerobins",
  },
};
