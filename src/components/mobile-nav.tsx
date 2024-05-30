"use client";
import React, { useState } from "react";
import Link, { LinkProps } from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px]">
        <MobileLink
          href="/"
          onOpenChange={setIsOpen}
          className="flex items-center text-primary"
        >
          <Image
            src={siteConfig.logo}
            height={30}
            width={30}
            alt="logo"
            className="mr-2 size-6"
          />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>

        <div className="mt-4 flex h-full flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <MobileLink
              key={item.label}
              href={item.path}
              onOpenChange={setIsOpen}
              className="flex items-center"
            >
              <item.icon className="mr-2 size-4" />
              <span>{item.label}</span>
            </MobileLink>
          ))}

          <Link
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="mt-auto"
          >
            <Button
              variant="secondary"
              className="mb-8 w-full space-x-2 sm:inline-flex sm:items-center"
            >
              <Icons.github className="size-4" />
              <span className="font-normal">Github</span>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const MobileLink = ({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(
        "transition-colors hover:text-primary",
        pathname === href.toString() ? "text-primary" : "text-foreground/60",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
