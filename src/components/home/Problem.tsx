import { Clock, DollarSign, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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

export default Problem;