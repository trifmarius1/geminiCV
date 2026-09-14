import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Car, 
  Smartphone, 
  Layers, 
  TrendingUp,
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { experienceData } from '../data/cvData';
import { ExperienceItem, Language } from '../types';

interface ExperienceSectionProps {
  currentLang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLang }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>('aumovio'); // Keep current job expanded by default

  const filteredExperiences = selectedDomain === 'all'
    ? experienceData
    : experienceData.filter(item => {
        if (selectedDomain === 'automotive') return item.domain === 'automotive';
        if (selectedDomain === 'it') return item.domain === 'it';
        if (selectedDomain === 'engineering') return item.domain === 'engineering' || item.domain === 'telecom';
        return true;
      });

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? '' : id);
  };

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'automotive':
        return <Car className="w-4 h-4 text-fuchsia-400" />;
      case 'it':
        return <Smartphone className="w-4 h-4 text-pink-400" />;
      case 'engineering':
      case 'telecom':
        return <TrendingUp className="w-4 h-4 text-purple-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-800/40">
              <Briefcase className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Professional Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              16+ Years of Proven Engineering & QA Experience
            </h2>
            <p className="text-neutral-400 text-base">
              A comprehensive career journey spanning safety-critical automotive electric vehicles, instrument clusters, mobile ecosystems, and multi-million dollar engineering operations.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-neutral-900/90 border border-neutral-800 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Roles (5)' },
              { id: 'automotive', label: 'Automotive QA (8+ Yrs)' },
              { id: 'it', label: 'Mobile & Web QA' },
              { id: 'engineering', label: 'Engineering & Telecom' }
            ].map(filter => (
              <button
                key={filter.id}
                id={`exp-filter-${filter.id}`}
                onClick={() => setSelectedDomain(filter.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedDomain === filter.id
                    ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-md shadow-fuchsia-600/30'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredExperiences.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                id={`experience-card-${item.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  item.isCurrent
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border-fuchsia-700/60 shadow-xl shadow-fuchsia-950/30'
                    : 'bg-neutral-900/40 hover:bg-neutral-900/80 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                {/* Header Summary Row (Clickable) */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-4">
                    {/* Visual Icon Badge */}
                    <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-fuchsia-900/60 flex items-center justify-center shrink-0 shadow-inner mt-0.5">
                      {getDomainIcon(item.domain)}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-extrabold text-white hover:text-fuchsia-300 transition-colors">
                          {item.role}
                        </h3>
                        <span className="text-fuchsia-400 font-bold text-lg">@</span>
                        <span className="text-lg font-bold text-white">
                          {item.company}
                        </span>
                        
                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-800/60">
                            Current Role
                          </span>
                        )}

                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-950 text-neutral-300 border border-neutral-800">
                          {item.highlightBadge}
                        </span>
                      </div>

                      <p className="text-sm text-neutral-400">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  {/* Period & Expand Indicator */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-neutral-800">
                    <div className="text-left lg:text-right">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300">
                        <Calendar className="w-3.5 h-3.5 text-fuchsia-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 lg:justify-end mt-0.5">
                        <MapPin className="w-3 h-3 text-neutral-500" />
                        <span>{item.location} ({item.duration})</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-fuchsia-400" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Responsibilities & Tech Stack */}
                {isExpanded && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-neutral-800/80 space-y-6 animate-in fade-in duration-200">
                    
                    {/* Impact Metric Banner if exists */}
                    {item.impactMetric && (
                      <div className="p-3.5 rounded-xl bg-fuchsia-950/30 border border-fuchsia-800/40 flex items-center gap-2.5 text-xs sm:text-sm text-fuchsia-200">
                        <Award className="w-4 h-4 text-fuchsia-400 shrink-0" />
                        <span><strong className="text-white">Key Impact:</strong> {item.impactMetric}</span>
                      </div>
                    )}

                    {/* Key Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                        <span>Key Responsibilities & Deliverables</span>
                        <span className="h-px flex-1 bg-neutral-800" />
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {item.keyResponsibilities.map((resp, rIdx) => (
                          <li 
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 bg-neutral-950/60 p-3 rounded-xl border border-neutral-900"
                          >
                            <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Technologies & Tooling Applied
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map(tech => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-950 text-fuchsia-300 border border-fuchsia-950/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
