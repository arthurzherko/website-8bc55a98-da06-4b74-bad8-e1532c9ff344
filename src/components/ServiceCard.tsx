import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="group transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
          <Icon size={24} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}