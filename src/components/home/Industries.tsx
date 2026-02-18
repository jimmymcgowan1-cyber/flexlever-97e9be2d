import { Hotel, Home, Briefcase, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const industries = [
  { icon: Hotel, title: "Hospitality & Tourism", desc: "Automate guest communications, review management, and booking workflows to handle seasonal surges effortlessly." },
  { icon: Home, title: "Real Estate", desc: "Streamline lead qualification, property matching, and follow-up sequences to close deals faster." },
  { icon: Briefcase, title: "Professional Services", desc: "Automate client onboarding, document generation, and project tracking to serve more clients without more staff." },
  { icon: Wrench, title: "Service Businesses", desc: "From HVAC to plumbing — automate scheduling, invoicing follow-ups, and customer communication at scale." },
];

const Industries = () => (
  <section className="section-light py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Who It's For</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          FlexLever is built for businesses that are ready to work smarter — not just harder.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <ScrollReveal key={ind.title} delay={i * 100}>
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
              <ind.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-semibold mb-2">{ind.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;