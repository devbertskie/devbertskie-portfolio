import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import PageHeader from "@/components/shared/page-header";
import { projects as allProjects } from "#site/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects = allProjects
    .filter((proj) => proj.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <section className="container max-w-7xl py-6 lg:py-10">
      <PageHeader
        label="My Projects"
        description="These projects are prime examples of my diverse skill set and experience, demonstrating my ability to use code to solve problems, and to have some fun😊"
      />
      <hr className="my-8" />
      {projects.length ? (
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative flex flex-col space-y-2"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                />
              )}

              <h2 className="text-2xl font-extrabold text-primary">
                {project.title}
              </h2>
              {project.description && (
                <p className="text-muted-foreground">{project.description}</p>
              )}

              <Link href={project.slug} className="absolute inset-0">
                <span className="sr-only">View Project</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No Projects found</p>
      )}
    </section>
  );
}
