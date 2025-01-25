interface ServicesGridProps {
  children: React.ReactNode;
}

export function ServicesGrid({ children }: ServicesGridProps) {
  return (
    <div className="container py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}