import React, { PropsWithChildren } from "react";
import SiteHeader from "@/components/site-header";

export default function App({ children }: PropsWithChildren) {
  return (
    <div className=" relative flex min-h-dvh   flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
