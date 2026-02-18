import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap, Clock, DollarSign, TrendingDown, Bot, Plug, Shield,
  Search, Settings, BarChart3, Hotel, Home, Briefcase, Wrench,
  Star, ArrowRight, CheckCircle, ChevronRight
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { useState } from "react";

/* ── Hero ── */
const Hero = () => (
  <section className="section-dark pt-28 pb-20 md:pt-36 md:pb-28">
    <div className="container mx-auto px-4 text-center max-w-4xl">
      <ScrollReveal>
        <Badge className="mb-6 bg-primary/15 text-primary border-primary/30 px-4 py-1.5 text-sm font-medium">
          AI-Powered Business Automation
        </Badge>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6 text-secondary-foreground">
          Transform Your Business Operations with{" "}
          <span className="text-primary">AI Automation</span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          FlexLever helps service businesses eliminate manual processes, save hours every week,
          and scale operations — using custom AI workflows built around your business.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/contact">Book a Demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
            <Link to="/services/audit">See Our Services <ChevronRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ── Social Proof ── */
const SocialProof = () => (
  <section className="section-navy-deep py-6 border-y border-border/10">
    <div className="container mx-auto px-4">
      <p className="text-center text-sm text-muted-foreground mb-4">Built for businesses using</p>
      <div className="flex flex-wrap justify-center gap-8 items-center text-muted-foreground/60 text-sm font-medium">
        {["Jobber", "QuickBooks", "ServiceTitan", "HubSpot", "Zapier", "Make"].map((name) => (
          <span key={name} className="tracking-wide uppercase">{name}</span>
        ))}
      </div>
    </div>
  </section>
);

/* ── Problem ── */
const problemCards = [
  { icon: Clock, title: "Hours Wasted on Manual Tasks", desc: "Your team spends 15+ hours per week on repetitive admin work — emails, scheduling, data entry — instead of growing the business." },
  { icon: DollarSign, title: "Revenue Left on the Table", desc: "Missed follow-ups, slow response times, and manual errors cost service businesses thousands every month in lost opportunities." },
  { icon: TrendingDown, title: "Scaling Feels Impossible", desc: "Adding more staff to handle more work doesn't scale. You need smarter systems, not just more bodies." },
];

const Problem = () => (
  <section className="section-light py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Manual Processes Are Holding You Back
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Most service businesses lose time and money to inefficient, manual workflows every single day.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {problemCards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 100}>
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <card.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ── Solution ── */
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

/* ── Services Overview ── */
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

/* ── How It Works ── */
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

/* ── Metrics ── */
const metrics = [
  { value: 40, suffix: "%", label: "Average time saved on admin tasks" },
  { value: 10, suffix: "x", label: "ROI within the first 6 months" },
  { value: 30, prefix: "<", suffix: " min", label: "To connect and go live" },
  { value: 500, prefix: "", suffix: "+", label: "Workflows deployed" },
];

const Metrics = () => (
  <section className="bg-primary py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((m) => (
          <ScrollReveal key={m.label}>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {m.prefix}<CountUp end={m.value} />{m.suffix}
              </div>
              <p className="text-primary-foreground/80 text-sm">{m.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ── Industries ── */
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

/* ── Testimonials ── */
const testimonials = [
  { quote: "FlexLever automated our entire guest review process. We went from spending 5 hours a week on reviews to zero — and our response rate went up.", name: "Hotel Manager", company: "Boutique Hotel, Ocean City" },
  { quote: "Our office manager used to spend half her day on follow-ups and data entry. Now she focuses on customer service while FlexLever handles the rest.", name: "Operations Manager", company: "HVAC Company, Maryland" },
  { quote: "I was skeptical about AI, but FlexLever made it simple. They understood our workflows and built automations that actually work for our team.", name: "Agency Owner", company: "Marketing Agency, DE" },
];

const Testimonials = () => (
  <section className="section-dark py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2 text-secondary-foreground">
          What Our Partners Are Saying
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12">Early partner feedback</p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="bg-secondary/50 rounded-xl p-8 border border-border/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="text-secondary-foreground/90 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-secondary-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.company}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ── ROI Calculator ── */
const ROICalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [teamSize, setTeamSize] = useState(5);

  const hoursSavedMonthly = Math.round(hoursPerWeek * 0.4 * 4);
  const costSavedMonthly = hoursSavedMonthly * 35;
  const annualSavings = costSavedMonthly * 12;

  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            See What AI Automation Could Save You
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Adjust the sliders to estimate your potential savings with FlexLever.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <div className="space-y-8 mb-10">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium">Hours spent on manual tasks per week</label>
                  <span className="text-sm font-bold text-primary">{hoursPerWeek} hrs</span>
                </div>
                <Slider value={[hoursPerWeek]} onValueChange={([v]) => setHoursPerWeek(v)} min={5} max={60} step={1} />
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium">Team size</label>
                  <span className="text-sm font-bold text-primary">{teamSize}</span>
                </div>
                <Slider value={[teamSize]} onValueChange={([v]) => setTeamSize(v)} min={1} max={50} step={1} />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-muted rounded-xl p-5">
                <p className="font-display text-3xl font-bold text-primary">{hoursSavedMonthly}</p>
                <p className="text-sm text-muted-foreground mt-1">Hours saved / month</p>
              </div>
              <div className="bg-muted rounded-xl p-5">
                <p className="font-display text-3xl font-bold text-primary">${costSavedMonthly.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mt-1">Monthly savings</p>
              </div>
              <div className="bg-muted rounded-xl p-5">
                <p className="font-display text-3xl font-bold text-primary">${annualSavings.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mt-1">Annual savings</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link to="/contact">Get Your Custom Estimate</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ── FAQ ── */
const faqs = [
  { q: "What kind of businesses do you work with?", a: "We specialize in service businesses — hospitality, real estate, HVAC, plumbing, professional services, and more. If your team spends time on repetitive tasks, we can help." },
  { q: "How long does implementation take?", a: "Most automations are live within 2-4 weeks. A full audit takes about one week, and implementation begins immediately after." },
  { q: "Do I need technical knowledge?", a: "Not at all. We handle everything — from mapping your processes to building and maintaining the automations. You just tell us what's slowing you down." },
  { q: "What tools do you use?", a: "We use industry-leading platforms like n8n, Make, and AI providers including OpenAI and Anthropic. We pick the right tool for each job." },
  { q: "Will this replace my staff?", a: "No — it empowers them. Automation handles the repetitive work so your team can focus on higher-value tasks like customer service and business development." },
  { q: "How much does it cost?", a: "Our audit starts at $497 and retainer plans range from $1,500-$3,500/month depending on scope. Most clients see ROI within the first month. Visit our pricing page for details." },
  { q: "Is there a contract?", a: "We offer flexible monthly plans with no long-term contracts required. We're confident in our results." },
  { q: "What results can I expect?", a: "Our clients typically save 15-25 hours per week on admin tasks and see measurable improvements in response times, lead conversion, and operational efficiency within 90 days." },
];

const FAQ = () => (
  <section className="section-dark py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-foreground">
          Frequently Asked Questions
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border/20 rounded-lg px-6 bg-secondary/30">
              <AccordionTrigger className="text-secondary-foreground text-left hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

/* ── Final CTA ── */
const FinalCTA = () => (
  <section className="bg-primary py-20">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          Ready to Automate Your Business?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Join the growing number of service businesses saving time, reducing costs, and scaling smarter with AI automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8">
            <Link to="/contact">Book Your Free Demo</Link>
          </Button>
        </div>
        <p className="text-primary-foreground/60 text-sm mt-4">
          No commitment. No credit card. Just a 15-minute conversation about your business.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

/* ── Index Page ── */
const Index = () => (
  <main>
    <Hero />
    <SocialProof />
    <Problem />
    <Solution />
    <Services />
    <HowItWorks />
    <Metrics />
    <Industries />
    <Testimonials />
    <ROICalculator />
    <FAQ />
    <FinalCTA />
  </main>
);

export default Index;
