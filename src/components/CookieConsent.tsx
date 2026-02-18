import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 left-0 right-0 z-50 p-4 bg-secondary border-t border-border/20 animate-fade-in-up md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-lg md:border md:shadow-xl">
      <p className="text-sm text-secondary-foreground/80 mb-3">
        We use cookies to improve your experience. By continuing, you agree to our{" "}
        <a href="/privacy" className="text-primary underline">Privacy Policy</a>.
      </p>
      <div className="flex gap-2">
        <Button size="sm" onClick={accept}>Accept</Button>
        <Button size="sm" variant="ghost" onClick={accept}>Dismiss</Button>
      </div>
    </div>
  );
};

export default CookieConsent;
