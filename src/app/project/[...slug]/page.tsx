import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { projects as allProjects } from "#site/content";
import { cn, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";

import { Mdx } from "@/components/mdx-component";
import { ChevronLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import ResourceLinks from "@/components/resource-links";

interface ProjectPageItemProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectPageItemProps["params"]) {
  const slug = params?.slug.join("/");
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    return null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageItemProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    authors: {
      name: project.author,
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageItemProps["params"][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}

export default async function BlogPageItem({ params }: ProjectPageItemProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div>
        {project.date && (
          <time
            dateTime={project.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(project.date)}
          </time>
        )}

        <h1 className="mt-2 inline-block text-4xl font-bold capitalize leading-tight text-primary lg:text-5xl">
          {project.title}
        </h1>

        {project.author && (
          <div className="mt-4 flex space-x-4">
            <Image
              src={siteConfig.authorProfileImage}
              alt={project.author}
              width={42}
              height={42}
              className="rounded-full bg-white"
            />
            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{project.author}</p>
              <p className="text-[12px] text-muted-foreground">
                @{project.author}
              </p>
            </div>
          </div>
        )}

        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={720}
            height={405}
            priority
            className="mx-auto my-8 border bg-muted transition-colors"
          />
        )}
        <ResourceLinks
          previewUrl={project.previewUrl}
          githubRepo={project.githubRepo}
          className="mb-6"
        />
        <Mdx code={project.body} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <ChevronLeft className="mr-2 size-4" />
            See all Projects
          </Link>
        </div>
      </div>
    </article>
  );
}
