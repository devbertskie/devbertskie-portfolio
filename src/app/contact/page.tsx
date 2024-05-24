import React from "react";
import { Metadata } from "next";
import ContactPage from "@/components/pages/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact Information",
};

export default function Page() {
  return <ContactPage />;
}
