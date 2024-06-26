"use client";
import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants";
import Image from "next/image";

export default function MainNav() {
  const segment = useSelectedLayoutSegment();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2 text-primary">
        <Image
          src={siteConfig.logo}
          height={30}
          width={30}
          alt="logo"
          className="size-6"
        />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>

      {NAV_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          className={cn(
            "text-sm font-medium items-center transition-colors hover:text-primary hidden sm:flex",
            `/${segment}` === item.path ? "text-primary" : "text-foreground/60",
          )}
        >
          <item.icon className="mr-2 size-4" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
