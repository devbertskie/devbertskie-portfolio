import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function HeroPage() {
  return (
    <section className="container -mt-56 flex min-h-dvh max-w-screen-2xl flex-col items-center justify-center gap-y-4">
      <Avatar className="mb-5 size-20 sm:size-28">
        <AvatarImage
          className="object-cover"
          src="https://bertonatics.karlencutie.workers.dev/download.aspx?file=BG72WCMFU3BmSSJ7rZCalfOAPIbFLyWCzV6r6XWJz8BNToCtVg5Ps5qtb6s3JybR&expiry=A38tNchJCATJ741WqUB1YA%3D%3D&mac=42432686487a3af96bc32265a3e9b3a06c15e8a6a63618abc496c3597d0aa219"
        />
        <AvatarFallback>HB</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl md:text-5xl">
          Hi, I&apos;m{" "}
          <span className="font-bold capitalize text-primary">Hubert</span>👋{" "}
        </h1>
        <p className="max-w-xl text-center text-sm text-muted-foreground sm:text-lg">
          Passionate developer crafting intuitive digital solutions with
          dedication.
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
