import { siteConfig } from "@/lib/site-config";
import React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export default function EmailTemplate({
  name,
  message,
}: Readonly<EmailTemplateProps>) {
  return (
    <div className="flex items-start space-y-4">
      <h3> Hi, {siteConfig.author} 👋</h3>
      <p className="text-sm text-black">{message}</p>
      <br />

      <div>
        <p>Resfectfully: </p>
        <p className="font-bold">{name}</p>
      </div>
    </div>
  );
}
