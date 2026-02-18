import { Link } from "react-router-dom";
import { Search, Settings, Zap, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Search, title: "AI Automation Audit", desc: "A deep-dive analysis of your business operations to identify the highest-impact automation opportunities.", href: "/services/audit", cta: "Learn More" },
  { icon: Settings, title: "AI Automation Retainer", desc: "Ongoing implementation and optimization of AI workflows with dedicated support at every tier.", href: "/services/retainer", cta: "See Plans" },
  { icon: Zap, title: "Custom AI Solutions", desc: "Chatbots, lead qualification, review management, document automation — built to your exact needs.", href: "/services/custom", cta: "Explore Solutions" },
];

const Services = () => (
  <section className="section-light py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all group">
              <s.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
              <Link to={s.href} className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:gap-2 transition-all">
                {s.cta} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;