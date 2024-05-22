import HeroPage from "@/components/hero-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Devbertskie",
};

export default function Home() {
  return <HeroPage />;
}
