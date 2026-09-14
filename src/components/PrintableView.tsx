import React from 'react';
import { contactData, experienceData, skillCategories, educationData, languagesData } from '../data/cvData';
import { Phone, Mail, MapPin, Linkedin, Globe } from 'lucide-react';

export const PrintableView: React.FC = () => {
  return (
    <div id="print-cv-document" className="hidden print:block max-w-4xl mx-auto p-8 bg-white text-slate-900 font-sans text-sm">
      
      {/* Print Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950 uppercase">
              {contactData.name}
            </h1>
            <h2 className="text-base font-bold text-slate-700 mt-0.5">
              {contactData.title} • Automotive Systems & AI-Augmented QA
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Cluj-Napoca, Romania • Open to Remote & Hybrid Roles
            </p>
          </div>

          <div className="text-right text-xs space-y-1 font-mono text-slate-700">
            <div>{contactData.phone}</div>
            <div>{contactData.email}</div>
            <div>linkedin.com/in/marius-trif-239aa8104</div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-5">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Professional Summary
        </h3>
        <p className="text-xs leading-relaxed text-slate-800 text-justify">
          {contactData.summary}
        </p>
      </div>

      {/* Core Technical Competencies */}
      <div className="mb-5">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Core Technical Skills & Standards
        </h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
          <div><strong>Automotive Protocols:</strong> Vector CANoe, Vector CANalyzer, CAN-FD, EV Body Control Modules (BCM), Instrument Clusters</div>
          <div><strong>Compliance & Standards:</strong> ASPICE (Level 2/3), ISO 26262 (Functional Safety ASIL-B/D), V-Model SDLC</div>
          <div><strong>Test Tools & Flashing:</strong> IBM DOORS, JIRA, WinIDEA, Renesas Flash Programmer, eFlashLoad, DLT Viewer, MULTI</div>
          <div><strong>Automation & QA:</strong> AI Agents in Testing, Python SWIT/SWT, Mobile (iOS/Android), Web Cross-Browser, HP QC</div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-5">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
          Professional Experience
        </h3>

        <div className="space-y-4">
          {experienceData.map((exp) => (
            <div key={exp.id} className="print-break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-sm text-slate-950">{exp.role}</span>
                  <span className="text-slate-600"> — </span>
                  <span className="font-semibold text-slate-800">{exp.company}</span>
                </div>
                <div className="text-xs font-mono text-slate-600">
                  {exp.period} | {exp.location}
                </div>
              </div>

              <p className="text-[11px] text-slate-700 italic mt-0.5 mb-1.5">
                {exp.summary}
              </p>

              <ul className="list-disc list-outside ml-4 space-y-1 text-[11px] text-slate-800">
                {exp.keyResponsibilities.slice(0, 5).map((resp, rIdx) => (
                  <li key={rIdx} className="leading-snug">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="mt-1 text-[10px] text-slate-600">
                <strong>Tools & Standards:</strong> {exp.technologies.slice(0, 8).join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Languages */}
      <div className="print-break-inside-avoid">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Education, Certifications & Languages
        </h3>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="font-bold text-slate-950">Universitatea Tehnică din Cluj-Napoca (UTCN)</div>
            <div className="text-slate-700">Bachelor of Engineering (B.Eng.) — Electronics & Telecommunications (2005 - 2009)</div>
            <div className="font-bold text-slate-950 mt-1">The Informal School of IT</div>
            <div className="text-slate-700">Software Quality Assurance Certification (2015)</div>
          </div>

          <div>
            <div className="font-bold text-slate-950">Languages:</div>
            <div className="text-slate-700 mt-0.5">• Română: Native / Bilingual</div>
            <div className="text-slate-700">• English: Professional Working Proficiency</div>
            <div className="text-slate-700">• Italiano: Elementary</div>
          </div>
        </div>
      </div>

    </div>
  );
};
