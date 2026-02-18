import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const metrics = [
  { value: 40, suffix: "%", label: "Average time saved on admin tasks" },
  { value: 10, suffix: "x", label: "Target ROI within 6 months" },
  { value: 30, prefix: "<", suffix: " min", label: "To connect and go live" },
  { value: 500, prefix: "", suffix: "+", label: "Workflows designed" },
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
      <p className="text-center text-primary-foreground/50 text-xs mt-6">Based on projections for service businesses</p>
    </div>
  </section>
);

export default Metrics;