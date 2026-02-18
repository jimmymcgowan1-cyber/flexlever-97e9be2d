import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
        <p className="text-center text-muted-foreground text-sm mb-12">Based on early partner conversations</p>
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

export default Testimonials;