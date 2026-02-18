import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Building, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { icon: Heart, title: "Relationship-First", desc: "We believe technology should strengthen business relationships, not replace them. Every automation we build preserves the human touch." },
  { icon: Building, title: "Built for Real Businesses", desc: "We're not a generic SaaS tool. We understand the realities of running a service business — seasonal demands, lean teams, and real-world constraints." },
  { icon: BarChart3, title: "Results Over Features", desc: "We measure success by one thing: the impact on your business. Time saved, revenue recovered, customers retained — that's what matters." },
];

const AboutPage = () => (
  <main>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            We Built FlexLever Because We've Lived This Problem
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've seen firsthand how manual processes drain time, waste money, and hold businesses back from growing.
            We built the solution we wished existed.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>FlexLever was born from a simple observation: service businesses do incredible work, but they're held back by the operational overhead that comes with growth. More clients means more emails, more scheduling, more invoicing, more follow-ups — and eventually, more staff just to keep up.</p>
            <p>We saw an opportunity to change that. By combining the latest AI technology with deep understanding of how service businesses actually operate, we created a partner that handles the repetitive work so business owners can focus on what they do best.</p>
            <p>Whether you're a boutique hotel in Ocean City, an HVAC company scaling across the region, or a professional services firm managing dozens of clients — FlexLever is built for you.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mt-12 bg-card rounded-xl p-8 border border-border">
            <h3 className="font-display text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed italic">
              "To help every service business operate smarter — by making AI automation accessible, practical, and impactful for real-world businesses."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-secondary-foreground">Our Values</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="bg-secondary/50 rounded-xl p-8 border border-border/20 text-center">
                <v.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3 text-secondary-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold mb-4">The Team</h2>
          <p className="text-muted-foreground mb-8">We're a small, focused team passionate about making AI work for real businesses.</p>
          <div className="bg-card rounded-xl p-8 border border-border inline-block">
            <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary font-display text-2xl font-bold">FL</span>
            </div>
            <h3 className="font-display font-semibold">Founding Team</h3>
            <p className="text-sm text-muted-foreground mt-2">AI automation specialists with deep experience in service businesses.</p>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Interested in joining the team? <Link to="/contact" className="text-primary underline">Get in touch →</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Want to Learn More?</h2>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/contact">Let's Talk</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default AboutPage;
