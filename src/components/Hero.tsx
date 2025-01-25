import { Button } from "@/components/ui/button";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  onCtaClick: () => void;
}

export function Hero({ headline, subheadline, ctaText, onCtaClick }: HeroProps) {
  return (
    <div className="relative grid min-h-[600px] place-items-center overflow-hidden bg-gradient-to-br from-primary/90 to-primary px-4 py-24 text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
      
      <div className="container relative z-10 mx-auto grid max-w-4xl gap-8 text-center">
        <h1 className="animate-fade-in text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {headline}
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80 sm:text-xl">
          {subheadline}
        </p>
        
        <div>
          <Button
            size="lg"
            variant="secondary"
            onClick={onCtaClick}
            className="text-lg"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}