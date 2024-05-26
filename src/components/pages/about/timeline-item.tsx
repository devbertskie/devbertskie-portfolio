import { Code } from "lucide-react";
import React, { ElementType } from "react";

interface TimelineItemProps {
  name: string;
  institution: string;
  itemTag: {
    isActive: boolean;
    tagName: string;
  };
  description?: string;
  duration: string;

  icon?: ElementType;
}

export default function TimelineItem({
  name,
  institution,
  itemTag,
  description,
  duration,
  icon: Icon = Code,
}: TimelineItemProps) {
  return (
    <li className="mb-10 ml-8">
      <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full bg-primary ring-8 ring-primary/20">
        <Icon className="size-4 p-0.5 text-white" />
      </span>
      <h3 className="mb-1 flex flex-col items-start font-semibold dark:text-primary sm:flex-row sm:items-center sm:text-lg">
        {name} - {institution}
        {itemTag.isActive && (
          <span className="relative my-2 mr-2 flex min-w-[100px] items-center rounded bg-primary px-2.5 py-0.5 text-xs font-medium text-white dark:bg-primary/40 dark:text-white  sm:my-0 sm:ml-3 lg:text-sm">
            <span className="relative mr-2 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-lime-500"></span>
            </span>
            {itemTag.tagName}
          </span>
        )}
      </h3>
      <time className="my-2 block text-sm font-bold leading-none text-muted-foreground">
        {duration}
      </time>
      <p className="mb-4 text-[14px] font-normal text-muted-foreground/70 sm:text-sm">
        {description}
      </p>
    </li>
  );
}
