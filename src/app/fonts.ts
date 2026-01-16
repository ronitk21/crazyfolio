import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "./fonts/sans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sans-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sans-heading.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sans-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/sans-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--sans-font",
});
