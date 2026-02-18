import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  { title: "5 Ways AI Automation Can Transform Your Service Business", excerpt: "Discover the most impactful automation opportunities hiding in your daily operations — and how to capture them.", date: "Feb 15, 2026", readTime: "5 min read", category: "Industry Tips" },
  { title: "Why Local Businesses Are Turning to AI (And Why You Should Too)", excerpt: "From hospitality to HVAC, local businesses are discovering that AI automation isn't just for tech companies anymore.", date: "Feb 10, 2026", readTime: "4 min read", category: "AI Trends" },
  { title: "The Real Cost of Manual Processes: A Case Study", excerpt: "We break down exactly how much time and money a typical service business loses to manual workflows every month.", date: "Feb 5, 2026", readTime: "6 min read", category: "Case Studies" },
];

const BlogPage = () => (
  <main>
    <section className="section-dark pt-28 pb-16">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">FlexLever Blog</h1>
          <p className="text-lg text-muted-foreground">Insights and tips on AI automation for service businesses.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 100}>
              <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="h-40 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Featured Image</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <h3 className="font-display text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-dark py-16">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-bold text-secondary-foreground mb-4">Get AI Tips Delivered to Your Inbox</h2>
          <div className="flex gap-2">
            <Input placeholder="Your email address" type="email" className="bg-secondary/50 border-border/20 text-secondary-foreground" />
            <Button>Subscribe</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default BlogPage;
