import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PageHeaderProps {
  label: string;
  description?: string;
}

export default function PageHeader({ label, description }: PageHeaderProps) {
  return (
    <Card className="my-4 w-full border-0 border-l-4 border-primary bg-muted/40">
      <CardHeader>
        <CardTitle className="text-primary">{label}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
    </Card>
  );
}
