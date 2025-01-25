import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { FaSearchDollar, FaHashtag, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <Hero
        headline="Transform Your Digital Presence"
        subheadline="Drive growth with data-driven digital marketing strategies tailored to your business goals"
        ctaText="Get Started Today"
        onCtaClick={() => navigate("/services")}
      />

      <section className="py-20">
        <div className="container text-center">
          <h2 className="mb-16 text-3xl font-bold">Our Core Services</h2>
          <ServicesGrid>
            <ServiceCard
              title="Search Engine Optimization"
              description="Boost your visibility and rank higher in search results with our expert SEO strategies."
              icon={FaSearchDollar}
            />
            <ServiceCard
              title="Social Media Marketing"
              description="Engage your audience and build brand awareness across all social platforms."
              icon={FaHashtag}
            />
            <ServiceCard
              title="PPC Management"
              description="Maximize ROI with targeted paid advertising campaigns that convert."
              icon={FaChartLine}
            />
          </ServicesGrid>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container">
          <h2 className="mb-16 text-center text-3xl font-bold">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              content="DigitalPro transformed our online presence. Our leads have increased by 150% since working with them."
              author="Sarah Johnson"
              role="Marketing Director"
              company="TechCorp"
            />
            <TestimonialCard
              content="The team's expertise in digital marketing is outstanding. They delivered results beyond our expectations."
              author="Mike Williams"
              role="CEO"
              company="Growth Ventures"
            />
            <TestimonialCard
              content="Professional, responsive, and results-driven. Couldn't be happier with our choice to work with DigitalPro."
              author="Lisa Chen"
              role="Founder"
              company="StyleHub"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Let's Get Started</h2>
            <p className="text-muted-foreground">
              Ready to take your digital marketing to the next level? Contact us today.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}