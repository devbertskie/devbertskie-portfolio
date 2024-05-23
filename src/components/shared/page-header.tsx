import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PageHeaderProps {
  label: string;
  description: string;
}

export default function PageHeader({ label, description }: PageHeaderProps) {
  return (
    <Card className="my-4 w-full border-0 bg-primary/10">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
