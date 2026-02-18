import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import MobileCTA from "@/components/MobileCTA";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import HowItWorksPage from "./pages/HowItWorksPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AuditPage from "./pages/services/AuditPage";
import RetainerPage from "./pages/services/RetainerPage";
import CustomPage from "./pages/services/CustomPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/audit" element={<AuditPage />} />
          <Route path="/services/retainer" element={<RetainerPage />} />
          <Route path="/services/custom" element={<CustomPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieConsent />
        <MobileCTA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
