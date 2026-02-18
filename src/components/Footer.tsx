import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="section-navy-deep py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-xl font-bold text-primary-foreground">
            Flex<span className="text-primary">Lever</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            AI-powered business automation for service businesses. Work smarter, grow faster.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/audit" className="text-muted-foreground hover:text-primary transition-colors">AI Automation Audit</Link></li>
            <li><Link to="/services/retainer" className="text-muted-foreground hover:text-primary transition-colors">AI Automation Retainer</Link></li>
            <li><Link to="/services/custom" className="text-muted-foreground hover:text-primary transition-colors">Custom AI Solutions</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
            <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/20 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FlexLever. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
