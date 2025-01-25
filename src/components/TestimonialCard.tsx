import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export function TestimonialCard({
  content,
  author,
  role,
  company,
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="grid gap-4 p-6">
        <div className="relative">
          <span className="absolute -left-3 -top-2 text-6xl text-primary/20">
            "
          </span>
          <p className="relative text-lg text-muted-foreground">{content}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>
              {author.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}