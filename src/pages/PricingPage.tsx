import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const tiers = [
  { name: "AI Automation Audit", price: "$497–$997", period: "one-time", desc: "Comprehensive process audit with actionable roadmap", features: ["2-hour business review", "5-10 automation opportunities identified", "Prioritized roadmap", "1-hour presentation"], cta: "Book an Audit" },
  { name: "Bronze Retainer", price: "$1,500", period: "/mo", desc: "Getting started with AI automation", features: ["2-3 workflow implementations", "Monthly optimization", "Email support", "Basic reporting"], cta: "Get Started", highlighted: false },
  { name: "Silver Retainer", price: "$2,500", period: "/mo", desc: "Scale your automation efforts", features: ["4-6 workflows", "Bi-weekly check-ins", "Priority support", "Advanced reporting", "Quarterly strategy"], cta: "Get Started", highlighted: true },
  { name: "Gold Retainer", price: "$3,500", period: "/mo", desc: "Full-service automation partner", features: ["Unlimited workflows", "Weekly check-ins", "Dedicated Slack", "Custom AI models", "Custom reporting"], cta: "Contact Sales", highlighted: false },
];

const comparison = [
  { feature: "Cost", flexlever: "Flat $1,500–3,500/mo", inhouse: "$4,000–8,000/mo (salary)", nothing: "10-20 hrs/week wasted" },
  { feature: "Expertise", flexlever: "AI automation specialists", inhouse: "Generalist (if you're lucky)", nothing: "None" },
  { feature: "Speed", flexlever: "Live in 2-4 weeks", inhouse: "Months to hire & train", nothing: "Never" },
  { feature: "Scalability", flexlever: "Unlimited with right tier", inhouse: "Limited by headcount", nothing: "Doesn't scale" },
  { feature: "Ongoing optimization", flexlever: "Included", inhouse: "Extra effort", nothing: "N/A" },
];

const pricingFaqs = [
  { q: "Can I change plans?", a: "Yes — upgrade or downgrade anytime. Changes take effect on your next billing cycle." },
  { q: "Is there a setup fee?", a: "No setup fees. The retainer price covers everything." },
  { q: "Do you offer refunds?", a: "If you don't see measurable results within 90 days, your 4th month is on us." },
  { q: "Can I start with an audit before committing?", a: "Absolutely — that's what we recommend. The audit gives you a clear picture before investing in ongoing automation." },
];

const PricingPage = () => (
  <main>
    <Helmet>
      <title>Pricing — FlexLever AI Automation</title>
      <meta name="description" content="Simple, transparent pricing for AI automation services. Retainer plans from $1,500-$3,500/mo. Most clients see ROI within the first month." />
    </Helmet>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Flat monthly fees. No hidden costs. Most clients see ROI within the first month.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 80}>
              <div className={`rounded-xl p-6 border h-full flex flex-col ${tier.highlighted ? "border-primary bg-card shadow-lg ring-2 ring-primary/20" : "border-border bg-card shadow-sm"}`}>
                {tier.highlighted && <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">Recommended</span>}
                <h3 className="font-display text-lg font-bold">{tier.name}</h3>
                <p className="text-2xl font-bold text-primary mt-1">{tier.price}<span className="text-sm text-muted-foreground font-normal">{tier.period}</span></p>
                <p className="text-sm text-muted-foreground mt-2 mb-5">{tier.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={tier.highlighted ? "default" : "outline"}>
                  <Link to="/contact">{tier.cta}</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-dark py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 md:p-10 text-center">
            <span className="text-2xl mb-4 block">🚀</span>
            <h2 className="font-display text-2xl font-bold text-secondary-foreground mb-3">Founding Member Program</h2>
            <p className="text-muted-foreground mb-6">Be one of our first 20 clients and lock in 50% off for your first 6 months. Plus, get direct input into our product roadmap.</p>
            <Button asChild size="lg"><Link to="/contact">Claim Your Spot</Link></Button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-center mb-10">FlexLever vs. The Alternatives</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">FlexLever</th>
                  <th className="text-left py-3 px-4 font-semibold">Hire In-House</th>
                  <th className="text-left py-3 pl-4 font-semibold">Do Nothing</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-primary">{row.flexlever}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.inhouse}</td>
                    <td className="py-3 pl-4 text-muted-foreground">{row.nothing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-dark py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-center mb-10 text-secondary-foreground">Pricing FAQ</h2>
        </ScrollReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {pricingFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`pf-${i}`} className="border border-border/20 rounded-lg px-6 bg-secondary/30">
              <AccordionTrigger className="text-secondary-foreground hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Still Have Questions?</h2>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/contact">Let's Talk</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default PricingPage;