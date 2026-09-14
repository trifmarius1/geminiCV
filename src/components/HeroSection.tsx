import React, { useState } from 'react';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight, 
  Download, 
  Layers, 
  Sparkles,
  Bot,
  Car
} from 'lucide-react';
import { contactData, statsData, translations } from '../data/cvData';
import { Language } from '../types';

interface HeroSectionProps {
  currentLang: Language;
  onNavigateToDemo: () => void;
  onPrintClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  currentLang, 
  onNavigateToDemo, 
  onPrintClick 
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const t = translations[currentLang].hero;

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const downloadVCard = () => {
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:Trif;Marius;;;
FN:Marius Trif
ORG:AUMOVIO
TITLE:Software Test Engineer
TEL;TYPE=CELL:${contactData.phone}
EMAIL;TYPE=INTERNET:${contactData.email}
EMAIL;TYPE=INTERNET:${contactData.secondaryEmail}
URL:${contactData.linkedInUrl}
ADR;TYPE=HOME:;;Cluj-Napoca;Cluj;;Romania
NOTE:10+ Years Software Test Engineer specializing in Automotive EV BCM, ASPICE, ISO 26262, Vector CAN tools, and AI Agents in QA.
END:VCARD`;

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Marius_Trif_Automotive_QA_Lead.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Dynamic Magenta Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-br from-fuchsia-600/15 via-pink-600/10 to-purple-800/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-pink-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b076412_1px,transparent_1px),linear-gradient(to_bottom,#3b076412_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-800/60 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-[#0a66c2] animate-pulse" />
            <span>{t.verified}</span>
            <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-900/90 text-neutral-300 border border-neutral-800">
            <Car className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>EV Body Control Modules (BCM)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-900/90 text-neutral-300 border border-neutral-800">
            <Bot className="w-3.5 h-3.5 text-pink-400" />
            <span>AI Agents in Test Engineering</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-400 bg-neutral-900/50 border border-neutral-800/60">
            <MapPin className="w-3 h-3 text-neutral-500" />
            <span>{t.remoteBadge}</span>
          </div>
        </div>

        {/* Main Grid: Info + Visual Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (8 cols): Name, Headline, Narrative, CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div>
              <p className="text-sm font-bold tracking-wider uppercase text-fuchsia-400 mb-1 flex items-center gap-2">
                <span>Automotive & Software Quality Engineering</span>
                <span className="h-px w-12 bg-fuchsia-500/40 inline-block" />
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
                {t.headingLine1}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-fuchsia-200">
                  {contactData.title}
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-neutral-300 leading-snug">
                {t.headline}
              </p>
            </div>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              {t.summaryIntro}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Vector CANoe", 
                "Vector CANalyzer", 
                "ASPICE Certified", 
                "ISO 26262 (ASIL-B/D)", 
                "Python SWIT / SWT", 
                "IBM DOORS", 
                "AI Agent Workflows", 
                "Instrument Clusters", 
                "Mobile & Web QA"
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-semibold bg-neutral-900/90 text-neutral-200 border border-fuchsia-950/80 hover:border-fuchsia-700/60 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={contactData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-cta"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-700 hover:from-fuchsia-500 hover:to-pink-500 shadow-xl shadow-fuchsia-600/35 hover:shadow-fuchsia-500/50 transition-all transform hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4 text-white" />
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onNavigateToDemo}
                id="hero-explore-demo-btn"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-fuchsia-300 hover:text-white bg-fuchsia-950/40 hover:bg-fuchsia-900/60 border border-fuchsia-800/60 shadow-lg shadow-fuchsia-950/30 transition-all cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-fuchsia-400" />
                <span>{t.secondaryCta}</span>
              </button>

              <button
                onClick={downloadVCard}
                id="hero-vcard-btn"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 transition-all cursor-pointer"
                title="Download contact vCard to address book"
              >
                <Download className="w-4 h-4 text-fuchsia-400" />
                <span>vCard</span>
              </button>
            </div>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-sm text-neutral-400">
              <button
                onClick={() => copyToClipboard(contactData.phone, 'phone')}
                id="hero-copy-phone"
                className="group flex items-center gap-2 hover:text-fuchsia-300 transition-colors"
                title="Click to copy phone number"
              >
                <Phone className="w-4 h-4 text-fuchsia-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs sm:text-sm text-neutral-300">{contactData.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(contactData.email, 'email')}
                id="hero-copy-email"
                className="group flex items-center gap-2 hover:text-fuchsia-300 transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-fuchsia-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs sm:text-sm text-neutral-300">{contactData.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Visual LinkedIn-Style Identity Card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-fuchsia-500/40 via-pink-600/20 to-purple-900/30 shadow-2xl shadow-fuchsia-950/40">
              <div className="rounded-2xl bg-neutral-950/95 backdrop-blur-xl p-6 space-y-5 border border-fuchsia-950/50">
                
                {/* Profile Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-18 h-18 rounded-2xl bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-purple-700 p-0.5 shadow-lg shadow-fuchsia-600/30">
                        <div className="w-full h-full rounded-[14px] bg-neutral-900 flex flex-col items-center justify-center text-white">
                          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-200 to-pink-400">
                            MT
                          </span>
                          <span className="text-[9px] uppercase tracking-widest text-fuchsia-300 font-bold">
                            QA ENG
                          </span>
                        </div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-neutral-950" title="Active">
                        <Check className="w-3 h-3 text-neutral-950 stroke-[3]" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-lg font-bold text-white">Marius Trif</h2>
                        <span className="text-[#0a66c2] bg-[#0a66c2]/10 p-0.5 rounded" title="LinkedIn Profile Connected">
                          <Linkedin className="w-3.5 h-3.5 fill-[#0a66c2]" />
                        </span>
                      </div>
                      <p className="text-xs text-fuchsia-400 font-medium">
                        Software Test Engineer @ AUMOVIO
                      </p>
                      <p className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-neutral-500" />
                        Cluj-Napoca, Romania
                      </p>
                    </div>
                  </div>
                </div>

                {/* Current Active Assignment Spotlight */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-neutral-900 to-fuchsia-950/30 border border-fuchsia-900/40 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Current Assignment</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-fuchsia-900/70 text-fuchsia-300 border border-fuchsia-700/40">
                      ASPICE Certified
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-neutral-200">
                    AUMOVIO • Electric Vehicle BCM
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Validating Body Control Modules via Vector CANoe, CANalyzer, ISO 26262 functional safety, and AI-accelerated Python SWIT/SWT suites.
                  </p>
                </div>

                {/* Quick Career Highlights List */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-900 pb-2">
                    <span>Automotive QA Track:</span>
                    <span className="font-semibold text-neutral-200">10+ Years</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-900 pb-2">
                    <span>Previous Pillar:</span>
                    <span className="font-semibold text-neutral-200">Marelli (5+ Years, Cluster)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-900 pb-2">
                    <span>Mobile & Web QA:</span>
                    <span className="font-semibold text-neutral-200">Endava (iOS, Android, Web)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pb-1">
                    <span>Education:</span>
                    <span className="font-semibold text-neutral-200">UTCN B.Eng. Electronics</span>
                  </div>
                </div>

                {/* Direct Action */}
                <a
                  href={contactData.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-card-linkedin-link"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-fuchsia-900/60 hover:border-fuchsia-600 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                  <span>View Full Profile on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-14 pt-8 border-t border-fuchsia-950/60">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {statsData.map((stat, idx) => (
              <div 
                key={stat.label}
                className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-fuchsia-900/60 transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-neutral-200 mt-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
