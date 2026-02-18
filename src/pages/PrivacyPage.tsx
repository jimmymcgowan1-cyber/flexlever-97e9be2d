import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPage = () => (
  <main>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-secondary-foreground">Privacy Policy</h1>
      </div>
    </section>
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm">
        <ScrollReveal>
          <p className="text-muted-foreground">Last updated: February 2026</p>
          <h2 className="font-display text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">We collect information you provide directly, such as your name, email address, company name, and phone number when you fill out our contact form or book a demo. We also collect usage data through cookies and analytics tools to improve our website experience.</p>
          <h2 className="font-display text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">We use the information we collect to respond to your inquiries, provide our services, improve our website, and send you relevant updates about FlexLever (with your consent). We never sell your personal information to third parties.</p>
          <h2 className="font-display text-xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">If you have questions about this privacy policy, please contact us at hello@flexlever.com.</p>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default PrivacyPage;
