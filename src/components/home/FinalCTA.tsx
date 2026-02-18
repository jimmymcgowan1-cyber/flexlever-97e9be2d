import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTA = () => (
  <section className="bg-primary py-20">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          Ready to Automate Your Business?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Join the growing number of service businesses saving time, reducing costs, and scaling smarter with AI automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8">
            <Link to="/contact">Book Your Free Demo</Link>
          </Button>
        </div>
        <p className="text-primary-foreground/60 text-sm mt-4">
          No commitment. No credit card. Just a 15-minute conversation about your business.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;