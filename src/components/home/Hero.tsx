import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Hero = () => (
  <section className="section-dark pt-28 pb-20 md:pt-36 md:pb-28">
    <div className="container mx-auto px-4 text-center max-w-4xl">
      <ScrollReveal>
        <Badge className="mb-6 bg-primary/15 text-primary border-primary/30 px-4 py-1.5 text-sm font-medium">
          AI-Powered Business Automation
        </Badge>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6 text-secondary-foreground">
          Transform Your Business Operations with{" "}
          <span className="text-primary">AI Automation</span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          FlexLever helps service businesses eliminate manual processes, save hours every week,
          and scale operations — using custom AI workflows built around your business.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/contact">Book a Demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
            <Link to="/services/audit">See Our Services <ChevronRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Hero;