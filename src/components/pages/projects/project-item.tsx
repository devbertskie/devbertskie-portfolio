import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import ItemDescription from "./item-description";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Globe } from "lucide-react";
import { SiteConfig } from "@/lib/site-config";

type ProjectItemProps = SiteConfig["projects"][0];

export default function ProjectItem({
  title,
  image,
  description,
  githubRepo,
  previewUrl,
}: ProjectItemProps) {
  return (
    <Card className="w-[300px] cursor-pointer bg-transparent transition-shadow hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="px-0">
        <Image
          src={image}
          alt={title}
          height={300}
          width={300}
          className="object-cover"
        />
        <ItemDescription
          title={title}
          previewUrl={previewUrl}
          description={description}
        />
      </CardContent>

      <CardFooter className="bg-primary/5 p-3">
        <div className="flex w-full items-center justify-between space-x-2">
          <Link href={previewUrl} target="_blank" rel="noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="bg-primary/10 text-primary hover:bg-background hover:text-foreground"
            >
              <Globe className="mr-2 size-4" />
              <span>Preview</span>
            </Button>
          </Link>
          <Link
            href={githubRepo}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "px-0 size-8 bg-primary/10 text-primary hover:bg-background hover:text-foreground p-1 rounded-full",
            )}
          >
            <Icons.github className="size-4" />
            <span className="sr-only">github</span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
