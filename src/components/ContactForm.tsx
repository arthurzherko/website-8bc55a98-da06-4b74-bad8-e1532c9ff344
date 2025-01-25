import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input
            required
            placeholder="Name"
            className="bg-background"
          />
        </div>
        <div>
          <Input
            required
            type="email"
            placeholder="Email"
            className="bg-background"
          />
        </div>
      </div>
      
      <div>
        <Input
          required
          placeholder="Subject"
          className="bg-background"
        />
      </div>
      
      <div>
        <Textarea
          required
          placeholder="Your message"
          className="min-h-[150px] bg-background"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}