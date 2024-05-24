import React from "react";
import { siteConfig } from "@/lib/site-config";
import TimelineItem from "@/components/pages/about/timeline-item";
import { GraduationCap } from "lucide-react";

export default function EducationTimeline() {
  return (
    <>
      <ol className="relative ml-3 !list-none border-l border-primary">
        {siteConfig.education.map((item) => (
          <TimelineItem
            key={item.school}
            name={item.school}
            institution={item.address}
            duration={item.duration}
            description={item.course ? item.course : undefined}
            itemTag={{
              isActive: item.isHighestAttainment,
              tagName: "Highest Educational Attainment",
            }}
            icon={GraduationCap}
          />
        ))}
      </ol>
    </>
  );
}
