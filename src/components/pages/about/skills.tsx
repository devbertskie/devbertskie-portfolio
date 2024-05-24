import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/site-config";

interface IconSkillProps {
  icon: any;
  tooltip: string;
  name: string;
}

const IconSkill = ({ icon: Icon, tooltip, name }: IconSkillProps) => {
  return (
    <div className="flex max-w-[90px] cursor-pointer flex-col items-center  justify-center space-y-2 rounded-md border bg-muted/40 px-4  py-2 transition-colors hover:border hover:border-primary">
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <Image
              src={Icon}
              alt="icon"
              height={60}
              width={60}
              className="size-14"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p className="text-center text-xs">{name}</p>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="flex w-full flex-wrap items-stretch justify-center gap-4  xl:justify-start">
      {siteConfig.skills.map((item) => (
        <IconSkill
          key={item.name}
          icon={item.image}
          name={item.name}
          tooltip={item.name}
        />
      ))}
    </div>
  );
}
