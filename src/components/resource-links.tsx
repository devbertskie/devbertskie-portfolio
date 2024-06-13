import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Globe, NotepadText } from "lucide-react";

interface ResourceLinksProps {
  previewUrl: string;
  children?: React.ReactNode;
  githubRepo: string;
  className?: string;
}

export default function ResourceLinks({
  previewUrl,
  githubRepo,
  className,
  children,
}: ResourceLinksProps) {
  return (
    <div
      className={cn(
        className,
        "mt-6 flex-col items-center justify-center space-y-4 rounded-lg border bg-foreground/80 dark:bg-secondary  py-6"
      )}
    >
      <div className="flex items-center justify-center space-x-4">
        <Link
          href={previewUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "default" }),
            "flex items-center"
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
            "flex items-center"
          )}
        >
          <NotepadText className="mr-2 size-4" />
          Github Repo
        </Link>
      </div>

      <div className="text-center">{children}</div>
    </div>
  );
}
