import React from "react";
import ProjectPage from "@/components/pages/projects/project-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return <ProjectPage />;
}
