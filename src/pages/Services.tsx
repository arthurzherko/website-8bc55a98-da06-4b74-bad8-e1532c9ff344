import { ServicesGrid } from "@/components/ServicesGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Button } from "@/components/ui/button";
import {
  FaSearchDollar,
  FaHashtag,
  FaChartLine,
  FaEnvelope,
  FaPencilAlt,
  FaCode,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate();

  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "We analyze your business goals and market position",
    },
    {
      number: 2,
      title: "Strategy",
      description: "Develop a customized digital marketing plan",
    },
    {
      number: 3,
      title: "Implementation",
      description: "Execute the strategy across all channels",
    },
    {
      number: 4,
      title: "Optimization",
      description: "Monitor, analyze, and improve performance",
    },
  ];

  return (
    <main>
      <section className="bg-primary px-4 py-20 text-primary-foreground">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl">
            Our Digital Marketing Services
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg text-primary-foreground/80">
            Comprehensive digital marketing solutions tailored to drive your business growth
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Complete Service Package
          </h2>
          <ServicesGrid>
            <ServiceCard
              title="Search Engine Optimization"
              description="Improve your search rankings and drive organic traffic with our data-driven SEO strategies."
              icon={FaSearchDollar}
            />
            <ServiceCard
              title="Social Media Marketing"
              description="Build brand awareness and engage your audience across all social platforms."
              icon={FaHashtag}
            />
            <ServiceCard
              title="PPC Advertising"
              description="Drive targeted traffic and conversions with optimized paid advertising campaigns."
              icon={FaChartLine}
            />
            <ServiceCard
              title="Email Marketing"
              description="Nurture leads and boost customer retention with strategic email campaigns."
              icon={FaEnvelope}
            />
            <ServiceCard
              title="Content Marketing"
              description="Create valuable content that attracts and engages your target audience."
              icon={FaPencilAlt}
            />
            <ServiceCard
              title="Web Analytics"
              description="Track and analyze your digital performance to optimize marketing ROI."
              icon={FaCode}
            />
          </ServicesGrid>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Pricing Plans
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Starter"
              price="$999"
              description="Perfect for small businesses"
              features={[
                "Social Media Management",
                "Basic SEO",
                "Monthly Report",
                "Email Support",
              ]}
              onSelectPlan={() => navigate("/")}
            />
            <PricingCard
              title="Professional"
              price="$1,999"
              description="Ideal for growing businesses"
              features={[
                "Everything in Starter",
                "Advanced SEO",
                "PPC Management",
                "Content Marketing",
                "Priority Support",
              ]}
              isPopular
              onSelectPlan={() => navigate("/")}
            />
            <PricingCard
              title="Enterprise"
              price="$3,999"
              description="For large organizations"
              features={[
                "Everything in Professional",
                "Custom Strategy",
                "Dedicated Manager",
                "24/7 Support",
                "Advanced Analytics",
              ]}
              onSelectPlan={() => navigate("/")}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Our Process
          </h2>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="bg-primary px-4 py-20 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            Let's create a digital marketing strategy that drives results for your business.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/")}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </main>
  );
}