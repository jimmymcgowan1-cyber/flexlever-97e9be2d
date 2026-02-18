import { Bot, Plug, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const solutionPillars = [
  { icon: Bot, title: "AI Expertise", desc: "We design and deploy intelligent automations using the latest AI — from GPT-powered workflows to smart routing and predictive actions." },
  { icon: Plug, title: "Custom Implementation", desc: "Every business is different. We map your processes, identify bottlenecks, and build automations tailored to how you actually work." },
  { icon: Shield, title: "Ongoing Optimization", desc: "Automation isn't set-and-forget. We monitor, refine, and expand your workflows so they keep delivering results as your business grows." },
];

const Solution = () => (
  <section className="section-dark py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-secondary-foreground">
          Meet <span className="text-primary">FlexLever</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Your dedicated AI automation partner — we handle the tech so you can focus on what you do best.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {solutionPillars.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100}>
            <div className="bg-secondary/50 rounded-xl p-8 border border-border/20 hover:border-primary/30 transition-colors">
              <p.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3 text-secondary-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;