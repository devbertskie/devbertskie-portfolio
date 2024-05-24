import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "@/components/icons";

interface SocialIconProps {
  kind: "github" | "mail" | "linkedin";
  href: string;
  size?: number;
  className?: string;
}

export const SocialIcon = ({
  kind,
  href,
  size = 6,
  className,
}: SocialIconProps) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  ) {
    return null;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="size-6 text-sm text-primary transition-all duration-300 hover:bg-background"
    >
      <span className="sr-only">icon</span>
      {kind === "github" && (
        <Icons.github
          className={cn(
            `fill-current text-primary hover:text-primary size-${size}`,
            className
          )}
        />
      )}
      {kind === "mail" && (
        <Icons.mail
          className={cn(
            `fill-current text-primary hover:text-primary size-${size}`,
            className
          )}
        />
      )}
      {kind === "linkedin" && (
        <Icons.linkedin
          className={cn(
            `fill-current text-primary hover:text-primary size-${size}`,
            className
          )}
        />
      )}
    </Link>
  );
};
