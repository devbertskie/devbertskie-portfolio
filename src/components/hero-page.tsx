import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export default function HeroPage() {
  return (
    <section className="container -mt-40 flex min-h-dvh max-w-screen-2xl flex-col items-center justify-center gap-y-4 md:-mt-56">
      <Image
        src={siteConfig.authorProfileImage}
        height={400}
        width={400}
        alt="profile_image"
        className="mb-4 size-20 rounded-full sm:mt-6 md:size-32"
        priority={true}
      />
      <div className="flex flex-col items-center space-y-4">
        <h1 className="typing-demo font-grotesk text-3xl md:text-5xl">
          Hi, I&apos;m{" "}
          <span className="font-bold capitalize text-primary">Hubert</span>👋{" "}
        </h1>
        <p className="max-w-xl text-center text-sm text-muted-foreground sm:text-lg">
          {siteConfig.careerOnjective}
        </p>
      </div>
      <div className="flex flex-row space-x-4">
        <Link href="/projects">
          <Button className="w-full">View Projects</Button>
        </Link>
        <Link href={siteConfig.social.github} target="_blank" rel="noreferrer">
          <Button variant="outline" className="w-full">
            <Icons.github className="mr-2 size-4" />
            <span>Github</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
