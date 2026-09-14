import React, { useState, useMemo } from 'react';
import { 
  Wrench, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Bot, 
  Smartphone, 
  Check, 
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/cvData';
import { Language } from '../types';

interface SkillsSectionProps {
  currentLang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
      .map(cat => {
        const matchingSkills = cat.skills.filter(skill =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter(cat => cat.skills.length > 0);
  }, [searchQuery, activeCategory]);

  return (
    <section id="skills" className="py-16 md:py-24 bg-neutral-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-800/40">
            <Wrench className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills & Testing Tool Stack
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            From deep-level hardware in-vehicle communication to state-of-the-art AI-augmented test suites and mobile ecosystems.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="skills-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, CAN, DOORS, Python..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-fuchsia-500 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-900/80 border border-neutral-800 self-stretch md:self-auto justify-center">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'automotive', label: 'Automotive & CAN' },
              { id: 'standards', label: 'ASPICE & Safety' },
              { id: 'automation', label: 'AI & Python' },
              { id: 'software_qa', label: 'Mobile & Web QA' }
            ].map(tab => (
              <button
                key={tab.id}
                id={`skills-tab-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-fuchsia-600 text-white shadow-sm shadow-fuchsia-600/40'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map(category => (
            <div 
              key={category.id}
              className="p-6 sm:p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-fuchsia-900/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{category.title}</span>
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-fuchsia-400 bg-fuchsia-950/80 px-2 py-1 rounded-md border border-fuchsia-800/40">
                    {category.skills.length} Skills
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {category.skills.map(skill => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-900 hover:border-fuchsia-800/60 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-neutral-200 group-hover:text-fuchsia-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.isKeySkill && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-700/50 shrink-0">
                            KEY
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-neutral-500 mb-1.5">
                        <span className="text-fuchsia-400 font-semibold">{skill.level}</span>
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3].map(bar => (
                            <span 
                              key={bar}
                              className={`h-1.5 w-3 rounded-full ${
                                skill.level === 'Expert' 
                                  ? 'bg-fuchsia-500' 
                                  : (skill.level === 'Advanced' && bar <= 2) 
                                    ? 'bg-fuchsia-500' 
                                    : (bar === 1 ? 'bg-fuchsia-500' : 'bg-neutral-800')
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {skill.description && (
                        <p className="text-[11px] text-neutral-400 leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
