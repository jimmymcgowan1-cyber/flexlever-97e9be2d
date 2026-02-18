import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Hotel, Home, Briefcase, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const industryPresets = [
  { label: "Hospitality & Tourism", icon: Hotel, hoursPerWeek: 20, avgHourlyRate: 30, automationRate: 0.45, tasks: "Guest comms, reviews, booking follow-ups" },
  { label: "Real Estate", icon: Home, hoursPerWeek: 18, avgHourlyRate: 40, automationRate: 0.40, tasks: "Lead nurture, property matching, follow-ups" },
  { label: "Professional Services", icon: Briefcase, hoursPerWeek: 15, avgHourlyRate: 50, automationRate: 0.35, tasks: "Client onboarding, docs, project tracking" },
  { label: "Service Businesses", icon: Wrench, hoursPerWeek: 22, avgHourlyRate: 35, automationRate: 0.50, tasks: "Scheduling, invoicing, customer comms" },
];

const ROICalculator = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [hoursPerWeek, setHoursPerWeek] = useState(industryPresets[0].hoursPerWeek);
  const [teamSize, setTeamSize] = useState(5);
  const [avgRate, setAvgRate] = useState(industryPresets[0].avgHourlyRate);

  const preset = industryPresets[selectedIndustry];
  const automationRate = preset.automationRate;
  const hoursSavedWeekly = Math.round(hoursPerWeek * automationRate);
  const hoursSavedMonthly = hoursSavedWeekly * 4;
  const costSavedMonthly = hoursSavedMonthly * avgRate;
  const annualSavings = costSavedMonthly * 12;
  const roiMultiple = costSavedMonthly > 0 ? (costSavedMonthly / 2500).toFixed(1) : "0";

  const handleIndustryChange = (index: number) => {
    setSelectedIndustry(index);
    setHoursPerWeek(industryPresets[index].hoursPerWeek);
    setAvgRate(industryPresets[index].avgHourlyRate);
  };

  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            See What AI Automation Could Save You
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Select your industry, adjust the sliders, and see real-time savings estimates.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10" role="radiogroup" aria-label="Select your industry">
              {industryPresets.map((ind, i) => (
                <button
                  key={ind.label}
                  onClick={() => handleIndustryChange(i)}
                  aria-pressed={selectedIndustry === i}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-sm font-medium transition-all ${
                    selectedIndustry === i
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-muted/50 text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  <ind.icon className="h-6 w-6" />
                  <span className="text-xs text-center leading-tight">{ind.label}</span>
                </button>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mb-8 text-center">
              Common tasks automated: <span className="font-medium text-foreground">{preset.tasks}</span>
            </p>

            <div className="space-y-8 mb-10">
              <div>
                <div className="flex justify-between mb-3">
                  <label htmlFor="hours-slider" className="text-sm font-medium">Hours on manual tasks per week</label>
                  <span className="text-sm font-bold text-primary">{hoursPerWeek} hrs</span>
                </div>
                <Slider id="hours-slider" value={[hoursPerWeek]} onValueChange={([v]) => setHoursPerWeek(v)} min={5} max={60} step={1} />
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <label htmlFor="team-slider" className="text-sm font-medium">Team size</label>
                  <span className="text-sm font-bold text-primary">{teamSize}</span>
                </div>
                <Slider id="team-slider" value={[teamSize]} onValueChange={([v]) => setTeamSize(v)} min={1} max={50} step={1} />
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <label htmlFor="rate-slider" className="text-sm font-medium">Average hourly cost</label>
                  <span className="text-sm font-bold text-primary">${avgRate}/hr</span>
                </div>
                <Slider id="rate-slider" value={[avgRate]} onValueChange={([v]) => setAvgRate(v)} min={15} max={100} step={5} />
              </div>
            </div>

            <div className="grid sm:grid-cols-4 gap-4 text-center">
              <div className="bg-muted rounded-xl p-5">
                <p className="font-display text-3xl font-bold text-primary">{hoursSavedWeekly}</p>
                <p className="text-xs text-muted-foreground mt-1">Hrs saved / week</p>
              </div>
              <div className="bg-muted rounded-xl p-5">
                <p className="font-display text-3xl font-bold text-primary">{hoursSavedMonthly}</p>
                <p className="text-xs text-muted-foreground mt-1">Hrs saved / month</p>
              </div>
              <div className="bg-muted rounded-xl p-5">
                <p className="font-display text-3xl font-bold text-primary">${costSavedMonthly.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">Monthly savings</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
                <p className="font-display text-3xl font-bold text-primary">${annualSavings.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">Annual savings</p>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground mb-6">
                Estimated <span className="font-bold text-primary">{roiMultiple}x ROI</span> on a Silver retainer ($2,500/mo) · {Math.round(automationRate * 100)}% automation rate for {preset.label}
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Get Your Custom Estimate</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ROICalculator;