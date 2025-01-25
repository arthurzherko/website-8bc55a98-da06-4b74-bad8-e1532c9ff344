import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  onSelectPlan: () => void;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  isPopular,
  onSelectPlan,
}: PricingCardProps) {
  return (
    <Card className={`relative ${isPopular ? "border-primary shadow-lg" : ""}`}>
      {isPopular && (
        <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
          Most Popular
        </span>
      )}
      
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      
      <CardContent className="grid gap-6">
        <div>
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        
        <div className="grid gap-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button
          onClick={onSelectPlan}
          variant={isPopular ? "default" : "outline"}
          className="w-full"
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}