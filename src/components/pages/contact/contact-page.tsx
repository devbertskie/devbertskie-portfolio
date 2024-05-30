import React from "react";
import PageHeader from "@/components/shared/page-header";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <section className="container max-w-7xl py-6 lg:py-10">
      <PageHeader
        label="Contact Information"
        description="I'm currently looking for new opportunity and this is the perfect time to collaborate together.🎉"
      />

      <div className="mt-12 flex justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
