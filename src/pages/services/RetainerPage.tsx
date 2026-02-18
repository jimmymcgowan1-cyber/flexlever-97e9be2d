import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const tiers = [
  {
    name: "Bronze",
    price: "$1,500",
    desc: "Ideal for businesses just getting started with automation.",
    features: ["2-3 workflow implementations", "Monthly optimization review", "Email support", "Basic reporting dashboard"],
    highlighted: false,
  },
  {
    name: "Silver",
    price: "$2,500",
    desc: "For businesses ready to scale their automation efforts.",
    features: ["4-6 workflow implementations", "Bi-weekly check-in calls", "Priority support", "Advanced reporting", "Quarterly strategy sessions"],
    highlighted: true,
  },
  {
    name: "Gold",
    price: "$3,500",
    desc: "Full-service automation for growing businesses.",
    features: ["Unlimited workflow implementations", "Weekly check-in calls", "Dedicated Slack channel", "Custom AI model training", "Advanced + custom reporting"],
    highlighted: false,
  },
];

const RetainerPage = () => (
  <main>
    <Helmet>
      <title>AI Automation Retainer — FlexLever</title>
      <meta name="description" content="Ongoing AI workflow implementation and optimization. Choose Bronze, Silver, or Gold tiers from $1,500-$3,500/mo." />
    </Helmet>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ScrollReveal>
          <Settings className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            AI Automation Retainer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ongoing AI workflow implementation and optimization — choose the tier that fits your business.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 100}>
              <div className={`rounded-xl p-8 border ${tier.highlighted ? "border-primary bg-card shadow-lg ring-2 ring-primary/20" : "border-border bg-card shadow-sm"}`}>
                {tier.highlighted && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">Most Popular</span>
                )}
                <h3 className="font-display text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mb-1">{tier.price}<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={tier.highlighted ? "default" : "outline"}>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-center mt-8"><Link to="/pricing" className="text-primary text-sm underline">See full pricing details →</Link></p>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Not Sure Which Tier Is Right?</h2>
        <p className="text-primary-foreground/80 mb-6">Book a free consultation and we'll recommend the best fit for your business.</p>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/contact">Book a Call</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default RetainerPage;