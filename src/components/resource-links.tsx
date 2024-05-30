import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Globe, NotepadText } from "lucide-react";

interface ResourceLinksProps {
  previewUrl: string;
  githubRepo: string;
  className?: string;
}

export default function ResourceLinks({
  previewUrl,
  githubRepo,
  className,
}: ResourceLinksProps) {
  return (
    <div
      className={cn(
        className,
        "mt-6 flex items-center justify-center space-x-4 rounded-lg border bg-foreground/80 dark:bg-secondary  py-6",
      )}
    >
      <Link
        href={previewUrl}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({ variant: "default" }),
          "flex items-center",
        )}
      >
        <Globe className="mr-2 size-4" />
        Demo Site
      </Link>
      <Link
        href={githubRepo}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({ variant: "default" }),
          "flex items-center",
        )}
      >
        <NotepadText className="mr-2 size-4" />
        Github Repo
      </Link>
    </div>
  );
}
