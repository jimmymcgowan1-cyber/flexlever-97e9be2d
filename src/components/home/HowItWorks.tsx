import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Discovery", desc: "We learn your business, map your workflows, and identify the best automation opportunities." },
  { num: "02", title: "Implementation", desc: "We build and deploy custom AI workflows using tools like n8n, Make, and leading AI models." },
  { num: "03", title: "Results", desc: "Track your ROI in real-time. We optimize continuously so your automations keep improving." },
];

const HowItWorks = () => (
  <section className="section-dark py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-foreground">
          How It Works
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 150}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 text-primary font-display text-2xl font-bold mb-4">
                {s.num}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-secondary-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={300}>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/how-it-works">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HowItWorks;