import React, { PropsWithChildren } from "react";
import SiteHeader from "@/components/site-header";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function App({ children }: PropsWithChildren) {
  return (
    <div className=" relative flex min-h-dvh   flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <footer className="p-4 text-center text-xs text-muted-foreground">
        © Copyrights 2024 |{" "}
        <Link href={siteConfig.social.personalSite} className="text-primary">
          HubertLemuel
        </Link>
      </footer>
    </div>
  );
}
