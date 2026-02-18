import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, MessageSquare, UserCheck, Star, FileText, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const solutions = [
  { icon: MessageSquare, title: "AI Chatbots", desc: "Customer-facing chatbots that handle inquiries, bookings, and support 24/7 — trained on your business data." },
  { icon: UserCheck, title: "Lead Qualification", desc: "Automatically score, route, and follow up with leads based on custom criteria. Never miss a hot prospect." },
  { icon: Star, title: "Review Management", desc: "Monitor, respond to, and analyze reviews across all platforms automatically. Protect your reputation at scale." },
  { icon: FileText, title: "Document Automation", desc: "Generate contracts, proposals, reports, and invoices automatically from your existing data and templates." },
];

const examples = [
  { industry: "Hospitality", example: "AI-powered guest communication that handles pre-arrival questions, check-in instructions, and post-stay review requests — all personalized to each guest." },
  { industry: "Real Estate", example: "Automated lead nurture sequences that qualify prospects, match them to listings, and schedule viewings — while your agents focus on closing." },
  { industry: "Professional Services", example: "Smart client onboarding that collects documents, generates agreements, sets up project tracking, and sends welcome sequences automatically." },
];

const CustomPage = () => (
  <main>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ScrollReveal>
          <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            Custom AI Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From chatbots to document automation — we build custom AI solutions tailored to your exact business needs.
          </p>
          <Button asChild size="lg"><Link to="/contact">Discuss Your Needs</Link></Button>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-center mb-12">What We Build</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <s.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-dark py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-secondary-foreground">Industry Examples</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {examples.map((ex, i) => (
            <ScrollReveal key={ex.industry} delay={i * 100}>
              <div className="bg-secondary/50 rounded-xl p-8 border border-border/20">
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{ex.industry}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ex.example}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Have a Unique Challenge?</h2>
        <p className="text-primary-foreground/80 mb-6">Let's talk about what AI can do for your specific business.</p>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/contact">Start the Conversation</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default CustomPage;
