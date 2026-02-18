import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Search, Settings, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { icon: Phone, num: "01", title: "Discovery Call", desc: "We start with a free 15-minute conversation to understand your business, your pain points, and your goals. No pressure, no sales pitch — just a genuine conversation about what's possible." },
  { icon: Search, num: "02", title: "Process Audit", desc: "Our team maps your existing workflows end-to-end. We identify every manual bottleneck, repetitive task, and automation opportunity — then prioritize by impact and feasibility." },
  { icon: Settings, num: "03", title: "Implementation", desc: "We build and deploy custom AI automations using tools like n8n, Make, and leading AI models. Every workflow is tested, documented, and integrated with your existing systems." },
  { icon: BarChart3, num: "04", title: "Optimization", desc: "Automation isn't set-and-forget. We monitor performance, gather feedback, and continuously improve your workflows so they deliver better results over time." },
];

const integrations = ["Jobber", "QuickBooks Online", "ServiceTitan", "HubSpot", "Salesforce", "Zapier", "Make", "Slack", "Google Workspace", "Microsoft 365"];

const HowItWorksPage = () => (
  <main>
    <Helmet>
      <title>How It Works — FlexLever AI Automation</title>
      <meta name="description" content="Learn how FlexLever transforms your business operations in 4 simple steps: Discovery, Audit, Implementation, and Optimization." />
    </Helmet>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            How FlexLever Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A deeper look at our process — from first conversation to measurable results.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 100}>
              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary tracking-widest">STEP {step.num}</span>
                  <h3 className="font-display text-2xl font-bold mt-1 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-dark py-20">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold mb-4 text-secondary-foreground">Integration Partners</h2>
          <p className="text-muted-foreground mb-10">We work with the tools you already use.</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {integrations.map((name) => (
              <span key={name} className="px-4 py-2 bg-secondary/50 rounded-lg text-sm text-secondary-foreground/80 border border-border/20">
                {name}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">Don't see your software? <Link to="/contact" className="text-primary underline">Contact us</Link> — we're adding new integrations regularly.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to See It in Action?</h2>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <Link to="/contact">Book a Demo</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default HowItWorksPage;
