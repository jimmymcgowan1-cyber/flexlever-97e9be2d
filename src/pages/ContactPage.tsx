import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Mail, Phone, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const expectItems = [
  "Quick review of your current operations",
  "Live walkthrough of how FlexLever can help",
  "Personalized recommendations based on your industry",
  "Q&A — no pressure, no contracts",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "We'll be in touch within 24 hours." });
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main>
      <section className="section-dark pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
              Let's Talk About Your Business
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a free 15-minute demo or send us a message. We'll show you exactly how FlexLever can help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Calendly placeholder + form */}
            <ScrollReveal>
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <h2 className="font-display text-2xl font-bold mb-6">Book a Demo</h2>
                <div className="bg-muted rounded-lg p-8 text-center mb-6">
                  <p className="text-muted-foreground text-sm">Calendly scheduling widget will be embedded here.</p>
                  <p className="text-xs text-muted-foreground mt-2">Connect your Calendly URL to enable self-scheduling.</p>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-display font-semibold mb-4">Or Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input placeholder="Full Name *" required />
                    <Input placeholder="Company Name *" required />
                    <Input type="email" placeholder="Email *" required />
                    <Input type="tel" placeholder="Phone (optional)" />
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Industry" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hospitality">Hospitality & Tourism</SelectItem>
                        <SelectItem value="realestate">Real Estate</SelectItem>
                        <SelectItem value="professional">Professional Services</SelectItem>
                        <SelectItem value="hvac">HVAC / Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical / Roofing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Tell us about your business and what you're looking for..." rows={4} />
                    <Button type="submit" className="w-full" disabled={submitting}>
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollReveal>

            {/* Right column */}
            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div>
                  <h2 className="font-display text-2xl font-bold mb-4">What to Expect</h2>
                  <p className="text-muted-foreground text-sm mb-4">Here's what we'll cover in 15 minutes:</p>
                  <ul className="space-y-3">
                    {expectItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-display font-semibold mb-4">Direct Contact</h3>
                  <div className="space-y-3 text-sm">
                    <a href="mailto:hello@flexlever.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" /> hello@flexlever.com
                    </a>
                    <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" /> FlexLever on LinkedIn
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
