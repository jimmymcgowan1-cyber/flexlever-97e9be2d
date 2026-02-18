import { Helmet } from "react-helmet-async";
import ScrollReveal from "@/components/ScrollReveal";

const TermsPage = () => (
  <main>
    <Helmet>
      <title>Terms of Service — FlexLever</title>
      <meta name="description" content="FlexLever's terms of service. Read our terms for using FlexLever's AI automation services." />
    </Helmet>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-secondary-foreground">Terms of Service</h1>
      </div>
    </section>
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm">
        <ScrollReveal>
          <p className="text-muted-foreground">Last updated: February 2026</p>
          <h2 className="font-display text-xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">By accessing and using the FlexLever website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          <h2 className="font-display text-xl font-semibold mt-8 mb-4">Services</h2>
          <p className="text-muted-foreground leading-relaxed">FlexLever provides AI automation consulting, implementation, and management services for businesses. Specific service details, deliverables, and pricing are outlined in individual service agreements.</p>
          <h2 className="font-display text-xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">For questions about these terms, please contact us at hello@flexlever.com.</p>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default TermsPage;