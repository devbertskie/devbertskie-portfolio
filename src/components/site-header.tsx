import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

import ModeToggle from "@/components/mode-toggle";
import MainNav from "@/components/main-nav";
import MobileNav from "@/components/mobile-nav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Left Column */}
        <MainNav />
        {/* Right Column */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="secondary"
                className="hidden space-x-2 sm:inline-flex sm:items-center"
              >
                <Icons.github className="size-4" />
                <span className="font-normal">Github</span>
              </Button>
            </Link>
          </nav>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
