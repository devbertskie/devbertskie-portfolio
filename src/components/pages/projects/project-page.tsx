import React from "react";
import PageHeader from "@/components/shared/page-header";
import ProjectList from "@/components/pages/projects/project-list";

export default function ProjectPage() {
  return (
    <section className="container max-w-screen-2xl">
      <PageHeader
        label="My Projects"
        description="This is my current projects"
      />
      {/* <Separator className="my-2" /> */}
      <ProjectList />
    </section>
  );
}
