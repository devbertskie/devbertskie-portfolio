import React from "react";
import PageHeader from "@/components/shared/page-header";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <section className="container max-w-screen-2xl">
      <PageHeader label="Contact Information" />

      <div className="mt-12 flex justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
