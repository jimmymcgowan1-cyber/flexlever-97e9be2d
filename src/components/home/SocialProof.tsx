import ScrollReveal from "@/components/ScrollReveal";

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

export default SocialProof;