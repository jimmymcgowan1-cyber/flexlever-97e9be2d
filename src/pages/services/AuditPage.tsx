import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle, ArrowRight, Hotel, Home, Briefcase, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const deliverables = [
  "Complete process audit of your current operations",
  "Identification of 5-10 high-impact automation opportunities",
  "Prioritized implementation roadmap with ROI estimates",
  "Tool and platform recommendations",
  "1-hour presentation of findings and next steps",
];

const useCases = [
  { icon: Hotel, industry: "Hospitality", examples: ["Automated guest review responses", "Booking confirmation workflows", "Seasonal staffing optimization"] },
  { icon: Home, industry: "Real Estate", examples: ["Lead qualification automation", "Property matching sequences", "CRM data enrichment"] },
  { icon: Briefcase, industry: "Professional Services", examples: ["Client onboarding workflows", "Document generation", "Project status automation"] },
  { icon: Wrench, industry: "Service Businesses", examples: ["Invoice follow-up sequences", "Scheduling automation", "Customer communication flows"] },
];

const AuditPage = () => (
  <main>
    <Helmet>
      <title>AI Automation Audit — FlexLever</title>
      <meta name="description" content="A comprehensive analysis of your business operations to identify the highest-impact AI automation opportunities. Starting at $497." />
    </Helmet>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ScrollReveal>
          <Search className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            AI Automation Audit
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive analysis of your business operations to identify the highest-impact
            automation opportunities — with a clear roadmap to get there.
          </p>
          <Button asChild size="lg"><Link to="/contact">Book Your Audit</Link></Button>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold mb-6">What You'll Get</h2>
            <ul className="space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <h3 className="font-display text-xl font-semibold mb-4">How It Works</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-3"><span className="text-primary font-bold">1.</span> We schedule a 2-hour deep-dive into your operations</div>
                <div className="flex gap-3"><span className="text-primary font-bold">2.</span> Our team maps every manual process and workflow</div>
                <div className="flex gap-3"><span className="text-primary font-bold">3.</span> We deliver a detailed report with prioritized recommendations</div>
                <div className="flex gap-3"><span className="text-primary font-bold">4.</span> You get a 1-hour presentation walking through every opportunity</div>
              </div>
              <p className="mt-6 text-sm font-medium">Starting at <span className="text-primary text-lg font-bold">$497</span></p>
              <p className="mt-2"><Link to="/pricing" className="text-primary text-sm underline">See full pricing details →</Link></p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-secondary-foreground">Use Cases by Industry</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.industry} delay={i * 100}>
              <div className="bg-secondary/50 rounded-xl p-6 border border-border/20">
                <uc.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-3 text-secondary-foreground">{uc.industry}</h3>
                <ul className="space-y-2">
                  {uc.examples.map((ex) => (
                    <li key={ex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 mt-1 text-primary shrink-0" /> {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to Uncover Your Automation Opportunities?</h2>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/contact">Book Your Audit</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default AuditPage;