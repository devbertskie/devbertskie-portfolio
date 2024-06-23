import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[400px] text-center">
        <CardHeader>
          <CardTitle className="text-5xl text-primary">404</CardTitle>
          <CardDescription className="text-base">
            The page your looking for was not found 😟
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
            href="/"
          >
            Back to Homepage
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
