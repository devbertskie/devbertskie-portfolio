import React from "react";
import Image from "next/image";
import { SocialIcon } from "@/components/shared/social-icons";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

const AboutCard = () => {
  return (
    <Card className="relative mx-auto mt-16 w-full max-w-[400px] bg-muted/40">
      <CardHeader className="mt-8 flex items-center justify-center pb-2">
        <Image
          src={siteConfig.authorProfileImage}
          alt="profile_image"
          height={200}
          width={200}
          className="absolute -top-12 aspect-square size-24 rounded-full border object-cover grayscale-0"
        />
        <CardTitle className="text-center text-primary">
          {siteConfig.author}
        </CardTitle>
        <CardDescription className="font-normal text-muted-foreground">
          Applications Systems Engineer
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex w-full justify-center space-x-3 pt-6">
          <SocialIcon kind="github" href={siteConfig.social.github} />
          <SocialIcon kind="mail" href={`mailto:${siteConfig.social.email}`} />
          <SocialIcon kind="linkedin" href={siteConfig.social.linkedIn} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default AboutCard;
