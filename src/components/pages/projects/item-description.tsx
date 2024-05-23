import Link from "next/link";
import React from "react";

interface ItemDescriptionProps {
  title: string;
  description: string;
  previewUrl: string;
}

export default function ItemDescription({
  title,
  description,
  previewUrl,
}: ItemDescriptionProps) {
  return (
    <Link href={previewUrl} target="_blank" rel="noreferrer" className="group">
      <div className="flex flex-col space-y-2 px-3 py-1.5">
        <h3 className="text-lg uppercase text-primary/70 transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
