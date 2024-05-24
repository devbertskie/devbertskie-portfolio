import HeroPage from "@/components/hero-page";
import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | ${siteConfig.name}`,
};

export default function Home() {
  return <HeroPage />;
}
