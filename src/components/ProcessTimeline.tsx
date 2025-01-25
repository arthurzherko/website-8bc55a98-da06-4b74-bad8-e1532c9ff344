interface TimelineStep {
  title: string;
  description: string;
  number: number;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={index} className="relative grid gap-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
            {step.number}
          </div>
          
          {index < steps.length - 1 && (
            <div className="absolute left-1/2 top-8 hidden h-[2px] w-full -translate-y-1/2 bg-border lg:block" />
          )}
          
          <div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}