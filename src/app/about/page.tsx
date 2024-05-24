import React from "react";
import AboutPage from "@/components/pages/about/about-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return <AboutPage />;
}
