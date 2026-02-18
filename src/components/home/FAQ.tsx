import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

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

export default FAQ;