import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
    <Button asChild className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
      <Link to="/contact">Book a Demo</Link>
    </Button>
  </div>
);

export default MobileCTA;
