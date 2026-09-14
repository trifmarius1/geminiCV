import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Award, 
  Users, 
  Sparkles, 
  Target, 
  FileCheck2, 
  Zap,
  Layers,
  Bot
} from 'lucide-react';
import { contactData } from '../data/cvData';
import { Language } from '../types';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-fuchsia-400" />,
      title: "Automotive EV & BCM Specialization",
      description: "Over a decade deep in automotive electronic architectures. Validating complex Electric Vehicle Body Control Modules (BCM) and digital Instrument Clusters using Vector CANoe, CANalyzer, and diagnostic tools."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-pink-400" />,
      title: "Functional Safety & ASPICE Rigor",
      description: "Strict adherence to ISO 26262 (ASIL-B through ASIL-D) and ASPICE engineering standards. Translating complex OEM system requirements into DOORS test cases with full traceability across the V-Model."
    },
    {
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      title: "AI-Augmented QA & Automation",
      description: "Pioneering the application of modern AI agents within testing lifecycles—generating exhaustive boundary test matrices, analyzing defect clusters, and writing high-efficiency Python SWIT/SWT scripts."
    },
    {
      icon: <Users className="w-5 h-5 text-rose-400" />,
      title: "Mentorship & Cross-Domain Leadership",
      description: "Authored and delivered comprehensive onboarding programs at Marelli, turning new joiners into high-performing testers. Adept at cross-functional collaboration in Agile Scrum sprints across European teams."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-800/40">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Profile & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where Automotive Precision Meets Modern AI Innovation
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            A comprehensive track record spanning 16+ years of technical rigor, specializing in safety-critical vehicle ECUs, intelligent test automation, and process compliance.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-fuchsia-900/40 shadow-xl shadow-fuchsia-950/20 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-5 text-neutral-300 leading-relaxed text-base sm:text-lg font-normal">
            <p>
              I am a <strong className="text-white font-semibold">Results-Driven Software Test Engineer</strong> with over <strong className="text-fuchsia-400 font-semibold">10+ years</strong> of focused experience validating mission-critical systems across automotive and IT sectors, complemented by <strong className="text-pink-300 font-semibold">6 additional years</strong> in high-stakes engineering proposals and telecom diagnostics.
            </p>
            <p>
              In the modern era of software-defined electric vehicles, a defect in an in-vehicle electronic control unit (ECU) or Body Control Module (BCM) is not just a software bug—it is a functional safety imperative. My mission has centered on eliminating vulnerabilities before code ever touches vehicle hardware. By combining industry gold standards like <strong className="text-white font-semibold">Vector CANoe, CANalyzer, IBM DOORS, and ISO 26262</strong> with <strong className="text-fuchsia-400 font-semibold">modern AI Agents</strong> and <strong className="text-white font-semibold">Python SWIT/SWT automation</strong>, I ensure automotive systems achieve bulletproof reliability and flawless compliance.
            </p>
            <p className="text-sm text-neutral-400 border-l-2 border-fuchsia-500 pl-4 italic">
              "Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction, and skillful execution." — Driving quality from requirement decomposition to final production flash.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div 
              key={pillar.title}
              className="p-6 rounded-2xl bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800/80 hover:border-fuchsia-700/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-fuchsia-900/60 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-800/50 flex items-center text-xs font-semibold text-fuchsia-400">
                <span>Domain Standard Compliant</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
