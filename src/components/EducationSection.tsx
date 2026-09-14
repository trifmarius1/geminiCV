import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Languages, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Star,
  BookOpen
} from 'lucide-react';
import { educationData, languagesData, recommendationsData } from '../data/cvData';
import { Language } from '../types';

export const EducationSection: React.FC<{ currentLang: Language }> = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-800/40">
            <GraduationCap className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Academic Background & Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Languages & Engineering Recognition
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Grounded in rigorous electronic engineering, formal software QA training, multilingual communication, and peer-recognized leadership.
          </p>
        </div>

        {/* Education & Languages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column (8 cols): Formal Education */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-fuchsia-400" />
              <span>Academic Degrees & Certifications</span>
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div 
                  key={edu.institution}
                  className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-fuchsia-900/50 transition-colors space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-800/40">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-sm font-semibold text-fuchsia-400">
                    {edu.institution} — <span className="text-neutral-300">{edu.field}</span>
                  </p>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-neutral-400 pt-1 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Multilingual Capabilities */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Languages className="w-5 h-5 text-fuchsia-400" />
              <span>Languages</span>
            </h3>

            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5">
              <p className="text-xs text-neutral-400 leading-relaxed">
                Seamless daily collaboration across international multi-site teams, suppliers, and European clients:
              </p>

              <div className="space-y-4">
                {languagesData.map(lang => (
                  <div key={lang.name} className="space-y-1.5 pb-3 border-b border-neutral-800/60 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-white">{lang.name}</span>
                      <span className="text-xs font-semibold text-fuchsia-400">{lang.code}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>{lang.level}</span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 ${
                              i < lang.stars 
                                ? 'text-fuchsia-400 fill-fuchsia-400' 
                                : 'text-neutral-800'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Peer Testimonials & Recommendations */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Quote className="w-5 h-5 text-fuchsia-400" />
            <h3 className="text-xl font-bold text-white">
              Professional Endorsements & Peer Perspectives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendationsData.map(rec => (
              <div 
                key={rec.id}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/90 hover:border-fuchsia-900/60 transition-colors flex flex-col justify-between space-y-4"
              >
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{rec.text}"
                </p>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${rec.avatarColor} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
                    {rec.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">
                      {rec.author}
                    </h5>
                    <p className="text-[11px] text-fuchsia-400">
                      {rec.role} • {rec.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
