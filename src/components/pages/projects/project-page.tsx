import React from "react";
import PageHeader from "@/components/shared/page-header";
import ProjectList from "@/components/pages/projects/project-list";

export default function ProjectPage() {
  return (
    <section className="container max-w-screen-2xl">
      <PageHeader
        label="My Projects"
        description="These projects are prime examples of my diverse skill set and experience, demonstrating my ability to use code to solve problems, and to have some fun 😊"
      />
      {/* <Separator className="my-2" /> */}
      <ProjectList />
    </section>
  );
}
