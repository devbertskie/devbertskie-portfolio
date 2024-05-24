import React from "react";
import { siteConfig } from "@/lib/site-config";
import TimelineItem from "@/components/pages/about/timeline-item";

export default function ExperienceTimeline() {
  return (
    <>
      <ol className="relative ml-3 !list-none border-l border-primary">
        {siteConfig.experience.map((item) => (
          <TimelineItem
            key={item.role}
            name={item.role}
            institution={item.company}
            duration={item.duration}
            description={item.jobDescription}
            itemTag={{
              isActive: item.isActive,
              tagName: "Current Role",
            }}
          />
        ))}
      </ol>
    </>
  );
}
