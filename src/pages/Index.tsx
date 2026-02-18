import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Metrics from "@/components/home/Metrics";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import ROICalculator from "@/components/home/ROICalculator";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => (
  <main>
    <Helmet>
      <title>FlexLever — AI-Powered Business Automation for Service Businesses</title>
      <meta name="description" content="FlexLever helps service businesses eliminate manual processes, save hours every week, and scale operations with custom AI automation workflows." />
    </Helmet>
    <Hero />
    <SocialProof />
    <Problem />
    <Solution />
    <Services />
    <HowItWorks />
    <Metrics />
    <Industries />
    <Testimonials />
    <ROICalculator />
    <FAQ />
    <FinalCTA />
  </main>
);

export default Index;