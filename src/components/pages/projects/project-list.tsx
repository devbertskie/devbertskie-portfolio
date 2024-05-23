import React from "react";
import ProjectItem from "@/components/pages/projects/project-item";
import { siteConfig } from "@/lib/site-config";

export default function ProjectList() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-evenly">
      {siteConfig.projects.map((item) => (
        <ProjectItem key={item.title + item.description} {...item} />
      ))}
    </div>
  );
}
