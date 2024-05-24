import React from "react";
import { siteConfig } from "@/lib/site-config";
import PageHeader from "@/components/shared/page-header";
import AboutCard from "@/components/pages/about/about-card";
import ExperienceTimeline from "./experience-timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EducationTimeline from "@/components/pages/about/education-timeline";
import Skills from "@/components/pages/about/skills";

export default function AboutPage() {
  return (
    <section className="container max-w-screen-2xl">
      <PageHeader label="About Me" />

      <div className="items-start space-y-2 pt-3 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <AboutCard />

        <div className="max-w-none px-6 py-8 xl:col-span-2 xl:px-0">
          <div>
            <p className="font-normal text-muted-foreground">
              {siteConfig.careerOnjective}
            </p>
          </div>

          <div className="relative col-span-2 col-start-2 mt-8">
            <Tabs defaultValue="experience">
              <TabsList className="grid w-full grid-cols-3 gap-2 bg-muted/60 sm:max-w-[400px] sm:gap-0">
                <TabsTrigger value="experience" className="text-xs sm:text-sm">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="text-xs sm:text-sm">
                  Education
                </TabsTrigger>
                <TabsTrigger value="skills" className="text-xs sm:text-sm">
                  Skills
                </TabsTrigger>
              </TabsList>
              <TabsContent value="experience">
                <h3 className="my-6 text-center text-2xl font-bold leading-9 tracking-tight sm:my-12 sm:text-4xl sm:leading-10 md:my-6 md:text-left">
                  Experience
                </h3>
                <ExperienceTimeline />
              </TabsContent>
              <TabsContent value="education">
                <h3 className="my-6 text-center text-2xl font-bold leading-9 tracking-tight sm:my-12 sm:text-4xl sm:leading-10 md:my-6 md:text-left">
                  Education
                </h3>
                <EducationTimeline />
              </TabsContent>
              <TabsContent value="skills">
                <h3 className="my-6 text-center text-2xl font-bold leading-9 tracking-tight sm:my-12 sm:text-4xl sm:leading-10 md:my-6 md:text-left">
                  Technical Skills
                </h3>
                <Skills />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
